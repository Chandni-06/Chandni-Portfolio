import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, BookOpen, Clock, PlayCircle, Youtube } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "../data/portfolioData";
import { formatImageUrl, getYouTubeEmbedUrl, isYouTubeUrl } from "../lib/utils";

const getProjectById = (projectId?: string): Project | null => {
  if (!projectId) return null;
  return (
    PORTFOLIO_DATA.projects.find((project) => project.id === projectId) || null
  );
};

export const ProjectDetails: React.FC = () => {
  const { projectId } = useParams();
  const project = getProjectById(projectId);
  const primaryImage = project?.gallery?.[0] || null;
  const youtubeEmbedUrl = project
    ? getYouTubeEmbedUrl(project.liveDemoUrl)
    : "";
  const hasYouTubeVideo =
    !!project && isYouTubeUrl(project.liveDemoUrl) && !!youtubeEmbedUrl;

  if (!project) {
    return (
      <main className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center glass-card p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white font-outfit">
            Project not found
          </h1>
          <p className="text-slate-600 dark:text-slate-300 mt-3">
            The project you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-28 pb-16 relative overflow-hidden">
      <div className="absolute top-24 left-1/4 w-80 h-80 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 right-1/4 w-80 h-80 bg-sky-400/10 dark:bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-sky-400 hover:opacity-80 transition-opacity mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 glass-card rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-xl"
          >
            {hasYouTubeVideo ? (
              <div className="w-full aspect-video bg-slate-950">
                <iframe
                  className="w-full h-full"
                  src={youtubeEmbedUrl}
                  title={`${project.title} screen recording`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : primaryImage ? (
              <img
                src={formatImageUrl(primaryImage.url)}
                alt={primaryImage.title}
                className="w-full aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-full aspect-video bg-slate-900 flex items-center justify-center text-slate-400">
                <BookOpen className="w-10 h-10" />
              </div>
            )}

            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-sky-400">
                  {project.category}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {project.duration}
                </span>
              </div>

              <div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-outfit tracking-tight">
                  {project.title}
                </h1>
                <p className="text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white font-outfit mb-3">
                  Key Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-blue-500/10 dark:bg-sky-500/15 border border-blue-500/20 text-blue-700 dark:text-sky-300 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 space-y-6">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-lg"
            >
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-outfit mb-3">
                Project Summary
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-lg"
            >
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-outfit mb-3">
                Business Problem
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.caseStudy.problemStatement}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-lg"
            >
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-outfit mb-3">
                What I Built
              </h2>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-lg"
            >
              <h2 className="text-xl font-bold text-slate-900 dark:text-white font-outfit mb-3">
                Impact
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.caseStudy.businessImpact}
              </p>
            </motion.section>

            <div className="flex flex-wrap gap-3">
              {hasYouTubeVideo ? (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-bold"
                >
                  <PlayCircle className="w-4 h-4" />
                  Watch on YouTube
                </a>
              ) : (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-bold"
                >
                  <PlayCircle className="w-4 h-4" />
                  Open Demo
                </a>
              )}
            </div>

            {hasYouTubeVideo && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="glass-card p-5 rounded-3xl border border-red-500/20 bg-red-500/5 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-3 text-red-500 font-bold text-sm uppercase tracking-wider">
                  <Youtube className="w-4 h-4" />
                  <span>Screen Recording</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Click play below to watch the project walkthrough directly
                  inside the portfolio.
                </p>
                <div className="aspect-video rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-950">
                  <iframe
                    className="w-full h-full"
                    src={youtubeEmbedUrl}
                    title={`${project.title} screen recording`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </motion.section>
            )}
          </div>
        </div>

        {project.gallery.length > 1 && (
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-outfit mb-4">
              Project Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {project.gallery.map((image) => (
                <a
                  key={image.id}
                  href={formatImageUrl(image.url)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-900 shadow-lg"
                >
                  <img
                    src={formatImageUrl(image.url)}
                    alt={image.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};
