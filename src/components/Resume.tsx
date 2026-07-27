import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Eye, FileText, Sparkles, CheckCircle2, AlertCircle, X, ShieldCheck } from 'lucide-react';
import { ResumeModal } from './ResumeModal';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Resume: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const resumeFilePath = PORTFOLIO_DATA.personal.resumePdf || '/images/Chandni Resume.pdf';

  const showUnavailableToast = () => {
    setToastMessage('Resume is currently unavailable.');
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleDownload = async (e: React.MouseEvent) => {
    try {
      const response = await fetch(resumeFilePath, { method: 'HEAD' });
      if (!response.ok && response.status !== 200 && response.status !== 304) {
        e.preventDefault();
        showUnavailableToast();
      }
    } catch {
      // If fetch fails, allow standard link download attempt but fallback if error
    }
  };

  const handleViewPdf = async (e: React.MouseEvent) => {
    try {
      const response = await fetch(resumeFilePath, { method: 'HEAD' });
      if (!response.ok && response.status !== 200 && response.status !== 304) {
        e.preventDefault();
        showUnavailableToast();
      }
    } catch {
      // Allow link click
    }
  };

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
            Download or view my official resume PDF detailing my BCA academic performance, Power BI dashboards, SQL query design, and data analysis skills.
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
              
              {/* Left Column: Official PDF Document Preview Card */}
              <div className="lg:col-span-5 relative group">
                <a
                  href={resumeFilePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleViewPdf}
                  className="block relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 p-6 aspect-[3/4] flex flex-col justify-between group-hover:border-sky-500/50 transition-all duration-300"
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sky-400">
                      <FileText className="w-6 h-6" />
                      <span className="text-xs font-bold uppercase tracking-wider">PDF Document</span>
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30">
                      1 Page
                    </span>
                  </div>

                  {/* Document Graphic Mock */}
                  <div className="my-auto space-y-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 shadow-inner">
                    <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                      <div>
                        <p className="text-xs font-bold text-white">Chandni Kumari</p>
                        <p className="text-[10px] text-slate-400">Data Analyst Resume</p>
                      </div>
                    </div>
                    <div className="space-y-1.5 pt-1">
                      <div className="h-2 bg-slate-700/60 rounded w-3/4" />
                      <div className="h-2 bg-slate-700/40 rounded w-full" />
                      <div className="h-2 bg-slate-700/40 rounded w-5/6" />
                      <div className="h-2 bg-blue-500/40 rounded w-2/3" />
                      <div className="h-2 bg-slate-700/40 rounded w-4/5" />
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                    <span>Chandni Resume.pdf</span>
                    <span className="text-sky-400 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <Eye className="w-3.5 h-3.5" /> View PDF
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-4 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-xl flex items-center gap-2">
                      <Eye className="w-4 h-4" /> Open PDF in New Tab
                    </span>
                  </div>
                </a>
              </div>

              {/* Right Column: Resume Highlights & CTAs */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Official Candidate Resume</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-outfit mb-2">
                    Chandni Kumari
                  </h3>
                  <p className="text-sm font-bold text-blue-600 dark:text-sky-400 mb-4">
                    Aspiring Data Analyst • BCA Final Year
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                    Recruiter-focused resume highlighting my expertise in Power BI dashboard development, SQL database querying, Python data analysis, and academic performance.
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
                      <span>Ready for Data Analyst Entry-Level &amp; Internship Roles</span>
                    </div>
                  </div>
                </div>

                {/* Buttons Row */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href={resumeFilePath}
                    download="Chandni_Resume.pdf"
                    onClick={handleDownload}
                    id="resume-download-btn"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </a>

                  <a
                    href={resumeFilePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleViewPdf}
                    id="resume-view-pdf-btn"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs sm:text-sm border border-slate-300 dark:border-slate-700 hover:bg-slate-300 dark:hover:bg-slate-700 hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-sky-500" />
                    <span>View Resume</span>
                  </a>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    id="resume-interactive-view-btn"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-sky-500/10 dark:bg-sky-400/10 text-blue-600 dark:text-sky-300 font-bold text-xs hover:bg-sky-500/20 transition-all cursor-pointer border border-sky-400/20"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Interactive Breakdown</span>
                  </button>
                </div>

              </div>

            </div>
          </motion.div>
        </div>

        {/* Modal */}
        <ResumeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      </div>

      {/* Floating Unavailable Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm w-full px-4"
          >
            <div className="p-4 rounded-2xl bg-slate-900/95 text-white border border-rose-500/50 shadow-2xl backdrop-blur-xl flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 text-rose-400">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span className="text-xs font-bold text-white">{toastMessage}</span>
              </div>
              <button
                onClick={() => setToastMessage(null)}
                className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

