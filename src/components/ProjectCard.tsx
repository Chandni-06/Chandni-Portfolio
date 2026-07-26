import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, BookOpen, Clock, CheckCircle2, Layers, Download, Lightbulb, TrendingUp } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { ProjectGallery } from './ProjectGallery';

import { formatImageUrl } from '../lib/utils';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="glass-card rounded-3xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden shadow-xl hover:shadow-2xl hover:border-blue-500/40 dark:hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between group"
    >
      <div>
        {/* Cover Image Banner */}
        <div className="relative aspect-video bg-slate-900 overflow-hidden">
          <img
            src={formatImageUrl(project.coverImage)}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-sky-400 border border-sky-400/30 text-xs font-extrabold shadow-md">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md text-slate-300 border border-slate-700 text-xs font-semibold flex items-center gap-1 shadow-md">
              <Clock className="w-3 h-3 text-sky-400" />
              {project.duration}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white font-outfit group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Business Problem Box */}
          {project.caseStudy?.problemStatement && (
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              <span className="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5 mb-1">
                <Lightbulb className="w-3.5 h-3.5 text-amber-500" /> Business Problem
              </span>
              <p className="line-clamp-2">{project.caseStudy.problemStatement}</p>
            </div>
          )}

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-blue-500/10 dark:bg-sky-500/15 border border-blue-500/20 text-blue-700 dark:text-sky-300 text-xs font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Key Features List */}
          <div className="space-y-2 pt-1">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
              <span>Key Features &amp; Deliverables</span>
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Insights Preview */}
          {project.caseStudy?.keyInsights && project.caseStudy.keyInsights.length > 0 && (
            <div className="space-y-2 pt-1">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                <span>Business Insights</span>
              </p>
              <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 font-medium">
                {project.caseStudy.keyInsights.slice(0, 3).map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                    <span className="line-clamp-2">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Project Image Gallery Component */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="pt-2">
              <ProjectGallery gallery={project.gallery} projectTitle={project.title} />
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className="p-6 sm:p-8 pt-0 flex flex-wrap items-center justify-between gap-2.5 border-t border-slate-200/60 dark:border-slate-800/60 mt-6">
        <div className="flex items-center gap-2 flex-wrap">
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-demo-btn-${project.id}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors cursor-pointer shadow-md shadow-blue-500/20"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Live Demo</span>
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-github-btn-${project.id}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => onOpenCaseStudy(project)}
            id={`project-casestudy-btn-${project.id}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-500/10 dark:bg-sky-400/10 border border-sky-400/30 text-blue-600 dark:text-sky-300 text-xs font-bold hover:bg-sky-500/20 transition-colors cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Case Study</span>
          </button>

          {project.reportUrl && (
            <a
              href={formatImageUrl(project.reportUrl)}
              target="_blank"
              rel="noopener noreferrer"
              id={`project-report-btn-${project.id}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold hover:bg-emerald-500/20 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Report</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
