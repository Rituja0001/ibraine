import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star, Quote, MessageSquare, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from './testimonialsData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const TestimonialSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full py-16 md:py-24 bg-slate-50/70 border-t border-slate-200/80 overflow-hidden">
      {/* Subtle background ambient accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ffed4e]/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-lines opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200/70 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#ffb400]" />
            Client Success & Impact
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-lora font-bold text-slate-950 tracking-tight">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-lora">
            Direct feedback from brand founders, marketing leaders, and enterprise partners who scaled with iBraine.
          </p>
        </div>

        {/* Responsive Testimonials: Grid on Tablet/Desktop, Smooth Snap-Swipe on Mobile */}
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {TESTIMONIALS_DATA.map((item) => (
            <motion.div
              key={item.id}
              variants={shouldReduceMotion ? undefined : cardVariants}
              className="relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* 5-Star Rating Row & Category Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#ffb400]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 font-lora">
                    {item.projectType}
                  </span>
                </div>

                {/* Quote Text */}
                <div className="relative">
                  <Quote className="absolute -top-1 -left-1 w-6 h-6 text-slate-200/70 -z-0" />
                  <p className="relative z-10 text-slate-700 text-sm font-lora leading-relaxed italic mb-6">
                    “{item.quote}”
                  </p>
                </div>
              </div>

              {/* Client Info Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${item.avatarBg} flex-shrink-0 shadow-2xs`}
                >
                  {item.initials}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-slate-900 truncate font-lora">
                      {item.name}
                    </h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  </div>
                  <p className="text-xs text-slate-500 truncate font-lora">
                    {item.role} • <span className="font-semibold text-slate-700">{item.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;

