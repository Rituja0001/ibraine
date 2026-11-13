import React, { useState } from 'react';
import { ExternalLink, Shield, Globe, Monitor, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react';

// Official-style SVG icons for Google Play and Apple App Store
const PlayStoreIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.6 2.3A1.5 1.5 0 0 0 3 3.6v16.8a1.5 1.5 0 0 0 .6 1.3l9.8-9.7L3.6 2.3z" fill="#00E676" />
    <path d="M16.9 8.6l-3.5 3.4 3.5 3.4 3.9-2.2c1.1-.6 1.1-1.7 0-2.3l-3.9-2.3z" fill="#FFD600" />
    <path d="M3.6 21.7l9.8-9.7 3.5 3.4-11.2 6.4c-.8.5-1.7.3-2.1-.1z" fill="#F50057" />
    <path d="M3.6 2.3c.4-.4 1.3-.6 2.1-.1l11.2 6.4-3.5 3.4-9.8-9.7z" fill="#00B0FF" />
  </svg>
);

const AppleIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.64 1.35-.58.67-1.09 1.74-.95 2.77 1 .08 2.04-.52 2.67-1.27z" />
  </svg>
);

const ProjectCard = ({ project }) => {
  const [imageError, setImageError] = useState(false);

  const isMobileApp = project.category === 'mobileapp';
  const isWebApp = project.category === 'webapp';
  const isPlayStore = project.platform === 'playstore' || (project.url && project.url.includes('play.google.com'));
  const isAppStore = project.platform === 'appstore' || (project.url && project.url.includes('apple.com'));

  // Determine CTA label and icon based on category/platform
  let ctaLabel = 'Visit Website';
  let CtaIcon = ExternalLink;
  let isCustomSvg = false;

  if (isPlayStore) {
    ctaLabel = 'View on Play Store';
    CtaIcon = PlayStoreIcon;
    isCustomSvg = true;
  } else if (isAppStore) {
    ctaLabel = 'View on App Store';
    CtaIcon = AppleIcon;
    isCustomSvg = true;
  } else if (isWebApp) {
    ctaLabel = 'Launch Web App';
    CtaIcon = Monitor;
  }

  // Get nice display URL or domain
  const displayDomain = project.domain || (project.url ? project.url.replace(/^https?:\/\//, '').replace(/\/.*$/, '') : '');

  return (
    <div className="group relative flex flex-col h-full bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
      {/* 1. Browser/App Chrome Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 border-b border-slate-200/80 select-none">
        {/* Window controls */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
        </div>

        {/* URL Pill */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/70 text-[11px] font-medium text-slate-600 max-w-[190px] sm:max-w-[220px] truncate shadow-2xs">
          <Shield className="w-3 h-3 text-emerald-600 flex-shrink-0" />
          <span className="truncate">{displayDomain}</span>
        </div>

        {/* Live status badge */}
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 hidden sm:inline">
            Live
          </span>
        </div>
      </div>

      {/* 2. Project Screenshot Image Container (Exact 3:2 native ratio, Maximum Crispness, No Blurring) */}
      <div className="relative w-full aspect-[3/2] overflow-hidden bg-slate-100 flex items-center justify-center">
        {!imageError ? (
          <img
            src={project.image}
            alt={`${project.name} preview`}
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 select-none"
            style={{
              imageRendering: 'auto'
            }}
          />
        ) : (
          /* Graceful Branded Fallback */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#ffed4e]/20 border border-[#ffed4e]/40 flex items-center justify-center mb-3">
              {isMobileApp ? (
                <Smartphone className="w-7 h-7 text-[#ffed4e]" />
              ) : isWebApp ? (
                <Monitor className="w-7 h-7 text-[#ffed4e]" />
              ) : (
                <Globe className="w-7 h-7 text-[#ffed4e]" />
              )}
            </div>
            <h4 className="font-lora text-lg font-bold tracking-tight text-white mb-1">
              {project.name}
            </h4>
            <p className="text-xs text-slate-300 line-clamp-2 max-w-xs font-lora">
              {project.niche}
            </p>
          </div>
        )}

        {/* Hover Slide-up Button Bar */}
        <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950/95 text-white text-sm font-semibold shadow-2xl backdrop-blur-md border border-white/20 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 hover:bg-[#ffed4e] hover:text-slate-950 hover:border-transparent cursor-pointer"
          >
            <span>{ctaLabel}</span>
            {isCustomSvg ? <CtaIcon className="w-4 h-4" /> : <CtaIcon className="w-4 h-4" />}
          </a>
        </div>
      </div>

      {/* 3. Card Details & Meta */}
      <div className="flex flex-col flex-grow p-5 sm:p-6 bg-white">
        {/* Niche & Results Pill */}
        <div className="flex items-center justify-between gap-2 mb-2.5 flex-wrap">
          <span className="text-xs font-semibold text-[#0072BC] uppercase tracking-wider font-lora">
            {project.niche}
          </span>
          {project.results && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200/70 text-amber-800 text-[11px] font-bold">
              <Sparkles className="w-3 h-3 text-amber-600" />
              {project.results}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-lora font-bold text-slate-950 group-hover:text-[#0072BC] transition-colors leading-snug">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-hidden"
          >
            {project.name}
          </a>
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-slate-600 font-lora leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tags?.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Link Icon */}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${ctaLabel} for ${project.name}`}
            className="flex-shrink-0 p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all cursor-pointer"
          >
            {isCustomSvg ? <CtaIcon className="w-4 h-4" /> : <CtaIcon className="w-4 h-4" />}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

