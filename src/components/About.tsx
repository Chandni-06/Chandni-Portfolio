import React from "react";
import { motion } from "motion/react";
import {
  GraduationCap,
  BarChart3,
  LayoutDashboard,
  PieChart,
  Sparkles,
  Database,
  FileCode2,
  CheckCircle2,
  BookOpen,
  Award,
  ShieldCheck,
} from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const About: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    BarChart3: (
      <BarChart3 className="w-6 h-6 text-blue-600 dark:text-sky-400" />
    ),
    LayoutDashboard: <LayoutDashboard className="w-6 h-6 text-sky-500" />,
    PieChart: <PieChart className="w-6 h-6 text-emerald-500" />,
    Sparkles: <Sparkles className="w-6 h-6 text-amber-500" />,
    Database: <Database className="w-6 h-6 text-indigo-500" />,
    FileCode2: <FileCode2 className="w-6 h-6 text-cyan-500" />,
  };

  const statIconMap: Record<string, React.ReactNode> = {
    LayoutDashboard: <LayoutDashboard className="w-5 h-5" />,
    Database: <Database className="w-5 h-5" />,
    CheckCircle2: <ShieldCheck className="w-5 h-5" />,
    GraduationCap: <GraduationCap className="w-5 h-5" />,
  };

  return (
    <section
      id="about"
      className="py-20 relative bg-slate-100/50 dark:bg-slate-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-sky-500/10 border border-blue-500/20 text-blue-600 dark:text-sky-400 text-xs font-bold mb-3"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-outfit"
          >
            Professional Snapshot
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto rounded-full mt-3 mb-4"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            I translate raw datasets into clear, decision-ready insights through
            SQL, Python, Excel, and Power BI. My focus is on building practical
            dashboards, cleaning data with precision, and presenting analysis in
            a way that supports confident business decisions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-8 rounded-3xl shadow-xl flex flex-col justify-between border border-slate-200/80 dark:border-slate-800"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-blue-600/10 dark:bg-sky-500/15 text-blue-600 dark:text-sky-400">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-outfit">
                    Academic Focus &amp; Career Direction
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 dark:text-sky-400">
                    BCA Student @ Bengaluru City University
                  </p>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-6">
                I am currently pursuing my{" "}
                <strong className="text-slate-900 dark:text-white font-semibold">
                  Bachelor of Computer Applications (BCA)
                </strong>
                . Through coursework and independent projects, I have developed
                a strong foundation in relational database design, SQL query
                writing, data cleaning, dashboard development, and business
                reporting.
              </p>

              <div className="space-y-3 font-medium text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Solid foundation in{" "}
                    <strong className="text-slate-900 dark:text-white">
                      DBMS &amp; SQL querying
                    </strong>
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Experienced in creating{" "}
                    <strong className="text-slate-900 dark:text-white">
                      end-to-end Power BI dashboards
                    </strong>{" "}
                    with clean layouts
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Proficient in{" "}
                    <strong className="text-slate-900 dark:text-white">
                      Python-based exploratory data analysis
                    </strong>
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Focused on solving{" "}
                    <strong className="text-slate-900 dark:text-white">
                      business intelligence challenges
                    </strong>{" "}
                    with structured thinking
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Actively seeking Data Analyst internships for the 2025/2026
                  batch
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {PORTFOLIO_DATA.personal.stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between shadow-lg bg-gradient-to-br from-white/90 to-slate-50/80 dark:from-slate-900/90 dark:to-slate-900/60"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-sky-500/15 flex items-center justify-center text-blue-600 dark:text-sky-400 mb-4">
                  {statIconMap[stat.icon] || <Award className="w-5 h-5" />}
                </div>
                <div>
                  <h4 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-outfit mb-1">
                    {stat.value}
                  </h4>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-outfit text-center mb-6">
            Core Areas of Expertise &amp; Interest
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PORTFOLIO_DATA.personal.interests.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-card p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/10 dark:bg-sky-500/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {iconMap[item.icon] || (
                      <BarChart3 className="w-5 h-5 text-blue-600" />
                    )}
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-outfit group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors leading-tight">
                    {item.title}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
