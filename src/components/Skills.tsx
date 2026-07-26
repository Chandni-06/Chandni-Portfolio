import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, FileCode2, LayoutDashboard, Sheet, Lightbulb, TrendingUp, MessageSquare, Zap, Cpu, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Programming' | 'Visualization' | 'Soft Skills'>('All');

  const iconMap: Record<string, React.ReactNode> = {
    Database: <Database className="w-5 h-5 text-blue-500" />,
    FileCode2: <FileCode2 className="w-5 h-5 text-sky-400" />,
    LayoutDashboard: <LayoutDashboard className="w-5 h-5 text-yellow-500" />,
    Sheet: <Sheet className="w-5 h-5 text-emerald-500" />,
    Lightbulb: <Lightbulb className="w-5 h-5 text-amber-400" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-blue-400" />,
    MessageSquare: <MessageSquare className="w-5 h-5 text-indigo-400" />,
    Zap: <Zap className="w-5 h-5 text-sky-400" />
  };

  const categories = PORTFOLIO_DATA.skills;

  const filteredCategories = categories.filter(cat => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Programming' && cat.title.includes('Programming')) return true;
    if (activeTab === 'Visualization' && cat.title.includes('Visualization')) return true;
    if (activeTab === 'Soft Skills' && cat.title.includes('Soft')) return true;
    return false;
  });

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-sky-500/10 border border-blue-500/20 text-blue-600 dark:text-sky-400 text-xs font-bold mb-3"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities &amp; Soft Competencies</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-outfit"
          >
            Skills &amp; Toolkit
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto rounded-full mt-3 mb-4"
          />

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            A comprehensive overview of my technical stack and analytical capabilities built through hands-on project creation.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {(['All', 'Programming', 'Visualization', 'Soft Skills'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              id={`skills-tab-${tab.toLowerCase().replace(' ', '-')}`}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : 'bg-slate-200/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="space-y-10">
          <AnimatePresence mode="wait">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-outfit flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                  <span className="w-3 h-3 rounded-full bg-sky-500" />
                  {category.title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -4 }}
                      className="glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg relative overflow-hidden"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80">
                            {iconMap[skill.icon] || <CheckCircle className="w-5 h-5 text-sky-400" />}
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white font-outfit">
                              {skill.name}
                            </h4>
                            <p className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                              Proficiency: {skill.level}%
                            </p>
                          </div>
                        </div>

                        {skill.featured && (
                          <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-sky-400 border border-blue-500/20 text-[10px] font-extrabold uppercase tracking-wider">
                            Core Tool
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed font-normal">
                        {skill.description}
                      </p>

                      {/* Level Progress Bar */}
                      <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="bg-gradient-to-r from-blue-600 via-sky-500 to-sky-400 h-full rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
