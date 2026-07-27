import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, FileText, CheckCircle2, Award, BookOpen, ExternalLink, Eye } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'Overview' | 'Education' | 'Projects' | 'Skills'>('Overview');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl my-8 glass-card bg-slate-900 text-white rounded-3xl border border-slate-700/80 shadow-2xl p-6 sm:p-8 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-blue-600/20 text-sky-400">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold font-outfit text-white">
                  Chandni Kumari — Curriculum Vitae
                </h3>
                <p className="text-xs text-sky-400 font-semibold">
                  Aspiring Data Analyst | Power BI • SQL • Python • Excel
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-800 pb-4">
            {(['Overview', 'Education', 'Projects', 'Skills'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-h-[55vh] overflow-y-auto pr-2 space-y-6 text-sm">
            {activeTab === 'Overview' && (
              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700">
                  <h4 className="font-bold text-sky-400 text-base mb-2">Executive Summary</h4>
                  <p className="text-slate-300 leading-relaxed font-normal">{PORTFOLIO_DATA.personal.summary}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700">
                    <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4 text-sky-400" /> Target Roles
                    </h5>
                    <ul className="text-xs text-slate-300 space-y-1.5">
                      <li>• Data Analyst Intern</li>
                      <li>• Junior BI Developer</li>
                      <li>• Business Intelligence Intern</li>
                      <li>• SQL &amp; Analytics Associate</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700">
                    <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4 text-emerald-400" /> Key Strengths
                    </h5>
                    <ul className="text-xs text-slate-300 space-y-1.5">
                      <li>• DAX Calculations &amp; Star Schema Modeling</li>
                      <li>• SQL Joins, Subqueries &amp; Aggregations</li>
                      <li>• Data Cleaning in Power Query &amp; Excel</li>
                      <li>• Python Exploratory Data Analysis (EDA)</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Education' && (
              <div className="space-y-4">
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700">
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                      <h4 className="font-bold text-white text-base">{edu.degree}</h4>
                      <span className="px-2.5 py-1 rounded-full bg-blue-500/20 text-sky-400 text-xs font-bold">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs text-sky-300 font-semibold mb-2">{edu.institution} — {edu.score}</p>
                    <p className="text-xs text-slate-300">{edu.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'Projects' && (
              <div className="space-y-4">
                {PORTFOLIO_DATA.projects.map((proj) => (
                  <div key={proj.id} className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700">
                    <h4 className="font-bold text-white text-base mb-1">{proj.title}</h4>
                    <p className="text-xs text-sky-400 font-semibold mb-2">Tools: {proj.technologies.join(', ')}</p>
                    <p className="text-xs text-slate-300 mb-3">{proj.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'Skills' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PORTFOLIO_DATA.skills.map((category) => (
                  <div key={category.title} className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700">
                    <h4 className="font-bold text-sky-400 text-sm mb-3">{category.title}</h4>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {category.skills.map((s) => (
                        <li key={s.name} className="flex justify-between items-center">
                          <span>{s.name}</span>
                          <span className="font-mono text-emerald-400 font-bold">{s.level}%</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between flex-wrap gap-3">
            <span className="text-xs text-slate-400">PDF Format • Updated 2026</span>
            <div className="flex items-center gap-2">
              <a
                href="/images/Chandni Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                id="modal-view-pdf-btn"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-400 text-xs font-bold transition-colors cursor-pointer border border-slate-700"
              >
                <Eye className="w-4 h-4" />
                <span>View PDF</span>
              </a>
              <a
                href="/images/Chandni Resume.pdf"
                download="Chandni Resume.pdf"
                id="modal-download-pdf-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors cursor-pointer shadow-md shadow-blue-500/20"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
