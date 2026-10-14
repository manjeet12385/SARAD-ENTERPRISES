(() => {
  const translations = {
    "Pune's septic tank, drainage and sewage cleaning service": ["पुणे में सेप्टिक टैंक, ड्रेनेज और सीवेज सफाई सेवा", "पुण्यातील सेप्टिक टँक, ड्रेनेज आणि सांडपाणी स्वच्छता सेवा"],
    Home: ["होम", "मुख्यपृष्ठ"],
    Services: ["सेवाएं", "सेवा"],
    "All Services": ["सभी सेवाएं", "सर्व सेवा"],
    Areas: ["सेवा क्षेत्र", "सेवा क्षेत्रे"],
    "Our Work": ["हमारा काम", "आमचे काम"],
    Contact: ["संपर्क", "संपर्क"],
    "About SHARAD": ["SHARAD के बारे में", "SHARAD बद्दल"],
    "Why Choose Us": ["हमें क्यों चुनें", "आम्हालाच का निवडावे"],
    "Customer Reviews": ["ग्राहक समीक्षाएं", "ग्राहक अभिप्राय"],
    "About SHARAD Enterprises": ["SHARAD Enterprises के बारे में", "SHARAD Enterprises बद्दल"],
    "Choose language": ["भाषा चुनें", "भाषा निवडा"],
    "Turn sound on": ["आवाज़ चालू करें", "आवाज सुरू करा"],
    "Turn sound off": ["आवाज़ बंद करें", "आवाज बंद करा"],
    "Sound unavailable": ["आवाज़ उपलब्ध नहीं है", "आवाज उपलब्ध नाही"],
    "Septic Tank Cleaning": ["सेप्टिक टैंक की सफाई", "सेप्टिक टँक स्वच्छता"],
    Pune: ["पुणे", "पुणे"],
    Chakan: ["चाकण", "चाकण"],
    Baner: ["बानेर", "बाणेर"],
    Pimpri: ["पिंपरी", "पिंपरी"],
    Nigdi: ["निगडी", "निगडी"],
    Bhosari: ["भोसरी", "भोसरी"],
    Hinjewadi: ["हिंजवडी", "हिंजवडी"],
    "Pune, Maharashtra": ["पुणे, महाराष्ट्र", "पुणे, महाराष्ट्र"],
    "Drainage Cleaning": ["ड्रेनेज की सफाई", "ड्रेनेज स्वच्छता"],
    "Residential Septic Cleaning": ["घरेलू सेप्टिक टैंक की सफाई", "घरगुती सेप्टिक टँक स्वच्छता"],
    "Commercial Septic Cleaning": ["व्यावसायिक सेप्टिक टैंक की सफाई", "व्यावसायिक सेप्टिक टँक स्वच्छता"],
    "Industrial Septic Cleaning": ["औद्योगिक सेप्टिक टैंक की सफाई", "औद्योगिक सेप्टिक टँक स्वच्छता"],
    "Main Line Cleaning": ["मुख्य पाइपलाइन की सफाई", "मुख्य पाइपलाइन स्वच्छता"],
    "Sewage Cleaning": ["सीवेज की सफाई", "सांडपाणी स्वच्छता"],
    "Septic Tank & Drainage Cleaning": ["सेप्टिक टैंक और ड्रेनेज की सफाई", "सेप्टिक टँक आणि ड्रेनेज स्वच्छता"],
    "Service area · Pune Division": ["सेवा क्षेत्र · पुणे विभाग", "सेवा क्षेत्र · पुणे विभाग"],
    Homes: ["घर", "घरे"],
    "Residential service": ["घरेलू सेवा", "घरगुती सेवा"],
    "15+ Years Experience": ["15+ वर्षों का अनुभव", "15+ वर्षांचा अनुभव"],
    "Team of Professional People": ["अनुभवी पेशेवरों की टीम", "अनुभवी व्यावसायिकांची टीम"],
    Industry: ["उद्योग", "उद्योग"],
    "Industrial service": ["औद्योगिक सेवा", "औद्योगिक सेवा"],
    "SHARAD Enterprises · Pune and nearby areas": ["SHARAD Enterprises · पुणे और आसपास के क्षेत्र", "SHARAD Enterprises · पुणे आणि आसपासची क्षेत्रे"],
    "Septic tank and drainage cleaning across Pune": ["पुणे में सेप्टिक टैंक और ड्रेनेज की सफाई", "पुण्यात सेप्टिक टँक आणि ड्रेनेज स्वच्छता"],
    "Septic Tank, Drainage & Sewage Cleaning Services in Pune": ["पुणे में सेप्टिक टैंक, ड्रेनेज और सीवेज सफाई सेवाएं", "पुण्यात सेप्टिक टँक, ड्रेनेज आणि सांडपाणी स्वच्छता सेवा"],
    "SHARAD Enterprises provides septic tank cleaning, drainage cleaning, main line cleaning, and sewage cleaning for homes, businesses, and industrial sites in Pune and nearby areas.": ["SHARAD Enterprises पुणे और आसपास के क्षेत्रों में घरों, व्यवसायों और औद्योगिक स्थलों के लिए सेप्टिक टैंक, ड्रेनेज, मुख्य पाइपलाइन और सीवेज की सफाई करता है।", "SHARAD Enterprises पुणे आणि आसपासच्या भागांत घरे, व्यवसाय आणि औद्योगिक ठिकाणांसाठी सेप्टिक टँक, ड्रेनेज, मुख्य पाइपलाइन आणि सांडपाणी स्वच्छता सेवा देते."],
    "Call SHARAD Enterprises": ["SHARAD Enterprises को कॉल करें", "SHARAD Enterprises ला कॉल करा"],
    "Alternate contact": ["वैकल्पिक संपर्क", "पर्यायी संपर्क"],
    "Call for Service": ["सेवा के लिए कॉल करें", "सेवेसाठी कॉल करा"],
    "Explore Our Services": ["हमारी सेवाएं देखें", "आमच्या सेवा पहा"],
    "Residential septic tank cleaning": ["घरेलू सेप्टिक टैंक की सफाई", "घरगुती सेप्टिक टँक स्वच्छता"],
    "Commercial and industrial services": ["व्यावसायिक और औद्योगिक सेवाएं", "व्यावसायिक आणि औद्योगिक सेवा"],
    "Pune and nearby localities": ["पुणे और आसपास के इलाके", "पुणे आणि आसपासची ठिकाणे"],
    "SERVICE LOCATIONS": ["सेवा के स्थान", "सेवेची ठिकाणे"],
    "Septic Tank & Drainage Cleaning Across Pune and Nearby Areas": ["पुणे और आसपास के क्षेत्रों में सेप्टिक टैंक और ड्रेनेज की सफाई", "पुणे आणि आसपासच्या भागांत सेप्टिक टँक आणि ड्रेनेज स्वच्छता"],
    "SHARAD ENTERPRISES SERVICES": ["SHARAD ENTERPRISES की सेवाएं", "SHARAD ENTERPRISES च्या सेवा"],
    "Cleaning Services for Homes, Businesses & Industry": ["घरों, व्यवसायों और उद्योगों के लिए सफाई सेवाएं", "घरे, व्यवसाय आणि उद्योगांसाठी स्वच्छता सेवा"],
    "Explore our septic tank, drainage, main line, and sewage cleaning services in Pune, Chakan, Baner, Pimpri, Nigdi, Bhosari, and Hinjewadi.": ["पुणे, चाकण, बानेर, पिंपरी, निगडी, भोसरी और हिंजवडी में सेप्टिक टैंक, ड्रेनेज, मुख्य पाइपलाइन और सीवेज सफाई सेवाएं देखें।", "पुणे, चाकण, बाणेर, पिंपरी, निगडी, भोसरी आणि हिंजवडी येथे सेप्टिक टँक, ड्रेनेज, मुख्य पाइपलाइन आणि सांडपाणी स्वच्छता सेवा उपलब्ध आहेत."],
    "Call for service: +91 86573 25858": ["सेवा के लिए कॉल करें: +91 86573 25858", "सेवेसाठी कॉल करा: +91 86573 25858"],
    "SEPTIC TANK CLEANING": ["सेप्टिक टैंक की सफाई", "सेप्टिक टँक स्वच्छता"],
    "Septic Tank Cleaning Services": ["सेप्टिक टैंक सफाई सेवाएं", "सेप्टिक टँक स्वच्छता सेवा"],
    "Septic tank cleaning for homes, properties, and facilities in Pune and surrounding service areas.": ["पुणे और आसपास के सेवा क्षेत्रों में घरों, संपत्तियों और संस्थानों के लिए सेप्टिक टैंक की सफाई।", "पुणे आणि आसपासच्या सेवा क्षेत्रांत घरे, मालमत्ता आणि संस्थांसाठी सेप्टिक टँक स्वच्छता."],
    "DRAINAGE CLEANING": ["ड्रेनेज की सफाई", "ड्रेनेज स्वच्छता"],
    "Drainage Cleaning Services": ["ड्रेनेज सफाई सेवाएं", "ड्रेनेज स्वच्छता सेवा"],
    "Drainage cleaning support for residential, commercial, and industrial properties across the Pune area.": ["पुणे क्षेत्र में आवासीय, व्यावसायिक और औद्योगिक संपत्तियों के लिए ड्रेनेज सफाई सेवा।", "पुणे परिसरातील निवासी, व्यावसायिक आणि औद्योगिक मालमत्तांसाठी ड्रेनेज स्वच्छता सेवा."],
    "RESIDENTIAL SERVICE": ["घरेलू सेवा", "घरगुती सेवा"],
    "Residential Septic Tank Cleaning": ["घरेलू सेप्टिक टैंक की सफाई", "घरगुती सेप्टिक टँक स्वच्छता"],
    "Septic tank cleaning for homes and residential properties, with local service in Pune and nearby communities.": ["पुणे और आसपास के समुदायों में घरों और आवासीय संपत्तियों के लिए सेप्टिक टैंक की सफाई।", "पुणे आणि आसपासच्या भागांतील घरे व निवासी मालमत्तांसाठी सेप्टिक टँक स्वच्छता."],
    "COMMERCIAL SERVICE": ["व्यावसायिक सेवा", "व्यावसायिक सेवा"],
    "Commercial Septic Tank Cleaning": ["व्यावसायिक सेप्टिक टैंक की सफाई", "व्यावसायिक सेप्टिक टँक स्वच्छता"],
    "Septic tank cleaning for commercial buildings and business facilities in the Pune service area.": ["पुणे सेवा क्षेत्र में व्यावसायिक इमारतों और व्यवसायों के लिए सेप्टिक टैंक की सफाई।", "पुणे सेवा क्षेत्रातील व्यावसायिक इमारती आणि व्यवसायांसाठी सेप्टिक टँक स्वच्छता."],
    "INDUSTRIAL SERVICE": ["औद्योगिक सेवा", "औद्योगिक सेवा"],
    "Industrial Septic Tank Cleaning": ["औद्योगिक सेप्टिक टैंक की सफाई", "औद्योगिक सेप्टिक टँक स्वच्छता"],
    "Industrial septic tank cleaning for factories, worksites, and other facilities that need a service visit.": ["कारखानों, कार्यस्थलों और अन्य संस्थानों के लिए औद्योगिक सेप्टिक टैंक की सफाई।", "कारखाने, कामाची ठिकाणे आणि इतर संस्थांसाठी औद्योगिक सेप्टिक टँक स्वच्छता."],
    "MAIN LINE SERVICE": ["मुख्य पाइपलाइन सेवा", "मुख्य पाइपलाइन सेवा"],
    "Main Line Cleaning Services": ["मुख्य पाइपलाइन सफाई सेवाएं", "मुख्य पाइपलाइन स्वच्छता सेवा"],
    "Main line cleaning for properties in Pune, Chakan, and Baner. Contact SHARAD Enterprises to discuss your service needs.": ["पुणे, चाकण और बानेर में संपत्तियों के लिए मुख्य पाइपलाइन की सफाई। सेवा के बारे में जानने के लिए SHARAD Enterprises से संपर्क करें।", "पुणे, चाकण आणि बाणेर येथील मालमत्तांसाठी मुख्य पाइपलाइन स्वच्छता. सेवेसाठी SHARAD Enterprises शी संपर्क साधा."],
    "SEWAGE SERVICE": ["सीवेज सेवा", "सांडपाणी सेवा"],
    "Sewage Cleaning Services": ["सीवेज सफाई सेवाएं", "सांडपाणी स्वच्छता सेवा"],
    "Sewage cleaning services for residential, commercial, and industrial customers around Pune.": ["पुणे के आसपास आवासीय, व्यावसायिक और औद्योगिक ग्राहकों के लिए सीवेज सफाई सेवाएं।", "पुण्याजवळील निवासी, व्यावसायिक आणि औद्योगिक ग्राहकांसाठी सांडपाणी स्वच्छता सेवा."],
    "LOCAL SERVICE COVERAGE": ["स्थानीय सेवा क्षेत्र", "स्थानिक सेवा क्षेत्र"],
    "Areas We Serve Around Pune": ["पुणे के आसपास हमारे सेवा क्षेत्र", "पुण्याजवळील आमची सेवा क्षेत्रे"],
    "Contact SHARAD Enterprises for septic tank, drainage, main line, and sewage cleaning in these Pune-area locations.": ["पुणे क्षेत्र के इन स्थानों में सेप्टिक टैंक, ड्रेनेज, मुख्य पाइपलाइन और सीवेज सफाई के लिए SHARAD Enterprises से संपर्क करें।", "पुणे परिसरातील या ठिकाणी सेप्टिक टँक, ड्रेनेज, मुख्य पाइपलाइन आणि सांडपाणी स्वच्छतेसाठी SHARAD Enterprises शी संपर्क साधा."],
    "ABOUT SHARAD ENTERPRISES": ["SHARAD ENTERPRISES के बारे में", "SHARAD ENTERPRISES बद्दल"],
    "Local Cleaning Services, Backed by 15+ Years of Experience": ["15+ वर्षों के अनुभव के साथ स्थानीय सफाई सेवाएं", "15+ वर्षांच्या अनुभवासह स्थानिक स्वच्छता सेवा"],
    "SHARAD Enterprises provides septic tank, drainage, main line, and sewage cleaning for residential, commercial, and industrial customers in Pune and nearby areas.": ["SHARAD Enterprises पुणे और आसपास के क्षेत्रों में घरेलू, व्यावसायिक और औद्योगिक ग्राहकों के लिए सेप्टिक टैंक, ड्रेनेज, मुख्य पाइपलाइन और सीवेज सफाई सेवाएं देता है।", "SHARAD Enterprises पुणे आणि आसपासच्या भागांत निवासी, व्यावसायिक आणि औद्योगिक ग्राहकांसाठी सेप्टिक टँक, ड्रेनेज, मुख्य पाइपलाइन आणि सांडपाणी स्वच्छता सेवा देते."],
    "Our professional team helps customers discuss their cleaning needs and arrange the right service for their property.": ["हमारी पेशेवर टीम ग्राहकों को सफाई की जरूरत समझने और सही सेवा तय करने में मदद करती है।", "आमची व्यावसायिक टीम ग्राहकांना स्वच्छतेची गरज समजून योग्य सेवा ठरवण्यास मदत करते."],
    "Talk to our team": ["हमारी टीम से बात करें", "आमच्या टीमशी बोला"],
    "Years of experience": ["वर्षों का अनुभव", "वर्षांचा अनुभव"],
    "WHY CHOOSE SHARAD": ["SHARAD को क्यों चुनें", "SHARAD का निवडावे"],
    "Cleaning Support for Your Property": ["आपकी संपत्ति के लिए सफाई सहायता", "तुमच्या मालमत्तेसाठी स्वच्छता सेवा"],
    "A local team with experience across the cleaning services customers need.": ["ग्राहकों की जरूरतों वाली सफाई सेवाओं में अनुभवी स्थानीय टीम।", "ग्राहकांना आवश्यक स्वच्छता सेवांचा अनुभव असलेली स्थानिक टीम."],
    "15+ Years' Experience": ["15+ वर्षों का अनुभव", "15+ वर्षांचा अनुभव"],
    "Experience serving septic tank, drainage, main line, and sewage cleaning needs.": ["सेप्टिक टैंक, ड्रेनेज, मुख्य पाइपलाइन और सीवेज सफाई का अनुभव।", "सेप्टिक टँक, ड्रेनेज, मुख्य पाइपलाइन आणि सांडपाणी स्वच्छतेचा अनुभव."],
    "Professional Team": ["पेशेवर टीम", "व्यावसायिक टीम"],
    "A professional team for residential, commercial, and industrial service requirements.": ["घरेलू, व्यावसायिक और औद्योगिक सेवा जरूरतों के लिए पेशेवर टीम।", "निवासी, व्यावसायिक आणि औद्योगिक सेवा गरजांसाठी व्यावसायिक टीम."],
    "Multiple Cleaning Services": ["कई सफाई सेवाएं", "विविध स्वच्छता सेवा"],
    "Discuss septic tank, drainage, main line, and sewage cleaning with one local service provider.": ["एक ही स्थानीय सेवा प्रदाता से सेप्टिक टैंक, ड्रेनेज, मुख्य पाइपलाइन और सीवेज सफाई के बारे में बात करें।", "एकाच स्थानिक सेवा प्रदात्याकडून सेप्टिक टँक, ड्रेनेज, मुख्य पाइपलाइन आणि सांडपाणी स्वच्छतेबद्दल माहिती घ्या."],
    "Pune & Nearby Areas": ["पुणे और आसपास के क्षेत्र", "पुणे आणि आसपासची क्षेत्रे"],
    "Service coverage includes Pune, Chakan, Baner, Pimpri, Nigdi, Bhosari, and Hinjewadi.": ["सेवा क्षेत्र में पुणे, चाकण, बानेर, पिंपरी, निगडी, भोसरी और हिंजवडी शामिल हैं।", "सेवा क्षेत्रात पुणे, चाकण, बाणेर, पिंपरी, निगडी, भोसरी आणि हिंजवडीचा समावेश आहे."],
    "CUSTOMER REVIEWS": ["ग्राहक समीक्षाएं", "ग्राहक अभिप्राय"],
    "Your Feedback Matters": ["आपकी राय हमारे लिए महत्वपूर्ण है", "तुमचा अभिप्राय महत्त्वाचा आहे"],
    "We value feedback from our customers. We’re preparing this space for genuine customer reviews and ratings—no sample or unverified reviews are shown.": ["हम अपने ग्राहकों की राय को महत्व देते हैं। यहां वास्तविक ग्राहक समीक्षाएं और रेटिंग उपलब्ध होने पर दिखाई जाएंगी—कोई नकली या अप्रमाणित समीक्षा नहीं दिखाई जाती।", "आम्ही ग्राहकांच्या अभिप्रायाला महत्त्व देतो. येथे खऱ्या ग्राहकांच्या प्रतिक्रिया आणि रेटिंग उपलब्ध झाल्यावर दाखवल्या जातील—नमुना किंवा अप्रमाणित प्रतिक्रिया दाखवल्या जात नाहीत."],
    "Share feedback by phone": ["फोन पर अपनी राय दें", "फोनवर अभिप्राय द्या"],
    "SHARAD ENTERPRISES IN ACTION": ["SHARAD ENTERPRISES का काम", "SHARAD ENTERPRISES चे काम"],
    "Our Service Vehicles & Field Work": ["हमारे सेवा वाहन और कार्यस्थल", "आमची सेवा वाहने आणि प्रत्यक्ष काम"],
    "Photos and videos from SHARAD Enterprises' septic tank and cleaning operations.": ["SHARAD Enterprises के सेप्टिक टैंक और सफाई कार्यों की तस्वीरें और वीडियो।", "SHARAD Enterprises च्या सेप्टिक टँक आणि स्वच्छता कामांची छायाचित्रे आणि व्हिडिओ."],
    "REAL SHARAD FIELD WORK": ["SHARAD का वास्तविक कार्य", "SHARAD चे प्रत्यक्ष काम"],
    "Our Fleet & On-Site Operations": ["हमारा बेड़ा और कार्यस्थल की सेवाएं", "आमचा वाहनताफा आणि प्रत्यक्ष सेवा"],
    "Photos from SHARAD Enterprises' own service work.": ["SHARAD Enterprises के सेवा कार्य की तस्वीरें।", "SHARAD Enterprises च्या सेवा कामांची छायाचित्रे."],
    "SERVICE VIDEOS": ["सेवा वीडियो", "सेवा व्हिडिओ"],
    "Watch Our Work in Action": ["हमारा काम देखें", "आमचे काम पहा"],
    "Play a clip to view the service work.": ["सेवा कार्य देखने के लिए वीडियो चलाएं।", "सेवेचे काम पाहण्यासाठी व्हिडिओ चालवा."],
    "CUSTOMER INFORMATION": ["ग्राहक जानकारी", "ग्राहक माहिती"],
    "Septic Tank & Drainage Cleaning FAQs": ["सेप्टिक टैंक और ड्रेनेज सफाई के आम सवाल", "सेप्टिक टँक आणि ड्रेनेज स्वच्छतेबद्दल वारंवार विचारले जाणारे प्रश्न"],
    "Contact SHARAD Enterprises to discuss the right service for your home, business, or industrial site.": ["अपने घर, व्यवसाय या औद्योगिक स्थल के लिए सही सेवा जानने के लिए SHARAD Enterprises से संपर्क करें।", "तुमचे घर, व्यवसाय किंवा औद्योगिक ठिकाणासाठी योग्य सेवा जाणून घेण्यासाठी SHARAD Enterprises शी संपर्क साधा."],
    "Which septic tank cleaning services does SHARAD Enterprises provide?": ["SHARAD Enterprises सेप्टिक टैंक की कौन-कौन सी सफाई सेवाएं देता है?", "SHARAD Enterprises सेप्टिक टँक स्वच्छतेच्या कोणत्या सेवा देते?"],
    "We provide residential, commercial, and industrial septic tank cleaning services in Pune and nearby areas including Chakan, Baner, Pimpri, Nigdi, Bhosari, and Hinjewadi.": ["हम पुणे और आसपास के चाकण, बानेर, पिंपरी, निगडी, भोसरी और हिंजवडी में घरेलू, व्यावसायिक और औद्योगिक सेप्टिक टैंक सफाई सेवाएं देते हैं।", "आम्ही पुणे आणि चाकण, बाणेर, पिंपरी, निगडी, भोसरी व हिंजवडीसह आसपासच्या भागांत निवासी, व्यावसायिक आणि औद्योगिक सेप्टिक टँक स्वच्छता सेवा देतो."],
    "Do you provide drainage cleaning in my Pune-area locality?": ["क्या आप पुणे के मेरे इलाके में ड्रेनेज सफाई करते हैं?", "पुणे परिसरातील माझ्या भागात तुम्ही ड्रेनेज स्वच्छता करता का?"],
    "Drainage cleaning services are available in Chakan, Baner, Pimpri, Nigdi, Bhosari, and Hinjewadi. Contact us to discuss your location and cleaning requirement.": ["चाकण, बानेर, पिंपरी, निगडी, भोसरी और हिंजवडी में ड्रेनेज सफाई उपलब्ध है। अपने इलाके और जरूरत के बारे में हमसे बात करें।", "चाकण, बाणेर, पिंपरी, निगडी, भोसरी आणि हिंजवडी येथे ड्रेनेज स्वच्छता उपलब्ध आहे. तुमचे ठिकाण आणि गरज याबद्दल आमच्याशी बोला."],
    "Can I request main line or sewage cleaning?": ["क्या मैं मुख्य पाइपलाइन या सीवेज सफाई के लिए अनुरोध कर सकता हूं?", "मुख्य पाइपलाइन किंवा सांडपाणी स्वच्छतेची विनंती करू शकतो का?"],
    "Yes. Contact SHARAD Enterprises about main line cleaning in Pune, Chakan, and Baner, or sewage cleaning in Pune, Pimpri, Nigdi, Bhosari, and Hinjewadi.": ["हां। पुणे, चाकण और बानेर में मुख्य पाइपलाइन सफाई या पुणे, पिंपरी, निगडी, भोसरी और हिंजवडी में सीवेज सफाई के लिए SHARAD Enterprises से संपर्क करें।", "होय. पुणे, चाकण आणि बाणेर येथे मुख्य पाइपलाइन स्वच्छतेसाठी किंवा पुणे, पिंपरी, निगडी, भोसरी आणि हिंजवडी येथे सांडपाणी स्वच्छतेसाठी SHARAD Enterprises शी संपर्क साधा."],
    "SEPTIC TANK · DRAINAGE · SEWAGE": ["सेप्टिक टैंक · ड्रेनेज · सीवेज", "सेप्टिक टँक · ड्रेनेज · सांडपाणी"],
    "Need a Cleaning Servicein Pune or Nearby?": ["पुणे या आसपास सफाई सेवा चाहिए?", "पुणे किंवा आसपास स्वच्छता सेवा हवी आहे?"],
    "Call SHARAD Enterprises to discuss your service and location.": ["सेवा और स्थान के बारे में बात करने के लिए SHARAD Enterprises को कॉल करें।", "सेवा आणि ठिकाणाबद्दल चर्चा करण्यासाठी SHARAD Enterprises ला कॉल करा."],
    "Alternate contact": ["वैकल्पिक संपर्क", "पर्यायी संपर्क"],
    "Pune · Chakan · Baner": ["पुणे · चाकण · बानेर", "पुणे · चाकण · बाणेर"],
    "Pimpri · Nigdi": ["पिंपरी · निगडी", "पिंपरी · निगडी"],
    "Bhosari · Hinjewadi": ["भोसरी · हिंजवडी", "भोसरी · हिंजवडी"],
    "PUNE · MAHARASHTRA": ["पुणे · महाराष्ट्र", "पुणे · महाराष्ट्र"],
    "Residential Septic Tank Cleaning": ["घरेलू सेप्टिक टैंक की सफाई", "घरगुती सेप्टिक टँक स्वच्छता"],
    "Commercial Cleaning Services": ["व्यावसायिक सफाई सेवाएं", "व्यावसायिक स्वच्छता सेवा"],
    "Industrial Septic Tank Cleaning": ["औद्योगिक सेप्टिक टैंक की सफाई", "औद्योगिक सेप्टिक टँक स्वच्छता"],
    "Pune & Nearby Areas": ["पुणे और आसपास के क्षेत्र", "पुणे आणि आसपासची क्षेत्रे"],
    "SHARAD Enterprises provides septic tank, drainage, main line, and sewage cleaning services in Pune and nearby areas.": ["SHARAD Enterprises पुणे और आसपास के क्षेत्रों में सेप्टिक टैंक, ड्रेनेज, मुख्य पाइपलाइन और सीवेज सफाई सेवाएं देता है।", "SHARAD Enterprises पुणे आणि आसपासच्या भागांत सेप्टिक टँक, ड्रेनेज, मुख्य पाइपलाइन आणि सांडपाणी स्वच्छता सेवा देते."],
    "SERVICES": ["सेवाएं", "सेवा"],
    "SERVICE AREAS": ["सेवा क्षेत्र", "सेवा क्षेत्रे"],
    "CONTACT SHARAD": ["SHARAD से संपर्क करें", "SHARAD शी संपर्क साधा"],
    "INFORMATION": ["जानकारी", "माहिती"],
    "Request a cleaning service": ["सफाई सेवा का अनुरोध करें", "स्वच्छता सेवेची विनंती करा"],
    "Privacy Policy": ["गोपनीयता नीति", "गोपनीयता धोरण"],
    "Terms & Conditions": ["नियम और शर्तें", "अटी व शर्ती"],
    "All rights reserved.": ["सर्वाधिकार सुरक्षित।", "सर्व हक्क राखीव."],
    "WE'RE HERE TO HELP": ["हम मदद के लिए यहां हैं", "आम्ही मदतीसाठी येथे आहोत"],
    "Contact SHARAD Enterprises": ["SHARAD Enterprises से संपर्क करें", "SHARAD Enterprises शी संपर्क साधा"],
    "Tell us what cleaning service you need and where. Fill out the form and continue to WhatsApp to send your request.": ["हमें बताएं कि आपको कौन-सी सफाई सेवा और कहां चाहिए। फॉर्म भरें और अनुरोध भेजने के लिए WhatsApp पर जाएं।", "तुम्हाला कोणती स्वच्छता सेवा आणि कुठे हवी आहे ते सांगा. फॉर्म भरा आणि विनंती पाठवण्यासाठी WhatsApp वर जा."],
    "Request a cleaning service": ["सफाई सेवा का अनुरोध करें", "स्वच्छता सेवेची विनंती करा"],
    "Fields marked with * are required. Your details will be placed in a WhatsApp message for you to review and send.": ["* वाले फ़ील्ड भरना ज़रूरी है। आपकी जानकारी WhatsApp संदेश में रखी जाएगी; भेजने से पहले आप उसे देख सकते हैं।", "* असलेली माहिती भरणे आवश्यक आहे. तुमचे तपशील WhatsApp संदेशात दिसतील; पाठवण्यापूर्वी तुम्ही ते तपासू शकता."],
    "Full name *": ["पूरा नाम *", "पूर्ण नाव *"],
    "Phone number *": ["फोन नंबर *", "फोन क्रमांक *"],
    "Enter a number where we can reach you.": ["ऐसा नंबर दें जिस पर आपसे संपर्क किया जा सके।", "तुमच्याशी संपर्क होईल असा क्रमांक द्या."],
    "Service needed *": ["आवश्यक सेवा *", "आवश्यक सेवा *"],
    "Choose a service": ["सेवा चुनें", "सेवा निवडा"],
    "Other / Not sure": ["अन्य / निश्चित नहीं", "इतर / खात्री नाही"],
    "Service location *": ["सेवा का स्थान *", "सेवेचे ठिकाण *"],
    "Area / locality in or near Pune": ["पुणे या आसपास का इलाका", "पुणे किंवा आसपासचा परिसर"],
    "Additional details": ["अतिरिक्त जानकारी", "अधिक माहिती"],
    "Describe your cleaning requirement (optional)": ["अपनी सफाई की जरूरत बताएं (वैकल्पिक)", "तुमची स्वच्छतेची गरज सांगा (ऐच्छिक)"],
    "I agree to open WhatsApp with these details so I can review and send my service request. *": ["मैं इन जानकारियों के साथ WhatsApp खोलने और अपना सेवा अनुरोध देखकर भेजने के लिए सहमत हूं। *", "हे तपशील WhatsApp मध्ये उघडून माझी सेवा विनंती तपासून पाठवण्यास मी सहमत आहे. *"],
    "Continue to WhatsApp": ["WhatsApp पर आगे बढ़ें", "WhatsApp वर पुढे जा"],
    "Open WhatsApp with your request": ["अपना अनुरोध WhatsApp में खोलें", "तुमची विनंती WhatsApp मध्ये उघडा"],
    "Contact details": ["संपर्क विवरण", "संपर्क तपशील"],
    "Call SHARAD Enterprises to discuss your location, service requirements, availability, and applicable charges.": ["अपने स्थान, सेवा की जरूरत, उपलब्धता और लागू शुल्क के बारे में बात करने के लिए SHARAD Enterprises को कॉल करें।", "तुमचे ठिकाण, सेवेची गरज, उपलब्धता आणि लागू शुल्क याबद्दल चर्चा करण्यासाठी SHARAD Enterprises ला कॉल करा."],
    "Main contact": ["मुख्य संपर्क", "मुख्य संपर्क"],
    "Service area": ["सेवा क्षेत्र", "सेवा क्षेत्र"],
    "Pune, Chakan, Baner, Pimpri, Nigdi, Bhosari and Hinjewadi. Please call to confirm availability for your location.": ["पुणे, चाकण, बानेर, पिंपरी, निगडी, भोसरी और हिंजवडी। अपने स्थान पर सेवा उपलब्धता की पुष्टि के लिए कॉल करें।", "पुणे, चाकण, बाणेर, पिंपरी, निगडी, भोसरी आणि हिंजवडी. तुमच्या ठिकाणी सेवा उपलब्ध आहे का हे जाणून घेण्यासाठी कॉल करा."],
    "Explore all services →": ["सभी सेवाएं देखें →", "सर्व सेवा पहा →"],
    "WhatsApp opened in a new tab. Review your message there and press Send to submit it.": ["WhatsApp नए टैब में खुल गया है। संदेश देखकर भेजने के लिए Send दबाएं।", "WhatsApp नवीन टॅबमध्ये उघडले आहे. संदेश तपासून पाठवण्यासाठी Send दाबा."],
    "Your request is ready. If WhatsApp did not open automatically, use the link below.": ["आपका अनुरोध तैयार है। यदि WhatsApp अपने आप नहीं खुला, तो नीचे दिए लिंक का उपयोग करें।", "तुमची विनंती तयार आहे. WhatsApp आपोआप उघडले नसल्यास खालील लिंक वापरा."],
    "SHARAD ENTERPRISES · PUNE": ["SHARAD ENTERPRISES · पुणे", "SHARAD ENTERPRISES · पुणे"],
    "Cleaning Services": ["सफाई सेवाएं", "स्वच्छता सेवा"],
    "Service information": ["सेवा की जानकारी", "सेवेची माहिती"],
    "Need this service?": ["यह सेवा चाहिए?", "ही सेवा हवी आहे?"],
    "Call SHARAD Enterprises to discuss your location and requirements. Please confirm availability and charges directly with the team.": ["अपने स्थान और जरूरत के बारे में बात करने के लिए SHARAD Enterprises को कॉल करें। उपलब्धता और शुल्क की पुष्टि सीधे टीम से करें।", "तुमचे ठिकाण आणि गरज याबद्दल चर्चा करण्यासाठी SHARAD Enterprises ला कॉल करा. उपलब्धता आणि शुल्काची खात्री थेट टीमकडून करा."],
    "Call +91 86573 25858": ["कॉल करें +91 86573 25858", "कॉल करा +91 86573 25858"],
    "Alternate: +91 86575 26464": ["वैकल्पिक: +91 86575 26464", "पर्यायी: +91 86575 26464"],
    "Send a service request": ["सेवा अनुरोध भेजें", "सेवेची विनंती पाठवा"],
    "Service areas": ["सेवा क्षेत्र", "सेवा क्षेत्रे"],
    "Listed service areas for this service:": ["इस सेवा के लिए उपलब्ध क्षेत्र:", "या सेवेसाठी उपलब्ध क्षेत्रे:"],
    "← View all services": ["← सभी सेवाएं देखें", "← सर्व सेवा पहा"],
    "Service Not Found | SHARAD Enterprises": ["सेवा नहीं मिली | SHARAD Enterprises", "सेवा सापडली नाही | SHARAD Enterprises"],
    "Service not found": ["सेवा नहीं मिली", "सेवा सापडली नाही"],
    "Choose a service from our services page to view its details.": ["विवरण देखने के लिए सेवाओं के पेज से सेवा चुनें।", "तपशील पाहण्यासाठी सेवा पृष्ठावरून सेवा निवडा."],
    "Browse services": ["सेवाएं देखें", "सेवा पहा"],
    "Back to home": ["होम पर वापस जाएं", "मुख्यपृष्ठावर परत जा"],
    "Last updated: October 10, 2026": ["अंतिम अपडेट: 10 अक्टूबर, 2026", "शेवटचे अद्यतन: 10 ऑक्टोबर, 2026"],
    "Privacy Policy": ["गोपनीयता नीति", "गोपनीयता धोरण"],
    "Terms & Conditions": ["नियम और शर्तें", "अटी व शर्ती"],
    "Information collected by this website": ["इस वेबसाइट द्वारा एकत्र की जाने वाली जानकारी", "या वेबसाइटद्वारे गोळा केली जाणारी माहिती"],
    "How contact details may be used": ["संपर्क विवरण का उपयोग कैसे हो सकता है", "संपर्क तपशीलांचा वापर कसा होऊ शकतो"],
    "Third-party services": ["तृतीय-पक्ष सेवाएं", "तृतीय-पक्ष सेवा"],
    "Cookies and analytics": ["कुकीज़ और विश्लेषण", "कुकीज आणि विश्लेषण"],
    "Changes to this policy": ["इस नीति में बदलाव", "या धोरणातील बदल"],
    "Website information": ["वेबसाइट की जानकारी", "वेबसाइटची माहिती"],
    "Service requests and pricing": ["सेवा अनुरोध और मूल्य", "सेवा विनंत्या आणि किंमत"],
    "Website content and availability": ["वेबसाइट की सामग्री और उपलब्धता", "वेबसाइटवरील मजकूर आणि उपलब्धता"],
    "Third-party services and links": ["तृतीय-पक्ष सेवाएं और लिंक", "तृतीय-पक्ष सेवा आणि दुवे"],
    "Changes to these terms": ["इन शर्तों में बदलाव", "या अटींमधील बदल"],
    "For privacy questions, call SHARAD Enterprises at": ["गोपनीयता से जुड़े सवालों के लिए SHARAD Enterprises को कॉल करें:", "गोपनीयतेबद्दल प्रश्नांसाठी SHARAD Enterprises ला कॉल करा:"],
    "For questions about these terms or the services described, call SHARAD Enterprises at": ["इन शर्तों या सेवाओं के बारे में सवालों के लिए SHARAD Enterprises को कॉल करें:", "या अटी किंवा सेवांबद्दल प्रश्नांसाठी SHARAD Enterprises ला कॉल करा:"],
    "Privacy Policy | SHARAD Enterprises": ["गोपनीयता नीति | SHARAD Enterprises", "गोपनीयता धोरण | SHARAD Enterprises"],
    "Terms & Conditions | SHARAD Enterprises": ["नियम और शर्तें | SHARAD Enterprises", "अटी व शर्ती | SHARAD Enterprises"],
    "Contact SHARAD Enterprises | Pune Cleaning Services": ["SHARAD Enterprises से संपर्क करें | पुणे सफाई सेवाएं", "SHARAD Enterprises शी संपर्क साधा | पुणे स्वच्छता सेवा"],
    "Cleaning Services | SHARAD Enterprises": ["सफाई सेवाएं | SHARAD Enterprises", "स्वच्छता सेवा | SHARAD Enterprises"],
    "Septic Tank & Drainage Cleaning Services in Pune | SHARAD Enterprises": ["पुणे में सेप्टिक टैंक और ड्रेनेज सफाई सेवाएं | SHARAD Enterprises", "पुण्यात सेप्टिक टँक आणि ड्रेनेज स्वच्छता सेवा | SHARAD Enterprises"],
    "Septic Tank Cleaning Services in Chakan": ["चाकण में सेप्टिक टैंक सफाई सेवाएं", "चाकणमध्ये सेप्टिक टँक स्वच्छता सेवा"],
    "Septic Tank Cleaning Services in Baner": ["बानेर में सेप्टिक टैंक सफाई सेवाएं", "बाणेरमध्ये सेप्टिक टँक स्वच्छता सेवा"],
    "Septic Tank Cleaning Services in Nigdi": ["निगडी में सेप्टिक टैंक सफाई सेवाएं", "निगडीमध्ये सेप्टिक टँक स्वच्छता सेवा"],
    "Septic Tank Cleaning Services in Hinjewadi": ["हिंजवडी में सेप्टिक टैंक सफाई सेवाएं", "हिंजवडीमध्ये सेप्टिक टँक स्वच्छता सेवा"],
    "Drainage Cleaning Services in Chakan": ["चाकण में ड्रेनेज सफाई सेवाएं", "चाकणमध्ये ड्रेनेज स्वच्छता सेवा"],
    "Drainage Cleaning Services in Baner": ["बानेर में ड्रेनेज सफाई सेवाएं", "बाणेरमध्ये ड्रेनेज स्वच्छता सेवा"],
    "Drainage Cleaning Services in Pimpri": ["पिंपरी में ड्रेनेज सफाई सेवाएं", "पिंपरीमध्ये ड्रेनेज स्वच्छता सेवा"],
    "Drainage Cleaning Services in Nigdi": ["निगडी में ड्रेनेज सफाई सेवाएं", "निगडीमध्ये ड्रेनेज स्वच्छता सेवा"],
    "Drainage Cleaning Services in Bhosari": ["भोसरी में ड्रेनेज सफाई सेवाएं", "भोसरीमध्ये ड्रेनेज स्वच्छता सेवा"],
    "Drainage Cleaning Services in Hinjewadi": ["हिंजवडी में ड्रेनेज सफाई सेवाएं", "हिंजवडीमध्ये ड्रेनेज स्वच्छता सेवा"],
    "Residential Septic Tank Cleaning Services in Pune": ["पुणे में घरेलू सेप्टिक टैंक सफाई सेवाएं", "पुण्यात घरगुती सेप्टिक टँक स्वच्छता सेवा"],
    "Residential Septic Tank Cleaning Services in Chakan": ["चाकण में घरेलू सेप्टिक टैंक सफाई सेवाएं", "चाकणमध्ये घरगुती सेप्टिक टँक स्वच्छता सेवा"],
    "Residential Septic Tank Cleaning Services in Baner": ["बानेर में घरेलू सेप्टिक टैंक सफाई सेवाएं", "बाणेरमध्ये घरगुती सेप्टिक टँक स्वच्छता सेवा"],
    "Commercial Septic Tank Cleaning Services in Pune": ["पुणे में व्यावसायिक सेप्टिक टैंक सफाई सेवाएं", "पुण्यात व्यावसायिक सेप्टिक टँक स्वच्छता सेवा"],
    "Commercial Septic Tank Cleaning Services in Pimpri": ["पिंपरी में व्यावसायिक सेप्टिक टैंक सफाई सेवाएं", "पिंपरीमध्ये व्यावसायिक सेप्टिक टँक स्वच्छता सेवा"],
    "Commercial Septic Tank Cleaning Services in Nigdi": ["निगडी में व्यावसायिक सेप्टिक टैंक सफाई सेवाएं", "निगडीमध्ये व्यावसायिक सेप्टिक टँक स्वच्छता सेवा"],
    "Industrial Septic Tank Cleaning Service in Pune": ["पुणे में औद्योगिक सेप्टिक टैंक सफाई सेवा", "पुण्यात औद्योगिक सेप्टिक टँक स्वच्छता सेवा"],
    "Industrial Septic Tank Cleaning Service in Bhosari": ["भोसरी में औद्योगिक सेप्टिक टैंक सफाई सेवा", "भोसरीमध्ये औद्योगिक सेप्टिक टँक स्वच्छता सेवा"],
    "Industrial Septic Tank Cleaning Service in Hinjewadi": ["हिंजवडी में औद्योगिक सेप्टिक टैंक सफाई सेवा", "हिंजवडीमध्ये औद्योगिक सेप्टिक टँक स्वच्छता सेवा"],
    "Main line Cleaning Services in Pune": ["पुणे में मुख्य पाइपलाइन सफाई सेवाएं", "पुण्यात मुख्य पाइपलाइन स्वच्छता सेवा"],
    "Main line Cleaning Services in Chakan": ["चाकण में मुख्य पाइपलाइन सफाई सेवाएं", "चाकणमध्ये मुख्य पाइपलाइन स्वच्छता सेवा"],
    "Main line Cleaning Services in Baner": ["बानेर में मुख्य पाइपलाइन सफाई सेवाएं", "बाणेरमध्ये मुख्य पाइपलाइन स्वच्छता सेवा"],
    "Sewage Cleaning Services in Pune": ["पुणे में सीवेज सफाई सेवाएं", "पुण्यात सांडपाणी स्वच्छता सेवा"],
    "Sewage Cleaning Services in Pimpri": ["पिंपरी में सीवेज सफाई सेवाएं", "पिंपरीमध्ये सांडपाणी स्वच्छता सेवा"],
    "Sewage Cleaning Services in Nigdi": ["निगडी में सीवेज सफाई सेवाएं", "निगडीमध्ये सांडपाणी स्वच्छता सेवा"],
    "Sewage Cleaning Services in Bhosari": ["भोसरी में सीवेज सफाई सेवाएं", "भोसरीमध्ये सांडपाणी स्वच्छता सेवा"],
    "Sewage Cleaning Services in Hinjewadi": ["हिंजवडी में सीवेज सफाई सेवाएं", "हिंजवडीमध्ये सांडपाणी स्वच्छता सेवा"],
    "SHARAD Enterprises logo": ["SHARAD Enterprises का लोगो", "SHARAD Enterprises चे चिन्ह"],
    "Back to home": ["होम पर वापस जाएं", "मुख्यपृष्ठावर परत जा"],
    "This page explains what information may be involved when you visit this website or contact SHARAD Enterprises through it.": ["यह पेज बताता है कि वेबसाइट देखने या इसके माध्यम से SHARAD Enterprises से संपर्क करने पर कौन-सी जानकारी शामिल हो सकती है।", "ही वेबसाइट पाहताना किंवा तिच्याद्वारे SHARAD Enterprises शी संपर्क साधताना कोणती माहिती वापरली जाऊ शकते हे या पृष्ठावर सांगितले आहे."],
    "This website does not provide accounts or payment checkout. If you choose to fill out the contact form, the details you enter are placed into a WhatsApp message addressed to SHARAD Enterprises. The message is not sent until you review it and send it in WhatsApp.": ["इस वेबसाइट पर खाते या ऑनलाइन भुगतान की सुविधा नहीं है। संपर्क फॉर्म भरने पर आपके दिए विवरण SHARAD Enterprises को संबोधित WhatsApp संदेश में रखे जाते हैं। WhatsApp में समीक्षा करके Send दबाने के बाद ही संदेश भेजा जाता है।", "या वेबसाइटवर खाते किंवा ऑनलाइन पेमेंटची सुविधा नाही. संपर्क फॉर्म भरल्यास तुम्ही दिलेले तपशील SHARAD Enterprises साठी WhatsApp संदेशात जोडले जातात. WhatsApp मध्ये तपासून Send केल्यावरच संदेश पाठवला जातो."],
    "If you choose to call a number shown on the site, your phone service may share your caller ID, and SHARAD Enterprises may receive any contact or service details you choose to provide during that conversation.": ["साइट पर दिए नंबर पर कॉल करने पर आपकी फोन सेवा कॉलर आईडी साझा कर सकती है। बातचीत में दी गई संपर्क या सेवा संबंधी जानकारी SHARAD Enterprises को मिल सकती है।", "साइटवरील क्रमांकावर कॉल केल्यास तुमची फोन सेवा कॉलर आयडी शेअर करू शकते. संभाषणात दिलेले संपर्क किंवा सेवा तपशील SHARAD Enterprises ला मिळू शकतात."],
    "Details you voluntarily send by WhatsApp or provide by phone may be used to respond to your inquiry and discuss the requested cleaning service. WhatsApp processes messages under its own terms and privacy policy. For questions about information shared directly with the business, contact SHARAD Enterprises by phone.": ["WhatsApp या फोन से स्वेच्छा से दी गई जानकारी का उपयोग आपके सवाल का जवाब देने और मांगी गई सफाई सेवा पर चर्चा करने के लिए किया जा सकता है। WhatsApp अपने नियमों और गोपनीयता नीति के अनुसार संदेश संसाधित करता है। सीधे व्यवसाय को दी गई जानकारी के बारे में सवाल हों तो SHARAD Enterprises को कॉल करें।", "WhatsApp किंवा फोनद्वारे स्वेच्छेने दिलेली माहिती तुमच्या चौकशीला उत्तर देण्यासाठी आणि मागितलेल्या स्वच्छता सेवेबद्दल चर्चा करण्यासाठी वापरली जाऊ शकते. WhatsApp स्वतःच्या अटी आणि गोपनीयता धोरणानुसार संदेश प्रक्रिया करते. व्यवसायाला थेट दिलेल्या माहितीबद्दल प्रश्न असल्यास SHARAD Enterprises ला फोन करा."],
    "This website loads the Inter typeface from Google Fonts. Your browser may connect to Google to retrieve those font files; Google's own privacy terms apply to that connection. Phone links are handled by your device and phone service provider.": ["यह वेबसाइट Google Fonts से Inter फ़ॉन्ट लोड करती है। फ़ॉन्ट फ़ाइलें पाने के लिए आपका ब्राउज़र Google से जुड़ सकता है; उस कनेक्शन पर Google की गोपनीयता शर्तें लागू होती हैं। फोन लिंक आपके डिवाइस और फोन सेवा प्रदाता द्वारा संभाले जाते हैं।", "ही वेबसाइट Google Fonts मधून Inter फॉन्ट लोड करते. फॉन्ट फाइल मिळवण्यासाठी तुमचा ब्राउझर Google शी जोडला जाऊ शकतो; त्या जोडणीला Google चे गोपनीयता नियम लागू होतात. फोन लिंक तुमचे उपकरण आणि फोन सेवा पुरवठादार हाताळतात."],
    "The website does not intentionally set analytics or advertising cookies. Your browser or other services you use may have their own settings and policies.": ["यह वेबसाइट जानबूझकर विश्लेषण या विज्ञापन कुकीज़ नहीं रखती। आपके ब्राउज़र या अन्य सेवाओं की अपनी सेटिंग और नीतियां हो सकती हैं।", "ही वेबसाइट जाणीवपूर्वक विश्लेषण किंवा जाहिरात कुकीज ठेवत नाही. तुमच्या ब्राउझर किंवा इतर सेवांची स्वतःची सेटिंग्ज आणि धोरणे असू शकतात."],
    "This policy may be updated if the website's features or practices change. The latest version will be published on this page.": ["वेबसाइट की सुविधाओं या तरीकों में बदलाव होने पर यह नीति अपडेट की जा सकती है। नवीनतम संस्करण इसी पेज पर प्रकाशित होगा।", "वेबसाइटची वैशिष्ट्ये किंवा पद्धती बदलल्यास हे धोरण अद्ययावत केले जाऊ शकते. नवीनतम आवृत्ती या पृष्ठावर प्रकाशित केली जाईल."],
    "These terms apply to your use of the SHARAD Enterprises website. By using the site, you agree to use it for lawful purposes.": ["ये शर्तें SHARAD Enterprises वेबसाइट के उपयोग पर लागू होती हैं। साइट का उपयोग करके आप इसे वैध उद्देश्यों के लिए इस्तेमाल करने से सहमत होते हैं।", "या अटी SHARAD Enterprises वेबसाइटच्या वापराला लागू आहेत. साइट वापरून तुम्ही ती कायदेशीर कारणांसाठी वापरण्यास सहमत होता."],
    "The site provides general information about septic tank, drainage, main line, and sewage cleaning services and listed service areas. Information may change and is not a confirmed booking or guarantee that a service is available at a particular time or location.": ["यह साइट सेप्टिक टैंक, ड्रेनेज, मुख्य पाइपलाइन और सीवेज सफाई सेवाओं तथा सेवा क्षेत्रों की सामान्य जानकारी देती है। जानकारी बदल सकती है; यह पक्की बुकिंग या किसी समय/स्थान पर सेवा उपलब्ध होने की गारंटी नहीं है।", "ही साइट सेप्टिक टँक, ड्रेनेज, मुख्य पाइपलाइन आणि सांडपाणी स्वच्छता सेवा व सेवा क्षेत्रांची सर्वसाधारण माहिती देते. माहिती बदलू शकते; ही निश्चित बुकिंग किंवा ठराविक वेळी/ठिकाणी सेवा मिळण्याची हमी नाही."],
    "This website does not accept online bookings or payments. Contact SHARAD Enterprises directly to discuss your location, service requirements, availability, and any applicable charges. Any service arrangement is confirmed through direct communication with the business.": ["यह वेबसाइट ऑनलाइन बुकिंग या भुगतान स्वीकार नहीं करती। स्थान, सेवा की जरूरत, उपलब्धता और लागू शुल्क पर बात करने के लिए SHARAD Enterprises से सीधे संपर्क करें। सेवा की पुष्टि व्यवसाय से सीधे बातचीत के बाद होगी।", "ही वेबसाइट ऑनलाइन बुकिंग किंवा पेमेंट स्वीकारत नाही. ठिकाण, सेवेची गरज, उपलब्धता आणि लागू शुल्काबद्दल चर्चा करण्यासाठी SHARAD Enterprises शी थेट संपर्क साधा. व्यवसायाशी थेट बोलल्यानंतरच सेवा निश्चित होईल."],
    "We aim to keep the website useful and available, but do not guarantee uninterrupted access or that every page is always current. You may not misuse the site, attempt to disrupt it, or use its contact links for unlawful activity.": ["हम वेबसाइट को उपयोगी और उपलब्ध रखने का प्रयास करते हैं, लेकिन निर्बाध पहुंच या हर पेज के हमेशा अपडेट होने की गारंटी नहीं देते। साइट का दुरुपयोग, इसे बाधित करने का प्रयास या संपर्क लिंक का गैरकानूनी उपयोग न करें।", "वेबसाइट उपयुक्त आणि उपलब्ध ठेवण्याचा आम्ही प्रयत्न करतो; मात्र अखंड प्रवेश किंवा प्रत्येक पृष्ठ नेहमी अद्ययावत असेल याची हमी देत नाही. साइटचा गैरवापर, तिला अडथळा आणण्याचा प्रयत्न किंवा संपर्क दुव्यांचा बेकायदेशीर वापर करू नका."],
    "The site uses Google Fonts and device phone links. Those services are provided under their own terms and policies.": ["साइट Google Fonts और डिवाइस के फोन लिंक का उपयोग करती है। ये सेवाएं अपनी शर्तों और नीतियों के अधीन हैं।", "साइट Google Fonts आणि उपकरणातील फोन लिंक वापरते. या सेवा त्यांच्या स्वतःच्या अटी व धोरणांनुसार दिल्या जातात."],
    "These terms may be updated as the website changes. The latest version will be published on this page.": ["वेबसाइट में बदलाव के साथ ये शर्तें अपडेट हो सकती हैं। नवीनतम संस्करण इसी पेज पर प्रकाशित होगा।", "वेबसाइटमधील बदलांनुसार या अटी अद्ययावत होऊ शकतात. नवीनतम आवृत्ती या पृष्ठावर प्रकाशित केली जाईल."],
    "Main navigation": ["मुख्य नेविगेशन", "मुख्य नेव्हिगेशन"],
    "SHARAD Enterprises septic tank cleaning service video": ["SHARAD Enterprises सेप्टिक टैंक सफाई सेवा वीडियो", "SHARAD Enterprises सेप्टिक टँक स्वच्छता सेवा व्हिडिओ"],
    "CUSTOMER REVIEWS": ["ग्राहक समीक्षाएं", "ग्राहक अभिप्राय"],
    "Service video 01": ["सेवा वीडियो 01", "सेवा व्हिडिओ 01"],
    "Service video 02": ["सेवा वीडियो 02", "सेवा व्हिडिओ 02"],
    "Service video 03": ["सेवा वीडियो 03", "सेवा व्हिडिओ 03"],
    "Service video 04": ["सेवा वीडियो 04", "सेवा व्हिडिओ 04"],
    "Service video 05": ["सेवा वीडियो 05", "सेवा व्हिडिओ 05"],
    "Vacuum tanker service at a customer site": ["ग्राहक के स्थान पर वैक्यूम टैंकर सेवा", "ग्राहकाच्या ठिकाणी व्हॅक्यूम टँकर सेवा"],
    "On-site tanker service": ["कार्यस्थल पर टैंकर सेवा", "ठिकाणी टँकर सेवा"],
    "SHARAD Enterprises vacuum tanker": ["SHARAD Enterprises वैक्यूम टैंकर", "SHARAD Enterprises व्हॅक्यूम टँकर"],
    "Vacuum tanker on a service route": ["सेवा मार्ग पर वैक्यूम टैंकर", "सेवा मार्गावरील व्हॅक्यूम टँकर"],
    "Tanker positioned for pumping work": ["पंपिंग कार्य के लिए तैयार टैंकर", "पंपिंग कामासाठी सज्ज टँकर"],
    "SHARAD service truck and tanker": ["SHARAD सेवा ट्रक और टैंकर", "SHARAD सेवा ट्रक आणि टँकर"],
    "Hose setup for field service": ["कार्यस्थल पर होज़ की व्यवस्था", "सेवेसाठी होजची मांडणी"],
    "Field team and service vehicle": ["कार्यस्थल टीम और सेवा वाहन", "कामाची टीम आणि सेवा वाहन"],
    "Vacuum tanker at a customer site": ["ग्राहक के स्थान पर वैक्यूम टैंकर", "ग्राहकाच्या ठिकाणी व्हॅक्यूम टँकर"],
    "Technician carrying out hose service": ["होज से सेवा करता तकनीशियन", "होजद्वारे सेवा करणारा तंत्रज्ञ"],
    "SHARAD orange tanker fleet": ["SHARAD के नारंगी टैंकर", "SHARAD चे नारंगी टँकर"],
    "Service vehicle at work": ["काम पर सेवा वाहन", "कामावरील सेवा वाहन"],
    "SHARAD Enterprises tanker": ["SHARAD Enterprises टैंकर", "SHARAD Enterprises टँकर"],
    "Field operations with the SHARAD team": ["SHARAD टीम के साथ कार्यस्थल की सेवा", "SHARAD टीमसोबत प्रत्यक्ष सेवा"],
    "SHARAD service vehicle fleet": ["SHARAD सेवा वाहनों का बेड़ा", "SHARAD सेवा वाहनांचा ताफा"],
    "SHARAD service truck": ["SHARAD सेवा ट्रक", "SHARAD सेवा ट्रक"],
    "Service vehicle on site": ["कार्यस्थल पर सेवा वाहन", "कामाच्या ठिकाणी सेवा वाहन"],
    "On-site pumping operation": ["कार्यस्थल पर पंपिंग कार्य", "ठिकाणी पंपिंगचे काम"],
    "Field work in wet conditions": ["गीली परिस्थितियों में कार्यस्थल का काम", "ओल्या परिस्थितीत प्रत्यक्ष काम"],
    "SHARAD Enterprises work truck": ["SHARAD Enterprises कार्य ट्रक", "SHARAD Enterprises कामाचा ट्रक"],
    "Cleaning Services for Homes, Businesses & Industry": ["घरों, व्यवसायों और उद्योगों के लिए सफाई सेवाएं", "घरे, व्यवसाय आणि उद्योगांसाठी स्वच्छता सेवा"],
    "Our professional team helps customers discuss their cleaning needs and arrange the right service for their property.": ["हमारी पेशेवर टीम ग्राहकों को सफाई की जरूरत समझने और सही सेवा तय करने में मदद करती है।", "आमची व्यावसायिक टीम ग्राहकांना स्वच्छतेची गरज समजून योग्य सेवा ठरवण्यास मदत करते."],
    "Septic tank cleaning for homes, properties, and facilities in Pune and surrounding areas.": ["पुणे और आसपास के क्षेत्रों में घरों, संपत्तियों और संस्थानों के लिए सेप्टिक टैंक की सफाई।", "पुणे आणि आसपासच्या भागांत घरे, मालमत्ता आणि संस्थांसाठी सेप्टिक टँक स्वच्छता."],
    "Septic tank cleaning for homes, properties, and facilities in Pune and surrounding service areas.": ["पुणे और आसपास के सेवा क्षेत्रों में घरों, संपत्तियों और संस्थानों के लिए सेप्टिक टैंक की सफाई।", "पुणे आणि आसपासच्या सेवा क्षेत्रांत घरे, मालमत्ता आणि संस्थांसाठी सेप्टिक टँक स्वच्छता."],
    "Drainage cleaning support for properties across Pune and nearby service areas.": ["पुणे और आसपास के सेवा क्षेत्रों में संपत्तियों के लिए ड्रेनेज सफाई सेवा।", "पुणे आणि आसपासच्या सेवा क्षेत्रांतील मालमत्तांसाठी ड्रेनेज स्वच्छता सेवा."],
    "Septic tank cleaning for homes and residential properties in Pune and nearby communities.": ["पुणे और आसपास के क्षेत्रों में घरों और आवासीय संपत्तियों के लिए सेप्टिक टैंक की सफाई।", "पुणे आणि आसपासच्या भागांतील घरे व निवासी मालमत्तांसाठी सेप्टिक टँक स्वच्छता."],
    "Septic tank cleaning for commercial buildings and business facilities.": ["व्यावसायिक इमारतों और व्यवसायों के लिए सेप्टिक टैंक की सफाई।", "व्यावसायिक इमारती आणि व्यवसायांसाठी सेप्टिक टँक स्वच्छता."],
    "Septic tank cleaning for factories, worksites, and industrial facilities.": ["कारखानों, कार्यस्थलों और औद्योगिक संस्थानों के लिए सेप्टिक टैंक की सफाई।", "कारखाने, कामाची ठिकाणे आणि औद्योगिक संस्थांसाठी सेप्टिक टँक स्वच्छता."],
    "Main line cleaning for properties in Pune, Chakan, and Baner.": ["पुणे, चाकण और बानेर में संपत्तियों के लिए मुख्य पाइपलाइन की सफाई।", "पुणे, चाकण आणि बाणेर येथील मालमत्तांसाठी मुख्य पाइपलाइन स्वच्छता."],
    "Sewage cleaning services for residential, commercial, and industrial customers around Pune.": ["पुणे के आसपास आवासीय, व्यावसायिक और औद्योगिक ग्राहकों के लिए सीवेज सफाई सेवाएं।", "पुण्याजवळील निवासी, व्यावसायिक आणि औद्योगिक ग्राहकांसाठी सांडपाणी स्वच्छता सेवा."],
    "Homes and residential properties": ["घर और आवासीय संपत्तियां", "घरे आणि निवासी मालमत्ता"],
    "Commercial buildings and business facilities": ["व्यावसायिक इमारतें और व्यवसाय", "व्यावसायिक इमारती आणि व्यवसाय"],
    "Industrial sites and other facilities": ["औद्योगिक स्थल और अन्य संस्थान", "औद्योगिक ठिकाणे आणि इतर संस्था"],
    "Residential properties": ["आवासीय संपत्तियां", "निवासी मालमत्ता"],
    "Commercial properties": ["व्यावसायिक संपत्तियां", "व्यावसायिक मालमत्ता"],
    "Industrial properties": ["औद्योगिक संपत्तियां", "औद्योगिक मालमत्ता"],
    "Homes": ["घर", "घरे"],
    "Nearby communities in the Pune service area": ["पुणे सेवा क्षेत्र के आसपास के समुदाय", "पुणे सेवा क्षेत्रातील आसपासचे भाग"],
    "Commercial buildings": ["व्यावसायिक इमारतें", "व्यावसायिक इमारती"],
    "Business facilities": ["व्यावसायिक संस्थान", "व्यावसायिक संस्था"],
    "Commercial properties in the Pune service area": ["पुणे सेवा क्षेत्र में व्यावसायिक संपत्तियां", "पुणे सेवा क्षेत्रातील व्यावसायिक मालमत्ता"],
    "Factories": ["कारखाने", "कारखाने"],
    "Worksites": ["कार्यस्थल", "कामाची ठिकाणे"],
    "Industrial facilities": ["औद्योगिक संस्थान", "औद्योगिक संस्था"],
    "Other properties with a main line cleaning requirement": ["मुख्य पाइपलाइन सफाई की जरूरत वाली अन्य संपत्तियां", "मुख्य पाइपलाइन स्वच्छतेची गरज असलेल्या इतर मालमत्ता"],
    "Residential customers": ["घरेलू ग्राहक", "निवासी ग्राहक"],
    "Commercial customers": ["व्यावसायिक ग्राहक", "व्यावसायिक ग्राहक"],
    "Industrial customers": ["औद्योगिक ग्राहक", "औद्योगिक ग्राहक"],
    "Service Not Found | SHARAD Enterprises": ["सेवा नहीं मिली | SHARAD Enterprises", "सेवा सापडली नाही | SHARAD Enterprises"],
    "© 2026 SHARAD Enterprises. All rights reserved.": ["© 2026 SHARAD Enterprises. सर्वाधिकार सुरक्षित।", "© 2026 SHARAD Enterprises. सर्व हक्क राखीव."],
    "Your browser does not support MP4 video.": ["आपका ब्राउज़र MP4 वीडियो नहीं चला सकता।", "तुमचा ब्राउझर MP4 व्हिडिओ चालवू शकत नाही."],
    "✓ SHARAD Enterprises · Pune and nearby areas": ["✓ SHARAD Enterprises · पुणे और आसपास के क्षेत्र", "✓ SHARAD Enterprises · पुणे आणि आसपासची क्षेत्रे"],
    "Residential": ["आवासीय", "निवासी"],
    "Commercial": ["व्यावसायिक", "व्यावसायिक"],
    "Industrial": ["औद्योगिक", "औद्योगिक"],
    "Need a Cleaning Service": ["सफाई सेवा चाहिए", "स्वच्छता सेवा हवी आहे"],
    "in Pune or Nearby?": ["पुणे में या आसपास?", "पुण्यात किंवा आसपास?"],
    "◈ Residential Septic Tank Cleaning": ["◈ घरेलू सेप्टिक टैंक की सफाई", "◈ निवासी सेप्टिक टँक स्वच्छता"],
    "◉ Commercial Cleaning Services": ["◉ व्यावसायिक सफाई सेवाएं", "◉ व्यावसायिक स्वच्छता सेवा"],
    "✦ Industrial Septic Tank Cleaning": ["✦ औद्योगिक सेप्टिक टैंक की सफाई", "✦ औद्योगिक सेप्टिक टँक स्वच्छता"],
    "✓ Pune & Nearby Areas": ["✓ पुणे और आसपास के क्षेत्र", "✓ पुणे आणि आसपासची क्षेत्रे"],
    "Septic Tank Cleaning Services in Pune": ["पुणे में सेप्टिक टैंक सफाई सेवाएं", "पुण्यात सेप्टिक टँक स्वच्छता सेवा"],
    "SHARAD Enterprises provides septic tank cleaning for residential, commercial, and industrial properties. Contact the team to describe the property and discuss the service required.": ["SHARAD Enterprises आवासीय, व्यावसायिक और औद्योगिक संपत्तियों के लिए सेप्टिक टैंक की सफाई करता है। सेवा पर चर्चा करने के लिए टीम से संपर्क करें।", "SHARAD Enterprises निवासी, व्यावसायिक आणि औद्योगिक मालमत्तांसाठी सेप्टिक टँक स्वच्छता सेवा देते. सेवेबद्दल चर्चा करण्यासाठी टीमशी संपर्क साधा."],
    "Discuss your drainage cleaning requirements with SHARAD Enterprises. The team can confirm whether the service is available for your property and location.": ["ड्रेनेज सफाई की जरूरत के बारे में SHARAD Enterprises से चर्चा करें। टीम आपके स्थान पर सेवा की उपलब्धता बताएगी।", "ड्रेनेज स्वच्छतेच्या गरजांबद्दल SHARAD Enterprises शी चर्चा करा. तुमच्या ठिकाणी सेवा उपलब्ध आहे का हे टीम सांगेल."],
    "Contact SHARAD Enterprises to discuss septic tank cleaning for your home or residential property and confirm service availability for your address.": ["अपने घर या आवासीय संपत्ति के सेप्टिक टैंक की सफाई और सेवा उपलब्धता जानने के लिए SHARAD Enterprises से संपर्क करें।", "तुमच्या घरातील किंवा निवासी मालमत्तेतील सेप्टिक टँक स्वच्छता आणि सेवा उपलब्धतेसाठी SHARAD Enterprises शी संपर्क साधा."],
    "SHARAD Enterprises provides septic tank cleaning for commercial buildings and business facilities in the Pune service area. Call to discuss your site's requirements.": ["SHARAD Enterprises पुणे सेवा क्षेत्र में व्यावसायिक इमारतों और व्यवसायों के लिए सेप्टिक टैंक की सफाई करता है। अपनी जरूरत बताने के लिए कॉल करें।", "SHARAD Enterprises पुणे सेवा क्षेत्रातील व्यावसायिक इमारती आणि व्यवसायांसाठी सेप्टिक टँक स्वच्छता सेवा देते. गरजांबद्दल चर्चा करण्यासाठी कॉल करा."],
    "Contact SHARAD Enterprises to discuss septic tank cleaning for your factory, worksite, or other industrial facility and confirm the service details.": ["अपनी फैक्टरी, कार्यस्थल या अन्य औद्योगिक संस्थान के सेप्टिक टैंक की सफाई के लिए SHARAD Enterprises से संपर्क करें।", "तुमच्या कारखान्यातील, कामाच्या ठिकाणातील किंवा इतर औद्योगिक संस्थेतील सेप्टिक टँक स्वच्छतेसाठी SHARAD Enterprises शी संपर्क साधा."],
    "SHARAD Enterprises provides main line cleaning for properties in listed service areas. Call the team to explain the issue and discuss service requirements.": ["SHARAD Enterprises सूचीबद्ध सेवा क्षेत्रों में मुख्य पाइपलाइन की सफाई करता है। समस्या और सेवा की जरूरत बताने के लिए टीम को कॉल करें।", "SHARAD Enterprises नमूद सेवा क्षेत्रांतील मालमत्तांसाठी मुख्य पाइपलाइन स्वच्छता सेवा देते. समस्या आणि सेवेची गरज सांगण्यासाठी टीमला कॉल करा."],
    "Discuss sewage cleaning requirements for your property with SHARAD Enterprises. Contact the team to confirm availability and service details for your location.": ["अपनी संपत्ति की सीवेज सफाई के बारे में SHARAD Enterprises से चर्चा करें। अपने स्थान पर सेवा की उपलब्धता और विवरण जानने के लिए टीम से संपर्क करें।", "तुमच्या मालमत्तेतील सांडपाणी स्वच्छतेबद्दल SHARAD Enterprises शी चर्चा करा. तुमच्या ठिकाणी सेवा उपलब्धता आणि तपशील जाणून घेण्यासाठी टीमशी संपर्क साधा."],
    "Vacuum tanker crew clearing collected waste at a site": ["कार्यस्थल पर जमा कचरा साफ करती वैक्यूम टैंकर टीम", "कामाच्या ठिकाणी साचलेला कचरा साफ करणारी व्हॅक्यूम टँकर टीम"],
    "Vacuum tanker and field crew at a service location": ["सेवा स्थल पर वैक्यूम टैंकर और टीम", "सेवेच्या ठिकाणी व्हॅक्यूम टँकर आणि टीम"],
    "Vacuum tanker at a customer service location": ["ग्राहक के सेवा स्थल पर वैक्यूम टैंकर", "ग्राहकाच्या सेवा ठिकाणी व्हॅक्यूम टँकर"]
  };

  const supportedLanguages = ["en", "hi", "mr"];
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  const translationMap = Object.fromEntries(
    Object.entries(translations).map(([english, values]) => [
      english,
      { hi: values[0], mr: values[1] }
    ])
  );

  function normalize(value) {
    return value.replace(/\s+/g, " ").trim();
  }

  function translated(value, language) {
    if (language === "en") return value;
    if (translationMap[value]?.[language]) return translationMap[value][language];
    const pageTitle = value.match(/^(.*) \| SHARAD Enterprises$/);
    if (pageTitle && translationMap[pageTitle[1]]?.[language]) {
      return `${translationMap[pageTitle[1]][language]} | SHARAD Enterprises`;
    }
    const serviceTitle = value.match(/^(Septic Tank Cleaning Services|Drainage Cleaning Services|Residential Septic Tank Cleaning|Commercial Septic Tank Cleaning|Industrial Septic Tank Cleaning|Main Line Cleaning Services|Sewage Cleaning Services) in (Pune|Chakan|Baner|Pimpri|Nigdi|Bhosari|Hinjewadi)$/);
    if (serviceTitle && translationMap[serviceTitle[1]]?.[language]) {
      const postposition = language === "hi" ? "में" : "मध्ये";
      return `${translationMap[serviceTitle[1]][language]} ${postposition} ${translationMap[serviceTitle[2]][language]}`;
    }
    return value;
  }

  function applyLanguage(language) {
    if (!supportedLanguages.includes(language)) return;

    document.documentElement.lang = language;
    document.title = translated(window.__englishTitle, language);
    const description = document.querySelector('meta[name="description"]');
    if (description && window.__englishDescription) {
      description.content = translated(window.__englishDescription, language);
    }

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const source = originalText.get(node);
      const key = normalize(source);
      if (!key) continue;
      const replacement = translated(key, language);
      if (replacement !== key) {
        const leading = source.match(/^\s*/)[0];
        const trailing = source.match(/\s*$/)[0];
        const translatedValue = `${leading}${replacement}${trailing}`;
        if (node.nodeValue !== translatedValue) node.nodeValue = translatedValue;
      } else if (language === "en" && node.nodeValue !== source) {
        node.nodeValue = source;
      }
    }

    for (const element of document.querySelectorAll("[aria-label], [alt], [placeholder], [title]")) {
      if (!originalAttributes.has(element)) {
        originalAttributes.set(element, {
          "aria-label": element.getAttribute("aria-label"),
          alt: element.getAttribute("alt"),
          placeholder: element.getAttribute("placeholder"),
          title: element.getAttribute("title")
        });
      }
      const attributes = originalAttributes.get(element);
      for (const [name, value] of Object.entries(attributes)) {
        if (value !== null) element.setAttribute(name, translated(normalize(value), language));
      }
    }

    for (const selector of document.querySelectorAll(".language-select")) {
      selector.value = language;
    }
  }

  window.__englishTitle = document.title;
  window.__englishDescription = document.querySelector('meta[name="description"]')?.content || "";

  const initialLanguage = localStorage.getItem("sharad-language");
  const language = supportedLanguages.includes(initialLanguage) ? initialLanguage : "en";
  document.querySelectorAll(".language-select").forEach((selector) => {
    selector.value = language;
    selector.addEventListener("change", () => {
      localStorage.setItem("sharad-language", selector.value);
      applyLanguage(selector.value);
    });
  });

  applyLanguage(language);

  const observer = new MutationObserver((mutations) => {
    if (mutations.some((mutation) => mutation.type === "childList" || mutation.type === "characterData")) {
      applyLanguage(document.documentElement.lang || "en");
    }
  });
  observer.observe(document.body, { childList: true, characterData: true, subtree: true });
})();
