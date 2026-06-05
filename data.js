/* ============================================================
   DATA.JS — بيانات الشاليهات | Chalets Data
   ============================================================ */

const CHALETS_DATA = [
  {
    id: 1,
    slug: 'royal-oasis',
    nameAr: 'واحة الملوك',
    nameEn: 'Royal Oasis',
    locationAr: 'الرياض — حي الياسمين',
    locationEn: 'Riyadh — Al Yasmin',
    cityAr: 'الرياض',
    cityEn: 'Riyadh',
    category: 'luxury',
    pricePerNight: 2800,
    rating: 4.9,
    reviewCount: 87,
    capacity: 20,
    bedrooms: 6,
    bathrooms: 5,
    area: 1200,
    featured: true,
    badge: { ar: 'الأكثر طلباً', en: 'Most Requested' },
    descriptionAr: 'تجربة إقامة استثنائية في قلب الرياض. واحة الملوك شاليه فاخر يجمع بين الهندسة المعمارية العصرية والإحساس الدافئ بالمنزل. مسبح خاص ساخن، جلسات خارجية فاخرة، وإطلالات بانورامية على المدينة تجعلها الخيار الأمثل للمناسبات والاحتفالات العائلية.',
    descriptionEn: 'An exceptional stay experience in the heart of Riyadh. Royal Oasis is a luxury chalet that blends modern architecture with warm home comfort. Private heated pool, lavish outdoor seating, and panoramic city views make it the ideal choice for occasions and family celebrations.',
    amenities: [
      { icon: 'pool', labelAr: 'مسبح خاص', labelEn: 'Private Pool' },
      { icon: 'wifi', labelAr: 'واي فاي فائق', labelEn: 'Super WiFi' },
      { icon: 'bbq', labelAr: 'مشواة فاخرة', labelEn: 'Luxury BBQ' },
      { icon: 'parking', labelAr: 'مواقف خاصة', labelEn: 'Private Parking' },
      { icon: 'cinema', labelAr: 'سينما خاصة', labelEn: 'Home Cinema' },
      { icon: 'kitchen', labelAr: 'مطبخ مجهّز', labelEn: 'Full Kitchen' },
      { icon: 'security', labelAr: 'أمن 24 ساعة', labelEn: '24h Security' },
      { icon: 'games', labelAr: 'غرفة ألعاب', labelEn: 'Games Room' },
      { icon: 'ac', labelAr: 'تكييف مركزي', labelEn: 'Central AC' }
    ],
    images: [
      'https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?w=1200&q=85&auto=format',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&auto=format',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80&auto=format',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80&auto=format'
    ]
  },
  {
    id: 2,
    slug: 'palm-retreat',
    nameAr: 'منتجع النخيل',
    nameEn: 'Palm Retreat',
    locationAr: 'جدة — الشاطئ الشمالي',
    locationEn: 'Jeddah — North Beach',
    cityAr: 'جدة',
    cityEn: 'Jeddah',
    category: 'beachfront',
    pricePerNight: 3500,
    rating: 4.8,
    reviewCount: 124,
    capacity: 25,
    bedrooms: 7,
    bathrooms: 6,
    area: 1500,
    featured: true,
    badge: { ar: 'على الشاطئ', en: 'Beachfront' },
    descriptionAr: 'حيث تلتقي الفخامة بزرقة البحر. منتجع النخيل شاليه ساحلي فريد يوفر إطلالات خلابة على البحر الأحمر وجلسات نخيلية تنقلك لأجواء استوائية ساحرة. المكان المثالي لتجمعات الأسرة والأعراس الفاخرة.',
    descriptionEn: 'Where luxury meets the blue sea. Palm Retreat is a unique coastal chalet offering breathtaking Red Sea views and palm settings that transport you to enchanting tropical atmospheres. The perfect venue for family gatherings and luxury weddings.',
    amenities: [
      { icon: 'pool', labelAr: 'مسبح لاينهائي', labelEn: 'Infinity Pool' },
      { icon: 'beach', labelAr: 'شاطئ خاص', labelEn: 'Private Beach' },
      { icon: 'wifi', labelAr: 'واي فاي فائق', labelEn: 'Super WiFi' },
      { icon: 'bbq', labelAr: 'منطقة شواء', labelEn: 'BBQ Area' },
      { icon: 'gym', labelAr: 'صالة رياضية', labelEn: 'Gym' },
      { icon: 'kitchen', labelAr: 'مطبخ مجهّز', labelEn: 'Full Kitchen' },
      { icon: 'jacuzzi', labelAr: 'جاكوزي', labelEn: 'Jacuzzi' },
      { icon: 'parking', labelAr: 'مواقف خاصة', labelEn: 'Private Parking' }
    ],
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=85&auto=format',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80&auto=format',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80&auto=format',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80&auto=format',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80&auto=format'
    ]
  },
  {
    id: 3,
    slug: 'taif-highland',
    nameAr: 'هايلاند الطائف',
    nameEn: 'Taif Highland',
    locationAr: 'الطائف — الهضبة',
    locationEn: 'Taif — Highland',
    cityAr: 'الطائف',
    cityEn: 'Taif',
    category: 'mountain',
    pricePerNight: 2200,
    rating: 4.9,
    reviewCount: 63,
    capacity: 16,
    bedrooms: 5,
    bathrooms: 4,
    area: 900,
    featured: true,
    badge: { ar: 'جبلي فريد', en: 'Mountain Gem' },
    descriptionAr: 'في عليا جبال الطائف حيث الهواء عطر والطبيعة خلابة، يقع هايلاند الطائف — تحفة معمارية ترحّب بك بجلسات خشبية أمام المدفأة وإطلالات بانورامية على وادي وج. التجربة المثالية للهروب من صخب المدن.',
    descriptionEn: 'In the heights of Taif mountains where air is perfumed and nature is breathtaking, sits Taif Highland — an architectural masterpiece welcoming you with wooden fireside seating and panoramic views over Wadi Waj. The perfect escape from city noise.',
    amenities: [
      { icon: 'pool', labelAr: 'مسبح مسقوف', labelEn: 'Covered Pool' },
      { icon: 'fireplace', labelAr: 'مدفأة حجرية', labelEn: 'Stone Fireplace' },
      { icon: 'wifi', labelAr: 'واي فاي', labelEn: 'WiFi' },
      { icon: 'bbq', labelAr: 'شواء خارجي', labelEn: 'Outdoor BBQ' },
      { icon: 'garden', labelAr: 'حديقة وردية', labelEn: 'Rose Garden' },
      { icon: 'kitchen', labelAr: 'مطبخ مجهّز', labelEn: 'Full Kitchen' },
      { icon: 'hiking', labelAr: 'مسارات مشي', labelEn: 'Hiking Trails' }
    ],
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=85&auto=format',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80&auto=format',
      'https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=800&q=80&auto=format',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80&auto=format',
      'https://images.unsplash.com/photo-1561501878-aabd62634533?w=800&q=80&auto=format'
    ]
  },
  {
    id: 4,
    slug: 'abha-clouds',
    nameAr: 'شاليه السحاب',
    nameEn: 'Abha Clouds',
    locationAr: 'أبها — جبال الحدة',
    locationEn: 'Abha — Al Huda Mountains',
    cityAr: 'أبها',
    cityEn: 'Abha',
    category: 'mountain',
    pricePerNight: 1900,
    rating: 4.7,
    reviewCount: 95,
    capacity: 18,
    bedrooms: 5,
    bathrooms: 4,
    area: 850,
    featured: false,
    badge: null,
    descriptionAr: 'فوق السحاب حرفياً. شاليه السحاب في قلب جبال أبها العسيرية يقدم تجربة فريدة من نوعها: ضباب الصباح يلامس النوافذ، وهواء نقي منعش، وطبيعة خضراء تمتد للأفق. المكان الذي تتحول فيه العطلة إلى ذكرى لا تُنسى.',
    descriptionEn: "Literally above the clouds. Abha Clouds chalet in the heart of Asir mountains offers a unique experience: morning mist touching the windows, fresh clean air, and green nature extending to the horizon. The place where a vacation becomes an unforgettable memory.",
    amenities: [
      { icon: 'pool', labelAr: 'مسبح خاص', labelEn: 'Private Pool' },
      { icon: 'fireplace', labelAr: 'مدفأة', labelEn: 'Fireplace' },
      { icon: 'wifi', labelAr: 'واي فاي', labelEn: 'WiFi' },
      { icon: 'garden', labelAr: 'حديقة', labelEn: 'Garden' },
      { icon: 'kitchen', labelAr: 'مطبخ مجهّز', labelEn: 'Full Kitchen' },
      { icon: 'bbq', labelAr: 'شواء', labelEn: 'BBQ' }
    ],
    images: [
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=85&auto=format',
      'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&q=80&auto=format',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80&auto=format',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80&auto=format'
    ]
  },
  {
    id: 5,
    slug: 'desert-rose',
    nameAr: 'وردة الصحراء',
    nameEn: 'Desert Rose',
    locationAr: 'الرياض — الدرعية',
    locationEn: 'Riyadh — Diriyah',
    cityAr: 'الرياض',
    cityEn: 'Riyadh',
    category: 'luxury',
    pricePerNight: 3200,
    rating: 4.8,
    reviewCount: 78,
    capacity: 22,
    bedrooms: 6,
    bathrooms: 5,
    area: 1100,
    featured: false,
    badge: { ar: 'جديد', en: 'New' },
    descriptionAr: 'مستوحى من جمال الصحراء العربية، وردة الصحراء شاليه فريد يجمع التصميم النجدي الأصيل والمرافق العصرية الفاخرة. جلسات مكشوفة تحت نجوم الصحراء، وديكور يعكس أصالة الحضارة العربية بأسلوب معاصر راقٍ.',
    descriptionEn: 'Inspired by the beauty of the Arabian desert, Desert Rose is a unique chalet combining authentic Najdi design with modern luxury amenities. Open seating under desert stars, and decor reflecting Arab civilization authenticity in a contemporary refined style.',
    amenities: [
      { icon: 'pool', labelAr: 'مسبح صحراوي', labelEn: 'Desert Pool' },
      { icon: 'firepit', labelAr: 'حفرة نار', labelEn: 'Fire Pit' },
      { icon: 'wifi', labelAr: 'واي فاي فائق', labelEn: 'Super WiFi' },
      { icon: 'bbq', labelAr: 'مشواة', labelEn: 'BBQ' },
      { icon: 'kitchen', labelAr: 'مطبخ مجهّز', labelEn: 'Full Kitchen' },
      { icon: 'parking', labelAr: 'مواقف', labelEn: 'Parking' },
      { icon: 'security', labelAr: 'حراسة', labelEn: 'Security' },
      { icon: 'cinema', labelAr: 'سينما خاصة', labelEn: 'Cinema' }
    ],
    images: [
      'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=1200&q=85&auto=format',
      'https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=800&q=80&auto=format',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80&auto=format',
      'https://images.unsplash.com/photo-1602343168117-bb8ced3d3e4f?w=800&q=80&auto=format'
    ]
  },
  {
    id: 6,
    slug: 'marina-villa',
    nameAr: 'فيلا المارينا',
    nameEn: 'Marina Villa',
    locationAr: 'جدة — المارينا',
    locationEn: 'Jeddah — Marina',
    cityAr: 'جدة',
    cityEn: 'Jeddah',
    category: 'beachfront',
    pricePerNight: 2600,
    rating: 4.6,
    reviewCount: 112,
    capacity: 20,
    bedrooms: 5,
    bathrooms: 4,
    area: 950,
    featured: false,
    badge: null,
    descriptionAr: 'على ضفاف مارينا جدة، تقع فيلا المارينا بإطلالاتها الفاخرة على الميناء والمراسي. تصميم معاصر، مسبح على السطح، وجلسات بحرية تجعلها وجهة مثالية للعائلات الباحثة عن الرقي والخصوصية.',
    descriptionEn: 'On the shores of Jeddah Marina, sits Marina Villa with its luxury views over the harbor and marinas. Contemporary design, rooftop pool, and seaside seating make it an ideal destination for families seeking refinement and privacy.',
    amenities: [
      { icon: 'pool', labelAr: 'مسبح سطح', labelEn: 'Rooftop Pool' },
      { icon: 'wifi', labelAr: 'واي فاي', labelEn: 'WiFi' },
      { icon: 'bbq', labelAr: 'شواء', labelEn: 'BBQ' },
      { icon: 'gym', labelAr: 'صالة رياضية', labelEn: 'Gym' },
      { icon: 'kitchen', labelAr: 'مطبخ مجهّز', labelEn: 'Full Kitchen' },
      { icon: 'jacuzzi', labelAr: 'جاكوزي', labelEn: 'Jacuzzi' },
      { icon: 'parking', labelAr: 'مواقف', labelEn: 'Parking' }
    ],
    images: [
      'https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?w=1200&q=85&auto=format',
      'https://images.unsplash.com/photo-1574643156929-51fa098b0394?w=800&q=80&auto=format',
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80&auto=format',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80&auto=format'
    ]
  },
  {
    id: 7,
    slug: 'golden-valley',
    nameAr: 'وادي الذهب',
    nameEn: 'Golden Valley',
    locationAr: 'المدينة المنورة — العريض',
    locationEn: 'Madinah — Al Urayd',
    cityAr: 'المدينة',
    cityEn: 'Madinah',
    category: 'luxury',
    pricePerNight: 2100,
    rating: 4.7,
    reviewCount: 54,
    capacity: 18,
    bedrooms: 5,
    bathrooms: 4,
    area: 880,
    featured: false,
    badge: null,
    descriptionAr: 'في المدينة المنورة المباركة، يقع وادي الذهب بين أشجار النخيل الباسقة وأرض الحجاز العريقة. بيئة هادئة وروحانية، مسبح خاص، وتصميم يعكس أصالة المدينة المنورة مع كل رفاهيات العصر الحديث.',
    descriptionEn: 'In the blessed city of Madinah, Golden Valley sits among tall palm trees and the ancient Hejaz land. A calm and spiritual environment, private pool, and design reflecting Madinah authenticity with all modern luxuries.',
    amenities: [
      { icon: 'pool', labelAr: 'مسبح خاص', labelEn: 'Private Pool' },
      { icon: 'garden', labelAr: 'حديقة نخيل', labelEn: 'Palm Garden' },
      { icon: 'wifi', labelAr: 'واي فاي', labelEn: 'WiFi' },
      { icon: 'bbq', labelAr: 'شواء', labelEn: 'BBQ' },
      { icon: 'kitchen', labelAr: 'مطبخ مجهّز', labelEn: 'Full Kitchen' },
      { icon: 'parking', labelAr: 'مواقف', labelEn: 'Parking' }
    ],
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=85&auto=format',
      'https://images.unsplash.com/photo-1560185127-6a21a4bf0e75?w=800&q=80&auto=format',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80&auto=format',
      'https://images.unsplash.com/photo-1573148195900-7845dcb9b127?w=800&q=80&auto=format'
    ]
  },
  {
    id: 8,
    slug: 'emerald-park',
    nameAr: 'حديقة الزمرد',
    nameEn: 'Emerald Park',
    locationAr: 'الرياض — حي القيروان',
    locationEn: 'Riyadh — Al Qairawan',
    cityAr: 'الرياض',
    cityEn: 'Riyadh',
    category: 'family',
    pricePerNight: 1700,
    rating: 4.6,
    reviewCount: 143,
    capacity: 30,
    bedrooms: 8,
    bathrooms: 6,
    area: 1300,
    featured: true,
    badge: { ar: 'عائلي مثالي', en: 'Family Perfect' },
    descriptionAr: 'الخيار العائلي الأمثل في الرياض. حديقة الزمرد تتميز بمساحات خضراء واسعة، ملاعب للأطفال، مسبحين منفصلين للرجال والنساء، وقاعة استقبال ضخمة. مثالية للمناسبات الكبيرة والتجمعات العائلية الممتدة.',
    descriptionEn: 'The ultimate family choice in Riyadh. Emerald Park features vast green spaces, children\'s playgrounds, two separate pools for men and women, and a large reception hall. Perfect for large occasions and extended family gatherings.',
    amenities: [
      { icon: 'pool', labelAr: 'مسبحان منفصلان', labelEn: 'Separate Pools' },
      { icon: 'playground', labelAr: 'ملعب أطفال', labelEn: 'Kids Playground' },
      { icon: 'wifi', labelAr: 'واي فاي', labelEn: 'WiFi' },
      { icon: 'bbq', labelAr: 'منطقة شواء', labelEn: 'BBQ Area' },
      { icon: 'hall', labelAr: 'قاعة استقبال', labelEn: 'Reception Hall' },
      { icon: 'kitchen', labelAr: 'مطبخ مجهّز', labelEn: 'Full Kitchen' },
      { icon: 'parking', labelAr: 'مواقف واسعة', labelEn: 'Wide Parking' },
      { icon: 'security', labelAr: 'حراسة', labelEn: 'Security' },
      { icon: 'games', labelAr: 'ألعاب', labelEn: 'Games Room' }
    ],
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85&auto=format',
      'https://images.unsplash.com/photo-1622015663084-307d19eabbbf?w=800&q=80&auto=format',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80&auto=format',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80&auto=format',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80&auto=format'
    ]
  }
];

/* بيانات الشهادات */
const TESTIMONIALS_DATA = [
  {
    nameAr: 'أبو فهد الغامدي',
    nameEn: 'Abu Fahad Al-Ghamdi',
    cityAr: 'الرياض',
    cityEn: 'Riyadh',
    rating: 5,
    textAr: 'تجربة استثنائية من كل النواحي. الشاليه كان بمستوى فندق خمس نجوم، النظافة لا مثيل لها، والمرافق كاملة. الخدمة كانت محترفة جداً وسريعة الاستجابة. سنكرر التجربة بإذن الله.',
    textEn: 'An exceptional experience in every way. The chalet was at a five-star hotel level, impeccable cleanliness, and full amenities. The service was very professional and responsive. We will definitely repeat the experience.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    chalet: 'Royal Oasis'
  },
  {
    nameAr: 'أم سارة المطيري',
    nameEn: 'Um Sarah Al-Mutairi',
    cityAr: 'جدة',
    cityEn: 'Jeddah',
    rating: 5,
    textAr: 'احجزنا لمناسبة خطوبة ابنتي وكانت الليلة رائعة بكل المقاييس. الديكور فخم جداً، المسبح كبير ونظيف، والجلسات الخارجية مريحة جداً. كل الضيوف أعجبتهم وطلبوا رقم التواصل.',
    textEn: "We booked for my daughter's engagement and the night was wonderful by all standards. The decor is very luxurious, the pool is large and clean, and the outdoor seating is very comfortable. All guests were impressed and asked for contact details.",
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80',
    chalet: 'Emerald Park'
  },
  {
    nameAr: 'محمد العتيبي',
    nameEn: 'Mohammed Al-Otaibi',
    cityAr: 'الطائف',
    cityEn: 'Taif',
    rating: 5,
    textAr: 'شاليه هايلاند الطائف تجربة لا تتكرر. الطبيعة الجبلية والهواء المنعش والمدفأة في الليل — مزيج مثالي للراحة. أنصح به كل من يبحث عن الهدوء والخصوصية.',
    textEn: 'Taif Highland chalet is an irreplaceable experience. The mountain nature, fresh air, and fireplace at night — a perfect mix for relaxation. I recommend it to everyone seeking tranquility and privacy.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    chalet: 'Taif Highland'
  }
];

/* إحصائيات الموقع */
const STATS_DATA = [
  { number: 25,  suffix: '+', labelAr: 'شاليه فاخر',   labelEn: 'Luxury Chalets' },
  { number: 1500, suffix: '+', labelAr: 'عميل سعيد',   labelEn: 'Happy Clients' },
  { number: 8,   suffix: '',  labelAr: 'سنوات خبرة',   labelEn: 'Years Experience' },
  { number: 4.9, suffix: '★', labelAr: 'متوسط التقييم', labelEn: 'Average Rating' }
];

/* مزايا الموقع */
const FEATURES_DATA = [
  {
    icon: 'shield',
    titleAr: 'خصوصية تامة',
    titleEn: 'Total Privacy',
    descAr: 'كل شاليه بوابة مستقلة وأمن خاص. إقامتك محاطة بالخصوصية الكاملة بعيداً عن أي إزعاج.',
    descEn: 'Each chalet has independent gate and private security. Your stay is surrounded by complete privacy away from any disturbance.'
  },
  {
    icon: 'pool',
    titleAr: 'مسابح خاصة',
    titleEn: 'Private Pools',
    descAr: 'مسبح خاص دافئ ومعالج كيميائياً بشكل يومي. لأنك تستحق الجودة في كل تفصيلة.',
    descEn: 'Private warm pool chemically treated daily. Because you deserve quality in every detail.'
  },
  {
    icon: 'clock',
    titleAr: 'خدمة 24/7',
    titleEn: 'Service 24/7',
    descAr: 'فريقنا متاح على مدار الساعة لضمان راحتك. أي طلب، أي وقت، نحن هنا.',
    descEn: 'Our team is available around the clock to ensure your comfort. Any request, any time, we\'re here.'
  },
  {
    icon: 'map',
    titleAr: 'مواقع مميزة',
    titleEn: 'Prime Locations',
    descAr: 'شاليهات في أفضل مواقع المملكة: الرياض، جدة، الطائف، أبها والمدينة المنورة.',
    descEn: 'Chalets in the best locations in Saudi Arabia: Riyadh, Jeddah, Taif, Abha and Madinah.'
  },
  {
    icon: 'clean',
    titleAr: 'نظافة استثنائية',
    titleEn: 'Exceptional Cleanliness',
    descAr: 'فريق تنظيف متخصص يعمل قبل وبعد كل إقامة وفق معايير فندقية صارمة.',
    descEn: 'Specialized cleaning team works before and after every stay according to strict hotel standards.'
  },
  {
    icon: 'star',
    titleAr: 'تجهيزات فاخرة',
    titleEn: 'Luxury Furnishing',
    descAr: 'أثاث مستورد، أجهزة حديثة، ومطابخ مجهزة بأفضل الماركات العالمية.',
    descEn: 'Imported furniture, modern appliances, and kitchens equipped with the best international brands.'
  }
];

/* تصدير البيانات */
if (typeof module !== 'undefined') {
  module.exports = { CHALETS_DATA, TESTIMONIALS_DATA, STATS_DATA, FEATURES_DATA };
}
