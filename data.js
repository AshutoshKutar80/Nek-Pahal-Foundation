/* ===== SETTINGS ===== */
const PHONE = "919196226530";            // WhatsApp number (91 ke saath)
const UPI   = "durgeshkumar9109@ybl";    // ✅ Real UPI ID

/* Har text 3 bhasha me hai: [Hindi, English, Hinglish] */
const NAV = [
  ["home",       ["होम", "Home", "Home"]],
  ["about",      ["हमारे बारे में", "About", "Hamare baare mein"]],
  ["services",   ["सेवाएँ", "Services", "Sevayein"]],
  ["donors",     ["दानदाता", "Donors", "Daandata"]],
  ["distribute", ["वितरण", "Distribution", "Vitran"]],
  ["gallery",    ["गैलरी", "Gallery", "Gallery"]],
  ["qr-donate",  ["QR दान", "QR Donate", "QR Daan"]],   // QR section menu me
  ["volunteer",  ["स्वयंसेवक", "Volunteer", "Swayamsevak"]],
  ["donate",     ["दान करें", "Donate", "Daan karein"]],
  ["contact",    ["संपर्क", "Contact", "Sampark"]]
];

/* ===== DONORS: image -> donate/1.png ... | date: YYYY-MM-DD ===== */
const DONORS = [
  { name: "अरविंद सिंह(बीरू), बबीना", amount: 2100, date: "2026-11-09", image: "donate/2.png" },
  { name: "प्रेम कुमार", amount: 2000, date: "2026-11-01", image: "donate/1.png" },
  { name: "दुर्गेश कुमार, कुरारा", amount: 3100, date: "2026-11-05", image: "donate/3.png" },
  { name: "संस्कार(Birthday Celebration)", amount: 7000, date: "2026-11-15", image: "donate/4.png" }
];

/* ===== DISTRIBUTION: prefix "kurara", count 7 -> distribute/kurara1.png ... kurara7.png ===== */
const DISTS = [
  {
    title:    ["राशन वितरण", "Ration Distribution", "Rashan Vitran"],
    location: ["कुरारा, हमीरपुर", "Kurara, Hamirpur", "Kurara, Hamirpur"],
    date:     "2026-11-10",
    desc: [
      "कुरारा क्षेत्र में 5 बुज़ुर्गों को आवश्यक राशन सामग्री वितरित की गई।",
      "Essential ration supplies were distributed to 5 elderly people in the Kurara area.",
      "Kurara kshetra mein 5 buzurgon ko zaroori rashan samagri vitrit ki gayi."
    ],
    prefix: "kurara",
    count: 7
  },
  {
    title: ["संस्कार के जन्मदिन पर राशन वितरण", "Ration Distribution on Sanskar's Birthday", "Sanskar ke Birthday par Rashan Vitran"],
    location: ["कुरारा, हमीरपुर", "Kurara, Hamirpur", "Kurara, Hamirpur"],
    date:     "2026-11-15",
    desc: [
      "संस्कार के जन्मदिन के शुभ अवसर पर नेक पहल फाउंडेशन द्वारा 14 बुज़ुर्गों को आवश्यक राशन सामग्री वितरित की गई।",
      "On the occasion of Sanskar's birthday, essential ration supplies were distributed to 14 elderly people by Nek Pahal Foundation.",
      "Sanskar ke birthday ke shubh avsar par Nek Pahal Foundation dwara 14 buzurgon ko zaroori rashan samagri vitrit ki gayi."
    ],
    prefix: "birthday",
    count: 14
  }
];

/* ===== EXTRA GALLERY ALBUMS: gallery/event1.png ... ===== */
const GALLERY = [
  { title: ["कार्यक्रम", "Events", "Karyakram"], prefix: "event", count: 12 }
];

/* ===== SITE TEXT ===== */
const T = {
  /* brand + hero */
  brand:  ["नेक पहल फाउंडेशन", "Nek Pahal Foundation", "Nek Pahal Foundation"],
  tag:    ["एक नेक पहल, किसी की ज़िंदगी में नई उम्मीद!", "One good step, a new hope in someone's life!", "Ek nek pahal, kisi ki zindagi mein nayi umeed!"],
  donate: ["❤ दान करें", "❤ Donate", "❤ Daan karein"],
  vol:    ["स्वयंसेवक बनें", "Become a volunteer", "Swayamsevak banein"],

  /* stats */
  stA: ["कुल दान", "Total donated", "Kul daan"],
  stB: ["दानदाता", "Donors", "Daandata"],
  stC: ["वितरण कार्य", "Distributions", "Vitran kaary"],

  /* about */
  aboutH: ["हमारे बारे में", "About us", "Hamare baare mein"],
  aboutS: ["सेवा · सहयोग · सम्मान · मानवता", "Service · Support · Respect · Humanity", "Seva · Sahyog · Sammaan · Manavta"],
  a1: ["नेक पहल फाउंडेशन कुरारा, हमीरपुर की एक सेवा संस्था है। हम बुज़ुर्गों और ज़रूरतमंद परिवारों तक कंबल, राशन, दवाई और सम्मान पहुँचाते हैं।", "Nek Pahal Foundation is a service organisation in Kurara, Hamirpur. We bring blankets, ration, medicine and dignity to elders and families in need.", "Nek Pahal Foundation Kurara, Hamirpur ki ek seva sanstha hai. Hum buzurgon aur zarooratmand parivaron tak kambal, rashan, dawai aur sammaan pahunchate hain."],
  a2: ["हर दान और हर वितरण हम इसी वेबसाइट पर दिखाते हैं।", "Every donation and every distribution is shown right here on this site.", "Har daan aur har vitran hum isi website par dikhate hain."],
  v1: ["सेवा", "Service", "Seva"],
  v2: ["सहयोग", "Support", "Sahyog"],
  v3: ["सम्मान", "Respect", "Sammaan"],

  /* services */
  svcH: ["हमारी सेवाएँ", "Our services", "Hamari sevayein"],
  svcS: ["हम किन कामों में मदद करते हैं", "Where we help", "Hum kin kaamon mein madad karte hain"],
  s1: ["कंबल वितरण", "Blankets", "Kambal vitran"],
  s2: ["राशन सहायता", "Ration", "Rashan sahayata"],
  s3: ["दवाई सहायता", "Medicine", "Dawai sahayata"],
  s4: ["बुज़ुर्ग सेवा", "Elder care", "Buzurg seva"],
  s5: ["शिक्षा सहायता", "Education", "Shiksha sahayata"],
  s6: ["पौधारोपण", "Tree planting", "Paudharopan"],

  /* donors */
  donH: ["हमारे दानदाता", "Our donors", "Hamare daandata"],
  donS: ["आपके सहयोग से ही यह सेवा चल रही है 🙏", "This work runs on your support 🙏", "Aapke sahyog se hi ye seva chal rahi hai 🙏"],

  /* distribution */
  distH: ["हमने बाँटा", "What we distributed", "Humne baanta"],
  distS: ["कब, कहाँ और क्या बाँटा गया", "When, where and what", "Kab, kahan aur kya baanta gaya"],

  /* gallery */
  galH: ["फोटो गैलरी", "Photo gallery", "Photo gallery"],
  galS: ["फोटो पर टैप करके बड़ा देखें", "Tap a photo to view it large", "Photo par tap karke bada dekhein"],
  all:  ["सभी", "All", "Sabhi"],

  /* volunteer */
  volH: ["स्वयंसेवक बनें", "Become a volunteer", "Swayamsevak banein"],
  volS: ["आपका थोड़ा सा समय किसी के लिए बहुत बड़ा है", "A little of your time means a lot to someone", "Aapka thoda sa samay kisi ke liye bahut bada hai"],

  /* form labels */
  fName:   ["नाम", "Name", "Naam"],
  fMobile: ["मोबाइल", "Mobile", "Mobile"],
  fPlace:  ["गाँव / शहर", "Village / city", "Gaon / shehar"],
  fHelp:   ["कैसे मदद करना चाहते हैं?", "How would you like to help?", "Kaise madad karna chahte hain?"],
  fAmt:    ["रकम (₹)", "Amount (₹)", "Rakam (₹)"],
  fMsg:    ["संदेश", "Message", "Sandesh"],
  send:    ["WhatsApp पर भेजें", "Send on WhatsApp", "WhatsApp par bhejein"],

  /* donate */
  donaH: ["दान करें", "Donate", "Daan karein"],
  donaS: ["आपका हर रुपया किसी की उम्मीद बनता है", "Every rupee becomes someone's hope", "Aapka har rupya kisi ki umeed banta hai"],
  upiH:  ["UPI से दान करें", "Donate via UPI", "UPI se daan karein"],
  copy:  ["UPI ID कॉपी करें", "Copy UPI ID", "UPI ID copy karein"],
  copied:["कॉपी हो गया ✓", "Copied ✓", "Copy ho gaya ✓"],
  after: ["दान के बाद नाम, रकम और फोटो WhatsApp पर भेजें, हम आपको दानदाता सूची में जोड़ देंगे।", "After donating, send your name, amount and photo on WhatsApp and we'll add you to the donors list.", "Daan ke baad naam, rakam aur photo WhatsApp par bhejein, hum aapko daandata list mein jod denge."],
  tell:  ["WhatsApp पर बताएँ", "Tell us on WhatsApp", "WhatsApp par batayein"],

  /* QR section (page me) */
  qrH:    ["QR से दान करें", "Donate via QR", "QR se daan karein"],
  qrS:    ["स्कैन करें · भुगतान करें · बदलाव लाएँ", "Scan · Pay · Make a difference", "Scan karein · Pay karein · Badlaav laayein"],
  qrScan: ["QR स्कैन करें", "Scan the QR", "QR scan karein"],

  /* Donation popup (page load par) */
  popH:    ["एक नेक पहल में शामिल हों 🙏", "Join a good cause 🙏", "Ek nek pahal mein shaamil hon 🙏"],
  popS:    ["आपका छोटा सा सहयोग किसी की ज़िंदगी बदल सकता है", "Your small contribution can change a life", "Aapka chhota sa sahyog kisi ki zindagi badal sakta hai"],
  popBtn:  ["❤ अभी दान करें", "❤ Donate now", "❤ Abhi daan karein"],
  popSkip: ["आज के लिए बंद करें", "Skip for today", "Aaj ke liye band karein"],

  /* contact */
  conH:  ["संपर्क करें", "Contact us", "Sampark karein"],
  conS:  ["कुरारा, हमीरपुर", "Kurara, Hamirpur", "Kurara, Hamirpur"],
  addr:  ["📍 पता", "📍 Address", "📍 Pata"],
  addrV: ["नेक पहल फाउंडेशन, कुरारा, हमीरपुर", "Nek Pahal Foundation, Kurara, Hamirpur", "Nek Pahal Foundation, Kurara, Hamirpur"],

  /* footer */
  rights: ["सर्वाधिकार सुरक्षित", "All rights reserved", "Sarvadhikar surakshit"]
};

/* ================================================================
   📁 FOLDER STRUCTURE
   ================================================================
   web/
     fevi.png           → favicon / header logo
     logo.png           → hero + fallback image
     footer.png         → footer banner
     qr.png             → QR (general)
     donation-qr.png    → QR for popup + QR section (recommended)

   donate/
     1.png, 2.png, 3.png, 4.png …   → donors photos

   distribute/
     kurara1.png … kurara7.png      → 1st distribution album
     birthday1.png … birthday14.png → 2nd distribution album

   gallery/
     event1.png … event12.png       → events album
   ================================================================ */