import React from 'react';
import CaseStudiespage from '@/pages/CaseStudiespage/CaseStudiespage';

export const metadata = {
  title: 'Case Studies & Work Portfolio | iBraine Digital Marketing Mumbai',
  description: 'Explore verified case studies, digital marketing results, e-commerce storefronts, and mobile applications built by iBraine.',
  alternates: {
    canonical: 'https://www.ibraine.com/website/case-studies',
  },
  openGraph: {
    title: 'Case Studies & Work Portfolio | iBraine Digital Marketing Mumbai',
    description: 'Explore verified case studies, digital marketing results, e-commerce storefronts, and mobile applications built by iBraine.',
    url: 'https://www.ibraine.com/website/case-studies',
    siteName: 'iBraine',
    type: 'website',
  },
};

export default function Page() {
  return <CaseStudiespage />;
}

