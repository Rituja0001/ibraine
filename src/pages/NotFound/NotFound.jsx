import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = '404 - Page Not Found | iBraine Digital Marketing';
  }, []);

  return (
    <main className="relative w-full min-h-[75vh] flex items-center justify-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white font-lora overflow-hidden">
      {/* Decorative Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft Golden Brand Radial Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[560px] h-[260px] sm:h-[380px] bg-gradient-to-tr from-[#ffed4e]/25 via-amber-200/20 to-transparent rounded-full blur-3xl opacity-80" />
        
        {/* Soft Blue Secondary Glow */}
        <div className="absolute bottom-12 right-1/4 w-[280px] sm:w-[420px] h-[220px] sm:h-[300px] bg-[#0072BC]/10 rounded-full blur-3xl opacity-60" />
        
        {/* Subtle Tech Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#000000 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="relative max-w-2xl mx-auto text-center z-10 w-full">
        {/* Top Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50/90 border border-amber-200/70 text-amber-900 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-2xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
          </span>
          <span className="tracking-wide">Error 404 • Page Not Found</span>
        </motion.div>

        {/* 404 Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative flex items-center justify-center my-2 sm:my-4 select-none"
        >
          <div className="flex items-center justify-center text-7xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-black font-lora tracking-tight leading-none">
            <span className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-700 bg-clip-text text-transparent">
              4
            </span>

            {/* Modern Animated Orbiting 0 */}
            <div className="relative mx-2 sm:mx-3 md:mx-4 flex items-center justify-center w-[0.72em] h-[0.72em]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-amber-400/70"
              />
              <div className="w-[78%] h-[78%] rounded-full bg-gradient-to-br from-[#ffed4e] via-[#ffb400] to-amber-600 shadow-lg shadow-amber-500/25 flex items-center justify-center p-1.5 sm:p-2.5">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-inner">
                  <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 rounded-full bg-slate-950" />
                </div>
              </div>
            </div>

            <span className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-700 bg-clip-text text-transparent">
              4
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold font-lora text-slate-950 tracking-tight leading-tight px-2"
        >
          Looking for something that isn’t here?
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-lg mx-auto leading-relaxed px-4"
        >
          The page you requested may have been moved, renamed, or no longer exists. Let’s get you back on track.
        </motion.p>

        {/* Responsive Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 max-w-md mx-auto w-full px-4 sm:px-0"
        >
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 font-semibold text-sm sm:text-base hover:bg-slate-50 hover:border-slate-400 transition-all shadow-xs cursor-pointer active:scale-98"
          >
            <ArrowLeft className="w-4 h-4 text-slate-600" />
            <span>Go Back</span>
          </button>

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-950 text-white font-semibold text-sm sm:text-base shadow-md hover:bg-slate-800 hover:shadow-lg transition-all cursor-pointer active:scale-98 group"
          >
            <Home className="w-4 h-4 text-[#ffed4e] group-hover:scale-110 transition-transform" />
            <span>Back to Homepage</span>
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFound;
