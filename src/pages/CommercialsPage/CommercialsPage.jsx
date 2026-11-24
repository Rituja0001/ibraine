import React, { useState, useEffect } from 'react';
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
  Flame,
  Star,
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

const CommercialsPage = () => {
  const [activeTab, setActiveTab] = useState('performance');
  const [collateralsFilter, setCollateralsFilter] = useState('all');
  const [collateralsSearch, setCollateralsSearch] = useState('');
  const [expandedDelivGroup, setExpandedDelivGroup] = useState('Campaign Setup');

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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-bold font-lora text-black tracking-tight leading-[1.18] max-w-4xl mx-auto"
          >
            iBraine <span className="text-[#0072BC] italic">Commercial Plans</span>
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
                  {PERFORMANCE_MARKETING_DATA.pricingTiers.map((tier, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                      className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                        tier.popular
                          ? 'bg-gradient-to-br from-[#0072BC] via-[#005ea6] to-[#004d80] text-white shadow-xl shadow-blue-900/15 scale-[1.02] border-2 border-[#ffb400]'
                          : 'bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 text-slate-900'
                      }`}
                    >
                      {tier.popular && (
                        <span className="absolute -top-3 right-6 bg-[#ffed4e] text-slate-950 text-[11px] font-bold font-sans uppercase px-3 py-0.5 rounded-full shadow-md tracking-wide flex items-center gap-1 border border-amber-300">
                          <Flame className="w-3.5 h-3.5 text-amber-700" />
                          <span>Most Popular</span>
                        </span>
                      )}
                      <div>
                        <div className={`text-[11px] font-sans uppercase tracking-wider font-bold mb-2 ${
                          tier.popular ? 'text-blue-100' : 'text-slate-500'
                        }`}>
                          Monthly Ad Spend Bracket
                        </div>
                        <div className="text-lg sm:text-xl font-bold font-lora mb-3">
                          {tier.spendTier}
                        </div>
                        <div className={`text-2xl sm:text-3xl font-black font-sans ${
                          tier.popular ? 'text-white' : 'text-[#0072BC]'
                        }`}>
                          {tier.managementFee}
                        </div>
                        <p className={`mt-2 text-xs sm:text-sm font-sans ${
                          tier.popular ? 'text-blue-100' : 'text-slate-500'
                        }`}>
                          {tier.subtext}
                        </p>
                      </div>
                    </motion.div>
                  ))}
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
                {SEO_PACKAGES_DATA.packages.map((pkg) => (
                  <motion.div
                    key={pkg.id}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all relative ${
                      pkg.popular
                        ? 'bg-gradient-to-br from-[#0072BC] via-[#005ea6] to-[#004d80] text-white shadow-xl shadow-blue-900/15 border-2 border-[#ffb400] scale-[1.02]'
                        : 'bg-white border border-slate-200/90 shadow-xs hover:border-slate-300'
                    }`}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-3 right-5 bg-[#ffed4e] text-slate-950 text-[10px] font-bold font-sans uppercase px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1 border border-amber-300">
                        <Star className="w-3 h-3 fill-slate-950" />
                        <span>Recommended</span>
                      </span>
                    )}
                    <div>
                      <div className={`text-[11px] font-sans uppercase tracking-wider font-bold mb-1 ${
                        pkg.popular ? 'text-blue-100' : 'text-slate-500'
                      }`}>
                        {pkg.contract} Contract
                      </div>
                      <div className="text-xl sm:text-2xl font-bold font-lora mb-2">{pkg.name}</div>
                      <div className={`text-xs font-semibold px-2.5 py-1 rounded-md inline-block mb-4 font-sans ${
                        pkg.popular ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-700'
                      }`}>
                        🎯 {pkg.keywords}
                      </div>
                      <div className="text-2xl sm:text-3xl font-black font-sans">
                        {pkg.cost}
                      </div>
                      <div className={`text-xs font-sans ${pkg.popular ? 'text-blue-100' : 'text-slate-500'}`}>
                        {pkg.costPeriod}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Deliverables Matrix */}
              <motion.div variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
                <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="font-bold text-sm sm:text-base text-slate-950">
                    Full SEO Deliverables Matrix
                  </h3>
                  <span className="text-xs text-slate-500 font-sans">
                    Minimum Contract: 6 Months • Swipe table on mobile →
                  </span>
                </div>

                <div className="overflow-x-auto scrollbar-thin">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm font-sans">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-100/80 uppercase tracking-wider text-[11px] text-slate-600">
                        <th className="py-3 px-4 font-bold min-w-[220px]">Deliverable</th>
                        <th className="py-3 px-4 font-bold text-center">Economy (15)</th>
                        <th className="py-3 px-4 font-bold text-center">Economy Plus (25)</th>
                        <th className="py-3 px-4 font-bold text-center bg-amber-50/70 text-slate-950">Standard (50)</th>
                        <th className="py-3 px-4 font-bold text-center">Premium (100)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SEO_PACKAGES_DATA.categories.map((cat, catIdx) => (
                        <React.Fragment key={catIdx}>
                          <tr className="bg-slate-50 border-y border-slate-200">
                            <td colSpan={5} className="py-2 px-4 font-bold text-xs text-[#0072BC] uppercase tracking-wider">
                              {cat.category}
                            </td>
                          </tr>
                          {cat.items.map((item, itemIdx) => (
                            <tr key={itemIdx} className="border-b border-slate-100 hover:bg-slate-50/50">
                              <td className="py-2.5 px-4 text-slate-800 font-medium">{item.feature}</td>
                              {item.values.map((val, valIdx) => (
                                <td key={valIdx} className={`py-2.5 px-4 text-center ${valIdx === 2 ? 'bg-amber-50/30' : ''}`}>
                                  {val === 'Yes' ? (
                                    <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                                  ) : val === 'No' ? (
                                    <XIcon className="w-4 h-4 text-slate-300 mx-auto" />
                                  ) : (
                                    <span className="font-semibold text-slate-800">{val}</span>
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
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
                {GEO_PACKAGES_DATA.packages.map((pkg) => (
                  <motion.div
                    key={pkg.id}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all relative ${
                      pkg.popular
                        ? 'bg-gradient-to-br from-[#0072BC] via-[#005ea6] to-[#004d80] text-white shadow-xl shadow-blue-900/15 border-2 border-[#ffb400] scale-[1.02]'
                        : 'bg-white border border-slate-200/90 shadow-xs hover:border-slate-300'
                    }`}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-3 right-5 bg-[#ffed4e] text-slate-950 text-[10px] font-bold font-sans uppercase px-2.5 py-0.5 rounded-full shadow-md border border-amber-300">
                        Best Value
                      </span>
                    )}
                    <div>
                      <div className={`text-[11px] font-sans uppercase tracking-wider font-bold mb-1 ${
                        pkg.popular ? 'text-blue-100' : 'text-slate-500'
                      }`}>
                        {pkg.contract} • {pkg.scope}
                      </div>
                      <div className="text-xl sm:text-2xl font-bold font-lora mb-2">{pkg.name} Plan</div>
                      <div className={`text-xs font-semibold px-2.5 py-1 rounded-md inline-block mb-4 font-sans ${
                        pkg.popular ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-700'
                      }`}>
                        🤖 {pkg.keywords}
                      </div>
                      <div className="text-2xl sm:text-3xl font-black font-sans">
                        {pkg.cost}
                      </div>
                      <div className={`text-xs font-sans ${pkg.popular ? 'text-blue-100' : 'text-slate-500'}`}>
                        {pkg.costPeriod}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Deliverables Matrix */}
              <motion.div variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
                <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="font-bold text-sm sm:text-base text-slate-950">
                    Full GEO / AEO Deliverables Matrix
                  </h3>
                  <span className="text-xs text-slate-500 font-sans">Contract: 1 Year • Swipe horizontally →</span>
                </div>

                <div className="overflow-x-auto scrollbar-thin">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm font-sans">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-100/80 uppercase tracking-wider text-[11px] text-slate-600">
                        <th className="py-3 px-4 font-bold min-w-[240px]">Activity / Deliverable</th>
                        <th className="py-3 px-4 font-bold text-center">Silver (25)</th>
                        <th className="py-3 px-4 font-bold text-center bg-amber-50/70 text-slate-950">Gold (50)</th>
                        <th className="py-3 px-4 font-bold text-center">Platinum (75)</th>
                        <th className="py-3 px-4 font-bold text-center">Titanium (100)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {GEO_PACKAGES_DATA.categories.map((cat, catIdx) => (
                        <React.Fragment key={catIdx}>
                          <tr className="bg-slate-50 border-y border-slate-200">
                            <td colSpan={5} className="py-2 px-4 font-bold text-xs text-[#0072BC] uppercase tracking-wider">
                              {cat.category}
                            </td>
                          </tr>
                          {cat.items.map((item, itemIdx) => (
                            <tr key={itemIdx} className="border-b border-slate-100 hover:bg-slate-50/50">
                              <td className="py-2.5 px-4 text-slate-800 font-medium">{item.feature}</td>
                              {item.values.map((val, valIdx) => (
                                <td key={valIdx} className={`py-2.5 px-4 text-center ${valIdx === 1 ? 'bg-amber-50/30 font-bold' : ''}`}>
                                  {val === 'YES' || val === 'Included' ? (
                                    <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold">
                                      <Check className="w-3.5 h-3.5" />
                                      <span>{val}</span>
                                    </span>
                                  ) : (
                                    <span className="font-semibold text-slate-700">{val}</span>
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
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
                {SOCIAL_MEDIA_DATA.packages.map((pkg) => (
                  <motion.div
                    key={pkg.id}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all relative ${
                      pkg.popular
                        ? 'bg-gradient-to-br from-[#0072BC] via-[#005ea6] to-[#004d80] text-white shadow-xl shadow-blue-900/15 border-2 border-[#ffb400] scale-[1.02]'
                        : 'bg-white border border-slate-200/90 shadow-xs hover:border-slate-300'
                    }`}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-3 right-5 bg-[#ffed4e] text-slate-950 text-[10px] font-bold font-sans uppercase px-2.5 py-0.5 rounded-full shadow-md border border-amber-300">
                        Recommended
                      </span>
                    )}
                    <div>
                      <div className={`text-[11px] font-sans uppercase tracking-wider font-bold mb-1 ${
                        pkg.popular ? 'text-blue-100' : 'text-slate-500'
                      }`}>
                        {pkg.platforms}
                      </div>
                      <div className="text-xl sm:text-2xl font-bold font-lora mb-1">{pkg.name} Plan</div>
                      <div className="text-2xl sm:text-3xl font-black font-sans mb-3">
                        {pkg.cost}
                      </div>

                      <div className="space-y-2 pt-3 border-t border-slate-200/20 text-xs font-sans">
                        <div className="flex justify-between">
                          <span className={pkg.popular ? 'text-blue-100' : 'text-slate-600'}>AI Image Creatives:</span>
                          <span className="font-bold">{pkg.aiImages} / mo</span>
                        </div>
                        <div className="flex justify-between">
                          <span className={pkg.popular ? 'text-blue-100' : 'text-slate-600'}>Static Posts:</span>
                          <span className="font-bold">{pkg.staticPosts} / mo</span>
                        </div>
                        <div className="flex justify-between">
                          <span className={pkg.popular ? 'text-blue-100' : 'text-slate-600'}>Reels / Videos / GIFs:</span>
                          <span className="font-bold">{pkg.videosReels} / mo</span>
                        </div>
                        <div className="flex justify-between">
                          <span className={pkg.popular ? 'text-blue-100' : 'text-slate-600'}>AI Videos:</span>
                          <span className="font-bold">{pkg.aiVideos} / mo</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Common Deliverables Grid */}
              <motion.div variants={itemVariants} className="p-5 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Common Deliverables — Included in All SMM Packages</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-sans">
                  {SOCIAL_MEDIA_DATA.commonDeliverables.map((deliv, idx) => (
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

              {/* Platform-Specific Deliverables */}
              <motion.div variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs">
                <h3 className="text-sm sm:text-base font-bold text-slate-950 mb-3 flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-[#0072BC]" />
                  <span>Platform-Specific Activities (Only for Selected Platforms)</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 font-sans">
                  {SOCIAL_MEDIA_DATA.platformDeliverables.map((plat, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-50/70 border border-slate-200/70">
                      <div className="text-xs sm:text-sm font-bold text-[#0072BC] mb-1">{plat.platform}</div>
                      <div className="text-xs text-slate-600 leading-relaxed">{plat.details}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Notes */}
              <motion.div variants={itemVariants} className="p-5 rounded-2xl bg-amber-50/70 border-l-4 border-[#ffb400] text-xs sm:text-sm text-amber-950 font-sans">
                <h4 className="font-bold uppercase tracking-wider text-amber-950 mb-1.5 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-700" />
                  <span>Quota Clarity & Terms</span>
                </h4>
                <ul className="space-y-1 list-disc list-inside">
                  {SOCIAL_MEDIA_DATA.notes.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
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
                {WEBSITE_DEVELOPMENT_DATA.plans.map((plan) => (
                  <motion.div
                    key={plan.id}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                      plan.popular
                        ? 'bg-gradient-to-br from-[#0072BC] via-[#005ea6] to-[#004d80] text-white shadow-xl shadow-blue-900/15 border-2 border-[#ffb400] scale-[1.02]'
                        : 'bg-white border border-slate-200/90 shadow-xs hover:border-slate-300'
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute -top-3.5 right-6 bg-[#ffed4e] text-slate-950 text-xs font-bold font-sans uppercase px-3 py-0.5 rounded-full shadow-md border border-amber-300">
                        Most Popular
                      </span>
                    )}
                    <div>
                      <div className={`text-[11px] font-sans uppercase tracking-wider font-bold mb-1 ${
                        plan.popular ? 'text-blue-100' : 'text-slate-500'
                      }`}>
                        {plan.platform}
                      </div>
                      <div className="text-xl sm:text-2xl font-bold font-lora mb-2">{plan.name}</div>
                      <div className="text-2xl sm:text-3xl font-black font-sans mb-4">
                        {plan.cost}
                      </div>

                      <div className="space-y-2 pt-3 border-t border-slate-200/20 text-xs sm:text-sm font-sans">
                        <div className="flex justify-between">
                          <span className={plan.popular ? 'text-blue-100' : 'text-slate-500'}>Theme:</span>
                          <span className="font-semibold">{plan.themeType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className={plan.popular ? 'text-blue-100' : 'text-slate-500'}>Pages:</span>
                          <span className="font-semibold">{plan.pages}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className={plan.popular ? 'text-blue-100' : 'text-slate-500'}>Products:</span>
                          <span className="font-semibold">{plan.products}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className={plan.popular ? 'text-blue-100' : 'text-slate-500'}>Timeline:</span>
                          <span className={`font-semibold ${plan.popular ? 'text-[#ffed4e]' : 'text-emerald-500'}`}>{plan.timeToLive}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className={plan.popular ? 'text-blue-100' : 'text-slate-500'}>Support:</span>
                          <span className="font-semibold">{plan.support}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Feature Checklist Table */}
              <motion.div variants={itemVariants} className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
                <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200">
                  <h3 className="font-bold text-sm sm:text-base text-slate-950">
                    Standard Built-in Features Comparison
                  </h3>
                </div>
                <div className="overflow-x-auto scrollbar-thin">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm font-sans">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-100/80 uppercase tracking-wider text-[11px] text-slate-600">
                        <th className="py-3 px-4 font-bold min-w-[220px]">Feature</th>
                        <th className="py-3 px-4 font-bold text-center">Non-Ecommerce</th>
                        <th className="py-3 px-4 font-bold text-center bg-amber-50/70 text-slate-950">E-Commerce</th>
                        <th className="py-3 px-4 font-bold text-center">Custom Website</th>
                      </tr>
                    </thead>
                    <tbody>
                      {WEBSITE_DEVELOPMENT_DATA.features.map((feat, idx) => (
                        <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50/50">
                          <td className="py-2.5 px-4 font-medium text-slate-800">{feat.feature}</td>
                          <td className="py-2.5 px-4 text-center">
                            {feat.nonEcom === 'YES' ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : feat.nonEcom}
                          </td>
                          <td className="py-2.5 px-4 text-center bg-amber-50/30 font-semibold">
                            {feat.ecom === 'YES' ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : feat.ecom}
                          </td>
                          <td className="py-2.5 px-4 text-center">
                            {feat.custom === 'YES' ? <Check className="w-4 h-4 text-emerald-600 mx-auto" /> : feat.custom}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
                {GA4_PACKAGES_DATA.packages.map((pkg) => (
                  <motion.div
                    key={pkg.id}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                      pkg.popular
                        ? 'bg-gradient-to-br from-[#0072BC] via-[#005ea6] to-[#004d80] text-white shadow-xl shadow-blue-900/15 border-2 border-[#ffb400] scale-[1.02]'
                        : 'bg-white border border-slate-200/90 shadow-xs hover:border-slate-300'
                    }`}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-3.5 right-6 bg-[#ffed4e] text-slate-950 text-xs font-bold font-sans uppercase px-3 py-0.5 rounded-full shadow-md border border-amber-300">
                        Recommended
                      </span>
                    )}
                    <div>
                      <div className="text-xl sm:text-2xl font-bold font-lora mb-1">{pkg.name} Plan</div>
                      <p className={`text-xs mb-3 font-sans ${pkg.popular ? 'text-blue-100' : 'text-slate-500'}`}>
                        {pkg.description}
                      </p>
                      <div className="text-2xl sm:text-3xl font-black font-sans mb-5">
                        {pkg.cost}
                      </div>

                      <div className="space-y-2 pt-3 border-t border-slate-200/20 font-sans">
                        {pkg.deliverables.map((deliv, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                            <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                              pkg.popular ? 'text-[#ffed4e]' : 'text-emerald-600'
                            }`} />
                            <span className={pkg.popular ? 'text-white' : 'text-slate-700'}>{deliv}</span>
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
