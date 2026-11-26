import React, { useState, useEffect } from 'react';
import {
  Building2,
  Target,
  LayoutGrid,
  Palette,
  Cpu,
  FolderUp,
  Server,
  Search,
  ShoppingCart,
  Calendar,
  Users,
  FileCheck,
  Check,
  CheckCircle2,
  Printer,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Briefcase,
  ChevronDown,
} from 'lucide-react';

const INITIAL_FORM = {
  // Sec 01: Business Information
  companyName: '',
  contactPerson: '',
  designation: '',
  email: '',
  phone: '',
  alternatePhone: '',
  existingWebsite: '',
  businessAddress: '',
  countryCity: '',
  industryCategory: '',
  businessDescription: '',

  // Sec 02: Project Overview
  websiteType: 'Corporate / Business Website',
  projectNature: 'New Website',
  primaryObjective: 'Generate Leads',
  targetAudience: '',
  targetLocations: '',
  competitorDifference: '',
  topExpectations: '',

  // Sec 03: Website Structure & Pages
  requiredPages: ['Home', 'About Us', 'Our Services', 'Contact Us'],
  preferredSitemap: '',
  approxPages: '',
  separateLandingPages: 'No',
  multilingual: 'No',
  languages: '',

  // Sec 04: Design & Branding Preferences
  existingBrandIdentity: ['Logo'],
  designStyle: 'Modern & Minimal',
  preferredColors: '',
  referenceWebsites: '',
  referenceLikes: '',
  competitorsReview: '',
  themePreference: 'Light Theme',
  animationsInteractive: 'Subtle & Minimal',
  specificDesignInstructions: '',

  // Sec 05: Functionality & Features
  requiredFeatures: [
    'Contact / Enquiry Form',
    'WhatsApp Integration',
    'Social Media Integration',
    'Google Maps Integration',
  ],
  additionalFunctionality: '',

  // Sec 06: Content & Brand Assets
  contentProvider: 'Client',
  readyContent: 'In Progress (Ready Soon)',
  hasImages: 'Yes, High-Res Photos Available',
  hasVideos: 'No, Need Video Production',
  needsCopywriting: 'No, We have internal content',
  needsStockAI: 'Yes, Curate / Generate Stock & AI',
  assetsChecklist: ['Company Logo', 'Brand Guidelines'],
  assetDriveLinks: '',

  // Sec 07: Technical Requirements
  ownsDomain: 'No',
  domainName: '',
  ownsHosting: 'No',
  hostingProvider: '',
  preferredTech: 'WordPress',
  needsAdminPanel: 'Yes',
  needsCMS: 'Yes',
  needsBusinessEmail: 'Yes',
  needsGA4: 'Yes',
  needsGSC: 'Yes',
  needsSEO: 'Yes',
  thirdPartyAPIs: '',
  existingCredentials: 'No',

  // Sec 08: SEO & Digital Marketing
  seoServicesRequired: ['Technical SEO', 'On-Page SEO', 'Local SEO'],
  hasKeywordResearch: 'No, Need iBraine to do research',
  targetKeywords: '',
  needsGoogleBusiness: 'Yes',
  needsPixelAdsTracking: 'Yes',
  needsBlogSystem: 'Yes',
  hasExistingAgency: 'No',

  // Sec 09: E-Commerce Requirements
  isEcommerce: 'No',
  approxProducts: '',
  productCategories: '',
  productVariations: 'No',
  paymentMethods: ['Razorpay', 'Stripe'],
  shippingIntegration: '',
  inventoryManagement: 'Yes',
  discountCoupons: 'Yes',
  customerAccounts: 'Yes',
  orderManagement: 'Yes',
  gstInvoice: 'Yes',
  erpMarketplaceIntegration: '',

  // Sec 10: Budget & Project Timeline
  budgetTier: '₹50,000–₹1,00,000',
  startDate: '',
  launchDate: '',
  fixedDeadline: 'No',
  deadlineReason: '',
  ongoingSupport: 'Yes',
  additionalServices: '',

  // Sec 11: Project Management & Approvals
  primaryContact: '',
  designApprover: '',
  contentProviderName: '',
  communicationChannel: ['Email', 'WhatsApp'],
  meetingFrequency: 'Weekly',
  approvalProcess: '',
  specialDependencies: '',

  // Sec 12: Final Notes & Confirmation
  idealWebsiteDescription: '',
  threeImportantFocus: '',
  thingsToAvoid: '',
  additionalRequirements: '',
  confirmAccurate: false,
  confirmProposalTerms: false,
  confirmTimelineDependency: false,
  clientSignName: '',
  clientSignCompany: '',
  signDate: new Date().toISOString().split('T')[0],
  authorizedAgreement: false,
};

const WebQuestionnairePage = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Website Design & Development Questionnaire | iBraine';
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Enforce noindex, nofollow for search engines
    let meta = document.querySelector("meta[name='robots']");
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'robots';
      document.head.appendChild(meta);
    }
    meta.content = 'noindex, nofollow';

    return () => {
      meta.content = 'index, follow';
    };
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleArrayToggle = (field, item) => {
    setFormData((prev) => {
      const currentList = prev[field] || [];
      if (currentList.includes(item)) {
        return { ...prev, [field]: currentList.filter((i) => i !== item) };
      } else {
        return { ...prev, [field]: [...currentList, item] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.companyName || !formData.contactPerson || !formData.email || !formData.phone) {
      alert('Please fill out the required primary contact information in Section 01.');
      window.scrollTo({ top: 120, behavior: 'smooth' });
      return;
    }
    if (!formData.authorizedAgreement) {
      alert('Please check the Authorized Confirmation in Section 12 before submitting.');
      return;
    }
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#f0f4f8] min-h-screen text-slate-800 pb-24 selection:bg-[#0b4a8b] selection:text-white font-sans antialiased">
      {/* High-visibility placeholder styling */}
      <style>{`
        input::placeholder, textarea::placeholder {
          color: #94a3b8 !important;
          opacity: 1 !important;
          font-weight: 400 !important;
        }
      `}</style>

      {/* ===================== HERO BANNER ===================== */}
      <header className="relative pt-8 pb-6 sm:pt-10 sm:pb-8 bg-gradient-to-b from-slate-100/90 via-white to-[#f0f4f8] border-b border-slate-200/70 overflow-hidden mb-6 sm:mb-8 text-center">
        {/* Soft Ambient Brand Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[300px] bg-gradient-to-r from-[#ffed4e]/20 via-[#ffb400]/15 to-[#0072BC]/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-12 lg:px-[80px] xl:px-[100px] relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-[#0072BC] text-xs font-sans font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#ffb400]" />
            <span>WEBSITE DESIGN & DEVELOPMENT</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-lora text-slate-950 tracking-tight leading-tight">
            Client Project Discovery Questionnaire
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto font-sans leading-relaxed">
            <strong>Welcome!</strong> Thank you for choosing our website design and development services. Please complete this questionnaire so we can understand your business, expectations, design preferences, and technical requirements.
          </p>
        </div>
      </header>

      {/* ===================== MAIN FORM CONTAINER ===================== */}
      <main className="w-full max-w-[1560px] mx-auto px-6 sm:px-12 lg:px-[80px] xl:px-[100px] pb-16">
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

          {/* ================= SECTION 01: BUSINESS INFORMATION ================= */}
          <div className="bg-white rounded-xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-4 sm:p-5 md:p-6 lg:p-7">
            <div className="flex items-center gap-2 text-[#0b4a8b] font-bold text-xs sm:text-sm tracking-wider uppercase mb-6">
              <Building2 className="w-4 h-4 text-[#0b4a8b]" />
              <span>1. PRIMARY INFORMATION</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  COMPANY / BUSINESS NAME <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  placeholder="e.g. Acme Innovations Pvt Ltd"
                  className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  CONTACT PERSON NAME <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactPerson}
                  onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  DESIGNATION
                </label>
                <input
                  type="text"
                  value={formData.designation}
                  onChange={(e) => handleInputChange('designation', e.target.value)}
                  placeholder="e.g. Founder / Marketing Director"
                  className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  OFFICIAL EMAIL ADDRESS <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="name@company.com"
                  className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  WHATSAPP NUMBER <span className="text-red-500">*</span>
                </label>
                <div className="flex rounded-lg border border-slate-200 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-[#0b4a8b]/20 focus-within:border-[#0b4a8b] transition-all">
                  <div className="flex items-center gap-1.5 px-3 bg-slate-50 border-r border-slate-200 text-xs font-semibold text-slate-700 select-none">
                    <span className="text-base leading-none">🇮🇳</span>
                    <span>+91</span>
                  </div>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="98765 43210"
                    className="w-full h-11 px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  ALTERNATE PHONE NUMBER
                </label>
                <div className="flex rounded-lg border border-slate-200 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-[#0b4a8b]/20 focus-within:border-[#0b4a8b] transition-all">
                  <div className="flex items-center gap-1.5 px-3 bg-slate-50 border-r border-slate-200 text-xs font-semibold text-slate-700 select-none">
                    <span className="text-base leading-none">🇮🇳</span>
                    <span>+91</span>
                  </div>
                  <input
                    type="tel"
                    value={formData.alternatePhone}
                    onChange={(e) => handleInputChange('alternatePhone', e.target.value)}
                    placeholder="Optional contact number"
                    className="w-full h-11 px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  COMPANY WEBSITE (IF EXISTING)
                </label>
                <input
                  type="text"
                  value={formData.existingWebsite}
                  onChange={(e) => handleInputChange('existingWebsite', e.target.value)}
                  placeholder="https://www.yourdomain.com"
                  className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  COUNTRY / CITY
                </label>
                <input
                  type="text"
                  value={formData.countryCity}
                  onChange={(e) => handleInputChange('countryCity', e.target.value)}
                  placeholder="e.g. Mumbai, India / Dubai, UAE"
                  className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                />
              </div>

              <div className="sm:col-span-2 lg:col-span-2">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  BUSINESS ADDRESS
                </label>
                <input
                  type="text"
                  value={formData.businessAddress}
                  onChange={(e) => handleInputChange('businessAddress', e.target.value)}
                  placeholder="Full office address with postal code"
                  className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                />
              </div>

              <div className="sm:col-span-2 lg:col-span-2">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  INDUSTRY / BUSINESS CATEGORY <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.industryCategory}
                  onChange={(e) => handleInputChange('industryCategory', e.target.value)}
                  placeholder="e.g. Healthcare, B2B SaaS, E-commerce, Real Estate, Fashion"
                  className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                />
              </div>

              <div className="sm:col-span-2 lg:col-span-4">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  BRIEFLY DESCRIBE YOUR BUSINESS AND SERVICES <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.businessDescription}
                  onChange={(e) => handleInputChange('businessDescription', e.target.value)}
                  placeholder="Provide a 2-3 sentence overview of what your business does and key solutions you offer..."
                  className="w-full p-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                />
              </div>
            </div>
          </div>

          {/* ================= SECTION 02: PROJECT OVERVIEW ================= */}
          <div className="bg-white rounded-xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-4 sm:p-5 md:p-6 lg:p-7">
            <div className="flex items-center gap-2 text-[#0b4a8b] font-bold text-xs sm:text-sm tracking-wider uppercase mb-6">
              <Target className="w-4 h-4 text-[#0b4a8b]" />
              <span>2. PROJECT OVERVIEW</span>
            </div>

            <div className="space-y-5">
              {/* Website Type */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                  WHAT TYPE OF WEBSITE DO YOU REQUIRE? <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                  {[
                    'Corporate / Business Website',
                    'E-commerce Website',
                    'Portfolio Website',
                    'Landing Page',
                    'Educational Website',
                    'Healthcare / Hospital Website',
                    'Real Estate Website',
                    'Blog / News Website',
                    'Web Application / Portal',
                    'Other',
                  ].map((type) => {
                    const active = formData.websiteType === type;
                    return (
                      <button
                        type="button"
                        key={type}
                        onClick={() => handleInputChange('websiteType', type)}
                        className={`h-11 px-2.5 rounded-lg border text-[11px] sm:text-xs font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                          active
                            ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Is this a new website or redesign? */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                  IS THIS A NEW WEBSITE OR REDESIGN?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    'New Website',
                    'Existing Website Redesign',
                    'Website Migration',
                    'New Features in Existing',
                  ].map((nature) => {
                    const active = formData.projectNature === nature;
                    return (
                      <button
                        type="button"
                        key={nature}
                        onClick={() => handleInputChange('projectNature', nature)}
                        className={`h-11 px-3 rounded-lg border text-xs sm:text-sm font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                          active
                            ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {nature}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Primary Objective */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                  WHAT IS THE PRIMARY OBJECTIVE OF YOUR WEBSITE? <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    'Generate Leads',
                    'Sell Products Online',
                    'Promote Services',
                    'Build Brand Awareness',
                    'Provide Information',
                    'Online Bookings',
                    'Customer Portal',
                    'Other',
                  ].map((obj) => {
                    const active = formData.primaryObjective === obj;
                    return (
                      <button
                        type="button"
                        key={obj}
                        onClick={() => handleInputChange('primaryObjective', obj)}
                        className={`h-11 px-3 rounded-lg border text-xs sm:text-sm font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                          active
                            ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {obj}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Target Audience & Locations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    WHO IS YOUR TARGET AUDIENCE?
                  </label>
                  <input
                    type="text"
                    value={formData.targetAudience}
                    onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                    placeholder="e.g. B2B CXOs, Homebuyers 25-45, Students, Direct Consumers"
                    className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    WHICH LOCATIONS OR MARKETS DO YOU WANT TO TARGET?
                  </label>
                  <input
                    type="text"
                    value={formData.targetLocations}
                    onChange={(e) => handleInputChange('targetLocations', e.target.value)}
                    placeholder="e.g. PAN India, Tier-1 Metro Cities, USA & UK Global"
                    className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                  />
                </div>
              </div>

              {/* Differences & Expectations */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  WHAT MAKES YOUR BUSINESS DIFFERENT FROM COMPETITORS?
                </label>
                <textarea
                  rows={2}
                  value={formData.competitorDifference}
                  onChange={(e) => handleInputChange('competitorDifference', e.target.value)}
                  placeholder="Your unique selling propositions, proprietary process, awards, pricing, customer service..."
                  className="w-full p-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  WHAT ARE YOUR TOP THREE EXPECTATIONS FROM THIS WEBSITE?
                </label>
                <textarea
                  rows={2}
                  value={formData.topExpectations}
                  onChange={(e) => handleInputChange('topExpectations', e.target.value)}
                  placeholder="1. High conversion rate on ads, 2. Fast 2s load time, 3. Modern premium visual identity..."
                  className="w-full p-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                />
              </div>
            </div>
          </div>

          {/* ================= SECTION 03: WEBSITE STRUCTURE & PAGES ================= */}
          <div className="bg-white rounded-xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-4 sm:p-5 md:p-6 lg:p-7">
            <div className="flex items-center gap-2 text-[#0b4a8b] font-bold text-xs sm:text-sm tracking-wider uppercase mb-6">
              <LayoutGrid className="w-4 h-4 text-[#0b4a8b]" />
              <span>3. WEBSITE STRUCTURE & PAGES</span>
            </div>

            <div className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                  WHICH PAGES DO YOU REQUIRE? (SELECT MULTIPLE) <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                  {[
                    'Home',
                    'About Us',
                    'Our Services',
                    'Service Detail Pages',
                    'Products',
                    'Product Detail Pages',
                    'Our Team',
                    'Portfolio / Projects',
                    'Case Studies',
                    'Testimonials / Reviews',
                    'Blog / News',
                    'Contact Us',
                    'FAQ',
                    'Privacy Policy',
                    'Terms & Conditions',
                    'Other Custom Pages',
                  ].map((page) => {
                    const checked = formData.requiredPages.includes(page);
                    return (
                      <label
                        key={page}
                        className={`flex items-center gap-2.5 p-2.5 rounded-lg border text-xs font-medium cursor-pointer transition-all select-none ${
                          checked
                            ? 'bg-blue-50/70 border-[#0b4a8b] text-[#0b4a8b] font-semibold'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => handleArrayToggle('requiredPages', page)}
                          className="w-4 h-4 rounded border-slate-300 text-[#0b4a8b] focus:ring-0 cursor-pointer accent-[#0b4a8b]"
                        />
                        <span>{page}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    PREFERRED SITEMAP OR WEBSITE STRUCTURE
                  </label>
                  <input
                    type="text"
                    value={formData.preferredSitemap}
                    onChange={(e) => handleInputChange('preferredSitemap', e.target.value)}
                    placeholder="e.g. Header Nav: Home, Solutions, Company, Case Studies, Contact"
                    className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    APPROXIMATELY HOW MANY PAGES ARE REQUIRED?
                  </label>
                  <input
                    type="text"
                    value={formData.approxPages}
                    onChange={(e) => handleInputChange('approxPages', e.target.value)}
                    placeholder="e.g. 5-10 pages, 15-20 pages, 30+ pages"
                    className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                    DO YOU NEED SEPARATE CAMPAIGN LANDING PAGES?
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {['Yes', 'No'].map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => handleInputChange('separateLandingPages', opt)}
                        className={`h-11 px-3 rounded-lg border text-xs sm:text-sm font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                          formData.separateLandingPages === opt
                            ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                    DO YOU NEED MULTILINGUAL FUNCTIONALITY?
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {['Yes', 'No'].map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => handleInputChange('multilingual', opt)}
                        className={`h-11 px-3 rounded-lg border text-xs sm:text-sm font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                          formData.multilingual === opt
                            ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {formData.multilingual === 'Yes' && (
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    SPECIFY LANGUAGES REQUIRED
                  </label>
                  <input
                    type="text"
                    value={formData.languages}
                    onChange={(e) => handleInputChange('languages', e.target.value)}
                    placeholder="e.g. English, Hindi, Arabic, Spanish"
                    className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                  />
                </div>
              )}
            </div>
          </div>

          {/* ================= SECTION 04: DESIGN & BRANDING PREFERENCES ================= */}
          <div className="bg-white rounded-xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-4 sm:p-5 md:p-6 lg:p-7">
            <div className="flex items-center gap-2 text-[#0b4a8b] font-bold text-xs sm:text-sm tracking-wider uppercase mb-6">
              <Palette className="w-4 h-4 text-[#0b4a8b]" />
              <span>4. DESIGN & BRANDING PREFERENCES</span>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {/* Existing Brand Identity */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                  DO YOU HAVE AN EXISTING BRAND IDENTITY?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {['Logo', 'Brand Guidelines', 'Brand Colours', 'Typography / Fonts', 'None'].map((asset) => {
                    const checked = formData.existingBrandIdentity.includes(asset);
                    return (
                      <button
                        type="button"
                        key={asset}
                        onClick={() => handleArrayToggle('existingBrandIdentity', asset)}
                        className={`h-11 px-3 rounded-lg border text-xs font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                          checked
                            ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {asset}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Design Style */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                  PREFERRED WEBSITE DESIGN STYLE
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                  {[
                    'Modern & Minimal',
                    'Premium & Luxury',
                    'Corporate & Pro',
                    'Creative & Interactive',
                    'Bold & Contemporary',
                    'Clean & Simple',
                  ].map((style) => {
                    const active = formData.designStyle === style;
                    return (
                      <button
                        type="button"
                        key={style}
                        onClick={() => handleInputChange('designStyle', style)}
                        className={`h-11 px-2.5 rounded-lg border text-xs font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                          active
                            ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {style}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Theme Preference & Animations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                    THEME PREFERENCE
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {['Light Theme', 'Dark Theme', 'Both / Mixed'].map((theme) => (
                      <button
                        type="button"
                        key={theme}
                        onClick={() => handleInputChange('themePreference', theme)}
                        className={`h-11 px-2.5 rounded-lg border text-xs font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                          formData.themePreference === theme
                            ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {theme}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                    ANIMATIONS & INTERACTIVE ELEMENTS
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {['Subtle & Minimal', 'Rich & Interactive', 'None'].map((anim) => (
                      <button
                        type="button"
                        key={anim}
                        onClick={() => handleInputChange('animationsInteractive', anim)}
                        className={`h-11 px-2.5 rounded-lg border text-xs font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                          formData.animationsInteractive === anim
                            ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {anim}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Colours & References */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    PREFERRED COLOUR COMBINATION
                  </label>
                  <input
                    type="text"
                    value={formData.preferredColors}
                    onChange={(e) => handleInputChange('preferredColors', e.target.value)}
                    placeholder="e.g. Navy Blue #0072BC, White, Gold Accents"
                    className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    REFERENCE WEBSITES (SHARE 2–5 URLS)
                  </label>
                  <input
                    type="text"
                    value={formData.referenceWebsites}
                    onChange={(e) => handleInputChange('referenceWebsites', e.target.value)}
                    placeholder="https://example1.com, https://example2.com"
                    className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  WHAT DO YOU LIKE ABOUT THOSE REFERENCE WEBSITES?
                </label>
                <textarea
                  rows={2}
                  value={formData.referenceLikes}
                  onChange={(e) => handleInputChange('referenceLikes', e.target.value)}
                  placeholder="e.g. Typography, clear product navigation, card design, seamless checkout..."
                  className="w-full p-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    COMPETITOR WEBSITES WE SHOULD REVIEW
                  </label>
                  <input
                    type="text"
                    value={formData.competitorsReview}
                    onChange={(e) => handleInputChange('competitorsReview', e.target.value)}
                    placeholder="e.g. competitor1.com, competitor2.com"
                    className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    SPECIFIC DESIGN INSTRUCTIONS
                  </label>
                  <input
                    type="text"
                    value={formData.specificDesignInstructions}
                    onChange={(e) => handleInputChange('specificDesignInstructions', e.target.value)}
                    placeholder="Any specific dos and don'ts for layout or imagery"
                    className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= SECTION 05: FUNCTIONALITY & FEATURES ================= */}
          <div className="bg-white rounded-xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-4 sm:p-5 md:p-6 lg:p-7">
            <div className="flex items-center gap-2 text-[#0b4a8b] font-bold text-xs sm:text-sm tracking-wider uppercase mb-6">
              <Cpu className="w-4 h-4 text-[#0b4a8b]" />
              <span>5. FUNCTIONALITY & FEATURES</span>
            </div>

            <div className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                  SELECT ALL REQUIRED FEATURES (CHECK ALL THAT APPLY)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                  {[
                    'Contact / Enquiry Form',
                    'WhatsApp Integration',
                    'Click-to-Call',
                    'Newsletter Subscription',
                    'Live Chat / Chatbot',
                    'Appointment Booking',
                    'Payment Gateway',
                    'User Registration / Login',
                    'Admin Dashboard',
                    'CMS for Page Content',
                    'Product / Service Catalog',
                    'Search & Filters',
                    'Customer Dashboard',
                    'CRM Integration',
                    'Google Maps Integration',
                    'Social Media Feeds',
                    'Blog Management',
                    'Reviews & Ratings',
                    'File Upload / Download',
                    'Email Notifications',
                    'SMS / WhatsApp Alerts',
                    'Multi-language Support',
                    'Custom API Integration',
                    'Custom Workflow Features',
                  ].map((feat) => {
                    const checked = formData.requiredFeatures.includes(feat);
                    return (
                      <label
                        key={feat}
                        className={`flex items-center gap-2.5 p-2.5 rounded-lg border text-xs font-medium cursor-pointer transition-all select-none ${
                          checked
                            ? 'bg-blue-50/70 border-[#0b4a8b] text-[#0b4a8b] font-semibold'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => handleArrayToggle('requiredFeatures', feat)}
                          className="w-4 h-4 rounded border-slate-300 text-[#0b4a8b] focus:ring-0 cursor-pointer accent-[#0b4a8b]"
                        />
                        <span>{feat}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  ADDITIONAL FUNCTIONALITY REQUIREMENTS / SPECIFIC WORKFLOW
                </label>
                <textarea
                  rows={3}
                  value={formData.additionalFunctionality}
                  onChange={(e) => handleInputChange('additionalFunctionality', e.target.value)}
                  placeholder="Describe any custom calculator, multi-step quotation form, automated invoice generation, or third-party CRM sync..."
                  className="w-full p-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                />
              </div>
            </div>
          </div>

          {/* ================= SECTION 06: CONTENT & BRAND ASSETS ================= */}
          <div className="bg-white rounded-xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-4 sm:p-5 md:p-6 lg:p-7">
            <div className="flex items-center gap-2 text-[#0b4a8b] font-bold text-xs sm:text-sm tracking-wider uppercase mb-6">
              <FolderUp className="w-4 h-4 text-[#0b4a8b]" />
              <span>6. CONTENT & BRAND ASSETS</span>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {/* Content Provider */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                  WHO WILL PROVIDE THE WEBSITE CONTENT?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {['Client', 'Development Team', 'Content Writing Service'].map((prov) => (
                    <button
                      type="button"
                      key={prov}
                      onClick={() => handleInputChange('contentProvider', prov)}
                      className={`h-11 px-3 rounded-lg border text-xs sm:text-sm font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                        formData.contentProvider === prov
                          ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {prov}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ready Content & Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                    DO YOU HAVE READY CONTENT FOR ALL PAGES?
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {['Yes - Ready', 'In Progress', 'No - Need Help'].map((item) => (
                      <button
                        type="button"
                        key={item}
                        onClick={() => handleInputChange('readyContent', item)}
                        className={`h-11 px-2 rounded-lg border text-xs font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                          formData.readyContent === item
                            ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                    HIGH-QUALITY BUSINESS / PRODUCT IMAGES?
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {['Yes - Available', 'Need Photoshoot', 'Need Stock/AI'].map((item) => (
                      <button
                        type="button"
                        key={item}
                        onClick={() => handleInputChange('hasImages', item)}
                        className={`h-11 px-2 rounded-lg border text-xs font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                          formData.hasImages === item
                            ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Videos, Copywriting, Stock/AI */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                    PROFESSIONAL VIDEOS?
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {['Yes', 'No'].map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => handleInputChange('hasVideos', opt)}
                        className={`h-11 px-3 rounded-lg border text-xs sm:text-sm font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                          formData.hasVideos === opt
                            ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                    REQUIRE COPYWRITING?
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {['Yes', 'No'].map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => handleInputChange('needsCopywriting', opt)}
                        className={`h-11 px-3 rounded-lg border text-xs sm:text-sm font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                          formData.needsCopywriting === opt
                            ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                    REQUIRE STOCK / AI CREATIVES?
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {['Yes', 'No'].map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => handleInputChange('needsStockAI', opt)}
                        className={`h-11 px-3 rounded-lg border text-xs sm:text-sm font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                          formData.needsStockAI === opt
                            ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Upload Checklist & Drive Link */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                  UPLOAD OR SHARE ASSETS CHECKLIST
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-3">
                  {[
                    'Company Logo',
                    'Brand Guidelines',
                    'Company Brochure',
                    'Product Images',
                    'Team Photos',
                    'Service Info',
                    'Marketing Materials',
                  ].map((asset) => {
                    const checked = formData.assetsChecklist.includes(asset);
                    return (
                      <label
                        key={asset}
                        className={`flex items-center gap-2 p-2.5 rounded-lg border text-xs font-medium cursor-pointer transition-all select-none ${
                          checked
                            ? 'bg-blue-50/70 border-[#0b4a8b] text-[#0b4a8b] font-semibold'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => handleArrayToggle('assetsChecklist', asset)}
                          className="w-4 h-4 rounded border-slate-300 text-[#0b4a8b] focus:ring-0 cursor-pointer accent-[#0b4a8b]"
                        />
                        <span>{asset}</span>
                      </label>
                    );
                  })}
                </div>

                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  GOOGLE DRIVE / DROPBOX SHAREABLE LINK
                </label>
                <input
                  type="text"
                  value={formData.assetDriveLinks}
                  onChange={(e) => handleInputChange('assetDriveLinks', e.target.value)}
                  placeholder="https://drive.google.com/drive/folders/your-asset-folder"
                  className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                />
              </div>
            </div>
          </div>

          {/* ================= SECTION 07: TECHNICAL REQUIREMENTS ================= */}
          <div className="bg-white rounded-xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-4 sm:p-5 md:p-6 lg:p-7">
            <div className="flex items-center gap-2 text-[#0b4a8b] font-bold text-xs sm:text-sm tracking-wider uppercase mb-6">
              <Server className="w-4 h-4 text-[#0b4a8b]" />
              <span>7. TECHNICAL REQUIREMENTS</span>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {/* Domain & Hosting */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                    DO YOU ALREADY OWN A DOMAIN?
                  </label>
                  <div className="grid grid-cols-2 gap-2.5 mb-2">
                    {['Yes', 'No'].map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => handleInputChange('ownsDomain', opt)}
                        className={`h-11 px-3 rounded-lg border text-xs sm:text-sm font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                          formData.ownsDomain === opt
                            ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  {formData.ownsDomain === 'Yes' && (
                    <input
                      type="text"
                      value={formData.domainName}
                      onChange={(e) => handleInputChange('domainName', e.target.value)}
                      placeholder="Enter registered domain name (e.g. acme.com)"
                      className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                    />
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                    DO YOU ALREADY HAVE HOSTING?
                  </label>
                  <div className="grid grid-cols-2 gap-2.5 mb-2">
                    {['Yes', 'No'].map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => handleInputChange('ownsHosting', opt)}
                        className={`h-11 px-3 rounded-lg border text-xs sm:text-sm font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                          formData.ownsHosting === opt
                            ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  {formData.ownsHosting === 'Yes' && (
                    <input
                      type="text"
                      value={formData.hostingProvider}
                      onChange={(e) => handleInputChange('hostingProvider', e.target.value)}
                      placeholder="Hosting provider (e.g. Hostinger, AWS, GoDaddy)"
                      className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                    />
                  )}
                </div>
              </div>

              {/* Preferred Technology */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                  PREFERRED TECHNOLOGY (IF ANY)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                  {['WordPress', 'Shopify', 'React.js', 'Next.js', 'Custom Dev', 'No Preference'].map((tech) => (
                    <button
                      type="button"
                      key={tech}
                      onClick={() => handleInputChange('preferredTech', tech)}
                      className={`h-11 px-2.5 rounded-lg border text-xs font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                        formData.preferredTech === tech
                          ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>

              {/* Requirements Grid (Admin, CMS, Email, GA4, GSC, SEO) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {[
                  { label: 'Admin Panel', field: 'needsAdminPanel' },
                  { label: 'CMS Editor', field: 'needsCMS' },
                  { label: 'Business Email', field: 'needsBusinessEmail' },
                  { label: 'Google Analytics 4', field: 'needsGA4' },
                  { label: 'Search Console', field: 'needsGSC' },
                  { label: 'Initial SEO Setup', field: 'needsSEO' },
                ].map((item) => (
                  <div key={item.field} className="p-3 rounded-lg border border-slate-100 bg-slate-50/50">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 truncate">
                      {item.label}
                    </span>
                    <div className="grid grid-cols-2 gap-1.5">
                      {['Yes', 'No'].map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => handleInputChange(item.field, opt)}
                          className={`h-8 rounded text-xs font-semibold transition-all flex items-center justify-center cursor-pointer ${
                            formData[item.field] === opt
                              ? 'bg-[#0b4a8b] text-white'
                              : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Third Party APIs & Existing Source Code */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    THIRD-PARTY SOFTWARE / API INTEGRATIONS
                  </label>
                  <input
                    type="text"
                    value={formData.thirdPartyAPIs}
                    onChange={(e) => handleInputChange('thirdPartyAPIs', e.target.value)}
                    placeholder="e.g. Zoho CRM, Salesforce, ERP, Hubspot, WhatsApp API"
                    className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                    EXISTING WEBSITE CREDENTIALS / SOURCE CODE?
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {['Yes', 'No', 'N/A'].map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => handleInputChange('existingCredentials', opt)}
                        className={`h-11 px-3 rounded-lg border text-xs sm:text-sm font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                          formData.existingCredentials === opt
                            ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= SECTION 08: SEO & DIGITAL MARKETING ================= */}
          <div className="bg-white rounded-xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-4 sm:p-5 md:p-6 lg:p-7">
            <div className="flex items-center gap-2 text-[#0b4a8b] font-bold text-xs sm:text-sm tracking-wider uppercase mb-6">
              <Search className="w-4 h-4 text-[#0b4a8b]" />
              <span>8. SEO & DIGITAL MARKETING</span>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {/* SEO Services */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                  DO YOU REQUIRE SEO SERVICES? (CHECK ALL THAT APPLY)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                  {['Technical SEO', 'On-Page SEO', 'Off-Page SEO', 'Local SEO', 'GEO / AEO', 'Not Required'].map(
                    (seo) => {
                      const checked = formData.seoServicesRequired.includes(seo);
                      return (
                        <button
                          type="button"
                          key={seo}
                          onClick={() => handleArrayToggle('seoServicesRequired', seo)}
                          className={`h-11 px-2 rounded-lg border text-xs font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                            checked
                              ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          {seo}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Keywords & Research */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                    DO YOU HAVE EXISTING KEYWORD RESEARCH?
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {['Yes', 'No - Need Research'].map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => handleInputChange('hasKeywordResearch', opt)}
                        className={`h-11 px-3 rounded-lg border text-xs sm:text-sm font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                          formData.hasKeywordResearch === opt
                            ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    WHICH KEYWORDS OR SERVICES DO YOU WANT TO TARGET?
                  </label>
                  <input
                    type="text"
                    value={formData.targetKeywords}
                    onChange={(e) => handleInputChange('targetKeywords', e.target.value)}
                    placeholder="e.g. Best dental clinic in Mumbai, buy organic coffee online"
                    className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                  />
                </div>
              </div>

              {/* GMB, Pixel, Blog, Existing Agency */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Google Business Profile', field: 'needsGoogleBusiness' },
                  { label: 'Meta Pixel / Ads Tracking', field: 'needsPixelAdsTracking' },
                  { label: 'Blog Publishing System', field: 'needsBlogSystem' },
                  { label: 'Existing SEO Agency?', field: 'hasExistingAgency' },
                ].map((item) => (
                  <div key={item.field} className="p-3 rounded-lg border border-slate-100 bg-slate-50/50">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 truncate">
                      {item.label}
                    </span>
                    <div className="grid grid-cols-2 gap-1.5">
                      {['Yes', 'No'].map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => handleInputChange(item.field, opt)}
                          className={`h-8 rounded text-xs font-semibold transition-all flex items-center justify-center cursor-pointer ${
                            formData[item.field] === opt
                              ? 'bg-[#0b4a8b] text-white'
                              : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= SECTION 09: E-COMMERCE REQUIREMENTS ================= */}
          <div className="bg-white rounded-xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-4 sm:p-5 md:p-6 lg:p-7">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-[#0b4a8b] font-bold text-xs sm:text-sm tracking-wider uppercase">
                <ShoppingCart className="w-4 h-4 text-[#0b4a8b]" />
                <span>9. E-COMMERCE REQUIREMENTS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">IS E-COMMERCE?</span>
                <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50">
                  {['No', 'Yes'].map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => handleInputChange('isEcommerce', opt)}
                      className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                        formData.isEcommerce === opt
                          ? 'bg-[#0b4a8b] text-white shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {formData.isEcommerce === 'Yes' ? (
              <div className="space-y-6 pt-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      APPROXIMATE NUMBER OF PRODUCTS
                    </label>
                    <input
                      type="text"
                      value={formData.approxProducts}
                      onChange={(e) => handleInputChange('approxProducts', e.target.value)}
                      placeholder="e.g. 50-100 SKUs, 500+ items"
                      className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      PRODUCT CATEGORIES
                    </label>
                    <input
                      type="text"
                      value={formData.productCategories}
                      onChange={(e) => handleInputChange('productCategories', e.target.value)}
                      placeholder="e.g. Men, Women, Accessories, Shoes"
                      className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                      PRODUCT VARIATIONS (SIZE, COLOR)?
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {['Yes', 'No'].map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => handleInputChange('productVariations', opt)}
                          className={`h-11 px-3 rounded-lg border text-xs sm:text-sm font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                            formData.productVariations === opt
                              ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                    PAYMENT METHODS
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
                    {['Razorpay', 'Stripe', 'PayPal', 'Cash on Delivery', 'Bank Transfer', 'Other'].map((method) => {
                      const checked = formData.paymentMethods.includes(method);
                      return (
                        <button
                          type="button"
                          key={method}
                          onClick={() => handleArrayToggle('paymentMethods', method)}
                          className={`h-11 px-2 rounded-lg border text-xs font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                            checked
                              ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          {method}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* E-Com Modules Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {[
                    { label: 'Inventory Tracking', field: 'inventoryManagement' },
                    { label: 'Discount Coupons', field: 'discountCoupons' },
                    { label: 'Customer Accounts', field: 'customerAccounts' },
                    { label: 'Order Tracking', field: 'orderManagement' },
                    { label: 'GST Tax Invoices', field: 'gstInvoice' },
                  ].map((item) => (
                    <div key={item.field} className="p-3 rounded-lg border border-slate-100 bg-slate-50/50">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 truncate">
                        {item.label}
                      </span>
                      <div className="grid grid-cols-2 gap-1.5">
                        {['Yes', 'No'].map((opt) => (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => handleInputChange(item.field, opt)}
                            className={`h-8 rounded text-xs font-semibold transition-all flex items-center justify-center cursor-pointer ${
                              formData[item.field] === opt
                                ? 'bg-[#0b4a8b] text-white'
                                : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Shipping & ERP */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      SHIPPING / DELIVERY INTEGRATION
                    </label>
                    <input
                      type="text"
                      value={formData.shippingIntegration}
                      onChange={(e) => handleInputChange('shippingIntegration', e.target.value)}
                      placeholder="e.g. Shiprocket, Delhivery, Bluedart, FedEx"
                      className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      MARKETPLACE / ERP INTEGRATION
                    </label>
                    <input
                      type="text"
                      value={formData.erpMarketplaceIntegration}
                      onChange={(e) => handleInputChange('erpMarketplaceIntegration', e.target.value)}
                      placeholder="e.g. Amazon, Flipkart, Tally, Unicommerce"
                      className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-500 italic py-2">
                This project is marked as a corporate/lead-generation website. Click "Yes" above if e-commerce checkout or product catalog features are required.
              </p>
            )}
          </div>

          {/* ================= SECTION 10: BUDGET & PROJECT TIMELINE ================= */}
          <div className="bg-white rounded-xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-4 sm:p-5 md:p-6 lg:p-7">
            <div className="flex items-center gap-2 text-[#0b4a8b] font-bold text-xs sm:text-sm tracking-wider uppercase mb-6">
              <Calendar className="w-4 h-4 text-[#0b4a8b]" />
              <span>10. BUDGET & PROJECT TIMELINE</span>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {/* Estimated Budget */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                  ESTIMATED PROJECT BUDGET <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
                  {[
                    'Below ₹25,000',
                    '₹25,000–₹50,000',
                    '₹50,000–₹1,00,000',
                    '₹1,00,000–₹2,50,000',
                    '₹2,50,000–₹5,00,000',
                    'Above ₹5,00,000',
                    'To Be Discussed',
                  ].map((tier) => {
                    const active = formData.budgetTier === tier;
                    return (
                      <button
                        type="button"
                        key={tier}
                        onClick={() => handleInputChange('budgetTier', tier)}
                        className={`h-11 px-2 rounded-lg border text-[11px] font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                          active
                            ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {tier}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    EXPECTED PROJECT START DATE
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    PREFERRED WEBSITE LAUNCH DATE <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.launchDate}
                    onChange={(e) => handleInputChange('launchDate', e.target.value)}
                    className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                  />
                </div>
              </div>

              {/* Fixed Deadline & Support */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                    IS THERE A FIXED DEADLINE?
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {['Yes', 'No'].map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => handleInputChange('fixedDeadline', opt)}
                        className={`h-11 px-3 rounded-lg border text-xs sm:text-sm font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                          formData.fixedDeadline === opt
                            ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                    ONGOING MAINTENANCE & AMC?
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {['Yes', 'No'].map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => handleInputChange('ongoingSupport', opt)}
                        className={`h-11 px-3 rounded-lg border text-xs sm:text-sm font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                          formData.ongoingSupport === opt
                            ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    EVENT / CAMPAIGN DEPENDENCY
                  </label>
                  <input
                    type="text"
                    value={formData.deadlineReason}
                    onChange={(e) => handleInputChange('deadlineReason', e.target.value)}
                    placeholder="e.g. Product launch, Expo exhibition"
                    className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= SECTION 11: PROJECT MANAGEMENT & APPROVALS ================= */}
          <div className="bg-white rounded-xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-4 sm:p-5 md:p-6 lg:p-7">
            <div className="flex items-center gap-2 text-[#0b4a8b] font-bold text-xs sm:text-sm tracking-wider uppercase mb-6">
              <Users className="w-4 h-4 text-[#0b4a8b]" />
              <span>11. PROJECT MANAGEMENT & APPROVALS</span>
            </div>

            <div className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    PRIMARY POINT OF CONTACT
                  </label>
                  <input
                    type="text"
                    value={formData.primaryContact}
                    onChange={(e) => handleInputChange('primaryContact', e.target.value)}
                    placeholder="Name & Designation"
                    className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    WHO WILL APPROVE DESIGN?
                  </label>
                  <input
                    type="text"
                    value={formData.designApprover}
                    onChange={(e) => handleInputChange('designApprover', e.target.value)}
                    placeholder="Design Decision Maker"
                    className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    WHO WILL PROVIDE ASSETS?
                  </label>
                  <input
                    type="text"
                    value={formData.contentProviderName}
                    onChange={(e) => handleInputChange('contentProviderName', e.target.value)}
                    placeholder="Content Coordinator"
                    className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                  />
                </div>
              </div>

              {/* Channels & Frequency */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                    PREFERRED COMMUNICATION CHANNELS
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {['Email', 'WhatsApp', 'Phone', 'Online Meetings'].map((ch) => {
                      const checked = formData.communicationChannel.includes(ch);
                      return (
                        <button
                          type="button"
                          key={ch}
                          onClick={() => handleArrayToggle('communicationChannel', ch)}
                          className={`h-11 px-2 rounded-lg border text-xs font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                            checked
                              ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          {ch}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                    PREFERRED MEETING FREQUENCY
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {['Weekly', 'Bi-weekly', 'As Needed'].map((freq) => (
                      <button
                        type="button"
                        key={freq}
                        onClick={() => handleInputChange('meetingFrequency', freq)}
                        className={`h-11 px-3 rounded-lg border text-xs sm:text-sm font-medium transition-all text-center flex items-center justify-center cursor-pointer ${
                          formData.meetingFrequency === freq
                            ? 'bg-[#0b4a8b] text-white border-[#0b4a8b] font-bold shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {freq}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= SECTION 12: FINAL NOTES & CONFIRMATION ================= */}
          <div className="bg-white rounded-xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-4 sm:p-5 md:p-6 lg:p-7">
            <div className="flex items-center gap-2 text-[#0b4a8b] font-bold text-xs sm:text-sm tracking-wider uppercase mb-6">
              <FileCheck className="w-4 h-4 text-[#0b4a8b]" />
              <span>12. FINAL NOTES & CONFIRMATION</span>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  DESCRIBE YOUR IDEAL WEBSITE IN YOUR OWN WORDS
                </label>
                <textarea
                  rows={2}
                  value={formData.idealWebsiteDescription}
                  onChange={(e) => handleInputChange('idealWebsiteDescription', e.target.value)}
                  placeholder="In a sentence or two, what feeling and results should your new site deliver?"
                  className="w-full p-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    THREE MOST IMPORTANT THINGS TO FOCUS ON
                  </label>
                  <textarea
                    rows={2}
                    value={formData.threeImportantFocus}
                    onChange={(e) => handleInputChange('threeImportantFocus', e.target.value)}
                    placeholder="1. Fast loading speed, 2. Mobile responsiveness, 3. Strong call-to-action"
                    className="w-full p-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    IS THERE ANYTHING WE SHOULD AVOID?
                  </label>
                  <textarea
                    rows={2}
                    value={formData.thingsToAvoid}
                    onChange={(e) => handleInputChange('thingsToAvoid', e.target.value)}
                    placeholder="e.g. Cluttered popups, heavy stock photography, slow slider carousels..."
                    className="w-full p-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                  />
                </div>
              </div>

              {/* Confirmation Agreements */}
              <div className="mt-4 p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-800">
                  CLIENT CONFIRMATION & TERMS
                </span>

                <label className="flex items-start gap-3 text-xs text-slate-700 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.confirmAccurate}
                    onChange={(e) => handleInputChange('confirmAccurate', e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded border-slate-300 text-[#0b4a8b] focus:ring-0 cursor-pointer accent-[#0b4a8b]"
                  />
                  <span>I confirm that the information provided is accurate to the best of my knowledge.</span>
                </label>

                <label className="flex items-start gap-3 text-xs text-slate-700 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.confirmProposalTerms}
                    onChange={(e) => handleInputChange('confirmProposalTerms', e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded border-slate-300 text-[#0b4a8b] focus:ring-0 cursor-pointer accent-[#0b4a8b]"
                  />
                  <span>
                    I understand that the final project scope, deliverables, pricing, and timeline will be confirmed in the project proposal.
                  </span>
                </label>

                <label className="flex items-start gap-3 text-xs text-slate-700 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.confirmTimelineDependency}
                    onChange={(e) => handleInputChange('confirmTimelineDependency', e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded border-slate-300 text-[#0b4a8b] focus:ring-0 cursor-pointer accent-[#0b4a8b]"
                  />
                  <span>
                    I understand that project timelines depend on timely provision of content, assets, access, and approvals.
                  </span>
                </label>
              </div>

              {/* Signatures */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    CLIENT NAME <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.clientSignName}
                    onChange={(e) => handleInputChange('clientSignName', e.target.value)}
                    placeholder="Authorized Signatory Name"
                    className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    COMPANY NAME
                  </label>
                  <input
                    type="text"
                    value={formData.clientSignCompany}
                    onChange={(e) => handleInputChange('clientSignCompany', e.target.value)}
                    placeholder="Company Legal Name"
                    className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    DATE
                  </label>
                  <input
                    type="date"
                    value={formData.signDate}
                    onChange={(e) => handleInputChange('signDate', e.target.value)}
                    className="w-full h-11 px-3.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0b4a8b]/20 focus:border-[#0b4a8b] transition-all"
                  />
                </div>
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-3 p-3 rounded-lg border border-blue-200 bg-blue-50/60 text-xs font-semibold text-[#0b4a8b] cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    checked={formData.authorizedAgreement}
                    onChange={(e) => handleInputChange('authorizedAgreement', e.target.checked)}
                    className="w-4 h-4 rounded border-blue-300 text-[#0b4a8b] focus:ring-0 cursor-pointer accent-[#0b4a8b]"
                  />
                  <span>AUTHORIZED CONFIRMATION: I authorize iBraine Digital to review these project requirements and prepare the formal proposal.</span>
                </label>
              </div>
            </div>
          </div>

          {/* ================= MASSIVE SOLID NAVY SUBMIT BUTTON ================= */}
          <div className="pt-2 pb-6">
            <button
              type="submit"
              className="w-full h-13 py-3.5 rounded-xl bg-[#093566] hover:bg-[#072a52] active:scale-[0.99] text-white font-bold text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer select-none"
            >
              <span>SUBMIT QUESTIONNAIRE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="mt-3 text-center text-xs text-slate-500">
              Our team will review your requirements and prepare the project scope, estimated timeline, and commercial proposal within 24 hours.
            </p>
          </div>
        </form>
      </main>

      {/* ===================== SUBMISSION SUCCESS MODAL ===================== */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-lora text-slate-900">
              Questionnaire Submitted Successfully!
            </h3>

            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.contactPerson || 'Valued Client'}</strong>! We have received your discovery requirements for <strong className="text-slate-900">{formData.companyName || 'your business'}</strong>.
            </p>

            <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
              <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                <span className="text-slate-500">Company:</span>
                <span className="font-semibold text-slate-800">{formData.companyName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                <span className="text-slate-500">Email:</span>
                <span className="font-semibold text-slate-800">{formData.email}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                <span className="text-slate-500">Project Type:</span>
                <span className="font-semibold text-slate-800">{formData.websiteType}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                <span className="text-slate-500">Budget Range:</span>
                <span className="font-semibold text-slate-800">{formData.budgetTier}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Target Launch:</span>
                <span className="font-semibold text-slate-800">{formData.launchDate || 'To be scheduled'}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => window.print()}
                className="flex-1 py-3 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider text-slate-700 flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Printer className="w-4 h-4" />
                <span>Print Copy</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  window.location.href = '/';
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-[#093566] hover:bg-[#072a52] font-bold text-xs uppercase tracking-wider text-white flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Back to Homepage</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebQuestionnairePage;
