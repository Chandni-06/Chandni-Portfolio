import React from "react";
import { motion } from "motion/react";
import { Clock, CheckCircle2, Layers, ArrowRight, Youtube } from "lucide-react";
import { Project } from "../data/portfolioData";
import { Link } from "react-router-dom";

import { formatImageUrl, isYouTubeUrl } from "../lib/utils";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const previewFeatures = project.features.slice(0, 2);
  const previewTech = project.technologies.slice(0, 3);
  const hasYouTubeVideo = isYouTubeUrl(project.liveDemoUrl);

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
        <div className="p-5 sm:p-6 space-y-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-outfit group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors line-clamp-2">
              {project.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed font-normal line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2">
            {previewTech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-blue-500/10 dark:bg-sky-500/15 border border-blue-500/20 text-blue-700 dark:text-sky-300 text-[11px] font-semibold"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > previewTech.length && (
              <span className="px-2.5 py-1 rounded-lg bg-slate-200/70 dark:bg-slate-800/70 border border-slate-300/60 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-[11px] font-semibold">
                +{project.technologies.length - previewTech.length} more
              </span>
            )}
          </div>

          {/* Key Features List */}
          <div className="space-y-2 pt-1">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
              <span>Highlights</span>
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-medium">
              {previewFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
              {project.features.length > previewFeatures.length && (
                <li className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 pl-6">
                  +{project.features.length - previewFeatures.length} more
                  points in detail page
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className="p-5 sm:p-6 pt-0 flex items-center justify-end gap-3 border-t border-slate-200/60 dark:border-slate-800/60 mt-4">
        {hasYouTubeVideo && (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-youtube-btn-${project.id}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-red-600 text-white text-xs font-bold hover:bg-red-700 transition-colors cursor-pointer shadow-md shadow-red-500/20"
            title="Watch screen recording on YouTube"
          >
            <Youtube className="w-3.5 h-3.5" />
            <span>YouTube</span>
          </a>
        )}

        <Link
          to={`/projects/${project.id}`}
          id={`project-detail-btn-${project.id}`}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors cursor-pointer shadow-md shadow-blue-500/20"
        >
          <ArrowRight className="w-3.5 h-3.5" />
          <span>View Details</span>
        </Link>
      </div>
    </motion.div>
  );
};
