import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FolderKanban, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { ProjectCard } from "./ProjectCard";

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Power BI", "Python", "Excel"];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    if (selectedCategory === "All") return true;
    return (
      project.category === selectedCategory ||
      project.technologies.includes(selectedCategory)
    );
  });

  return (
    <section
      id="projects"
      className="py-20 relative bg-slate-100/50 dark:bg-slate-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-sky-500/10 border border-blue-500/20 text-blue-600 dark:text-sky-400 text-xs font-bold mb-3"
          >
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Practical Business Intelligence Solutions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-outfit"
          >
            Featured Projects
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto rounded-full mt-3 mb-4"
          />

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Explore interactive dashboards, DAX calculations, and data analytics
            case studies developed to solve real-world corporate challenges.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              id={`project-filter-${cat.toLowerCase().replace(" ", "-")}`}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/25 scale-105"
                  : "bg-slate-200/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
