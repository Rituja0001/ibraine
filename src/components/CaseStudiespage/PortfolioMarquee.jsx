import React from 'react';
import { PORTFOLIO_DATA } from './portfolioData';

const PortfolioMarquee = () => {
  const brandNames = PORTFOLIO_DATA.map((p) => p.name);
  const brandsList = [...brandNames, ...brandNames];

  return (
    <div className="w-full bg-slate-950 text-white py-4 overflow-hidden border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        <div className="flex-shrink-0 text-xs font-semibold tracking-wider uppercase text-[#ffed4e] mr-6 hidden sm:flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#ffed4e] animate-ping" />
          Featured Brands
        </div>

        {/* Marquee Track */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div
            className="flex w-max items-center gap-8 sm:gap-12 hover:[animation-play-state:paused]"
            style={{ animation: 'marquee 40s linear infinite reverse' }}
          >
            {brandsList.map((brand, i) => (
              <div
                key={`${brand}-${i}`}
                className="flex items-center gap-3 text-sm sm:text-base font-medium text-slate-300 hover:text-white transition-colors cursor-default whitespace-nowrap"
              >
                <span className="text-slate-600">•</span>
                <span className="font-lora tracking-wide">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioMarquee;
