export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  projectType: string;
  quote: string;
  initials: string;
  avatarBg: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Rajesh Sharma',
    role: 'Managing Director',
    company: 'Futurz 4x4 Overland',
    rating: 5,
    projectType: 'E-Commerce Infrastructure',
    quote: 'iBraine transformed our complex custom 4x4 automotive parts catalog into a seamless high-speed purchasing engine. Our direct digital inquiries skyrocketed within the first 60 days.',
    initials: 'RS',
    avatarBg: 'bg-emerald-100 text-emerald-800'
  },
  {
    id: 'testimonial-2',
    name: 'Dr. Neha Parekh',
    role: 'Clinical Director & Founder',
    company: 'Plus Dental Healthcare',
    rating: 5,
    projectType: 'Healthcare Web Platform',
    quote: 'The team understood our clinical patient acquisition requirements perfectly. Online booking conversion rates improved tremendously, giving our specialists a steady flow of high-value appointments.',
    initials: 'NP',
    avatarBg: 'bg-blue-100 text-[#0072BC]'
  },
  {
    id: 'testimonial-3',
    name: 'Kunal Singhania',
    role: 'VP of Operations',
    company: 'Startraack Enterprise',
    rating: 5,
    projectType: 'SaaS & Mobile Workforce App',
    quote: 'Scaling our enterprise workforce platform across web and mobile was flawless. iBraine’s architecture handled thousands of simultaneous field agent check-ins without a glitch.',
    initials: 'KS',
    avatarBg: 'bg-amber-100 text-amber-800'
  },
  {
    id: 'testimonial-4',
    name: 'Sophie Laurent',
    role: 'Brand & E-Commerce Lead',
    company: 'Laumière Gourmet Fruits',
    rating: 5,
    projectType: 'Luxury D2C Commerce',
    quote: 'Exquisite aesthetic execution paired with blazing fast Shopify performance. Our holiday corporate gifting campaign set new company records for average order value and ROAS.',
    initials: 'SL',
    avatarBg: 'bg-purple-100 text-purple-800'
  }
];

