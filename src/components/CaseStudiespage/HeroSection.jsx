import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ShieldCheck, Sparkles } from 'lucide-react';

const STATS = [
  { value: '200+', label: 'Projects Delivered', sub: 'Successful digital experiences' },
  { value: '16+', label: 'Years of Excellence', sub: 'Digital excellence since 2011' },
  { value: '300+', label: 'Clients Partnered', sub: 'Trusted across 15+ countries' },
  { value: '40+', label: 'Industries Served', sub: 'B2B, D2C, SaaS & Retail' }
];

const HeroSection = ({ onExploreClick }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full pt-20 pb-12 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 overflow-hidden bg-[#0a0f1d] text-white">
      {/* 1. Subtle Animated Grid / Line Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Graph-paper & diagonal line grid */}
        <div 
          className="absolute inset-0 opacity-[0.14] bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:48px_48px]"
        />
        <div 
          className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"
        />

        {/* Ambient Soft Glow Blobs */}
        <motion.div
          animate={shouldReduceMotion ? undefined : {
            scale: [1, 1.08, 1],
            opacity: [0.22, 0.32, 0.22]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[680px] h-[380px] bg-gradient-to-tr from-[#0072BC]/40 via-[#4d66f0]/30 to-[#ffed4e]/20 rounded-full blur-[110px]"
          style={{ transform: 'translate3d(-50%, 0, 0)' }}
        />
        <div 
          className="absolute bottom-0 right-10 w-[350px] h-[250px] bg-[#0072BC]/20 rounded-full blur-[100px]"
        />
        
        {/* Soft bottom edge gradient for flawless blending into TrustMarquee */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-slate-950 pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Google Partner & Agency Credential Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/15 text-slate-200 text-xs sm:text-sm font-medium mb-5 shadow-sm backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-[#ffed4e]">Google Partner Agency</span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-300">Founded 2011 in Mumbai</span>
        </motion.div>

        {/* Main Heading with Crisp Contrast */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-lora font-semibold text-white tracking-tight leading-[1.18] max-w-5xl mx-auto"
        >
          Crafting Digital Experiences{' '}
          <span className="relative inline-block font-italic text-[#ffb400]">
            That Make an Impact
            {/* Hand-drawn underline SVG */}
            <svg
              className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3 sm:h-4 text-[#ffed4e]"
              viewBox="0 0 300 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M2 11.5C65 3.5 185 1.5 298 9.5C225 15.5 110 16 35 13"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-lora"
        >
          Explore how iBraine engineers high-converting e-commerce storefronts, corporate web platforms, scalable SaaS architectures, and bespoke mobile apps that power sustainable commercial growth.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onExploreClick}
            type="button"
            className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#ffed4e] text-slate-950 font-bold text-sm sm:text-base shadow-[0_4px_20px_rgba(255,237,78,0.25)] hover:bg-[#ffdf00] hover:shadow-[0_6px_25px_rgba(255,237,78,0.4)] transition-all duration-200 cursor-pointer active:scale-95"
          >
            <span>Explore Featured Projects</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-1 text-slate-950" />
          </button>
        </motion.div>

        {/* Dark Glassmorphic Stat Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto pt-6 border-t border-white/10"
        >
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-0.5"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-lora text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
