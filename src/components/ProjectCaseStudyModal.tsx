import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Lightbulb, Database, Sparkles, TrendingUp, Code2, ExternalLink, Github } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl my-8 glass-card bg-slate-900 text-white rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden p-6 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6 pr-10">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider">
              Deep-Dive Case Study
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-outfit text-white mt-2">
              {project.title}
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Tech Stack: {project.technologies.join(' • ')} | Duration: {project.duration}
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-300 max-h-[65vh] overflow-y-auto pr-2">
            {/* Problem Statement */}
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700">
              <h4 className="font-bold text-sky-400 text-base mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-400" /> Business Problem Statement
              </h4>
              <p className="leading-relaxed">{caseStudy.problemStatement}</p>
            </div>

            {/* Dataset Details */}
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700">
              <h4 className="font-bold text-sky-400 text-base mb-2 flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-400" /> Dataset Scope
              </h4>
              <p className="leading-relaxed">{caseStudy.datasetDetails}</p>
            </div>

            {/* Data Cleaning & ETL */}
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700">
              <h4 className="font-bold text-sky-400 text-base mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-400" /> ETL &amp; Data Cleaning Steps
              </h4>
              <ul className="space-y-2 mt-2">
                {caseStudy.dataCleaningProcess.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DAX / Code Measures */}
            {caseStudy.daxMeasures && caseStudy.daxMeasures.length > 0 && (
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700">
                <h4 className="font-bold text-sky-400 text-base mb-2 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-indigo-400" /> Custom DAX Measures &amp; Calculations
                </h4>
                <div className="space-y-2 font-mono text-xs bg-slate-950 p-3 rounded-xl border border-slate-800 text-emerald-400">
                  {caseStudy.daxMeasures.map((dax, idx) => (
                    <div key={idx}>// {dax}</div>
                  ))}
                </div>
              </div>
            )}

            {/* Business Impact */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
              <h4 className="font-bold text-emerald-400 text-base mb-2 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" /> Business Impact &amp; Results
              </h4>
              <p className="leading-relaxed font-medium text-slate-200">{caseStudy.businessImpact}</p>
            </div>
          </div>

          {/* Modal Footer Buttons */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub Repository</span>
            </a>

            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open Power BI Interactive View</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
