import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Building2,
  Target,
  Megaphone,
  Globe,
  BarChart3,
  UploadCloud,
  CheckCircle2,
  Check,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Paperclip,
  Trash2,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

const SERVICES_OPTIONS = [
  'Website Design and Development',
  'Search Engine Optimization (SEO)',
  'Performance Marketing (PPC)',
  'Social Media Marketing',
  'Google Analytics',
  'Affiliate Marketing',
  'App Development',
];

const GOALS_OPTIONS = [
  'Sales',
  'Leads',
  'Branding',
  'Signups',
  'Phone Calls',
];

const EXISTING_ACCOUNTS_OPTIONS = [
  'Google ads account',
  'Facebook ads Manager',
  'Linkedin ads account',
  'Advertising for the first time',
];

const PLATFORMS_OPTIONS = [
  'Google Search & Display',
  'Meta (Facebook & Instagram)',
  'LinkedIn Ads',
  'YouTube Video Ads',
  'Bing / Microsoft Ads',
  'Amazon / Marketplaces',
];

const DURATION_OPTIONS = [
  '3 MONTHS',
  '>6 MONTHS',
  '>1 YEAR',
  '<1YEAR',
];

const BUSINESS_TYPE_OPTIONS = [
  'Online Only (E-Commerce / SaaS)',
  'Retail Storefront (Physical Location)',
  'Service Business (Local Area / Hybrid)',
];

const GA_ACCESS_OPTIONS = [
  'Yes',
  'No',
  'No GA Account',
];

const DDM_OPTIONS_YES_NO = ['YES', 'NO'];
const DDM_OPTIONS_PENALTY = ['YES', 'NO', 'NOT SURE'];

const DigitalMarketingQuestionnaire = () => {
  useEffect(() => {
    document.title = 'Client Discovery Questionnaire | iBraine Digital Marketing';
    window.scrollTo(0, 0);

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

  // Form State
  const [formData, setFormData] = useState({
    // Contact & Business Information
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    websiteUrl: '',
    businessDescription: '',
    websiteActiveDuration: '',
    totalPages: '',
    businessType: '',
    businessTypeOther: '',

    // Services & Goals
    services: [],
    servicesOther: '',
    projectGoals: [],
    projectGoalsOther: '',
    projectDuration: '3 MONTHS',
    monthlyBudget: '',

    // Accounts, Targeting & Platforms
    existingAccounts: [],
    existingAccountsOther: '',
    targetPlatforms: ['Google Search & Display', 'Meta (Facebook & Instagram)'],
    targetPlatformsOther: '',
    locationTargeting: '',
    specificAudience: '',
    unpromotableItems: '',

    // Market & Competitors
    competitors: '',
    usp: '',
    initialKeywordsServices: '',
    socialMediaLinks: '',

    // Analytics, Readiness & Creative
    gaAccess: 'Yes',
    gaAccessOther: '',
    currentPerformance: '',
    creativeTeamAvailable: 'YES',
    sitePenalised: 'NO',
    socialMediaUsedWithSite: 'YES',

    // Additional Info & Upload
    additionalInfo: '',
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle standard input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Toggle multi-select array (for Services, Goals, Accounts, Platforms)
  const toggleArrayOption = (field, option) => {
    setFormData((prev) => {
      const current = prev[field] || [];
      if (current.includes(option)) {
        return {
          ...prev,
          [field]: current.filter((item) => item !== option),
        };
      } else {
        return {
          ...prev,
          [field]: [...current, option],
        };
      }
    });
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 25 * 1024 * 1024) {
        setErrorMessage('File size exceeds the 25MB limit. Please upload a smaller file.');
        return;
      }
      setSelectedFile(file);
      setErrorMessage('');
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic Validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Please enter your phone/WhatsApp number.');
      return;
    }
    if (!formData.websiteUrl.trim()) {
      setErrorMessage('Please enter the name or URL of your website.');
      return;
    }
    if (formData.services.length === 0 && !formData.servicesOther.trim()) {
      setErrorMessage('Please select at least one service you are looking for.');
      return;
    }
    if (formData.projectGoals.length === 0 && !formData.projectGoalsOther.trim()) {
      setErrorMessage('Please select at least one project goal.');
      return;
    }
    if (!formData.businessDescription.trim()) {
      setErrorMessage('Please provide a short description about your business.');
      return;
    }
    if (!formData.monthlyBudget.trim()) {
      setErrorMessage('Please specify your monthly project budget.');
      return;
    }
    if (!formData.locationTargeting.trim()) {
      setErrorMessage('Please specify your target locations.');
      return;
    }
    if (!formData.competitors.trim()) {
      setErrorMessage('Please share your top competitors.');
      return;
    }

    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 900);
  };

  return (
    <div className="bg-[#fafbfc] min-h-screen font-lora text-slate-900 pb-16 selection:bg-[#ffed4e] selection:text-slate-950">
      {/* ===================== HERO HEADER BANNER ===================== */}
      <header className="relative pt-10 pb-8 sm:pt-14 sm:pb-10 bg-gradient-to-b from-slate-100/90 via-white to-[#f0f4f8] border-b border-slate-200/80 overflow-hidden mb-6 sm:mb-8 text-center">
        {/* Soft Ambient Brand Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[260px] bg-gradient-to-r from-[#ffed4e]/20 via-[#ffb400]/15 to-[#0072BC]/15 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-12 lg:px-[80px] xl:px-[100px] relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-[#0072BC] text-xs font-sans font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#ffb400]" />
            <span>Digital Performance & Marketing Discovery</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold font-lora text-slate-950 tracking-tight leading-tight">
            Digital Marketing Initial Questionnaire
          </h1>

          <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 max-w-3xl mx-auto font-sans leading-relaxed">
            Please fill in this initial discovery form with your project parameters, campaign objectives, and targeting preferences so our strategy team can engineer a tailored marketing plan.
          </p>
        </div>
      </header>

      {/* ===================== MAIN FORM WORKFLOW CONTAINER ===================== */}
      <main className="w-full max-w-[1560px] mx-auto px-6 sm:px-12 lg:px-[80px] xl:px-[100px] pb-16">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            /* ================= SUCCESS BANNER ================= */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-2xl border border-slate-200/90 p-8 sm:p-12 text-center shadow-lg max-w-2xl mx-auto my-12"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-xs">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-lora text-slate-950 mb-3">
                Questionnaire Submitted Successfully!
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-sans max-w-lg mx-auto mb-6 leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Our digital marketing team has received your campaign brief for <strong>{formData.websiteUrl || 'your website'}</strong> and will review your objectives within 24 business hours.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 font-sans text-left max-w-md mx-auto mb-8 space-y-1.5">
                <div><strong>Services:</strong> {formData.services.concat(formData.servicesOther ? [formData.servicesOther] : []).join(', ') || 'N/A'}</div>
                <div><strong>Goals:</strong> {formData.projectGoals.concat(formData.projectGoalsOther ? [formData.projectGoalsOther] : []).join(', ') || 'N/A'}</div>
                <div><strong>Duration:</strong> {formData.projectDuration}</div>
                <div><strong>Monthly Budget:</strong> {formData.monthlyBudget}</div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-2.5 rounded-xl bg-[#0072BC] text-white font-sans font-bold text-sm hover:bg-[#005ea6] transition-all cursor-pointer shadow-sm"
              >
                Submit Another Response
              </button>
            </motion.div>
          ) : (
            /* ================= THE OPERATING MEDIA STYLE WORKFLOW FORM ================= */
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
              {/* Error Alert */}
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-sans flex items-center gap-2 shadow-xs">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* ============================================================== */}
              {/* CARD 1: PRIMARY INFORMATION & BUSINESS OVERVIEW              */}
              {/* ============================================================== */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-5 sm:p-7 md:p-8 space-y-5">
                {/* Card Head */}
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-lora text-slate-900 tracking-tight">
                      1. Primary Information & Business Overview
                    </h3>
                    <p className="text-xs text-slate-500 font-sans mt-0.5">
                      Tell us about your company, brand domain, and core offerings.
                    </p>
                  </div>
                </div>

                {/* Grid Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-sans">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      required
                      className="w-full h-11 px-3.5 rounded-lg border border-slate-300 focus:border-[#0072BC] focus:ring-2 focus:ring-[#0072BC]/15 bg-white text-sm text-slate-900 placeholder:text-slate-400 font-sans transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-sans">
                      Work Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. rahul@company.com"
                      required
                      className="w-full h-11 px-3.5 rounded-lg border border-slate-300 focus:border-[#0072BC] focus:ring-2 focus:ring-[#0072BC]/15 bg-white text-sm text-slate-900 placeholder:text-slate-400 font-sans transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-sans">
                      Phone / WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98765 43210"
                      required
                      className="w-full h-11 px-3.5 rounded-lg border border-slate-300 focus:border-[#0072BC] focus:ring-2 focus:ring-[#0072BC]/15 bg-white text-sm text-slate-900 placeholder:text-slate-400 font-sans transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-sans">
                      Company / Business Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="e.g. Acme Innovations Pvt Ltd"
                      className="w-full h-11 px-3.5 rounded-lg border border-slate-300 focus:border-[#0072BC] focus:ring-2 focus:ring-[#0072BC]/15 bg-white text-sm text-slate-900 placeholder:text-slate-400 font-sans transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Website Name / URL */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-sans">
                    Name of your website <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                    placeholder="e.g. www.yourcompany.com or YourBrand.com"
                    required
                    className="w-full h-11 px-3.5 rounded-lg border border-slate-300 focus:border-[#0072BC] focus:ring-2 focus:ring-[#0072BC]/15 bg-white text-sm text-slate-900 placeholder:text-slate-400 font-sans transition-all outline-none"
                  />
                </div>

                {/* Business Description */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-sans">
                    A short description about the business <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="businessDescription"
                    value={formData.businessDescription}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Briefly describe what your business does, your flagship products/services, and value proposition..."
                    required
                    className="w-full p-3 rounded-lg border border-slate-300 focus:border-[#0072BC] focus:ring-2 focus:ring-[#0072BC]/15 bg-white text-sm text-slate-900 placeholder:text-slate-400 font-sans transition-all outline-none leading-relaxed"
                  />
                </div>

                {/* Additional site details: active duration, total pages, business model */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-2">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-sans">
                      How long has your website been active?
                    </label>
                    <input
                      type="text"
                      name="websiteActiveDuration"
                      value={formData.websiteActiveDuration}
                      onChange={handleInputChange}
                      placeholder="e.g. 2 years, Brand new / Not yet live"
                      className="w-full h-11 px-3.5 rounded-lg border border-slate-300 focus:border-[#0072BC] focus:ring-2 focus:ring-[#0072BC]/15 bg-white text-sm text-slate-900 placeholder:text-slate-400 font-sans transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-sans">
                      Total no of pages in site
                    </label>
                    <input
                      type="text"
                      name="totalPages"
                      value={formData.totalPages}
                      onChange={handleInputChange}
                      placeholder="e.g. 10 - 25 pages, 100+ SKU pages"
                      className="w-full h-11 px-3.5 rounded-lg border border-slate-300 focus:border-[#0072BC] focus:ring-2 focus:ring-[#0072BC]/15 bg-white text-sm text-slate-900 placeholder:text-slate-400 font-sans transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Business Model / Storefront */}
                <div className="pt-2">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2 font-sans">
                    Is your business (online only) or do you have a retail storefront or service business? <span className="text-slate-400 font-normal lowercase">(imp for local listing)</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {BUSINESS_TYPE_OPTIONS.map((type) => {
                      const isSelected = formData.businessType === type;
                      return (
                        <div
                          key={type}
                          onClick={() => setFormData((prev) => ({ ...prev, businessType: type }))}
                          className={`p-3 rounded-xl border text-left cursor-pointer transition-all duration-200 flex items-center justify-between text-xs sm:text-sm font-sans ${
                            isSelected
                              ? 'bg-blue-50/90 border-[#0072BC] text-[#0072BC] font-bold shadow-2xs ring-1 ring-[#0072BC]/20'
                              : 'bg-slate-50/70 hover:bg-slate-100/80 border-slate-200 text-slate-700'
                          }`}
                        >
                          <span className="line-clamp-2">{type}</span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                            isSelected ? 'border-[#0072BC] bg-[#0072BC] text-white' : 'border-slate-300 bg-white'
                          }`}>
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* ============================================================== */}
              {/* CARD 2: SERVICES & GOALS MATRIX                              */}
              {/* ============================================================== */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-5 sm:p-7 md:p-8 space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-lora text-slate-900 tracking-tight">
                      2. Services & Project Objectives
                    </h3>
                    <p className="text-xs text-slate-500 font-sans mt-0.5">
                      Select all deliverables, desired outcomes, timeline, and monthly budget.
                    </p>
                  </div>
                </div>

                {/* Which services are we looking for? */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 font-sans">
                      Which services are we looking for? <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[11px] text-[#0072BC] font-sans font-bold bg-blue-50 px-2 py-0.5 rounded-full">
                      Select all that apply
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {SERVICES_OPTIONS.map((srv) => {
                      const isChecked = formData.services.includes(srv);
                      return (
                        <div
                          key={srv}
                          onClick={() => toggleArrayOption('services', srv)}
                          className={`p-3 rounded-xl border text-left cursor-pointer transition-all duration-200 flex items-center justify-between text-xs sm:text-sm font-sans ${
                            isChecked
                              ? 'bg-blue-50/90 border-[#0072BC] text-[#0072BC] font-bold shadow-2xs ring-1 ring-[#0072BC]/20'
                              : 'bg-slate-50/70 hover:bg-slate-100/80 border-slate-200 text-slate-700'
                          }`}
                        >
                          <span>{srv}</span>
                          <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ml-2 transition-colors ${
                            isChecked ? 'border-[#0072BC] bg-[#0072BC] text-white' : 'border-slate-300 bg-white'
                          }`}>
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Other Input Checkbox */}
                  <div className="mt-3 p-3 rounded-xl border border-dashed border-slate-300 bg-slate-50/60 flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-xs font-bold text-slate-700 font-sans whitespace-nowrap">
                      Other Service:
                    </span>
                    <input
                      type="text"
                      name="servicesOther"
                      value={formData.servicesOther}
                      onChange={handleInputChange}
                      placeholder="Specify other service (e.g. CRO, Influencer Marketing, Video Ads)..."
                      className="w-full h-9 px-3 rounded-lg border border-slate-300 focus:border-[#0072BC] bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 font-sans outline-none"
                    />
                  </div>
                </div>

                {/* What is the goal of the project? */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 font-sans">
                      What is the goal of the project? <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[11px] text-[#0072BC] font-sans font-bold bg-blue-50 px-2 py-0.5 rounded-full">
                      Select primary goals
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                    {GOALS_OPTIONS.map((goal) => {
                      const isChecked = formData.projectGoals.includes(goal);
                      return (
                        <div
                          key={goal}
                          onClick={() => toggleArrayOption('projectGoals', goal)}
                          className={`p-3 rounded-xl border text-left cursor-pointer transition-all duration-200 flex items-center justify-between text-xs sm:text-sm font-sans ${
                            isChecked
                              ? 'bg-blue-50/90 border-[#0072BC] text-[#0072BC] font-bold shadow-2xs ring-1 ring-[#0072BC]/20'
                              : 'bg-slate-50/70 hover:bg-slate-100/80 border-slate-200 text-slate-700'
                          }`}
                        >
                          <span>{goal}</span>
                          <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ml-2 transition-colors ${
                            isChecked ? 'border-[#0072BC] bg-[#0072BC] text-white' : 'border-slate-300 bg-white'
                          }`}>
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Other Goal Input */}
                  <div className="mt-3 p-3 rounded-xl border border-dashed border-slate-300 bg-slate-50/60 flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-xs font-bold text-slate-700 font-sans whitespace-nowrap">
                      Other Goal:
                    </span>
                    <input
                      type="text"
                      name="projectGoalsOther"
                      value={formData.projectGoalsOther}
                      onChange={handleInputChange}
                      placeholder="Specify other objective (e.g. App Installs, ROAS 4x, Local Walk-ins)..."
                      className="w-full h-9 px-3 rounded-lg border border-slate-300 focus:border-[#0072BC] bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 font-sans outline-none"
                    />
                  </div>
                </div>

                {/* Duration & Budget Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-3 border-t border-slate-100">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-sans">
                      What will be duration of project? <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="projectDuration"
                        value={formData.projectDuration}
                        onChange={handleInputChange}
                        required
                        className="w-full h-11 px-3.5 pr-10 rounded-lg border border-slate-300 focus:border-[#0072BC] focus:ring-2 focus:ring-[#0072BC]/15 bg-white text-sm text-slate-900 font-sans transition-all outline-none appearance-none cursor-pointer"
                      >
                        {DURATION_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-sans">
                      What is the monthly budget for the project? <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="monthlyBudget"
                      value={formData.monthlyBudget}
                      onChange={handleInputChange}
                      placeholder="e.g. ₹50,000 / mo or $2,500 / month"
                      required
                      className="w-full h-11 px-3.5 rounded-lg border border-slate-300 focus:border-[#0072BC] focus:ring-2 focus:ring-[#0072BC]/15 bg-white text-sm text-slate-900 placeholder:text-slate-400 font-sans transition-all outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* ============================================================== */}
              {/* CARD 3: ADVERTISING ACCOUNTS, TARGETING & PLATFORMS          */}
              {/* ============================================================== */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-5 sm:p-7 md:p-8 space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0">
                    <Megaphone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-lora text-slate-900 tracking-tight">
                      3. Advertising Accounts, Targeting & Platforms
                    </h3>
                    <p className="text-xs text-slate-500 font-sans mt-0.5">
                      Existing marketing channels, location targeting, and campaign parameters.
                    </p>
                  </div>
                </div>

                {/* Do you have an existing account from the following? */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2 font-sans">
                    Do you have an existing account from the following?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {EXISTING_ACCOUNTS_OPTIONS.map((acc) => {
                      const isChecked = formData.existingAccounts.includes(acc);
                      return (
                        <div
                          key={acc}
                          onClick={() => toggleArrayOption('existingAccounts', acc)}
                          className={`p-3 rounded-xl border text-left cursor-pointer transition-all duration-200 flex items-center justify-between text-xs sm:text-sm font-sans ${
                            isChecked
                              ? 'bg-blue-50/90 border-[#0072BC] text-[#0072BC] font-bold shadow-2xs ring-1 ring-[#0072BC]/20'
                              : 'bg-slate-50/70 hover:bg-slate-100/80 border-slate-200 text-slate-700'
                          }`}
                        >
                          <span>{acc}</span>
                          <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ml-2 transition-colors ${
                            isChecked ? 'border-[#0072BC] bg-[#0072BC] text-white' : 'border-slate-300 bg-white'
                          }`}>
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Other Existing Account */}
                  <div className="mt-3 p-3 rounded-xl border border-dashed border-slate-300 bg-slate-50/60 flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-xs font-bold text-slate-700 font-sans whitespace-nowrap">
                      Other Account:
                    </span>
                    <input
                      type="text"
                      name="existingAccountsOther"
                      value={formData.existingAccountsOther}
                      onChange={handleInputChange}
                      placeholder="Specify other ad account (e.g. TikTok Ads, Quora Ads, Pinterest)..."
                      className="w-full h-9 px-3 rounded-lg border border-slate-300 focus:border-[#0072BC] bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 font-sans outline-none"
                    />
                  </div>
                </div>

                {/* Platforms to advertise on */}
                <div className="pt-3 border-t border-slate-100">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2 font-sans">
                    What Search engines or platforms should we advertise on?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                    {PLATFORMS_OPTIONS.map((plat) => {
                      const isChecked = formData.targetPlatforms.includes(plat);
                      return (
                        <div
                          key={plat}
                          onClick={() => toggleArrayOption('targetPlatforms', plat)}
                          className={`p-2.5 sm:p-3 rounded-xl border text-left cursor-pointer transition-all duration-200 flex items-center justify-between text-xs sm:text-sm font-sans ${
                            isChecked
                              ? 'bg-blue-50/90 border-[#0072BC] text-[#0072BC] font-bold shadow-2xs ring-1 ring-[#0072BC]/20'
                              : 'bg-slate-50/70 hover:bg-slate-100/80 border-slate-200 text-slate-700'
                          }`}
                        >
                          <span className="line-clamp-1">{plat}</span>
                          <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ml-1.5 transition-colors ${
                            isChecked ? 'border-[#0072BC] bg-[#0072BC] text-white' : 'border-slate-300 bg-white'
                          }`}>
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Location Targeting */}
                <div className="pt-3 border-t border-slate-100">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-sans">
                    What will be the location targeting? The places where you want to show your ads <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="locationTargeting"
                    value={formData.locationTargeting}
                    onChange={handleInputChange}
                    rows="2"
                    placeholder="e.g. Mumbai, Delhi NCR, Bangalore, or Specific Tier 1 cities in India / Global (US, UK, UAE)..."
                    required
                    className="w-full p-3 rounded-lg border border-slate-300 focus:border-[#0072BC] focus:ring-2 focus:ring-[#0072BC]/15 bg-white text-sm text-slate-900 placeholder:text-slate-400 font-sans transition-all outline-none"
                  />
                </div>

                {/* Specific Audience */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-sans">
                    If there is any specific audience which you would like to target then please let us know
                  </label>
                  <textarea
                    name="specificAudience"
                    value={formData.specificAudience}
                    onChange={handleInputChange}
                    rows="2"
                    placeholder="e.g. Founders, CTOs, B2B Decision makers, Age 25-45, High-income households, Fitness enthusiasts..."
                    className="w-full p-3 rounded-lg border border-slate-300 focus:border-[#0072BC] focus:ring-2 focus:ring-[#0072BC]/15 bg-white text-sm text-slate-900 placeholder:text-slate-400 font-sans transition-all outline-none"
                  />
                </div>

                {/* Restrictions: Can't or shouldn't promote */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-sans">
                    Is there anything on website that we can’t or shouldn’t promote?
                  </label>
                  <input
                    type="text"
                    name="unpromotableItems"
                    value={formData.unpromotableItems}
                    onChange={handleInputChange}
                    placeholder="e.g. Out of stock products, discontinued services, restricted categories..."
                    className="w-full h-11 px-3.5 rounded-lg border border-slate-300 focus:border-[#0072BC] focus:ring-2 focus:ring-[#0072BC]/15 bg-white text-sm text-slate-900 placeholder:text-slate-400 font-sans transition-all outline-none"
                  />
                </div>
              </div>

              {/* ============================================================== */}
              {/* CARD 4: MARKET POSITIONING & COMPETITORS                     */}
              {/* ============================================================== */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-5 sm:p-7 md:p-8 space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-lora text-slate-900 tracking-tight">
                      4. Market Positioning & Competitors
                    </h3>
                    <p className="text-xs text-slate-500 font-sans mt-0.5">
                      Define your competitive advantages, market rivals, and brand handles.
                    </p>
                  </div>
                </div>

                {/* Competitors */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-sans">
                    Who are your top competitors? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="competitors"
                    value={formData.competitors}
                    onChange={handleInputChange}
                    rows="2"
                    placeholder="List 3 to 5 key competitors and their website links if available..."
                    required
                    className="w-full p-3 rounded-lg border border-slate-300 focus:border-[#0072BC] focus:ring-2 focus:ring-[#0072BC]/15 bg-white text-sm text-slate-900 placeholder:text-slate-400 font-sans transition-all outline-none"
                  />
                </div>

                {/* USP */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-sans">
                    What is your USP? What keeps you over your competitors?
                  </label>
                  <textarea
                    name="usp"
                    value={formData.usp}
                    onChange={handleInputChange}
                    rows="2"
                    placeholder="e.g. 24/7 dedicated support, patent-pending technology, direct factory pricing, 10x faster delivery..."
                    className="w-full p-3 rounded-lg border border-slate-300 focus:border-[#0072BC] focus:ring-2 focus:ring-[#0072BC]/15 bg-white text-sm text-slate-900 placeholder:text-slate-400 font-sans transition-all outline-none"
                  />
                </div>

                {/* Main Keywords and Services */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-sans">
                    List of main keywords and services which you would like to target at initial stage
                  </label>
                  <textarea
                    name="initialKeywordsServices"
                    value={formData.initialKeywordsServices}
                    onChange={handleInputChange}
                    rows="2"
                    placeholder="e.g. Best corporate catering in Mumbai, buy organic coffee online, enterprise cloud ERP..."
                    className="w-full p-3 rounded-lg border border-slate-300 focus:border-[#0072BC] focus:ring-2 focus:ring-[#0072BC]/15 bg-white text-sm text-slate-900 placeholder:text-slate-400 font-sans transition-all outline-none"
                  />
                </div>

                {/* Social Media Links */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-sans">
                    Share the Links to all the social media business pages we have over platforms like facebook, twitter, linkedin, etc?
                  </label>
                  <textarea
                    name="socialMediaLinks"
                    value={formData.socialMediaLinks}
                    onChange={handleInputChange}
                    rows="2"
                    placeholder="e.g. Instagram: instagram.com/brand, LinkedIn: linkedin.com/company/brand, Facebook: fb.com/brand..."
                    className="w-full p-3 rounded-lg border border-slate-300 focus:border-[#0072BC] focus:ring-2 focus:ring-[#0072BC]/15 bg-white text-sm text-slate-900 placeholder:text-slate-400 font-sans transition-all outline-none"
                  />
                </div>
              </div>

              {/* ============================================================== */}
              {/* CARD 5: ANALYTICS, CREATIVE & TECHNICAL READINESS            */}
              {/* ============================================================== */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-5 sm:p-7 md:p-8 space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-lora text-slate-900 tracking-tight">
                      5. Analytics, Creative & Technical Readiness
                    </h3>
                    <p className="text-xs text-slate-500 font-sans mt-0.5">
                      Account permissions, historical reporting, and creative assets.
                    </p>
                  </div>
                </div>

                {/* GA Account Access */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2 font-sans">
                    Can we have access to your google analytics account?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {GA_ACCESS_OPTIONS.map((opt) => {
                      const isSelected = formData.gaAccess === opt;
                      return (
                        <div
                          key={opt}
                          onClick={() => setFormData((prev) => ({ ...prev, gaAccess: opt }))}
                          className={`p-3 rounded-xl border text-left cursor-pointer transition-all duration-200 flex items-center justify-between text-xs sm:text-sm font-sans ${
                            isSelected
                              ? 'bg-blue-50/90 border-[#0072BC] text-[#0072BC] font-bold shadow-2xs ring-1 ring-[#0072BC]/20'
                              : 'bg-slate-50/70 hover:bg-slate-100/80 border-slate-200 text-slate-700'
                          }`}
                        >
                          <span>{opt}</span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                            isSelected ? 'border-[#0072BC] bg-[#0072BC] text-white' : 'border-slate-300 bg-white'
                          }`}>
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Other GA input */}
                  <div className="mt-3 p-3 rounded-xl border border-dashed border-slate-300 bg-slate-50/60 flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-xs font-bold text-slate-700 font-sans whitespace-nowrap">
                      Other / Note:
                    </span>
                    <input
                      type="text"
                      name="gaAccessOther"
                      value={formData.gaAccessOther}
                      onChange={handleInputChange}
                      placeholder="Specify GA4 access details or alternate tracking..."
                      className="w-full h-9 px-3 rounded-lg border border-slate-300 focus:border-[#0072BC] bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 font-sans outline-none"
                    />
                  </div>
                </div>

                {/* Current Performance Measurement */}
                <div className="pt-3 border-t border-slate-100">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-sans">
                    How do you measure your current performance? What is the current performance report?
                  </label>
                  <textarea
                    name="currentPerformance"
                    value={formData.currentPerformance}
                    onChange={handleInputChange}
                    rows="2"
                    placeholder="e.g. Current monthly leads: 40, CAC: ₹1,200, Conversion Rate: 1.8%, GA4 E-commerce revenue..."
                    className="w-full p-3 rounded-lg border border-slate-300 focus:border-[#0072BC] focus:ring-2 focus:ring-[#0072BC]/15 bg-white text-sm text-slate-900 placeholder:text-slate-400 font-sans transition-all outline-none"
                  />
                </div>

                {/* Creative Team Available (DROPDOWN) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 border-t border-slate-100">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-sans">
                      Creative Team for Ads? <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="creativeTeamAvailable"
                        value={formData.creativeTeamAvailable}
                        onChange={handleInputChange}
                        required
                        className="w-full h-11 px-3.5 pr-10 rounded-lg border border-slate-300 focus:border-[#0072BC] focus:ring-2 focus:ring-[#0072BC]/15 bg-white text-sm text-slate-900 font-sans transition-all outline-none appearance-none cursor-pointer"
                      >
                        {DDM_OPTIONS_YES_NO.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-sans">
                      Site ever penalised?
                    </label>
                    <div className="relative">
                      <select
                        name="sitePenalised"
                        value={formData.sitePenalised}
                        onChange={handleInputChange}
                        className="w-full h-11 px-3.5 pr-10 rounded-lg border border-slate-300 focus:border-[#0072BC] focus:ring-2 focus:ring-[#0072BC]/15 bg-white text-sm text-slate-900 font-sans transition-all outline-none appearance-none cursor-pointer"
                      >
                        {DDM_OPTIONS_PENALTY.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-sans">
                      SMM with website?
                    </label>
                    <div className="relative">
                      <select
                        name="socialMediaUsedWithSite"
                        value={formData.socialMediaUsedWithSite}
                        onChange={handleInputChange}
                        className="w-full h-11 px-3.5 pr-10 rounded-lg border border-slate-300 focus:border-[#0072BC] focus:ring-2 focus:ring-[#0072BC]/15 bg-white text-sm text-slate-900 font-sans transition-all outline-none appearance-none cursor-pointer"
                      >
                        {DDM_OPTIONS_PENALTY.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ============================================================== */}
              {/* CARD 6: BRIEF UPLOAD & ADDITIONAL INFORMATION                */}
              {/* ============================================================== */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] p-5 sm:p-7 md:p-8 space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0072BC] flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-lora text-slate-900 tracking-tight">
                      6. Project Brief Upload & Additional Information
                    </h3>
                    <p className="text-xs text-slate-500 font-sans mt-0.5">
                      Attach existing briefs, media kits, or specific notes.
                    </p>
                  </div>
                </div>

                {/* Upload Doc Area */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5 font-sans">
                    If you have a project brief, you can upload here
                  </label>
                  
                  {selectedFile ? (
                    <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 flex items-center justify-between font-sans">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="w-10 h-10 rounded-lg bg-white border border-blue-200 text-[#0072BC] flex items-center justify-center shrink-0 shadow-2xs">
                          <Paperclip className="w-5 h-5" />
                        </div>
                        <div className="truncate">
                          <div className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                            {selectedFile.name}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            {(selectedFile.size / 1024).toFixed(1)} KB
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="p-2 text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                        title="Remove file"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-slate-300 hover:border-[#0072BC] rounded-xl p-6 sm:p-8 text-center transition-all bg-slate-50/50 hover:bg-blue-50/20 group">
                      <input
                        type="file"
                        id="brief-file-input"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.zip,.png,.jpg"
                        className="hidden"
                      />
                      <label htmlFor="brief-file-input" className="cursor-pointer block">
                        <UploadCloud className="w-10 h-10 text-slate-400 group-hover:text-[#0072BC] mx-auto mb-2 transition-colors" />
                        <div className="text-xs sm:text-sm font-bold text-slate-800 font-sans">
                          Drag and drop your project brief or{' '}
                          <span className="text-[#0072BC] underline underline-offset-2">Browse file</span>
                        </div>
                        <p className="text-[11px] text-slate-500 font-sans mt-1">
                          Supported formats: PDF, DOCX, PPTX, XLSX, ZIP, PNG, JPG (Max 25MB)
                        </p>
                        <div className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-700 font-sans shadow-2xs hover:border-[#0072BC] group-hover:text-[#0072BC] transition-all">
                          <Paperclip className="w-3.5 h-3.5" />
                          <span>Add file</span>
                        </div>
                      </label>
                    </div>
                  )}
                </div>

                {/* Any Other Information */}
                <div className="pt-2">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5 font-sans">
                    Any other information that you would like to share?
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Provide any additional expectations, timeline milestones, or context that will help us craft the best proposal..."
                    className="w-full p-3 rounded-lg border border-slate-300 focus:border-[#0072BC] focus:ring-2 focus:ring-[#0072BC]/15 bg-white text-sm text-slate-900 placeholder:text-slate-400 font-sans transition-all outline-none leading-relaxed"
                  />
                </div>
              </div>

              {/* ============================================================== */}
              {/* SUBMIT BUTTON BAR                                            */}
              {/* ============================================================== */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#0072BC] via-[#0060a0] to-[#0052e6] hover:from-[#005ea6] hover:to-[#004880] text-white font-sans font-bold text-sm sm:text-base tracking-wide flex items-center justify-center gap-2.5 shadow-lg shadow-blue-600/25 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed uppercase"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Processing Submission...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Digital Marketing Questionnaire</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] text-slate-400 font-sans mt-2.5">
                  Your information is kept 100% confidential under iBraine Non-Disclosure terms.
                </p>
              </div>
            </form>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default DigitalMarketingQuestionnaire;
