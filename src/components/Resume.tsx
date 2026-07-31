import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Download,
  Eye,
  FileText,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  X,
  ShieldCheck,
} from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const Resume: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const resumeFilePath = PORTFOLIO_DATA.personal.resumePdf;

  const showUnavailableToast = () => {
    setToastMessage("Resume is currently unavailable.");
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleDownload = async (e: React.MouseEvent) => {
    try {
      const response = await fetch(resumeFilePath, { method: "HEAD" });
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
      const response = await fetch(resumeFilePath, { method: "HEAD" });
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
        <div className="text-center max-w-2xl mx-auto mb-12">
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
            Resume
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto rounded-full mt-3 mb-4"
          />

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Quick access to my official resume PDF for downloading or viewing in
            a new tab.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl border border-slate-200/80 dark:border-slate-800/80 p-5 sm:p-6 shadow-2xl overflow-hidden relative"
          >
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
              <div className="lg:w-[280px] rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-950/95 p-5 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sky-400">
                    <FileText className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Resume PDF
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30">
                    Latest
                  </span>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <div>
                      <p className="text-sm font-bold text-white">
                        Chandni Kumari
                      </p>
                      <p className="text-[10px] text-slate-400">
                        Data Analyst Resume
                      </p>
                    </div>
                  </div>
                  <div className="h-24 rounded-lg bg-gradient-to-br from-blue-600/25 to-sky-400/10 border border-sky-400/20 flex items-end p-3">
                    <div className="w-full space-y-2">
                      <div className="h-2 rounded bg-slate-700/80 w-5/6" />
                      <div className="h-2 rounded bg-slate-700/60 w-full" />
                      <div className="h-2 rounded bg-sky-500/60 w-3/5" />
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Clean, recruiter-ready PDF.
                  </p>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Fast Download</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-outfit mb-2">
                    Resume in one click
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 font-normal max-w-2xl">
                    Get my latest resume instantly or open it in a new tab. This
                    card is intentionally compact so the section stays clean and
                    modern.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/50 px-3 py-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>BCA Final Year</span>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/50 px-3 py-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>Power BI, SQL, Python</span>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/50 px-3 py-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>Internship Ready</span>
                    </div>
                    <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/70 dark:bg-slate-900/50 px-3 py-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>Recruiter Friendly</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href={resumeFilePath}
                    download="Chandni_Resume.pdf"
                    onClick={handleDownload}
                    id="resume-download-btn"
                    className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </a>

                  <a
                    href={resumeFilePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleViewPdf}
                    id="resume-view-pdf-btn"
                    className="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-xs sm:text-sm border border-slate-300 dark:border-slate-700 hover:bg-slate-300 dark:hover:bg-slate-700 hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <Eye className="w-4 h-4 text-sky-500" />
                    <span>View PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
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
                <span className="text-xs font-bold text-white">
                  {toastMessage}
                </span>
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
