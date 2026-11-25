import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  Search,
  Sparkles,
  Share2,
  Code,
  BarChart3,
  PenTool,
  Palette,
  Check,
  X as XIcon,
  ChevronDown,
  Clock,
  Layers,
  AlertCircle,
  Globe,
  SlidersHorizontal,
  Zap,
  CheckCircle2,
  HelpCircle,
  Shield,
  FileCheck,
} from 'lucide-react';

import {
  PERFORMANCE_MARKETING_DATA,
  SEO_PACKAGES_DATA,
  GEO_PACKAGES_DATA,
  SOCIAL_MEDIA_DATA,
  WEBSITE_DEVELOPMENT_DATA,
  GA4_PACKAGES_DATA,
  BLOG_CONTENT_DATA,
  CREATIVE_COLLATERALS_DATA,
} from './commercialsData';

// EXACT 8 SERVICES EXTRACTED FROM EXCEL SHEET
const SERVICES_TABS = [
  {
    id: 'performance',
    num: '01',
    label: 'Performance Marketing',
    shortLabel: 'Performance Marketing',
    icon: TrendingUp,
    badge: 'Popular',
    desc: 'Ad Spend Tiers & 50+ Deliverables',
  },
  {
    id: 'seo',
    num: '02',
    label: 'SEO Packages',
    shortLabel: 'SEO Packages',
    icon: Search,
    badge: 'Core',
    desc: '15 to 100 Keywords Matrix',
  },
  {
    id: 'geo',
    num: '03',
    label: 'GEO / AI Search (AEO)',
    shortLabel: 'GEO / AI Search',
    icon: Sparkles,
    badge: 'AI Search',
    desc: 'ChatGPT & Gemini Rankings',
  },
  {
    id: 'smm',
    num: '04',
    label: 'Social Media Management',
    shortLabel: 'Social Media',
    icon: Share2,
    badge: 'Retainer',
    desc: 'AI Content & Quota Plans',
  },
  {
    id: 'webdev',
    num: '05',
    label: 'Website Development',
    shortLabel: 'Web Development',
    icon: Code,
    badge: 'One-Time',
    desc: 'WordPress, Ecom & Custom',
  },
  {
    id: 'ga4',
    num: '06',
    label: 'Google Analytics 4 (GA4)',
    shortLabel: 'Google Analytics 4',
    icon: BarChart3,
    badge: 'Tracking',
    desc: 'GA4 Setup & Custom Tracking',
  },
  {
    id: 'blog',
    num: '07',
    label: 'Blog & Content Marketing',
    shortLabel: 'Blog & Content',
    icon: PenTool,
    badge: 'Inbound',
    desc: 'Blog Setup & Weekly Posts',
  },
  {
    id: 'collaterals',
    num: '08',
    label: 'Creative Collaterals',
    shortLabel: 'Creative Assets',
    icon: Palette,
    badge: '24 Deliverables',
    desc: 'A La Carte Rate Card',
  },
];

// Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const renderPlatformIcon = (platform) => {
  switch (platform) {
    case 'Instagram':
      return (
        <div className="w-10 h-10 rounded-xl bg-pink-50 text-[#E1306C] flex items-center justify-center shrink-0 border border-pink-100 shadow-2xs">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </div>
      );
    case 'Facebook':
      return (
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1877F2] flex items-center justify-center shrink-0 border border-blue-100 shadow-2xs">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </div>
      );
    case 'LinkedIn':
      return (
        <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0A66C2] flex items-center justify-center shrink-0 border border-sky-100 shadow-2xs">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </div>
      );
    case 'YouTube':
      return (
        <div className="w-10 h-10 rounded-xl bg-red-50 text-[#FF0000] flex items-center justify-center shrink-0 border border-red-100 shadow-2xs">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </div>
      );
    case 'X (Twitter)':
      return (
        <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center shrink-0 border border-slate-300 shadow-2xs">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </div>
      );
    case 'Pinterest':
      return (
        <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#BD081C] flex items-center justify-center shrink-0 border border-rose-100 shadow-2xs">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.372 12-12 0-6.628-5.373-12-12-12z"/>
          </svg>
        </div>
      );
    default:
      return null;
  }
};

const CommercialsPage = () => {
  const [activeTab, setActiveTab] = useState('performance');
  const [collateralsFilter, setCollateralsFilter] = useState('all');
  const [collateralsSearch, setCollateralsSearch] = useState('');
  const [expandedDelivGroup, setExpandedDelivGroup] = useState('Campaign Setup');
  const [selectedWebPlan, setSelectedWebPlan] = useState('ecommerce');
  const [selectedSmmPackage, setSelectedSmmPackage] = useState('gold');
  const [openSmmFaq, setOpenSmmFaq] = useState(null);
  const [selectedSeoPackage, setSelectedSeoPackage] = useState('standard');
  const [seoCategoryFilter, setSeoCategoryFilter] = useState('all');
  const [selectedPerfTier, setSelectedPerfTier] = useState(1);
  const [selectedGeoPackage, setSelectedGeoPackage] = useState('gold');
  const [geoCategoryFilter, setGeoCategoryFilter] = useState('all');
  const [selectedGa4Package, setSelectedGa4Package] = useState('gold');

  useEffect(() => {
    document.title = 'Commercials & Deliverables Plans | iBraine Digital Marketing';
    window.scrollTo(0, 0);
  }, []);

  // Filtered Collaterals for Tab 8
  const filteredCollaterals = CREATIVE_COLLATERALS_DATA.categories.flatMap((cat) => {
    if (collateralsFilter === 'print' && !cat.name.includes('Marketing Collateral')) return [];
    if (collateralsFilter === 'digital' && !cat.name.includes('Digital Assets')) return [];
    return cat.items.filter((item) => {
      const q = collateralsSearch.toLowerCase();
      return item.item.toLowerCase().includes(q) || item.scope.toLowerCase().includes(q);
    });
  });

  // Partition the remaining 28 GEO deliverables into Tiered Scope (10) and Standard Protocols (18)
  const paidMediaCat = GEO_PACKAGES_DATA.categories.find(
    (c) => c.category === 'Paid Media / High-Authority AI Outreach'
  );
  const technicalCat = GEO_PACKAGES_DATA.categories.find(
    (c) => c.category === 'Technical SEO for AI Architecture'
  );
  const onPageCat = GEO_PACKAGES_DATA.categories.find(
    (c) => c.category === 'On-Page & Entity Optimization'
  );

  // 10 Scope-Differentiating Protocols (Silver: Targeted Pages | Gold/Plat/Tit: Entire Website)
  const geoScopeProtocols = [
    ...(technicalCat ? technicalCat.items.filter((i) => i.values[0] !== i.values[1]) : []),
    ...(onPageCat ? onPageCat.items.filter((i) => i.values[0] !== i.values[1]) : []),
  ];

  // 9 Technical AI Architecture Protocols (Included Site-wide across all plans)
  const geoTechnicalProtocols = technicalCat
    ? technicalCat.items.filter((i) => i.values[0] === i.values[1])
    : [];

  // 5 Paid Media & AI Outreach Protocols (Wikidata 1st, standard items paired, and largest 2-line item at the bottom)
  const geoOutreachProtocols = paidMediaCat
    ? [
        paidMediaCat.items.find((i) => i.feature.includes('Wikipedia')),
        paidMediaCat.items.find((i) => i.feature.includes('Articles Writing')),
        paidMediaCat.items.find((i) => i.feature.includes('Paid PR')),
        paidMediaCat.items.find((i) => i.feature.includes('Product reviews')),
        paidMediaCat.items.find((i) => i.feature.includes('Reddit')),
      ].filter(Boolean)
    : [];

  // 4 Content Hubs & Specific Architecture Protocols (Blog, Products, Footer)
  const geoContentProtocols = onPageCat
    ? onPageCat.items.filter((i) => i.values[0] === i.values[1])
    : [];

  // 5 Categorized SEO Deliverables from SEO_PACKAGES_DATA.categories
  const seoOnPageCat = SEO_PACKAGES_DATA.categories.find((c) => c.category === 'On-Page Optimization');
  const seoContentCat = SEO_PACKAGES_DATA.categories.find((c) => c.category === 'SEO Friendly Content Writing');
  const seoLocalCat = SEO_PACKAGES_DATA.categories.find((c) => c.category === 'Local Search Optimization');
  const seoLinkCat = SEO_PACKAGES_DATA.categories.find((c) => c.category === 'Link Strategy & Off-Page');
  const seoReportingCat = SEO_PACKAGES_DATA.categories.find((c) => c.category === 'Reporting');

  const seoOnPageProtocols = seoOnPageCat ? seoOnPageCat.items : [];
  const seoContentProtocols = seoContentCat ? seoContentCat.items : [];
  const seoLocalProtocols = seoLocalCat ? seoLocalCat.items : [];
  const seoLinkProtocols = seoLinkCat ? seoLinkCat.items : [];
  const seoReportingProtocols = seoReportingCat ? seoReportingCat.items : [];

  const activeSeoPackageObj =
    SEO_PACKAGES_DATA.packages.find((p) => p.id === selectedSeoPackage) ||
    SEO_PACKAGES_DATA.packages[2];

  return (
    <div className="bg-[#fafbfc] min-h-screen font-lora text-slate-900 overflow-x-hidden selection:bg-[#ffed4e] selection:text-slate-950">
      {/* ===================== HERO SECTION WITH SUBTLE AMBIENT ANIMATION ===================== */}
      <section className="relative pt-12 pb-12 sm:pt-16 sm:pb-16 bg-gradient-to-b from-slate-100/80 via-white to-[#fafbfc] border-b border-slate-200/70 overflow-hidden">
        {/* Floating Animated Ambient Glows */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: ['-50%', '-48%', '-50%'],
            y: ['0%', '5%', '0%'],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-1/2 w-[650px] sm:w-[850px] h-[340px] bg-gradient-to-tr from-[#ffed4e]/20 via-[#ffb400]/15 to-[#0072BC]/12 rounded-full blur-3xl pointer-events-none -z-10"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-bold font-lora tracking-tight leading-[1.18] max-w-4xl mx-auto"
          >
            <span className="text-[#ffb400]">i</span><span className="text-[#0072BC]">Braine</span> <span className="text-black italic">Commercial Plans</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-sans"
          >
            Explore complete commercial pricing, deliverables, and service scopes across all 8 specialized verticals.
          </motion.p>
        </div>
      </section>

      {/* ===================== 8 SERVICES SELECTION HUB ===================== */}
      <section className="sticky top-20 z-40 bg-[#fafbfc]/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] py-3.5 sm:py-4 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Bar */}
          <div className="flex items-center justify-between mb-2.5 sm:mb-3 text-xs sm:text-sm font-sans">
            <span className="font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <SlidersHorizontal className="w-4 h-4 text-[#ffb400]" />
              <span>Select Service (Total 8 Services):</span>
            </span>
            <span className="font-bold text-[#0072BC] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
              Showing 8 of 8
            </span>
          </div>

          {/* 4-column x 2-row Grid (Desktop) / 2-column x 4-row (Mobile) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-2 sm:gap-2.5">
            {SERVICES_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (window.innerWidth < 768) {
                      const el = document.getElementById('commercials-content');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className={`group relative text-left p-3 sm:p-3.5 rounded-xl transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[96px] sm:min-h-[104px] ${
                    isActive
                      ? 'bg-[#0072BC] text-white shadow-md shadow-blue-600/20 ring-2 ring-[#0072BC] border border-transparent'
                      : 'bg-white hover:bg-white text-slate-800 border border-slate-200 hover:border-slate-300 shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
                  }`}
                >
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between w-full mb-1 sm:mb-1.5">
                    <span className={`text-[11px] sm:text-xs font-sans font-bold tracking-widest ${
                      isActive ? 'text-[#ffed4e]' : 'text-slate-400'
                    }`}>
                      {tab.num}
                    </span>
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-colors ${
                      isActive ? 'bg-white/15 text-[#ffed4e]' : 'bg-slate-100 text-[#0072BC]'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Service Title & Desc */}
                  <div>
                    <div className={`text-[14px] sm:text-[16px] font-bold font-lora leading-snug line-clamp-1 ${
                      isActive ? 'text-white' : 'text-slate-900 group-hover:text-[#0072BC]'
                    }`}>
                      {tab.shortLabel}
                    </div>
                    <div className={`text-[12px] sm:text-[14px] font-sans mt-0.5 sm:mt-1 line-clamp-1 ${
                      isActive ? 'text-blue-100' : 'text-slate-500'
                    }`}>
                      {tab.desc}
                    </div>
                  </div>

                  {/* Active Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute -bottom-1 left-3 right-3 h-0.5 bg-[#ffed4e] rounded-full shadow-sm"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== TAB CONTENT CONTAINER WITH ANIMATED TRANSITIONS ===================== */}
      <main id="commercials-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
        <AnimatePresence mode="wait">
          {/* ============================================================== */}
          {/* 1. PERFORMANCE MARKETING                                       */}
          {/* ============================================================== */}
          {activeTab === 'performance' && (
            <motion.div
              key="performance"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-10"
            >
              {/* Header */}
              <motion.div variants={itemVariants} className="border-b border-slate-200 pb-5">
                <span className="text-xs uppercase font-sans tracking-widest text-[#0072BC] font-bold">
                  Service 01 • Paid Media & ROAS Scaling
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-lora text-slate-950 mt-1">
                  {PERFORMANCE_MARKETING_DATA.title}
                </h2>
                <p className="mt-2 text-slate-600 text-sm sm:text-base font-sans max-w-3xl">
                  {PERFORMANCE_MARKETING_DATA.subtitle}
                </p>
              </motion.div>

              {/* Pricing Tiers Cards */}
              <motion.div variants={itemVariants}>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#ffb400]" />
                  <span>Monthly Management Fees (Based on Ad Spends)</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {PERFORMANCE_MARKETING_DATA.pricingTiers.map((tier, idx) => {
                    const isSelected = selectedPerfTier === idx;
                    return (
                      <motion.div
                        key={idx}
                        onClick={() => setSelectedPerfTier(idx)}
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.25 }}
                        className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-gradient-to-br from-[#0072BC] via-[#005ea6] to-[#004d80] text-white shadow-xl shadow-blue-900/15 border border-blue-400/30'
                            : 'bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 text-slate-900'
                        }`}
                      >
                        <div>
                          <div className={`text-[11px] font-sans uppercase tracking-wider font-bold mb-2 ${
                            isSelected ? 'text-blue-100' : 'text-slate-500'
                          }`}>
                            Monthly Ad Spend Bracket
                          </div>
                          <div className="text-lg sm:text-xl font-bold font-lora mb-3">
                            {tier.spendTier}
                          </div>
                          <div className={`text-2xl sm:text-3xl font-black font-sans ${
                            isSelected ? 'text-white' : 'text-[#0072BC]'
                          }`}>
                            {tier.managementFee}
                          </div>
                          <p className={`mt-2 text-xs sm:text-sm font-sans ${
                            isSelected ? 'text-blue-100' : 'text-slate-500'
                          }`}>
                            {tier.subtext}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Platforms Covered & Reports */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Platforms */}
                <div className="lg:col-span-2 p-5 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm sm:text-base font-bold text-slate-950 flex items-center gap-2">
                      <Globe className="w-4 h-4 text-[#0072BC]" />
                      <span>Platforms Covered (Any 3 Included in Base Fee)</span>
                    </h4>
                    <span className="text-[11px] bg-blue-50 text-[#0072BC] px-2.5 py-0.5 rounded-full font-sans font-bold border border-blue-100">
                      Pick 3
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mb-4 font-sans">
                    {PERFORMANCE_MARKETING_DATA.platformsNote}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {PERFORMANCE_MARKETING_DATA.platformsCovered.map((plat, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50/70 border border-slate-200/70 shadow-2xs font-sans">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">{plat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reports */}
                <div className="p-5 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-950 mb-2 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-[#ffb400]" />
                      <span>Reporting Cadence</span>
                    </h4>
                    <p className="text-xs text-slate-600 mb-4 font-sans">
                      Granular graphical reports tracking spend, CTR, CPA, and conversion ROAS.
                    </p>
                    <div className="space-y-2.5">
                      {PERFORMANCE_MARKETING_DATA.reports.map((rep, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between font-sans">
                          <span className="text-xs sm:text-sm font-semibold text-slate-800">{rep.title}</span>
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-100">
                            {rep.frequency}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 font-sans leading-relaxed">
                    <strong>* Free Account Review:</strong> We audit existing Google Ads, Facebook & LinkedIn accounts at zero cost.
                  </div>
                </div>
              </motion.div>

              {/* Complete Deliverables Breakdown (50+ Items) */}
              <motion.div variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-200 gap-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-[#0072BC]" />
                      <span>Complete Deliverables Breakdown (50+ Items)</span>
                    </h3>
                    <p className="text-xs text-slate-500 font-sans mt-0.5">
                      Click each category to view detailed day-to-day deliverables.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 font-sans">
                    {PERFORMANCE_MARKETING_DATA.deliverablesGroups.map((grp) => (
                      <button
                        key={grp.group}
                        onClick={() => setExpandedDelivGroup(grp.group)}
                        type="button"
                        className={`text-xs px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                          expandedDelivGroup === grp.group
                            ? 'bg-[#0072BC] text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {grp.group} ({grp.items.length})
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  {PERFORMANCE_MARKETING_DATA.deliverablesGroups
                    .filter((g) => g.group === expandedDelivGroup)
                    .map((grp) => (
                      <div key={grp.group} className="space-y-2">
                        <div className="text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider font-sans">
                          {grp.group} Scope:
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 font-sans">
                          {grp.items.map((item, idx) => (
                            <div
                              key={idx}
                              className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/70 flex items-start gap-2.5"
                            >
                              <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3 h-3" />
                              </div>
                              <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                                {item.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </motion.div>

              {/* Commercial Notes */}
              <motion.div variants={itemVariants} className="p-5 rounded-2xl bg-amber-50/70 border-l-4 border-[#ffb400] text-slate-800 font-sans">
                <h4 className="font-bold text-xs uppercase tracking-wider text-amber-950 mb-2 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-700" />
                  <span>Important Commercial Terms</span>
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-amber-950">
                  {PERFORMANCE_MARKETING_DATA.commercialNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#ffb400] font-bold">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* 2. SEO PACKAGES                                                */}
          {/* ============================================================== */}
          {activeTab === 'seo' && (
            <motion.div
              key="seo"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-10"
            >
              {/* Header */}
              <motion.div variants={itemVariants} className="border-b border-slate-200 pb-5">
                <span className="text-xs uppercase font-sans tracking-widest text-[#0072BC] font-bold">
                  Service 02 • Search Engine Optimization
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-lora text-slate-950 mt-1">
                  {SEO_PACKAGES_DATA.title}
                </h2>
                <p className="mt-2 text-slate-600 text-sm sm:text-base font-sans max-w-3xl">
                  {SEO_PACKAGES_DATA.subtitle} • <span className="font-bold text-slate-900">{SEO_PACKAGES_DATA.note}</span>
                </p>
              </motion.div>

              {/* Packages Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {SEO_PACKAGES_DATA.packages.map((pkg) => {
                  const isSelected = selectedSeoPackage === pkg.id;
                  return (
                    <motion.div
                      key={pkg.id}
                      onClick={() => setSelectedSeoPackage(pkg.id)}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                      className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between relative cursor-pointer ${
                        isSelected
                          ? 'bg-gradient-to-br from-[#0072BC] via-[#005ea6] to-[#004d80] text-white shadow-xl shadow-blue-900/15 border border-blue-400/30'
                          : 'bg-white border border-slate-200/90 shadow-xs hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div className={`text-[11px] font-sans uppercase tracking-wider font-bold mb-1 ${
                          isSelected ? 'text-blue-100' : 'text-slate-500'
                        }`}>
                          {pkg.contract} Contract
                        </div>
                        <div className="text-xl sm:text-2xl font-bold font-lora mb-1">{pkg.name} Plan</div>
                        <div className="text-2xl sm:text-3xl font-black font-sans">
                          {pkg.cost}
                        </div>
                        <div className={`text-xs font-sans ${isSelected ? 'text-blue-100' : 'text-slate-500'} -mt-0.5 mb-3`}>
                          per month
                        </div>

                        {/* Keyword Research & Content Output */}
                        <div className="space-y-1.5 pt-3 border-t border-slate-200/20 text-xs font-sans">
                          <div className={`text-[10px] uppercase font-bold tracking-wider mb-1 ${
                            isSelected ? 'text-[#ffed4e]' : 'text-[#0072BC]'
                          }`}>
                            Targeted Keywords & Content
                          </div>
                          <div className="flex justify-between items-center">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-600'}>Total Keywords:</span>
                            <span className="font-bold">{pkg.keywords}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-600'}>Blog Posts:</span>
                            <span className="font-bold">{pkg.blogPosts}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-600'}>Article Writing:</span>
                            <span className="font-bold">{pkg.articleWriting}</span>
                          </div>
                        </div>

                        {/* Off-Page Submissions */}
                        <div className="space-y-1.5 pt-2.5 mt-2.5 border-t border-slate-200/20 text-xs font-sans">
                          <div className={`text-[10px] uppercase font-bold tracking-wider mb-1 ${
                            isSelected ? 'text-[#ffed4e]' : 'text-[#0072BC]'
                          }`}>
                            Off-Page Optimization & Submissions
                          </div>
                          <div className="flex justify-between items-center">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-600'}>Directory Submissions:</span>
                            <span className="font-bold">{pkg.directorySubmissions}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-600'}>Social Bookmarking:</span>
                            <span className="font-bold">{pkg.socialBookmarking}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-600'}>Search Engine Submissions:</span>
                            <span className="font-bold">{pkg.searchEngineSubmissions}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-600'}>Image Submissions:</span>
                            <span className="font-bold">{pkg.imageSubmissions}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-600'}>Web 2.0 Submissions:</span>
                            <span className="font-bold">{pkg.web2Submissions}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Common Deliverables Grid (Matching SMM, Web Dev & GEO layout) */}
              <motion.div variants={itemVariants} className="p-5 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Common Deliverables — Included in All SEO Packages</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-sans">
                  {SEO_PACKAGES_DATA.commonDeliverables.map((deliv, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{deliv.title}</span>
                      </div>
                      <div className="text-xs text-slate-500 leading-snug">{deliv.desc}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Complete Categorized SEO Deliverables Breakdown (33 Factors in One Unified Master Container) */}
              <motion.div variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs font-sans">
                {/* Header & Pillar Navigation Bar inside the container */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-5 border-b border-slate-100 gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-[#0072BC]" />
                      <span>What iBraine Delivers in Your SEO Package (33 Factors)</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 max-w-3xl leading-relaxed">
                      Comprehensive Search Engine Optimization architecture across all 5 strategic delivery pillars. Unified scope, zero tag clutter, and 100% built for organic search dominance.
                    </p>
                  </div>

                  {/* Active Plan Indicator */}
                  <div className="self-start lg:self-auto shrink-0 bg-blue-50/70 px-3 py-1.5 rounded-xl border border-blue-200/80">
                    <div className="text-[10px] uppercase font-bold text-[#0072BC] tracking-wider">
                      Active Plan: {activeSeoPackageObj.name} Plan
                    </div>
                    <div className="text-xs font-bold text-slate-900">
                      {activeSeoPackageObj.cost}/month • {activeSeoPackageObj.contract} Contract
                    </div>
                  </div>
                </div>

                {/* Pillar Filter Tabs */}
                <div className="pt-4 pb-5 border-b border-slate-100 flex flex-wrap gap-2">
                  {[
                    { id: 'all', label: 'All 5 Pillars (33)' },
                    { id: 'onpage', label: `1. On-Page (${seoOnPageProtocols.length})` },
                    { id: 'content', label: `2. Content Writing (${seoContentProtocols.length})` },
                    { id: 'local', label: `3. Local SEO (${seoLocalProtocols.length})` },
                    { id: 'link', label: `4. Link Strategy & Off-Page (${seoLinkProtocols.length})` },
                    { id: 'reporting', label: `5. Reporting (${seoReportingProtocols.length})` },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setSeoCategoryFilter(tab.id)}
                      className={`text-xs px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer ${
                        seoCategoryFilter === tab.id
                          ? 'bg-[#0072BC] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Deliverables Body inside the single unified container */}
                <div className="pt-6 space-y-8">
                  {/* PILLAR 1: On-Page Optimization (14 Factors) */}
                  {(seoCategoryFilter === 'all' || seoCategoryFilter === 'onpage') && (
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-1 gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0">
                            <Layers className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-sm sm:text-base font-bold text-slate-950">
                                1. On-Page Optimization
                              </h4>
                              <span className="text-xs text-slate-400 font-medium">({seoOnPageProtocols.length} Factors)</span>
                            </div>
                            <p className="text-xs text-slate-500">
                              Comprehensive on-page, HTML source code, structured schema, and technical indexing hygiene.
                            </p>
                          </div>
                        </div>
                        <span className="self-start sm:self-auto text-[11px] font-bold text-[#0072BC] bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-200 shrink-0">
                          ✓ Included Across All Plans
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        {seoOnPageProtocols.map((protocol, idx) => {
                          const isGA = protocol.feature.includes('Google Analytics Basic');
                          return (
                            <div key={idx} className="flex items-start gap-2.5">
                              <div className="w-5 h-5 rounded-full bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3.5 h-3.5" />
                              </div>
                              <div className="text-sm sm:text-base font-medium text-slate-800 leading-snug flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                  <span>{protocol.feature}</span>
                                  {isGA && (
                                    <span className="whitespace-nowrap text-xs font-bold text-[#0072BC] bg-blue-50 px-2 py-0.5 rounded border border-blue-200 shrink-0">
                                      Standard & Premium Plans
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Line below category */}
                      <div className="border-b border-slate-200 pt-6" />
                    </div>
                  )}

                  {/* PILLAR 2: SEO Friendly Content Writing (5 Factors) */}
                  {(seoCategoryFilter === 'all' || seoCategoryFilter === 'content') && (
                    <div className="space-y-4 pt-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-1 gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0">
                            <PenTool className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-sm sm:text-base font-bold text-slate-950">
                                2. SEO Friendly Content Writing
                              </h4>
                              <span className="text-xs text-slate-400 font-medium">({seoContentProtocols.length} Factors)</span>
                            </div>
                            <p className="text-xs text-slate-500">
                              High-quality editorial content produced monthly to establish topical relevance and organic depth.
                            </p>
                          </div>
                        </div>
                        <span className="self-start sm:self-auto text-[11px] font-bold text-[#0072BC] bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-200 shrink-0">
                          Content Authority
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        {seoContentProtocols.map((item, idx) => {
                          const isPR = item.feature.includes('Press Release');
                          const isInfographic = item.feature.includes('Infographic');
                          const isQA = item.feature.includes('Q&A');
                          return (
                            <div key={idx} className="flex items-start gap-2.5">
                              <div className="w-5 h-5 rounded-full bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3.5 h-3.5" />
                              </div>
                              <div className="text-sm sm:text-base font-medium text-slate-800 leading-snug flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                  <span>{item.feature}</span>
                                  {(isPR || isInfographic || isQA) && (
                                    <span className="whitespace-nowrap text-xs font-bold text-[#0072BC] bg-blue-50 px-2 py-0.5 rounded border border-blue-200 shrink-0">
                                      Premium Plan Included
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Line below category */}
                      <div className="border-b border-slate-200 pt-6" />
                    </div>
                  )}

                  {/* PILLAR 3: Local Search Optimization (1 Factor) */}
                  {(seoCategoryFilter === 'all' || seoCategoryFilter === 'local') && (
                    <div className="space-y-4 pt-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-1 gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0">
                            <Globe className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-sm sm:text-base font-bold text-slate-950">
                                3. Local Search Optimization
                              </h4>
                              <span className="text-xs text-slate-400 font-medium">({seoLocalProtocols.length} Factor)</span>
                            </div>
                            <p className="text-xs text-slate-500">
                              Local presence optimization for regional search visibility and Google Map pack rankings.
                            </p>
                          </div>
                        </div>
                        <span className="self-start sm:self-auto text-[11px] font-bold text-[#0072BC] bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-200 shrink-0">
                          Local Authority
                        </span>
                      </div>

                      <div className="mt-2">
                        {seoLocalProtocols.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <div className="w-5 h-5 rounded-full bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-sm sm:text-base font-medium text-slate-800 leading-snug">
                              {item.feature} (Setup, Verification & Ongoing Optimization)
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Line below category */}
                      <div className="border-b border-slate-200 pt-6" />
                    </div>
                  )}

                  {/* PILLAR 4: Link Strategy & Off-Page (10 Factors) */}
                  {(seoCategoryFilter === 'all' || seoCategoryFilter === 'link') && (
                    <div className="space-y-4 pt-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-1 gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0">
                            <Share2 className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-sm sm:text-base font-bold text-slate-950">
                                4. Link Strategy & Off-Page Submissions
                              </h4>
                              <span className="text-xs text-slate-400 font-medium">({seoLinkProtocols.length} Factors)</span>
                            </div>
                            <p className="text-xs text-slate-500">
                              High-authority multi-channel backlinks portfolio creation, syndication, and bookmarking.
                            </p>
                          </div>
                        </div>
                        <span className="self-start sm:self-auto text-[11px] font-bold text-[#0072BC] bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-200 shrink-0">
                          Off-Page Authority
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        {seoLinkProtocols.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <div className="w-5 h-5 rounded-full bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-sm sm:text-base font-medium text-slate-800 leading-snug">
                              {item.feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Line below category */}
                      <div className="border-b border-slate-200 pt-6" />
                    </div>
                  )}

                  {/* PILLAR 5: Granular Monthly Reporting (3 Factors) */}
                  {(seoCategoryFilter === 'all' || seoCategoryFilter === 'reporting') && (
                    <div className="space-y-4 pt-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-1 gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0">
                            <BarChart3 className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-sm sm:text-base font-bold text-slate-950">
                                5. Granular Monthly Reporting
                              </h4>
                              <span className="text-xs text-slate-400 font-medium">({seoReportingProtocols.length} Factors)</span>
                            </div>
                            <p className="text-xs text-slate-500">
                              Transparent monthly tracking of keyword progression, backlink portfolio growth, and organic traffic.
                            </p>
                          </div>
                        </div>
                        <span className="self-start sm:self-auto text-[11px] font-bold text-[#0072BC] bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-200 shrink-0">
                          Full Transparency
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-3">
                        {seoReportingProtocols.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <div className="w-5 h-5 rounded-full bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-sm sm:text-base font-medium text-slate-800 leading-snug">
                              {item.feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Line below category */}
                      <div className="border-b border-slate-200 pt-6" />
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Optional Paid Link Building */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-5 font-sans">
                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                  <h4 className="font-bold text-sm sm:text-base text-slate-950 mb-1 flex items-center gap-2">
                    <PenTool className="w-4 h-4 text-[#0072BC]" />
                    <span>Paid Link Building - Guest Blogging (Optional)</span>
                  </h4>
                  <p className="text-xs text-slate-500 mb-3">High-DA niche backlinks for exponential ranking power.</p>
                  <div className="space-y-2">
                    {SEO_PACKAGES_DATA.paidLinkBuilding.guestBlogging.map((gb, idx) => (
                      <div key={idx} className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/70 flex items-center justify-between text-xs sm:text-sm">
                        <div>
                          <span className="font-bold text-slate-900">{gb.plan} Plan</span>
                          <div className="text-slate-500 text-xs">{gb.description}</div>
                        </div>
                        <span className="font-bold text-[#0072BC] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                          {gb.pricing}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                  <h4 className="font-bold text-sm sm:text-base text-slate-950 mb-1 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#ffb400]" />
                    <span>Press Release Syndication (Optional)</span>
                  </h4>
                  <p className="text-xs text-slate-500 mb-3">Guaranteed publication across Google News syndication networks.</p>
                  <div className="space-y-2">
                    {SEO_PACKAGES_DATA.paidLinkBuilding.pressRelease.map((pr, idx) => (
                      <div key={idx} className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/70 flex items-center justify-between text-xs sm:text-sm">
                        <div>
                          <span className="font-bold text-slate-900">{pr.plan}</span>
                          <div className="text-slate-500 text-xs">{pr.description}</div>
                        </div>
                        <span className="font-bold text-amber-950 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
                          {pr.cost}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* 3. GEO / AI SEARCH (AEO)                                       */}
          {/* ============================================================== */}
          {activeTab === 'geo' && (
            <motion.div
              key="geo"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-10"
            >
              {/* Header */}
              <motion.div variants={itemVariants} className="border-b border-slate-200 pb-5">
                <span className="text-xs uppercase font-sans tracking-widest text-[#0072BC] font-bold">
                  Service 03 • Generative Engine Optimization
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-lora text-slate-950 mt-1">
                  {GEO_PACKAGES_DATA.title}
                </h2>
                <p className="mt-2 text-slate-600 text-sm sm:text-base font-sans max-w-3xl">
                  {GEO_PACKAGES_DATA.subtitle}
                </p>
              </motion.div>

              {/* What is GEO/AEO Explainer */}
              <motion.div variants={itemVariants} className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#0072BC] via-[#005ea6] to-[#004d80] text-white shadow-lg border border-blue-400/30">
                <div className="flex items-center gap-2 text-[#ffed4e] text-xs font-bold uppercase tracking-wider font-sans mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>What is Generative Engine Optimization?</span>
                </div>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-sans max-w-4xl">
                  {GEO_PACKAGES_DATA.definition}
                </p>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-sans">
                  {GEO_PACKAGES_DATA.keyAspects.map((aspect, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/10 border border-white/15">
                      <div className="text-xs sm:text-sm font-bold text-[#ffed4e] mb-1">{aspect.title}</div>
                      <div className="text-xs text-blue-100 leading-snug">{aspect.desc}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Packages Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {GEO_PACKAGES_DATA.packages.map((pkg) => {
                  const isSelected = selectedGeoPackage === pkg.id;
                  return (
                    <motion.div
                      key={pkg.id}
                      onClick={() => setSelectedGeoPackage(pkg.id)}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                      className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between relative cursor-pointer ${
                        isSelected
                          ? 'bg-gradient-to-br from-[#0072BC] via-[#005ea6] to-[#004d80] text-white shadow-xl shadow-blue-900/15 border border-blue-400/30'
                          : 'bg-white border border-slate-200/90 shadow-xs hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div className={`text-[11px] font-sans uppercase tracking-wider font-bold mb-1 ${
                          isSelected ? 'text-blue-100' : 'text-slate-500'
                        }`}>
                          {pkg.contract} • {pkg.scope}
                        </div>
                        <div className="text-xl sm:text-2xl font-bold font-lora mb-1">{pkg.name} Plan</div>
                        <div className="text-2xl sm:text-3xl font-black font-sans">
                          {pkg.cost}
                        </div>
                        <div className={`text-xs font-sans ${isSelected ? 'text-blue-100' : 'text-slate-500'} -mt-0.5 mb-3`}>
                          per month
                        </div>

                        {/* Keywords Research & Distribution */}
                        <div className="space-y-1.5 pt-3 border-t border-slate-200/20 text-xs font-sans">
                          <div className={`text-[10px] uppercase font-bold tracking-wider mb-1 ${
                            isSelected ? 'text-[#ffed4e]' : 'text-[#0072BC]'
                          }`}>
                            Keywords Research & Distribution
                          </div>
                          <div className="flex justify-between items-center">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-600'}>Total Keywords:</span>
                            <span className="font-bold">{pkg.keywords}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-600'}>Primary Keywords:</span>
                            <span className="font-bold">{pkg.primaryKeywords}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-600'}>AI Searched Terms:</span>
                            <span className="font-bold">{pkg.aiKeywords}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-600'}>PASF Queries:</span>
                            <span className="font-bold">{pkg.pasfKeywords}</span>
                          </div>
                        </div>

                        {/* Off-Page Optimization & Submissions */}
                        <div className="space-y-1.5 pt-2.5 border-t border-slate-200/20 text-xs font-sans">
                          <div className={`text-[10px] uppercase font-bold tracking-wider mb-1 ${
                            isSelected ? 'text-[#ffed4e]' : 'text-[#0072BC]'
                          }`}>
                            Off-Page Optimization & Submissions
                          </div>
                          <div className="flex justify-between items-center">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-600'}>Social Bookmarking:</span>
                            <span className="font-bold">{pkg.socialBookmarking}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-600'}>Article Submissions:</span>
                            <span className="font-bold">{pkg.articleSubmissions}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-600'}>Web 2.0 Submissions:</span>
                            <span className="font-bold">{pkg.web2Submissions}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-600'}>Image Submissions:</span>
                            <span className="font-bold">{pkg.imageSubmissions}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-600'}>Search Engine Submissions:</span>
                            <span className="font-bold">{pkg.searchEngineSubmissions}</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-200/20 flex justify-between items-center text-xs font-sans">
                          <span className={isSelected ? 'text-blue-100' : 'text-slate-600'}>Optimization Scope:</span>
                          <span className="font-bold">{pkg.scope}</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Common Deliverables Grid (Matching SMM & Web Dev layout) */}
              <motion.div variants={itemVariants} className="p-5 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Standard Built-in Deliverables — Included in All GEO Packages</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-sans">
                  {GEO_PACKAGES_DATA.commonDeliverables.map((deliv, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{deliv.title}</span>
                      </div>
                      <div className="text-xs text-slate-500 leading-snug">{deliv.desc}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Complete Categorized Deliverables Breakdown (28 Factors across 4 Strategic Pillars) */}
              <motion.div variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs font-sans">
                {/* Header & Pillar Navigation Bar */}
                <div className="pb-5 border-b border-slate-100">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[#0072BC]" />
                    <span>What iBraine Delivers in Your GEO Package (28 Factors)</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-3xl leading-relaxed">
                    Comprehensive Generative Engine Optimization architecture organized into 4 strategic delivery pillars. Clear deliverables, zero tag clutter, and 100% built for AI search dominance.
                  </p>
                </div>

                {/* Pillar Filter Tabs */}
                <div className="mt-4 pb-2 flex flex-wrap gap-2">
                  {[
                    { id: 'all', label: 'All 4 Pillars (28)' },
                    { id: 'scope', label: `1. Domain Scope (${geoScopeProtocols.length})` },
                    { id: 'technical', label: `2. Technical AI (${geoTechnicalProtocols.length})` },
                    { id: 'outreach', label: `3. AI Citations & PR (${geoOutreachProtocols.length})` },
                    { id: 'content', label: `4. Content Hubs (${geoContentProtocols.length})` },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setGeoCategoryFilter(tab.id)}
                      className={`text-xs px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer ${
                        geoCategoryFilter === tab.id
                          ? 'bg-[#0072BC] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Deliverables Body inside the single unified container */}
                <div className="pt-6 space-y-8">
                  {/* PILLAR 1: Domain Optimization Scope (10 Protocols) */}
                  {(geoCategoryFilter === 'all' || geoCategoryFilter === 'scope') && (
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-1 gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0">
                            <Layers className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-sm sm:text-base font-bold text-slate-950">
                                1. Domain Optimization Scope
                              </h4>
                              <span className="text-xs text-slate-400 font-medium">({geoScopeProtocols.length} Protocols)</span>
                            </div>
                            <p className="text-xs text-slate-500">
                              Core on-page and technical optimizations scaled to your selected plan.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Highlighting Point Just Above the List in 1. Domain */}
                      <div className="p-3.5 sm:p-4 rounded-xl border border-blue-200/90 bg-blue-50/70 text-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs font-sans">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#0072BC] shrink-0" />
                          <div>
                            <div className="text-[11px] uppercase font-semibold tracking-wider text-[#0072BC]">
                              Active Plan Scope ({selectedGeoPackage.toUpperCase()})
                            </div>
                            <div className="text-sm sm:text-base font-semibold text-slate-800">
                              {selectedGeoPackage === 'silver' ? 'Targeted Landing Pages' : 'Entire Website (Full Domain Coverage)'}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 self-start sm:self-auto shrink-0 text-xs">
                          <button
                            type="button"
                            onClick={() => setSelectedGeoPackage('silver')}
                            className={`px-3 py-1.5 rounded-lg font-bold border transition-colors cursor-pointer ${
                              selectedGeoPackage === 'silver'
                                ? 'bg-[#0072BC] text-white border-[#0072BC] shadow-2xs'
                                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                            }`}
                          >
                            Silver: Targeted Pages
                          </button>
                          <button
                            type="button"
                            onClick={() => setSelectedGeoPackage(selectedGeoPackage === 'silver' ? 'gold' : selectedGeoPackage)}
                            className={`px-3 py-1.5 rounded-lg font-bold border transition-colors cursor-pointer ${
                              selectedGeoPackage !== 'silver'
                                ? 'bg-[#0072BC] text-white border-[#0072BC] shadow-2xs'
                                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                            }`}
                          >
                            Gold/Plat/Tit: Entire Website
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        {geoScopeProtocols.map((protocol, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <div className="w-5 h-5 rounded-full bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-sm sm:text-base font-medium text-slate-800 leading-snug">
                              {protocol.feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Line below category */}
                      <div className="border-b border-slate-200 pt-6" />
                    </div>
                  )}

                  {/* PILLAR 2: Technical AI Architecture (9 Factors) */}
                  {(geoCategoryFilter === 'all' || geoCategoryFilter === 'technical') && (
                    <div className="space-y-4 pt-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-1 gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0">
                            <SlidersHorizontal className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-sm sm:text-base font-bold text-slate-950">
                                2. Technical AI Architecture Protocols
                              </h4>
                              <span className="text-xs text-slate-400 font-medium">({geoTechnicalProtocols.length} Factors)</span>
                            </div>
                            <p className="text-xs text-slate-500">
                              Built-in site-wide across all packages for AI bot crawling, indexing speed, and Core Web Vitals stability.
                            </p>
                          </div>
                        </div>
                        <span className="self-start sm:self-auto text-[11px] font-bold text-[#0072BC] bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-200 shrink-0">
                          ✓ Included Across All Plans
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
                        {geoTechnicalProtocols.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <div className="w-5 h-5 rounded-full bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-sm sm:text-base font-medium text-slate-800 leading-snug">
                              {item.feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Line below category */}
                      <div className="border-b border-slate-200 pt-6" />
                    </div>
                  )}

                  {/* PILLAR 3: High-Authority AI Outreach & Citations (5 Factors) */}
                  {(geoCategoryFilter === 'all' || geoCategoryFilter === 'outreach') && (
                    <div className="space-y-4 pt-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-1 gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0">
                            <Share2 className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-sm sm:text-base font-bold text-slate-950">
                                3. High-Authority AI Outreach & Citations
                              </h4>
                              <span className="text-xs text-slate-400 font-medium">({geoOutreachProtocols.length} Factors)</span>
                            </div>
                            <p className="text-xs text-slate-500">
                              Establishing external brand authority, PR mentions, and discussions across LLM training grounds.
                            </p>
                          </div>
                        </div>
                        <span className="self-start sm:self-auto text-[11px] font-bold text-[#0072BC] bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-200 shrink-0">
                          Authority & LLM Citations
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        {geoOutreachProtocols.map((item, idx) => {
                          const isWiki = item.feature.includes('Wikipedia');
                          return (
                            <div key={idx} className="flex items-start gap-2.5">
                              <div className="w-5 h-5 rounded-full bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3.5 h-3.5" />
                              </div>
                              <div className="text-sm sm:text-base font-medium text-slate-800 leading-snug flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                  <span>{isWiki ? 'Wikidata / Wikipedia' : item.feature}</span>
                                  {isWiki && (
                                    <span className="whitespace-nowrap text-xs font-bold text-[#0072BC] bg-blue-50 px-2 py-0.5 rounded border border-blue-200 shrink-0">
                                      Rs. 2,000 (Optional)
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Line below category */}
                      <div className="border-b border-slate-200 pt-6" />
                    </div>
                  )}

                  {/* PILLAR 4: Content Hubs & Conversational Entities (4 Factors) */}
                  {(geoCategoryFilter === 'all' || geoCategoryFilter === 'content') && (
                    <div className="space-y-4 pt-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-1 gap-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0">
                            <PenTool className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="text-sm sm:text-base font-bold text-slate-950">
                                4. Content Hubs & Conversational Entities
                              </h4>
                              <span className="text-xs text-slate-400 font-medium">({geoContentProtocols.length} Factors)</span>
                            </div>
                            <p className="text-xs text-slate-500">
                              Engineered for direct answer snippets in Perplexity, ChatGPT, Gemini, and ongoing freshness.
                            </p>
                          </div>
                        </div>
                        <span className="self-start sm:self-auto text-[11px] font-bold text-[#0072BC] bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-200 shrink-0">
                          Answer Engine Optimization
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        {geoContentProtocols.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <div className="w-5 h-5 rounded-full bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                            <div className="text-sm sm:text-base font-medium text-slate-800 leading-snug flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
                                <span>{item.feature}</span>
                                <span className="text-slate-400 font-normal whitespace-nowrap">
                                  ({item.values[0]})
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Line below category */}
                      <div className="border-b border-slate-200 pt-6" />
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* 4. SOCIAL MEDIA MANAGEMENT                                     */}
          {/* ============================================================== */}
          {activeTab === 'smm' && (
            <motion.div
              key="smm"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-10"
            >
              {/* Header */}
              <motion.div variants={itemVariants} className="border-b border-slate-200 pb-5">
                <span className="text-xs uppercase font-sans tracking-widest text-[#0072BC] font-bold">
                  Service 04 • Social Media Growth
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-lora text-slate-950 mt-1">
                  {SOCIAL_MEDIA_DATA.title}
                </h2>
                <p className="mt-2 text-slate-600 text-sm sm:text-base font-sans max-w-3xl">
                  {SOCIAL_MEDIA_DATA.subtitle} • <span className="font-bold text-slate-900">{SOCIAL_MEDIA_DATA.commitment}</span>
                </p>
              </motion.div>

              {/* Packages Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {SOCIAL_MEDIA_DATA.packages.map((pkg) => {
                  const isSelected = selectedSmmPackage === pkg.id;
                  return (
                    <motion.div
                      key={pkg.id}
                      onClick={() => setSelectedSmmPackage(pkg.id)}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                      className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between relative cursor-pointer ${
                        isSelected
                          ? 'bg-gradient-to-br from-[#0072BC] via-[#005ea6] to-[#004d80] text-white shadow-xl shadow-blue-900/15 border border-blue-400/30'
                          : 'bg-white border border-slate-200/90 shadow-xs hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div className={`text-[11px] font-sans uppercase tracking-wider font-bold mb-1 ${
                          isSelected ? 'text-blue-100' : 'text-slate-500'
                        }`}>
                          {pkg.platforms}
                        </div>
                        <div className="text-xl sm:text-2xl font-bold font-lora mb-1">{pkg.name} Plan</div>
                        <div className="text-2xl sm:text-3xl font-black font-sans mb-3">
                          {pkg.cost}
                        </div>

                        <div className="space-y-2 pt-3 border-t border-slate-200/20 text-xs font-sans">
                          <div className="flex justify-between">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-600'}>AI Image Creatives:</span>
                            <span className="font-bold">{pkg.aiImages} / mo</span>
                          </div>
                          <div className="flex justify-between">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-600'}>Static Posts:</span>
                            <span className="font-bold">{pkg.staticPosts} / mo</span>
                          </div>
                          <div className="flex justify-between">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-600'}>Reels / Videos / GIFs:</span>
                            <span className="font-bold">{pkg.videosReels} / mo</span>
                          </div>
                          <div className="flex justify-between">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-600'}>AI Videos:</span>
                            <span className="font-bold">{pkg.aiVideos} / mo</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* 1. Common Deliverables: 4 Core Strategic Pillars */}
              <motion.div variants={itemVariants} className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs font-sans">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-3 mb-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span>Common Deliverables — Included in All SMM Packages</span>
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      Structured across 4 high-performance operational pillars covering the complete social media growth lifecycle.
                    </p>
                  </div>
                  <span className="self-start sm:self-auto text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200 shrink-0">
                    4 Core Strategic Pillars
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                  {SOCIAL_MEDIA_DATA.commonPillars.map((pillar, idx) => (
                    <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#0072BC]" />
                          <h4 className="text-base sm:text-lg font-bold text-slate-950">{pillar.pillar}</h4>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-500 mb-4 leading-relaxed">{pillar.desc}</p>
                        <ul className="space-y-3">
                          {pillar.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5">
                              <div className="w-5 h-5 rounded-full bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-sm sm:text-base font-medium text-slate-800 leading-snug">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 2. Platform-Specific Execution */}
              <motion.div variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs font-sans">
                <div className="pb-5 border-b border-slate-100">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2.5">
                    <Share2 className="w-5 h-5 text-[#0072BC]" />
                    <span>Platform-Specific Execution</span>
                  </h3>
                  <p className="text-sm text-slate-500 mt-1 max-w-3xl leading-relaxed">
                    Tailored optimization and content formatting based on your selected channels.
                  </p>
                </div>

                {/* 2-column spacious grid matching GEO spacing and font size */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                  {SOCIAL_MEDIA_DATA.platformDeliverables.map((plat, idx) => (
                    <div
                      key={idx}
                      className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between pb-4 border-b border-slate-200/70 mb-4">
                          <div className="flex items-center gap-3">
                            {renderPlatformIcon(plat.platform)}
                            <div>
                              <h4 className="text-base sm:text-lg font-bold text-slate-950">{plat.platform}</h4>
                              <span className="text-xs text-slate-500">Channel Execution</span>
                            </div>
                          </div>
                          <span className="text-[11px] font-bold text-[#0072BC] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 shrink-0">
                            Custom Formatted
                          </span>
                        </div>

                        <ul className="space-y-3.5">
                          {plat.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5">
                              <div className="w-5 h-5 rounded-full bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3.5 h-3.5" />
                              </div>
                              <div className="text-sm sm:text-base font-medium text-slate-800 leading-snug flex-1 min-w-0">
                                <strong className="font-bold text-slate-950">{b.lead}:</strong>{' '}
                                <span className="text-slate-700">{b.text}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 3. Collapsible FAQ Accordion for Quota Clarity & Terms */}
              <motion.div variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs font-sans">
                <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-950">
                      Frequently Asked Questions & Quota Terms
                    </h4>
                    <p className="text-sm text-slate-500 mt-0.5">
                      Clear operational boundaries, asset delivery guidelines, and commercial billing specifics.
                    </p>
                  </div>
                </div>

                <div className="mt-4 divide-y divide-slate-100">
                  {SOCIAL_MEDIA_DATA.faqTerms.map((faq, idx) => {
                    const isOpen = openSmmFaq === idx;
                    return (
                      <div key={idx} className="py-4">
                        <button
                          type="button"
                          onClick={() => setOpenSmmFaq(isOpen ? null : idx)}
                          className="w-full flex items-center justify-between text-left py-1 text-base sm:text-lg font-bold text-slate-950 hover:text-[#0072BC] transition-colors cursor-pointer gap-4"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                              isOpen ? 'rotate-180 text-[#0072BC]' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <p className="pt-2.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* 4. Contextual High-Converting CTA Banner */}
              <motion.div
                variants={itemVariants}
                className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900 via-[#0072BC] to-[#005ea6] text-white flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg shadow-blue-900/10 font-sans"
              >
                <div>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold font-lora">
                    Not sure which platforms fit your brand?
                  </h4>
                  <p className="text-xs sm:text-sm text-blue-100 mt-1 max-w-xl">
                    Get a custom channel mix and tailor-made content volume engineered for your specific growth targets.
                  </p>
                </div>
                <Link
                  to="/request-quote"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#0072BC] font-bold text-xs sm:text-sm shadow-md hover:bg-blue-50 transition-all shrink-0 cursor-pointer"
                >
                  <span>Get a Custom Channel Mix</span>
                  <Zap className="w-4 h-4 text-[#ffb400]" />
                </Link>
              </motion.div>
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* 5. WEBSITE DEVELOPMENT                                         */}
          {/* ============================================================== */}
          {activeTab === 'webdev' && (
            <motion.div
              key="webdev"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-10"
            >
              {/* Header */}
              <motion.div variants={itemVariants} className="border-b border-slate-200 pb-5">
                <span className="text-xs uppercase font-sans tracking-widest text-[#0072BC] font-bold">
                  Service 05 • Web Engineering & Design
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-lora text-slate-950 mt-1">
                  {WEBSITE_DEVELOPMENT_DATA.title}
                </h2>
                <p className="mt-2 text-slate-600 text-sm sm:text-base font-sans max-w-3xl">
                  {WEBSITE_DEVELOPMENT_DATA.subtitle}
                </p>
              </motion.div>

              {/* 3 Main Plans */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {WEBSITE_DEVELOPMENT_DATA.plans.map((plan) => {
                  const isSelected = selectedWebPlan === plan.id;
                  return (
                    <motion.div
                      key={plan.id}
                      onClick={() => setSelectedWebPlan(plan.id)}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                      className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative cursor-pointer ${
                        isSelected
                          ? 'bg-gradient-to-br from-[#0072BC] via-[#005ea6] to-[#004d80] text-white shadow-xl shadow-blue-900/15 border border-blue-400/30'
                          : 'bg-white border border-slate-200/90 shadow-xs hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div className={`text-[11px] font-sans uppercase tracking-wider font-bold mb-1 ${
                          isSelected ? 'text-blue-100' : 'text-slate-500'
                        }`}>
                          {plan.platform}
                        </div>
                        <div className="text-xl sm:text-2xl font-bold font-lora mb-2">{plan.name}</div>
                        <div className="text-2xl sm:text-3xl font-black font-sans mb-4">
                          {plan.cost}
                        </div>

                        <div className="space-y-2 pt-3 border-t border-slate-200/20 text-xs sm:text-sm font-sans">
                          <div className="flex justify-between items-start gap-2">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-500'}>Theme:</span>
                            <span className="font-semibold text-right">{plan.themeType}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-500'}>Pages:</span>
                            <span className="font-semibold">{plan.pages}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-500'}>Products:</span>
                            <span className="font-semibold">{plan.products}</span>
                          </div>
                          <div className="flex justify-between items-start gap-2">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-500'}>E-Commerce:</span>
                            <span className="font-semibold text-right">{plan.ecommerceScope}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-500'}>Additional:</span>
                            <span className="font-semibold">{plan.additionalScope}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-500'}>Timeline:</span>
                            <span className={`font-semibold ${isSelected ? 'text-white' : 'text-emerald-500'}`}>{plan.timeToLive}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className={isSelected ? 'text-blue-100' : 'text-slate-500'}>Support:</span>
                            <span className="font-semibold">{plan.support}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Common Features Grid (Matching SMM layout) */}
              <motion.div variants={itemVariants} className="p-5 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Standard Built-in Features — Included in All Website Plans</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-sans">
                  {WEBSITE_DEVELOPMENT_DATA.commonDeliverables.map((feat, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat.title}</span>
                      </div>
                      <div className="text-xs text-slate-500 leading-snug">{feat.desc}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Notes */}
              <motion.div variants={itemVariants} className="p-5 rounded-2xl bg-amber-50/70 border-l-4 border-[#ffb400] text-xs sm:text-sm text-amber-950 font-sans">
                <h4 className="font-bold uppercase tracking-wider text-amber-950 mb-1.5 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-700" />
                  <span>Development Terms & Shared Hosting Notes</span>
                </h4>
                <ol className="space-y-1 list-decimal list-inside">
                  {WEBSITE_DEVELOPMENT_DATA.importantNotes.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ol>
              </motion.div>
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* 6. GOOGLE ANALYTICS 4 (GA4)                                    */}
          {/* ============================================================== */}
          {activeTab === 'ga4' && (
            <motion.div
              key="ga4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-10"
            >
              {/* Header */}
              <motion.div variants={itemVariants} className="border-b border-slate-200 pb-5">
                <span className="text-xs uppercase font-sans tracking-widest text-[#0072BC] font-bold">
                  Service 06 • Analytics & Conversion Protocol
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-lora text-slate-950 mt-1">
                  {GA4_PACKAGES_DATA.title}
                </h2>
                <p className="mt-2 text-slate-600 text-sm sm:text-base font-sans max-w-3xl">
                  {GA4_PACKAGES_DATA.subtitle}
                </p>
              </motion.div>

              {/* 3 GA4 Plans */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {GA4_PACKAGES_DATA.packages.map((pkg) => {
                  const isSelected = selectedGa4Package === pkg.id;
                  return (
                    <motion.div
                      key={pkg.id}
                      onClick={() => setSelectedGa4Package(pkg.id)}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                      className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative cursor-pointer ${
                        isSelected
                          ? 'bg-gradient-to-br from-[#0072BC] via-[#005ea6] to-[#004d80] text-white shadow-xl shadow-blue-900/15 border border-blue-400/30'
                          : 'bg-white border border-slate-200/90 shadow-xs hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div className="text-xl sm:text-2xl font-bold font-lora mb-1">{pkg.name} Plan</div>
                        <p className={`text-xs mb-3 font-sans ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                          {pkg.description}
                        </p>
                        <div className="text-2xl sm:text-3xl font-black font-sans mb-5">
                          {pkg.cost}
                        </div>

                        <div className="space-y-2 pt-3 border-t border-slate-200/20 font-sans">
                          {pkg.deliverables.map((deliv, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                              <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                                isSelected ? 'text-white' : 'text-emerald-600'
                              }`} />
                              <span className={isSelected ? 'text-white' : 'text-slate-700'}>{deliv}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* 7. BLOG & CONTENT MARKETING                                    */}
          {/* ============================================================== */}
          {activeTab === 'blog' && (
            <motion.div
              key="blog"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-10"
            >
              {/* Header */}
              <motion.div variants={itemVariants} className="border-b border-slate-200 pb-5">
                <span className="text-xs uppercase font-sans tracking-widest text-[#0072BC] font-bold">
                  Service 07 • Inbound Authority & Articles
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-lora text-slate-950 mt-1">
                  {BLOG_CONTENT_DATA.title}
                </h2>
                <p className="mt-2 text-slate-600 text-sm sm:text-base font-sans max-w-3xl">
                  {BLOG_CONTENT_DATA.subtitle}
                </p>
              </motion.div>

              {/* 3 Content Cards */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {BLOG_CONTENT_DATA.plans.map((plan, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-2xl p-6 sm:p-7 bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[11px] font-sans uppercase tracking-wider font-bold text-[#0072BC] mb-1">
                        Deliverable 0{idx + 1}
                      </div>
                      <div className="text-xl font-bold font-lora mb-1 text-slate-950">{plan.item}</div>
                      <div className="text-2xl font-black font-sans text-slate-900 mb-5">
                        {plan.cost}
                      </div>

                      <div className="space-y-2 pt-3 border-t border-slate-200 font-sans">
                        {plan.scope.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* ============================================================== */}
          {/* 8. CREATIVE COLLATERALS (A LA CARTE MENU - 24 ITEMS)           */}
          {/* ============================================================== */}
          {activeTab === 'collaterals' && (
            <motion.div
              key="collaterals"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              {/* Header */}
              <motion.div variants={itemVariants} className="border-b border-slate-200 pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="text-xs uppercase font-sans tracking-widest text-[#0072BC] font-bold">
                    Service 08 • A La Carte Menu (24 Deliverables)
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-lora text-slate-950 mt-1">
                    {CREATIVE_COLLATERALS_DATA.title}
                  </h2>
                  <p className="mt-2 text-slate-600 text-sm sm:text-base font-sans max-w-2xl">
                    {CREATIVE_COLLATERALS_DATA.subtitle}
                  </p>
                </div>

                {/* Instant Search Bar */}
                <div className="w-full md:w-80">
                  <input
                    type="text"
                    placeholder="Search 24 deliverables (e.g. Logo, Video, Ad)..."
                    value={collateralsSearch}
                    onChange={(e) => setCollateralsSearch(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-sans outline-none focus:border-[#0072BC] focus:ring-2 focus:ring-[#0072BC]/20 transition-all shadow-2xs"
                  />
                </div>
              </motion.div>

              {/* Filter Tabs */}
              <motion.div variants={itemVariants} className="flex items-center gap-2 font-sans flex-wrap">
                {[
                  { id: 'all', label: 'All Assets (24)' },
                  { id: 'print', label: 'Marketing Collateral (Print)' },
                  { id: 'digital', label: 'Digital & Ad Creatives' },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setCollateralsFilter(f.id)}
                    type="button"
                    className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      collateralsFilter === f.id
                        ? 'bg-[#0072BC] text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </motion.div>

              {/* Collaterals Table */}
              <motion.div variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
                <div className="overflow-x-auto scrollbar-thin">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm font-sans">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-100/80 uppercase tracking-wider text-[11px] text-slate-600">
                        <th className="py-3 px-4 font-bold min-w-[180px]">Item Name</th>
                        <th className="py-3 px-4 font-bold min-w-[280px]">Scope of Work</th>
                        <th className="py-3 px-4 font-bold min-w-[140px]">Cost (INR)</th>
                        <th className="py-3 px-4 font-bold min-w-[180px]">Adaptations Cost</th>
                        <th className="py-3 px-4 font-bold min-w-[120px]">Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredCollaterals.length > 0 ? (
                        filteredCollaterals.map((item) => (
                          <tr key={item.id} className="border-b border-slate-100 hover:bg-slate-50/60 transition-colors">
                            <td className="py-3 px-4 font-bold text-slate-900">{item.item}</td>
                            <td className="py-3 px-4 text-slate-600 leading-relaxed">{item.scope}</td>
                            <td className="py-3 px-4 font-black text-[#0072BC] whitespace-nowrap">{item.cost}</td>
                            <td className="py-3 px-4 text-slate-500 whitespace-nowrap">{item.adaptationCost}</td>
                            <td className="py-3 px-4 font-medium text-slate-700 whitespace-nowrap flex items-center gap-1.5 mt-3 sm:mt-0">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              <span>{item.timeline}</span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="py-10 text-center text-slate-400">
                            No deliverables found matching "{collateralsSearch}".
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Footnote */}
              <motion.div variants={itemVariants} className="p-4 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                <strong>Notes:</strong> {CREATIVE_COLLATERALS_DATA.note}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default CommercialsPage;
