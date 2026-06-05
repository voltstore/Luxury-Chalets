/* ============================================================
   I18N.JS — نظام تعدد اللغات | Internationalization System
   Arabic (RTL) ↔ English (LTR) — No page reload
   ============================================================ */

const translations = {
  ar: {
    /* ── الشعار ── */
    'brand.name':    'شاليهات الفخامة',
    'brand.tagline': 'Luxury Chalets',

    /* ── القائمة ── */
    'nav.home':     'الرئيسية',
    'nav.chalets':  'شاليهاتنا',
    'nav.gallery':  'معرض الصور',
    'nav.about':    'من نحن',
    'nav.contact':  'تواصل معنا',
    'nav.book':     'احجز الآن',

    /* ── Hero ── */
    'hero.badge':     'تجربة الإقامة الفاخرة',
    'hero.title1':    'حيث تبدأ',
    'hero.title2':    'الفخامة',
    'hero.subtitle':  'شاليهات استثنائية في أرقى مواقع المملكة العربية السعودية — لتجمعاتكم العائلية، مناسباتكم، واسترخاءكم الفاخر',
    'hero.cta1':      'استكشف الشاليهات',
    'hero.cta2':      'احجز عبر واتساب',
    'hero.scroll':    'تمرير',

    /* ── Trust Bar ── */
    'trust.pool':     'مسابح خاصة',
    'trust.privacy':  'خصوصية تامة',
    'trust.service':  'خدمة 24/7',
    'trust.location': 'مواقع مميزة',

    /* ── About Intro ── */
    'about.label':    'من نحن',
    'about.title':    'تجربة إقامة تستحق',
    'about.title2':   'أن تُعاش',
    'about.text':     'نحن متخصصون في توفير أرقى الشاليهات الفاخرة في المملكة العربية السعودية. منذ أكثر من 8 سنوات ونحن نبني تجارب إقامة لا تُنسى للعائلات والمناسبات الخاصة. كل شاليه يحمل بصمة فريدة من التصميم والخدمة الاستثنائية.',
    'about.years':    'سنوات خبرة',
    'about.cta':      'اعرف أكثر',

    /* ── Featured Chalets ── */
    'featured.label':    'اختياراتنا المميزة',
    'featured.title1':   'أبرز',
    'featured.title2':   'شاليهاتنا',
    'featured.subtitle': 'اكتشف مجموعتنا المنتقاة من الشاليهات الفاخرة في أرقى مناطق المملكة',
    'featured.viewAll':  'عرض الكل',
    'card.night':        '/ الليلة',
    'card.details':      'التفاصيل',
    'card.whatsapp':     'احجز واتساب',
    'card.persons':      'أشخاص',
    'card.rooms':        'غرف',

    /* ── Features / Why Us ── */
    'features.label':    'لماذا نحن',
    'features.title1':   'نقدم ما هو',
    'features.title2':   'أكثر من إقامة',
    'features.subtitle': 'كل تفصيلة في شاليهاتنا مصممة لتمنحك تجربة استثنائية لا تُنسى',

    /* ── Stats ── */
    'stats.chalets':     'شاليه فاخر',
    'stats.clients':     'عميل سعيد',
    'stats.years':       'سنوات خبرة',
    'stats.rating':      'تقييم متوسط',

    /* ── Testimonials ── */
    'testimonials.label':    'آراء عملاءنا',
    'testimonials.title1':   'ماذا يقول',
    'testimonials.title2':   'ضيوفنا',
    'testimonials.subtitle': 'تجارب حقيقية من عملاء يثقون بنا',

    /* ── CTA ── */
    'cta.title1':    'جاهز لتجربة',
    'cta.title2':    'الفخامة الحقيقية؟',
    'cta.subtitle':  'تواصل معنا الآن عبر واتساب واحجز شاليهك المثالي — الردّ فوري وسعادتك أولويتنا',
    'cta.btn1':      'احجز عبر واتساب',
    'cta.btn2':      'استعرض الشاليهات',

    /* ── Footer ── */
    'footer.desc':      'نوفر أفخر الشاليهات في المملكة العربية السعودية لتجمعاتكم ومناسباتكم الخاصة بخدمة استثنائية على مدار الساعة.',
    'footer.links':     'روابط سريعة',
    'footer.services':  'خدماتنا',
    'footer.contact':   'التواصل',
    'footer.copyright': '© 2024 شاليهات الفخامة. جميع الحقوق محفوظة.',
    'footer.home':      'الرئيسية',
    'footer.chalets':   'شاليهاتنا',
    'footer.gallery':   'معرض الصور',
    'footer.about':     'من نحن',
    'footer.contactPage': 'تواصل معنا',
    'footer.luxury':    'شاليهات فاخرة',
    'footer.events':    'مناسبات خاصة',
    'footer.weddings':  'أعراس وخطوبة',
    'footer.family':    'تجمعات عائلية',
    'footer.phone':     '+966 59 980 4296',
    'footer.email':     'info@luxury-chalets.sa',
    'footer.address':   'الرياض، المملكة العربية السعودية',

    /* ── Chalets Page ── */
    'chalets.title':     'شاليهاتنا الفاخرة',
    'chalets.subtitle':  'اكتشف مجموعتنا الكاملة من الشاليهات في أرقى مناطق المملكة',
    'filter.all':        'الكل',
    'filter.riyadh':     'الرياض',
    'filter.jeddah':     'جدة',
    'filter.taif':       'الطائف',
    'filter.abha':       'أبها',
    'filter.madinah':    'المدينة',
    'filter.luxury':     'فاخر',
    'filter.beach':      'بحري',
    'filter.mountain':   'جبلي',
    'filter.family':     'عائلي',
    'filter.label':      'فلترة:',
    'filter.city':       'المدينة:',
    'filter.type':       'النوع:',
    'no.results':        'لا توجد نتائج. جرب فلتراً آخر.',

    /* ── Chalet Details ── */
    'details.back':       'العودة',
    'details.gallery':    'معرض الصور',
    'details.about':      'عن الشاليه',
    'details.amenities':  'المرافق والخدمات',
    'details.location':   'الموقع',
    'details.map':        'الموقع على الخريطة',
    'details.mapNote':    'تواصل معنا للحصول على الموقع التفصيلي',
    'book.title':         'احجز شاليهك',
    'book.price':         'ريال / الليلة',
    'book.now':           'احجز الآن عبر واتساب',
    'book.call':          'اتصل بنا',
    'book.includes':      'يشمل:',
    'book.i1':            'تحضير الشاليه 2 ساعة قبل وصولك',
    'book.i2':            'مساعدة الضيوف على مدار الساعة',
    'book.i3':            'تنظيف يومي عند الطلب',
    'specs.capacity':     'الطاقة الاستيعابية',
    'specs.bedrooms':     'غرف النوم',
    'specs.bathrooms':    'الحمامات',
    'specs.area':         'المساحة',

    /* ── About Page ── */
    'about.page.title':     'قصتنا',
    'about.page.subtitle':  'رحلة من الشغف نحو الفخامة',
    'about.story.label':    'قصتنا',
    'about.story.title':    'بدأنا بحلم أصبح حقيقة',
    'about.story.p1':       'في عام 2016، انطلقنا بشاليه واحد في الرياض وحلم كبير — أن نقدم لضيوفنا تجربة إقامة تفوق توقعاتهم في كل شيء: التصميم، النظافة، الخدمة، والخصوصية.',
    'about.story.p2':       'اليوم، نفخر بشبكة تضم أكثر من 25 شاليهاً فاخراً في خمس مدن سعودية، وأكثر من 1500 عائلة سعيدة تثق بنا لأجمل مناسباتها وأوقات راحتها.',
    'about.story.p3':       'سر نجاحنا بسيط: نعامل كل ضيف كأنه الأول، ونهتم بكل تفصيلة كأنها الأهم.',
    'about.mission.label':  'رؤيتنا ورسالتنا',
    'about.vision.title':   'الرؤية',
    'about.vision.text':    'أن نكون الخيار الأول للعائلات السعودية الباحثة عن تجربة إقامة فاخرة وآمنة.',
    'about.mission.title':  'الرسالة',
    'about.mission.text':   'تقديم شاليهات بمستوى فندقي مع خصوصية المنزل وبأسعار منافسة وخدمة استثنائية.',
    'about.values.title':   'القيم',
    'about.values.text':    'الأمانة، الجودة، الخصوصية، والاهتمام بكل تفصيلة في تجربتكم.',
    'about.team.label':     'فريقنا',
    'about.team.title':     'نخبة من المحترفين',

    /* ── Gallery Page ── */
    'gallery.title':    'معرض الصور',
    'gallery.subtitle': 'لقطات حقيقية من شاليهاتنا',
    'gallery.all':      'الكل',
    'gallery.pools':    'مسابح',
    'gallery.outdoor':  'جلسات خارجية',
    'gallery.indoor':   'داخلي',
    'gallery.night':    'ليلي',

    /* ── Contact Page ── */
    'contact.title':     'تواصل معنا',
    'contact.subtitle':  'نحن هنا لمساعدتك في اختيار شاليهك المثالي',
    'contact.wa.title':  'تواصل فوري عبر واتساب',
    'contact.wa.desc':   'أسرع طريقة للتواصل معنا — ردّ فوري على مدار الساعة',
    'contact.wa.btn':    'ابدأ المحادثة على واتساب',
    'form.title':        'أرسل لنا رسالة',
    'form.name':         'الاسم الكريم',
    'form.phone':        'رقم الجوال',
    'form.city':         'المدينة المفضلة',
    'form.date':         'تاريخ الحجز المطلوب',
    'form.message':      'رسالتك',
    'form.submit':       'إرسال الرسالة',
    'form.success':      'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.',
    'form.error.name':   'الاسم مطلوب',
    'form.error.phone':  'رقم الجوال مطلوب',
    'form.error.msg':    'الرسالة مطلوبة',
    'form.placeholder.name':    'أدخل اسمك الكريم',
    'form.placeholder.phone':   '05xxxxxxxx',
    'form.placeholder.message': 'أخبرنا عن حجزك المطلوب...',
    'contact.info.phone':   '+966 59 980 4296',
    'contact.info.email':   'info@luxury-chalets.sa',
    'contact.info.address': 'الرياض، المملكة العربية السعودية',
    'contact.info.hours':   '24 ساعة، 7 أيام',
    'contact.map.title':    'موقعنا',

    /* ── WhatsApp ── */
    'wa.tooltip':        'تواصل معنا',
    'wa.default.msg':    'مرحباً، أرغب بالاستفسار عن حجز شاليه',

    /* ── Back to top ── */
    'back.top': 'للأعلى'
  },

  en: {
    /* ── Brand ── */
    'brand.name':    'Luxury Chalets',
    'brand.tagline': 'شاليهات الفخامة',

    /* ── Nav ── */
    'nav.home':     'Home',
    'nav.chalets':  'Our Chalets',
    'nav.gallery':  'Gallery',
    'nav.about':    'About',
    'nav.contact':  'Contact',
    'nav.book':     'Book Now',

    /* ── Hero ── */
    'hero.badge':     'Luxury Stay Experience',
    'hero.title1':    'Where Luxury',
    'hero.title2':    'Begins',
    'hero.subtitle':  'Exceptional chalets in the finest locations across Saudi Arabia — for family gatherings, special occasions, and your luxurious relaxation',
    'hero.cta1':      'Explore Chalets',
    'hero.cta2':      'Book via WhatsApp',
    'hero.scroll':    'Scroll',

    /* ── Trust Bar ── */
    'trust.pool':     'Private Pools',
    'trust.privacy':  'Total Privacy',
    'trust.service':  'Service 24/7',
    'trust.location': 'Prime Locations',

    /* ── About Intro ── */
    'about.label':    'About Us',
    'about.title':    'A Stay Experience',
    'about.title2':   'Worth Living',
    'about.text':     'We specialize in providing the finest luxury chalets in Saudi Arabia. For over 8 years we\'ve been crafting unforgettable stays for families and special occasions. Every chalet carries a unique signature of exceptional design and service.',
    'about.years':    'Years Experience',
    'about.cta':      'Learn More',

    /* ── Featured ── */
    'featured.label':    'Our Finest Selection',
    'featured.title1':   'Our Featured',
    'featured.title2':   'Chalets',
    'featured.subtitle': 'Discover our curated collection of luxury chalets in Saudi Arabia\'s finest locations',
    'featured.viewAll':  'View All',
    'card.night':        '/ Night',
    'card.details':      'Details',
    'card.whatsapp':     'Book WhatsApp',
    'card.persons':      'Persons',
    'card.rooms':        'Rooms',

    /* ── Features ── */
    'features.label':    'Why Choose Us',
    'features.title1':   'We Offer More',
    'features.title2':   'Than Just a Stay',
    'features.subtitle': 'Every detail in our chalets is designed to give you an exceptional, unforgettable experience',

    /* ── Stats ── */
    'stats.chalets':     'Luxury Chalets',
    'stats.clients':     'Happy Clients',
    'stats.years':       'Years Experience',
    'stats.rating':      'Average Rating',

    /* ── Testimonials ── */
    'testimonials.label':    'Client Reviews',
    'testimonials.title1':   'What Our',
    'testimonials.title2':   'Guests Say',
    'testimonials.subtitle': 'Real experiences from clients who trust us',

    /* ── CTA ── */
    'cta.title1':    'Ready for a True',
    'cta.title2':    'Luxury Experience?',
    'cta.subtitle':  'Contact us now via WhatsApp and book your perfect chalet — instant reply and your happiness is our priority',
    'cta.btn1':      'Book via WhatsApp',
    'cta.btn2':      'Browse Chalets',

    /* ── Footer ── */
    'footer.desc':      'We provide the finest chalets in Saudi Arabia for your gatherings and special occasions with exceptional 24/7 service.',
    'footer.links':     'Quick Links',
    'footer.services':  'Our Services',
    'footer.contact':   'Contact',
    'footer.copyright': '© 2024 Luxury Chalets. All rights reserved.',
    'footer.home':      'Home',
    'footer.chalets':   'Our Chalets',
    'footer.gallery':   'Gallery',
    'footer.about':     'About',
    'footer.contactPage': 'Contact Us',
    'footer.luxury':    'Luxury Chalets',
    'footer.events':    'Special Events',
    'footer.weddings':  'Weddings & Engagements',
    'footer.family':    'Family Gatherings',
    'footer.phone':     '+966 59 980 4296',
    'footer.email':     'info@luxury-chalets.sa',
    'footer.address':   'Riyadh, Saudi Arabia',

    /* ── Chalets Page ── */
    'chalets.title':     'Our Luxury Chalets',
    'chalets.subtitle':  'Discover our full collection of chalets in the finest Saudi locations',
    'filter.all':        'All',
    'filter.riyadh':     'Riyadh',
    'filter.jeddah':     'Jeddah',
    'filter.taif':       'Taif',
    'filter.abha':       'Abha',
    'filter.madinah':    'Madinah',
    'filter.luxury':     'Luxury',
    'filter.beach':      'Beachfront',
    'filter.mountain':   'Mountain',
    'filter.family':     'Family',
    'filter.label':      'Filter:',
    'filter.city':       'City:',
    'filter.type':       'Type:',
    'no.results':        'No results. Try another filter.',

    /* ── Chalet Details ── */
    'details.back':       'Back',
    'details.gallery':    'Photo Gallery',
    'details.about':      'About the Chalet',
    'details.amenities':  'Amenities & Services',
    'details.location':   'Location',
    'details.map':        'Location on Map',
    'details.mapNote':    'Contact us for the detailed location',
    'book.title':         'Book Your Chalet',
    'book.price':         'SAR / Night',
    'book.now':           'Book Now via WhatsApp',
    'book.call':          'Call Us',
    'book.includes':      'Includes:',
    'book.i1':            'Chalet preparation 2 hours before arrival',
    'book.i2':            'Guest assistance around the clock',
    'book.i3':            'Daily cleaning on request',
    'specs.capacity':     'Capacity',
    'specs.bedrooms':     'Bedrooms',
    'specs.bathrooms':    'Bathrooms',
    'specs.area':         'Area',

    /* ── About Page ── */
    'about.page.title':     'Our Story',
    'about.page.subtitle':  'A journey from passion to luxury',
    'about.story.label':    'Our Story',
    'about.story.title':    'We Started with a Dream That Became Reality',
    'about.story.p1':       'In 2016, we launched with one chalet in Riyadh and a grand dream — to give our guests a stay experience that exceeds their expectations in design, cleanliness, service, and privacy.',
    'about.story.p2':       'Today, we proudly operate a network of over 25 luxury chalets in five Saudi cities, with over 1,500 happy families trusting us for their finest occasions and leisure time.',
    'about.story.p3':       'Our secret to success is simple: we treat every guest as if they\'re the first, and care about every detail as if it\'s the most important.',
    'about.mission.label':  'Vision & Mission',
    'about.vision.title':   'Vision',
    'about.vision.text':    'To be the first choice for Saudi families seeking a luxury and safe chalet experience.',
    'about.mission.title':  'Mission',
    'about.mission.text':   'Delivering hotel-standard chalets with home privacy, competitive pricing, and exceptional service.',
    'about.values.title':   'Values',
    'about.values.text':    'Integrity, quality, privacy, and attention to every detail of your experience.',
    'about.team.label':     'Our Team',
    'about.team.title':     'A Team of Professionals',

    /* ── Gallery Page ── */
    'gallery.title':    'Photo Gallery',
    'gallery.subtitle': 'Real shots from our chalets',
    'gallery.all':      'All',
    'gallery.pools':    'Pools',
    'gallery.outdoor':  'Outdoor',
    'gallery.indoor':   'Indoor',
    'gallery.night':    'Night',

    /* ── Contact Page ── */
    'contact.title':     'Contact Us',
    'contact.subtitle':  'We\'re here to help you choose your perfect chalet',
    'contact.wa.title':  'Instant Contact via WhatsApp',
    'contact.wa.desc':   'The fastest way to reach us — instant reply around the clock',
    'contact.wa.btn':    'Start WhatsApp Chat',
    'form.title':        'Send Us a Message',
    'form.name':         'Your Name',
    'form.phone':        'Mobile Number',
    'form.city':         'Preferred City',
    'form.date':         'Desired Booking Date',
    'form.message':      'Your Message',
    'form.submit':       'Send Message',
    'form.success':      'Your message was sent successfully! We\'ll contact you soon.',
    'form.error.name':   'Name is required',
    'form.error.phone':  'Mobile number is required',
    'form.error.msg':    'Message is required',
    'form.placeholder.name':    'Enter your full name',
    'form.placeholder.phone':   '+966 5XX XXX XXXX',
    'form.placeholder.message': 'Tell us about your booking request...',
    'contact.info.phone':   '+966 59 980 4296',
    'contact.info.email':   'info@luxury-chalets.sa',
    'contact.info.address': 'Riyadh, Saudi Arabia',
    'contact.info.hours':   '24 hours, 7 days',
    'contact.map.title':    'Our Location',

    /* ── WhatsApp ── */
    'wa.tooltip':        'Contact Us',
    'wa.default.msg':    'Hello, I\'d like to inquire about booking a chalet',

    /* ── Back to top ── */
    'back.top': 'Top'
  }
};

/* ════════════════════════════════════
   I18N ENGINE
   ════════════════════════════════════ */
const i18n = {
  currentLang: 'ar',

  init() {
    const saved = localStorage.getItem('lang') || 'ar';
    this.setLang(saved, true);
  },

  t(key) {
    return translations[this.currentLang][key] || translations['ar'][key] || key;
  },

  setLang(lang, silent = false) {
    this.currentLang = lang;
    localStorage.setItem('lang', lang);

    /* اتجاه الصفحة */
    document.documentElement.lang = lang;
    document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.setAttribute('data-lang', lang);

    /* ترجمة كل العناصر التي عليها data-i18n */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);

      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    /* title الصفحة */
    const titleEl = document.querySelector('[data-i18n-title]');
    if (titleEl) {
      document.title = titleEl.getAttribute('data-i18n-title-' + lang) || document.title;
    }

    /* تحديث أزرار اللغة */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    /* إطلاق حدث للأكواد الأخرى */
    if (!silent) {
      document.dispatchEvent(new CustomEvent('langChanged', { detail: { lang } }));
    }
  },

  toggle() {
    this.setLang(this.currentLang === 'ar' ? 'en' : 'ar');
  }
};

/* تهيئة عند التحميل */
document.addEventListener('DOMContentLoaded', () => {
  i18n.init();

  /* أزرار تبديل اللغة */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => i18n.setLang(btn.dataset.lang));
  });
});
