import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Download, Eye, FileText, Sparkles, CheckCircle2 } from 'lucide-react';
import { ResumeModal } from './ResumeModal';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Resume: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-sky-500/10 border border-blue-500/20 text-blue-600 dark:text-sky-400 text-xs font-bold mb-3"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Recruiter Quick View</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-outfit"
          >
            Curriculum Vitae / Resume
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto rounded-full mt-3 mb-4"
          />

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Download or preview my structured resume detailing my BCA academic performance, Power BI projects, SQL expertise, and analytical competencies.
          </p>
        </div>

        {/* Main Resume Preview Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl border border-slate-200/80 dark:border-slate-800/80 p-6 sm:p-10 shadow-2xl overflow-hidden relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Image Preview Mock */}
              <div className="lg:col-span-5 relative group cursor-pointer" onClick={() => setIsModalOpen(true)}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-300 dark:border-slate-700 bg-slate-900 aspect-[3/4]">
                  <img
                    src="/images/resume.svg"
                    alt="Chandni Kumari Resume Preview"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-lg flex items-center gap-2">
                      <Eye className="w-4 h-4" /> Click to Expand
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Resume Highlights & CTAs */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Verified Resume Snapshot</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-outfit mb-2">
                    Chandni Kumari
                  </h3>
                  <p className="text-sm font-bold text-blue-600 dark:text-sky-400 mb-4">
                    Aspiring Data Analyst • BCA Final Year (8.8 CGPA)
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                    Comprehensive, recruiter-tailored resume detailing my technical skill set across Power BI dashboard development, SQL query design, Python data manipulation, and academic projects.
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300 mb-8">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>Bachelor of Computer Applications (BCA) - Bengaluru City University</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>Hands-on Power BI &amp; SQL Project Portfolio</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>Prepared for Data Internship Technical &amp; HR Rounds</span>
                    </div>
                  </div>
                </div>

                {/* Buttons Row */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href={PORTFOLIO_DATA.personal.resumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="resume-download-btn"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </a>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    id="resume-view-btn"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs sm:text-sm border border-slate-300 dark:border-slate-700 hover:bg-slate-300 dark:hover:bg-slate-700 hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-sky-500" />
                    <span>View Interactive Resume</span>
                  </button>
                </div>

              </div>

            </div>
          </motion.div>
        </div>

        {/* Modal */}
        <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      </div>
    </section>
  );
};
