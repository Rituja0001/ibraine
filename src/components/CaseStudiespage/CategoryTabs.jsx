import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, ShoppingBag, Building2, Monitor, Smartphone } from 'lucide-react';

const TABS = [
  { id: 'all', label: 'All Projects', icon: LayoutGrid },
  { id: 'ecommerce', label: 'E-Commerce', icon: ShoppingBag },
  { id: 'nonecommerce', label: 'Non-E-Commerce', icon: Building2 },
  { id: 'webapp', label: 'Web Application', icon: Monitor },
  { id: 'mobileapp', label: 'Mobile Application', icon: Smartphone }
];

const CategoryTabs = ({ activeCategory, onSelectCategory, counts = {} }) => {
  return (
    <div className="sticky top-16 md:top-20 z-30 w-full py-4 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Desktop / Scrollable Mobile Tab Navigation */}
        <div className="flex items-center md:justify-center overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-1 px-1">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/70 shadow-inner">
            {TABS.map((tab) => {
              const isActive = activeCategory === tab.id;
              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => onSelectCategory(tab.id)}
                  className={`relative flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap snap-start cursor-pointer select-none ${
                    isActive
                      ? 'text-slate-950 font-bold shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                  aria-pressed={isActive}
                  type="button"
                >
                  {/* Sliding Pill Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-slate-200/80 z-0"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}

                  {/* Tab Content (Icon + Label only, no number badge) */}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon
                      className={`w-4 h-4 transition-colors ${
                        isActive ? 'text-[#0072BC]' : 'text-slate-500'
                      }`}
                    />
                    <span>{tab.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
