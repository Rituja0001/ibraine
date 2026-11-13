import React, { useRef, useEffect } from 'react';
import HeroSection from '../../components/CaseStudiespage/HeroSection';
import PortfolioMarquee from '../../components/CaseStudiespage/PortfolioMarquee';
import PortfolioGrid from '../../components/CaseStudiespage/PortfolioGrid';
import { PORTFOLIO_DATA } from '../../components/CaseStudiespage/portfolioData';

const PortfolioPage = () => {
  const catalogRef = useRef(null);

  useEffect(() => {
    document.title = 'Work Portfolio & Showcase | iBraine Digital Marketing Mumbai';

    // Canonical link
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.ibraine.com/website/portfolio');

    // Open Graph URL
    let ogUrl = document.querySelector("meta[property='og:url']");
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', 'https://www.ibraine.com/website/portfolio');

    // Robots meta tag: noindex, nofollow
    let robots = document.querySelector("meta[name='robots']");
    let created = false;
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
      created = true;
    }
    const prevContent = robots.getAttribute('content');
    robots.setAttribute('content', 'noindex, nofollow');

    return () => {
      if (created && robots.parentNode) {
        robots.parentNode.removeChild(robots);
      } else if (robots) {
        robots.setAttribute('content', prevContent || 'index, follow');
      }
    };
  }, []);

  const handleExploreClick = () => {
    if (catalogRef.current) {
      const navOffset = 80;
      const elementPosition = catalogRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="w-full min-h-screen bg-white font-lora selection:bg-[#ffed4e] selection:text-black overflow-x-clip">
      {/* 1. HERO SECTION */}
      <HeroSection onExploreClick={handleExploreClick} />

      {/* 2. REVERSE FEATURED BRANDS MARQUEE */}
      <PortfolioMarquee />

      {/* 3. CURATED PORTFOLIO GRID */}
      <div ref={catalogRef}>
        <PortfolioGrid projects={PORTFOLIO_DATA} />
      </div>
    </main>
  );
};

export default PortfolioPage;
