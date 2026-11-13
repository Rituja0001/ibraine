export const CATEGORIES = [
  { id: 'all', label: 'All Projects', count: 34 },
  { id: 'ecommerce', label: 'E-Commerce', count: 14 },
  { id: 'nonecommerce', label: 'Non-E-Commerce', count: 14 },
  { id: 'webapp', label: 'Web Application', count: 3 },
  { id: 'mobileapp', label: 'Mobile Application', count: 3 }
];

export const PROJECTS_DATA = [
  // ==========================================
  // E-COMMERCE (14 PROJECTS)
  // ==========================================
   {
    id: 'motoearth',
    name: 'Motoearth',
    domain: 'motoearth.com',
    url: 'https://motoearth.com/',
    category: 'ecommerce',
    niche: 'Motorcycle Gear & Accessories',
    description: 'Adrenaline-fueled e-commerce portal engineered for riders, offering protective touring armor, helmets, and moto gear.',
    image: '/portfolio-img/motoearth.webp',
    tags: ['Rider Gear', 'E-Commerce', 'Brand Revamp'],
    results: '+190% Direct Conversions'
  },
  {
    id: 'futurz4x4',
    name: 'Futurz 4x4',
    domain: 'futurz4x4.in',
    url: 'https://futurz4x4.in/',
    category: 'ecommerce',
    niche: 'Off-Road Vehicle Accessories',
    description: 'High-performance automotive e-commerce catalog featuring bespoke 4x4 overland fitment guides, heavy-duty parts, and accessories.',
    image: '/portfolio-img/futurz4x4.webp',
    tags: ['Automotive', 'Custom Catalog', 'B2C E-Commerce'],
    results: '3.8x Monthly Inquiries'
  },
  {
    id: 'alfaappliances',
    name: 'Alfa Appliances',
    domain: 'alfaappliances.store',
    url: 'https://alfa-appliance.vercel.app/',
    category: 'ecommerce',
    niche: 'Kitchen & Home Appliances',
    description: 'Modern digital storefront for commercial and domestic kitchen appliances with warranty registrations and bundle discounts.',
    image: '/portfolio-img/appliance.webp',
    tags: ['Home Appliances', 'E-Commerce', 'WooCommerce'],
    results: '+185% Repeat Purchases'
  },
  {
    id: 'artigenius',
    name: 'Artigenius',
    domain: 'artigenius.com',
    url: 'https://artigenius.com/',
    category: 'ecommerce',
    niche: 'Handcrafted Art & Luxury Decor',
    description: 'Curated artisanal marketplace showcasing one-of-a-kind sculptures, bespoke canvas art, and global artisan shipping.',
    image: '/portfolio-img/artigenius.webp',
    tags: ['Art & Decor', 'Luxury Brand', 'Marketplace'],
    results: '4.2x Organic Footprint'
  },
  {
    id: 'shreeheritagejewels',
    name: 'Shree Heritage Jewels',
    domain: 'shreeheritagejewels.in',
    url: 'https://shreeheritagejewels.in/',
    category: 'ecommerce',
    niche: 'Heritage Fine Jewellery',
    description: 'Opulent jewelry digital showcase featuring high-carat certified heritage ornaments, virtual try-ons, and secure concierge buying.',
    image: '/portfolio-img/shreeheritagejewels.webp',
    tags: ['Fine Jewellery', 'Luxury Experience', 'Custom UI'],
    results: '+310% High-Ticket Sales'
  },
  {
    id: 'pheromones',
    name: 'Pheromones.com',
    domain: 'pheromones.com',
    url: 'https://pheromones.com/',
    category: 'ecommerce',
    niche: 'Perfume & Fragrance E-Commerce',
    description: 'Direct-to-consumer luxury fragrance storefront with conversion-optimized funnel, global checkout, and scent profiling.',
    image: '/portfolio-img/pheromones.webp',
    tags: ['E-Commerce', 'Shopify Plus', 'Conversion UX'],
    results: '+240% Checkout Completion'
  },
  {
    id: 'laumieregourmet',
    name: 'Laumière Gourmet Fruits',
    domain: 'laumieregourmet.com',
    url: 'https://laumieregourmet.com/',
    category: 'ecommerce',
    niche: 'Luxury Gourmet Food Gifting',
    description: 'Prestigious dried fruit and confection gift collections tailored for corporate gifting, holidays, and bespoke luxury packages.',
    image: '/portfolio-img/laumieregourmet.webp',
    tags: ['Gourmet Gifting', 'Shopify Plus', 'Global Commerce'],
    results: '5.4x Holiday Peak ROAS'
  },
  {
    id: 'papita',
    name: 'Papita',
    domain: 'papita.co',
    url: 'https://papita.co/',
    category: 'ecommerce',
    niche: 'Baby & Maternal Care Essentials',
    description: 'Gentle, certified organic maternity and newborn products built on a rapid, mobile-first subscription e-commerce experience.',
    image: '/portfolio-img/papita.webp',
    tags: ['Mother & Baby', 'Mobile-First', 'Subscription'],
    results: '+175% Cart Value'
  },
  {
    id: 'meditackits',
    name: 'Meditac Kits',
    domain: 'meditackits.com',
    url: 'https://meditackits.com/',
    category: 'ecommerce',
    niche: 'Tactical Trauma & Medical Gear',
    description: 'Mission-critical tactical medical kits, emergency trauma packs, and EMT response supplies with rigorous compliance.',
    image: '/portfolio-img/meditackits.webp',
    tags: ['Tactical Gear', 'Medical Supplies', 'E-Commerce'],
    results: '2.8x B2B Volume'
  },
  {
    id: 'amorebeds',
    name: 'Amore Beds',
    domain: 'amorebeds.com',
    url: '#',
    category: 'ecommerce',
    niche: 'Ergonomic Sleep & Mattresses',
    description: 'Direct-to-consumer hybrid mattress brand platform featuring custom firmness customizers, split-king setups, and 100-night trials.',
    image: '/portfolio-img/amorebeds.webp',
    tags: ['Sleep Tech', 'Interactive Customizer', 'E-Commerce'],
    results: '+260% Revenue Growth'
  },
  {
    id: 'shopjbr',
    name: 'Shop JBR',
    domain: 'shopjbr.com',
    url: 'https://shopjbr.com/',
    category: 'ecommerce',
    niche: 'Fashion & Lifestyle Apparel',
    description: 'Trend-setting contemporary fashion destination with automated Instagram shoppable feeds, size advisors, and seamless checkout.',
    image: '/portfolio-img/shopjbr.webp',
    tags: ['Apparel', 'Fast Fashion', 'Social Commerce'],
    results: '+220% Mobile Orders'
  },
  {
    id: 'purenutrition',
    name: 'Pure Nutrition',
    domain: 'purenutrition.in',
    url: 'https://purenutrition.in/',
    category: 'ecommerce',
    niche: 'Nutraceuticals & Wellness',
    description: 'High-growth health and dietary supplement store featuring plant-based vitamins, herbal vitality blends, and doctor consultations.',
    image: '/portfolio-img/purenutrition.webp',
    tags: ['Health & Wellness', 'Supplements', 'High-Scale DTC'],
    results: '+340% Monthly GMV'
  },
  {
    id: 'bragpacker',
    name: 'Bragpacker',
    domain: 'bragpacker.com',
    url: 'https://bragpacker.com/',
    category: 'ecommerce',
    niche: 'Travel Gear Rental & Retail',
    description: 'Dynamic hybrid rental & retail platform for premium cameras, luggage, and camping equipment with smart date-picker reservations.',
    image: '/portfolio-img/bragpacker.webp',
    tags: ['Travel Gear', 'Rental Platform', 'E-Commerce'],
    results: '4.6x Booking Retention'
  },
  {
    id: 'audio-technica',
    name: 'Audio-Technica',
    domain: 'audio-technica.co.in',
    url: 'https://audio-technica.co.in/',
    category: 'ecommerce',
    niche: 'Audio & Studio Sound Equipment',
    description: "Official Indian e-commerce store for Audio-Technica's premium headphones, microphones and audio equipment.",
    image: '/portfolio-img/audio-technica.webp',
    tags: ['E-Commerce', 'Audio Gear', 'DTC Commerce'],
    results: '+195% Online Revenue'
  },

  // ==========================================
  // NON-E-COMMERCE (14 PROJECTS)
  // ==========================================
  {
    id: 'theclothingrental',
    name: 'The Clothing Rental',
    domain: 'theclothingrental.com',
    url: 'https://theclothingrental.com/',
    category: 'nonecommerce',
    niche: 'Luxury Designer Fashion Rental',
    description: 'Exclusive designer wardrobe curation for film productions, bridal shoots, and celebrity stylists in Mumbai and Delhi.',
    image: '/portfolio-img/theclothingrental.webp',
    tags: ['Fashion Rental', 'Lead Gen', 'Brand Identity'],
    results: '+290% Fitting Bookings'
  },
  {
    id: 'maheksatelier',
    name: 'Mahek’s Atelier',
    domain: 'maheksatelier.com',
    url: 'https://maheksatelier.com/',
    category: 'nonecommerce',
    niche: 'Culinary Arts Academy',
    description: 'Premier Mumbai culinary academy portal with scheduled masterclasses, chef certification courses, and experiential workshops.',
    image: '/portfolio-img/maheksatelier.webp',
    tags: ['Culinary Arts', 'Workshop Booking', 'Education'],
    results: '+330% Workshop Registrations'
  },
  {
    id: 'pugmarks123',
    name: 'Pugmarks Eco-Tours',
    domain: 'pugmarks123.com',
    url: 'https://pugmarks123.com/',
    category: 'nonecommerce',
    niche: 'Youth Adventure & Wildlife Camps',
    description: 'Adventure travel and wildlife expedition booking platform designed for young campers, parents, and school expeditions.',
    image: '/portfolio-img/pugmarks123.webp',
    tags: ['Adventure Travel', 'Camp Management', 'Family Travel'],
    results: '98% Season Capacity'
  },
  {
    id: 'bucketmylist',
    name: 'Bucket My List',
    domain: 'bucketmylist.holiday',
    url: 'https://bucketmylist.holiday/',
    category: 'nonecommerce',
    niche: 'Bespoke International Vacations',
    description: 'Tailored luxury itineraries, private transfers, and curated experiential getaways for discerning world travelers.',
    image: '/portfolio-img/bucketmylist.webp',
    tags: ['Luxury Travel', 'Custom Itinerary', 'Inquiry Engine'],
    results: '3.4x High-Value Leads'
  },
  {
    id: 'leakendseals',
    name: 'Leak End Seals',
    domain: 'leakendseals.ae',
    url: 'https://leakendseals.ae/',
    category: 'nonecommerce',
    niche: 'Industrial Fluid Sealing Systems',
    description: 'UAE-headquartered engineering catalog of high-pressure industrial seals, gaskets, and mechanical fluid barriers.',
    image: '/portfolio-img/leakendseals.webp',
    tags: ['Industrial B2B', 'Engineering UAE', 'RFQ Engine'],
    results: '+165% Global RFQs'
  },
  {
    id: 'vastuenergetics',
    name: 'Vastu Energetics',
    domain: 'vastuenergetics.com',
    url: 'https://vastuenergetics.com/',
    category: 'nonecommerce',
    niche: 'Vedic Energy & Spatial Balancing',
    description: 'Comprehensive Vedic spatial consultancy portal offering scientific environmental surveys, geomancy, and space harmonic audits.',
    image: '/portfolio-img/vastuenergetics.webp',
    tags: ['Consulting', 'Energy Balancing', 'Appointment Booking'],
    results: '+280% Consultation Pipeline'
  },
  {
    id: 'dlokseals',
    name: 'D-Lok Seals',
    domain: 'dlokseals.com',
    url: 'https://dlokseals.com/',
    category: 'nonecommerce',
    niche: 'Heavy Mechanical Seals Manufacturing',
    description: 'Precision engineering showcase displaying mechanical seals, cartridge seals, and OEM equipment across pharmaceutical and chemical plants.',
    image: '/portfolio-img/dlokseals.webp',
    tags: ['Manufacturing', 'Engineering B2B', 'Technical Specs'],
    results: '2.5x Institutional Contracts'
  },
  {
    id: 'stratupassociate',
    name: 'Startup Associate',
    domain: 'stratupassociate.com',
    url: 'https://stratupassociate.com/',
    category: 'nonecommerce',
    niche: 'Corporate Structuring & M&A Advisory',
    description: 'Strategic advisory and corporate legal consulting firm portal for seed-to-scale startups, fundraising compliance, and M&A.',
    image: '/portfolio-img/stratupassociate.webp',
    tags: ['Legal Consulting', 'Startup Advisory', 'Corporate Law'],
    results: '+320% Retainer Engagements'
  },
  {
    id: 'vrudhilegal',
    name: 'Vrudhi Legal',
    domain: 'vrudhilegal.in',
    url: 'https://vrudhilegal.in/',
    category: 'nonecommerce',
    niche: 'Corporate Law & IP Litigation',
    description: 'Distinguished law chamber website focused on commercial disputes, intellectual property defense, and regulatory governance.',
    image: '/portfolio-img/vrudhilegal.webp',
    tags: ['Law Firm', 'Intellectual Property', 'Professional Services'],
    results: '+250% Institutional Reach'
  },
  {
    id: 'plusdental',
    name: 'Plus Dental Clinic',
    domain: 'plusdental.co.in',
    url: 'https://plusdental.co.in/',
    category: 'nonecommerce',
    niche: 'Multi-Specialty Dental Care',
    description: 'Patient-centric dental clinic web experience with doctor appointment scheduling, smile makeover case studies, and hygiene guides.',
    image: '/portfolio-img/plusdental.webp',
    tags: ['Healthcare', 'Dental Clinic', 'Doctor Booking'],
    results: '+380% Online Appointments'
  },
  {
    id: 'thedraftrack',
    name: 'The Draft Rack',
    domain: 'thedraftrack.com',
    url: 'https://thedraftrack.com/',
    category: 'nonecommerce',
    niche: 'Draft Beer Dispensing Systems',
    description: 'Hospitality engineering solutions for high-volume commercial draft beer dispensers, chilling towers, and custom bar fixtures.',
    image: '/portfolio-img/thedraftrack.webp',
    tags: ['Hospitality Tech', 'Commercial Bar', 'B2B Catalog'],
    results: '3.6x Commercial Bar Fitouts'
  },
  {
    id: 'operatingmedia',
    name: 'Operating Media',
    domain: 'operatingmedia.com',
    url: 'https://operatingmedia.com/',
    category: 'nonecommerce',
    niche: 'Digital Marketing Training Institute',
    description: 'Mumbai’s premier professional digital marketing training academy portal with interactive syllabus downloads and trial demo registrations.',
    image: '/portfolio-img/operatingmedia.webp',
    tags: ['EdTech', 'Career Training', 'Lead Generation'],
    results: '+410% Student Enrollments'
  },
  {
    id: 'boyenhaddin',
    name: 'Boyen Haddin',
    domain: 'boyenhaddin.com',
    url: 'https://boyenhaddin.com/',
    category: 'nonecommerce',
    niche: 'Bespoke Luxury Menswear & Couture',
    description: 'Brand website showcasing bespoke luxury fashion, tailored couture, and sartorial lifestyle collections.',
    image: '/portfolio-img/boyenhaddin.webp',
    tags: ['Luxury Fashion', 'Brand Identity', 'Bespoke Studio'],
    results: '3.2x Bespoke Consultations'
  },
  {
    id: 'chaturideas',
    name: 'Chatur Ideas',
    domain: 'chaturideas.com',
    url: 'https://www.chaturideas.com/',
    category: 'nonecommerce',
    niche: 'Startup Incubation & Angel Ecosystem',
    description: 'Entrepreneurship & startup enablement platform connecting innovators with mentorship, incubation, and angel investors.',
    image: '/portfolio-img/chaturideas.webp',
    tags: ['Venture Capital', 'Startup Platform', 'Mentorship'],
    results: '1,500+ Startups Incubated'
  },

  // ==========================================
  // WEB APPLICATION (3 PROJECTS)
  // ==========================================
  {
    id: 'startraack-webapp',
    name: 'Startraack',
    domain: 'startraack.com',
    url: 'https://startraack.com/',
    category: 'webapp',
    niche: 'Field Sales & Workforce SaaS',
    description: 'Field sales & workforce tracking platform — manage orders, distributors, team attendance and reports in real-time.',
    image: '/portfolio-img/startraack-webapp.webp',
    tags: ['SaaS Platform', 'Real-time Tracking', 'Enterprise'],
    results: '10k+ Daily Active Users'
  },
  {
    id: 'operatingmedia-webapp',
    name: 'Operating Media CRM',
    domain: 'operatingmedia.org',
    url: 'https://www.operatingmedia.org/',
    category: 'webapp',
    niche: 'Educational Staff & Student CRM',
    description: 'Educational CRM for managing staff and students with complete activity tracking and report generation.',
    image: '/portfolio-img/operatingmedia-webapp.webp',
    tags: ['Custom CRM', 'Education Portal', 'Staff Management'],
    results: '99.9% Workflow Automation'
  },
  {
    id: 'digitallearn-webapp',
    name: 'Digital Learn LMS',
    domain: 'digitallearn.operatingmedia.org',
    url: 'https://digitallearn.operatingmedia.org/',
    category: 'webapp',
    niche: 'E-Learning & Video Examination LMS',
    description: 'Learning Management System (LMS) for students — video lectures, notes & exams.',
    image: '/portfolio-img/digitallearn-webapp.webp',
    tags: ['LMS Platform', 'Video Lectures', 'Exam Engine'],
    results: '25,000+ Exam Sessions'
  },

  // ==========================================
  // MOBILE APPLICATION (3 PROJECTS)
  // ==========================================
  {
    id: 'artigenius-app',
    name: 'Artigenius App',
    domain: 'play.google.com',
    url: 'https://play.google.com/store/search?q=artigenius&c=apps&hl=en_IN',
    category: 'mobileapp',
    platform: 'playstore',
    niche: 'Art Marketplace Mobile App',
    description: 'Handcrafted luxury art & decor shopping app featuring augmented reality previews, curations, and 1-tap checkout.',
    image: '/portfolio-img/artigenius-app.webp',
    tags: ['Mobile App', 'Android', 'Google Play'],
    results: '4.8 ★ Star App Rating'
  },
  {
    id: 'startraack-app',
    name: 'Startraack Sales App',
    domain: 'play.google.com',
    url: 'https://play.google.com/store/apps/details?id=com.startraack&hl=en_IN',
    category: 'mobileapp',
    platform: 'playstore',
    niche: 'Field Sales & Attendance App',
    description: 'Field agent mobile tracking app with automated GPS check-ins, offline order booking, and beat management.',
    image: '/portfolio-img/startraack-app.webp',
    tags: ['Field Force App', 'GPS Check-in', 'Google Play'],
    results: '50k+ Android Downloads'
  },
  {
    id: 'operatingmedia-app',
    name: 'Operating Media App',
    domain: 'apps.apple.com',
    url: 'https://apps.apple.com/in/app/operating-media/id6469704941',
    category: 'mobileapp',
    platform: 'appstore',
    niche: 'Student Learning & Scheduling iOS App',
    description: 'Comprehensive student & faculty iOS mobile application for live class notifications, syllabus, and assessments.',
    image: '/portfolio-img/operatingmedia-app.webp',
    tags: ['iOS App', 'Apple App Store', 'Education'],
    results: '4.9 ★ iOS User Rating'
  }
];
