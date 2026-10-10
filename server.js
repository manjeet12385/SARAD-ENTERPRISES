const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const port = Number(process.env.PORT) || 5173;
const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.mp4': 'video/mp4',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
};

const server = http.createServer((request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    response.end('Method not allowed');
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  } catch {
    response.writeHead(400);
    response.end('Bad request');
    return;
  }

  const relativePath = pathname === '/' ? 'index.html' : pathname.slice(1);
  const filePath = path.resolve(root, relativePath);
  const pathFromRoot = path.relative(root, filePath);
  if (pathFromRoot.startsWith('..') || path.isAbsolute(pathFromRoot)) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  fs.stat(filePath, (statError, stats) => {
    if (statError || !stats.isFile()) {
      response.writeHead(404);
      response.end('Not found');
      return;
    }

    const headers = {
      'Accept-Ranges': 'bytes',
      'Content-Type': contentTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
    };
    let statusCode = 200;
    let start = 0;
    let end = stats.size - 1;
    const rangeHeader = request.headers.range;

    if (rangeHeader) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(rangeHeader);
      if (!match) {
        response.writeHead(416, { ...headers, 'Content-Range': `bytes */${stats.size}` });
        response.end();
        return;
      }

      if (!match[1] && !match[2]) {
        response.writeHead(416, { ...headers, 'Content-Range': `bytes */${stats.size}` });
        response.end();
        return;
      }

      if (!match[1]) {
        const suffixLength = Number(match[2]);
        if (suffixLength === 0) {
          response.writeHead(416, { ...headers, 'Content-Range': `bytes */${stats.size}` });
          response.end();
          return;
        }
        start = Math.max(0, stats.size - suffixLength);
      } else {
        start = Number(match[1]);
        if (match[2]) {
          end = Number(match[2]);
        }
      }

      if (start >= stats.size || end < start) {
        response.writeHead(416, { ...headers, 'Content-Range': `bytes */${stats.size}` });
        response.end();
        return;
      }

      end = Math.min(end, stats.size - 1);
      statusCode = 206;
      headers['Content-Range'] = `bytes ${start}-${end}/${stats.size}`;
    }

    headers['Content-Length'] = end - start + 1;
    response.writeHead(statusCode, headers);
    if (request.method === 'HEAD') {
      response.end();
      return;
    }

    const stream = fs.createReadStream(filePath, { start, end });
    stream.on('error', (error) => {
      console.error('Failed to read requested file:', error);
      if (!response.headersSent) {
        response.writeHead(500);
      }
      response.end('Internal server error');
    });
    stream.pipe(response);
  });
});

server.listen(port, () => {
  console.log(`SARAD Enterprises is running at http://localhost:${port}`);
});
