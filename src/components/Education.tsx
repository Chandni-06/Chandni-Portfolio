import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-sky-500/10 border border-blue-500/20 text-blue-600 dark:text-sky-400 text-xs font-bold mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-outfit"
          >
            Education Timeline
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto rounded-full mt-3 mb-4"
          />

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            My academic journey and scholastic milestones building a rigorous foundation in computer science and data analytics.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Bar */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-sky-400 to-emerald-400 transform sm:-translate-x-1/2 rounded-full opacity-30" />

          <div className="space-y-12">
            {PORTFOLIO_DATA.education.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Badge */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-9 h-9 rounded-full bg-blue-600 text-white border-4 border-slate-50 dark:border-slate-900 flex items-center justify-center shadow-md z-10">
                    <GraduationCap className="w-4 h-4" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${isEven ? 'sm:pr-10 sm:text-right' : 'sm:pl-10'}`}>
                    <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl hover:shadow-2xl transition-all">
                      
                      {/* Badge status */}
                      <div className={`flex items-center gap-2 mb-3 flex-wrap ${isEven ? 'sm:justify-end' : ''}`}>
                        <span className="px-3 py-1 rounded-full bg-blue-500/10 dark:bg-sky-500/15 text-blue-600 dark:text-sky-400 border border-blue-500/20 text-xs font-bold flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.period}
                        </span>

                        {item.score && (
                          <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-extrabold">
                            {item.score}
                          </span>
                        )}
                      </div>

                      {/* Degree Name */}
                      <h3 className="text-xl font-extrabold text-slate-900 dark:text-white font-outfit mb-1">
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <p className="text-xs font-bold text-sky-600 dark:text-sky-400 mb-3">
                        {item.institution} • {item.status}
                      </p>

                      {/* Description */}
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium pt-2 border-t border-slate-200 dark:border-slate-800">
                        {item.highlights.map((h, i) => (
                          <div key={i} className={`flex items-start gap-2 ${isEven ? 'sm:justify-end' : ''}`}>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
