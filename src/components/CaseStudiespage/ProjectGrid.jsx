import React from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Layers } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05
    }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' }
  }
};

const ProjectGrid = ({ projects, activeTabKey, onResetFilters }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="w-full py-12 md:py-16 bg-white min-h-[600px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Header & Item Count Counter */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-100 flex-wrap gap-4">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <Layers className="w-4 h-4 text-[#0072BC]" />
            <span>
              Showing <span className="font-bold text-slate-900"></span> verified deployments
            </span>
          </div>

          <div className="text-xs text-slate-400 font-medium">
            Click any project to visit live application
          </div>
        </div>

        {/* Dynamic Project Grid with AnimatePresence */}
        <AnimatePresence mode="wait">
          {projects.length > 0 ? (
            <motion.div
              key={activeTabKey}
              variants={shouldReduceMotion ? undefined : containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={shouldReduceMotion ? undefined : cardVariants}
                  layout={!shouldReduceMotion}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-24 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
                <Layers className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-lora font-bold text-slate-900 mb-2">
                No projects found in this category
              </h3>
              <p className="text-slate-500 max-w-md text-sm font-lora mb-6">
                Try selecting another category or view all verified client deployments.
              </p>
              <button
                onClick={onResetFilters}
                type="button"
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all cursor-pointer"
              >
                View All 33 Projects
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectGrid;

