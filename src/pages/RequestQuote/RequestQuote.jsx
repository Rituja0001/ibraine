import React, { useEffect } from 'react';
import InteractivePlanner from '../../components/InteractivePlanner/InteractivePlanner';

const RequestQuote = () => {
  useEffect(() => {
    document.title = 'Request a Quote & Project Planner | iBraine Digital Marketing';
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

  return (
    <main className="w-full min-h-screen pt-0 bg-[#fdfdfd]">
      <InteractivePlanner />
    </main>
  );
};

export default RequestQuote;
