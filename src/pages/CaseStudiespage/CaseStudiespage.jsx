import React, { useState, useMemo, useRef, useEffect } from 'react';
import HeroSection from '../../components/CaseStudiespage/HeroSection';
import TrustMarquee from '../../components/CaseStudiespage/TrustMarquee';
import CategoryTabs from '../../components/CaseStudiespage/CategoryTabs';
import ProjectGrid from '../../components/CaseStudiespage/ProjectGrid';
import TestimonialSection from '../../components/CaseStudiespage/TestimonialSection';
import { PROJECTS_DATA } from '../../components/CaseStudiespage/projectsData';

const CaseStudiespage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const catalogRef = useRef(null);

  // Set document title and SEO canonical / OG tags
  useEffect(() => {
    document.title = 'Case Studies & Work Portfolio | iBraine Digital Marketing Mumbai';

    // Enforce noindex, nofollow for search engines
    let meta = document.querySelector("meta[name='robots']");
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'robots';
      document.head.appendChild(meta);
    }
    meta.content = 'noindex, nofollow';

    // Canonical link tag
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.ibraine.com/website/case-studies');

    // Open Graph URL
    let ogUrl = document.querySelector("meta[property='og:url']");
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', 'https://www.ibraine.com/website/case-studies');

    return () => {
      meta.content = 'index, follow';
    };
  }, []);

  // Compute exact counts for the 5 tabs
  const counts = useMemo(() => {
    return {
      all: PROJECTS_DATA.length,
      ecommerce: PROJECTS_DATA.filter((p) => p.category === 'ecommerce').length,
      nonecommerce: PROJECTS_DATA.filter((p) => p.category === 'nonecommerce').length,
      webapp: PROJECTS_DATA.filter((p) => p.category === 'webapp').length,
      mobileapp: PROJECTS_DATA.filter((p) => p.category === 'mobileapp').length
    };
  }, []);

  // Filter projects based on the active tab
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  // Smooth scroll down to project catalog on "Explore" click
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

  const handleResetFilters = () => {
    setActiveCategory('all');
  };

  return (
    <main className="w-full min-h-screen bg-white font-lora selection:bg-[#ffed4e] selection:text-black overflow-x-clip">
      {/* 1. HERO SECTION */}
      <HeroSection onExploreClick={handleExploreClick} />

      {/* 2. TRUST TICKER / MARQUEE STRIP */}
      <TrustMarquee />

      {/* 3. CATEGORY FILTER TABS (Sticky centered navigation bar) */}
      <div ref={catalogRef}>
        <CategoryTabs
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          counts={counts}
        />
      </div>

      {/* 4. ANIMATED PROJECT GRID */}
      <ProjectGrid
        projects={filteredProjects}
        activeTabKey={activeCategory}
        onResetFilters={handleResetFilters}
      />

      {/* 5. VERIFIED CLIENT TESTIMONIALS */}
      <TestimonialSection />
    </main>
  );
};

export default CaseStudiespage;