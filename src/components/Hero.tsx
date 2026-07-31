import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Download,
  Eye,
  Mail,
  BarChart3,
  Database,
  FileCode2,
  Sheet,
  Sparkles,
  Building2,
  Linkedin,
  Github,
  Phone,
} from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { ParticlesBackground } from "./ParticlesBackground";
import { formatImageUrl } from "../lib/utils";

interface ProfileCardProps {
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.1 }}
      className={`relative w-full max-w-xl flex flex-col items-center justify-center transition-all duration-300 group ${className}`}
    >
      {/* Background Soft Glow Circles */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[480px] sm:h-[480px] bg-gradient-to-tr from-blue-600/30 via-indigo-500/25 to-cyan-400/30 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-400/20 dark:bg-sky-500/20 rounded-full blur-2xl pointer-events-none" />

      {/* Floating Animated Tech Badge 1: Top Left - Power BI */}
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, -4, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3 left-0 sm:top-4 sm:-left-4 z-30 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl glass-card border border-amber-500/50 shadow-2xl flex items-center gap-3 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80"
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-500 font-extrabold shadow-sm">
          <BarChart3 className="w-5 h-5 text-amber-500" />
        </div>
        <div className="text-left">
          <p className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-extrabold">
            BI Tool
          </p>
          <p className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
            Power BI
          </p>
        </div>
      </motion.div>

      {/* Floating Animated Tech Badge 2: Top Right - SQL */}
      <motion.div
        animate={{ y: [0, 10, 0], x: [0, 4, 0] }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
        className="absolute -top-3 right-0 sm:top-4 sm:-right-4 z-30 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl glass-card border border-blue-500/50 shadow-2xl flex items-center gap-3 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80"
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-500 font-extrabold shadow-sm">
          <Database className="w-5 h-5 text-blue-500" />
        </div>
        <div className="text-left">
          <p className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-extrabold">
            Database
          </p>
          <p className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
            SQL
          </p>
        </div>
      </motion.div>

      {/* Floating Animated Tech Badge 3: Bottom Left - Python */}
      <motion.div
        animate={{ y: [0, 10, 0], x: [0, -4, 0] }}
        transition={{
          duration: 5.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
        className="absolute top-60 -left-2 sm:top-72 sm:-left-6 z-30 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl glass-card border border-sky-400/50 shadow-2xl flex items-center gap-3 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80"
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-sky-500/20 flex items-center justify-center text-sky-400 font-extrabold shadow-sm">
          <FileCode2 className="w-5 h-5 text-sky-400" />
        </div>
        <div className="text-left">
          <p className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-extrabold">
            Code
          </p>
          <p className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
            Python
          </p>
        </div>
      </motion.div>

      {/* Floating Animated Tech Badge 4: Bottom Right - Excel */}
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.8,
        }}
        className="absolute top-60 -right-2 sm:top-72 sm:-right-6 z-30 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl glass-card border border-emerald-500/50 shadow-2xl flex items-center gap-3 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80"
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-extrabold shadow-sm">
          <Sheet className="w-5 h-5 text-emerald-500" />
        </div>
        <div className="text-left">
          <p className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-extrabold">
            Spreadsheet
          </p>
          <p className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
            Excel
          </p>
        </div>
      </motion.div>

      {/* Circular Profile Frame Wrapper (Large: 420px on desktop) */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative my-2 z-10"
      >
        {/* Soft Radial Glow behind frame */}
        <div className="absolute inset-0 rounded-full bg-blue-600/30 dark:bg-cyan-400/30 blur-3xl pointer-events-none group-hover:bg-purple-500/40 transition-colors duration-500" />

        {/* Rotating Blue -> Purple -> Cyan Glowing Gradient Border */}
        <div className="absolute -inset-3.5 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 animate-spin-slow opacity-95 blur-md" />
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 animate-spin-slow" />

        {/* 420px x 420px Circular Frame on Desktop */}
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] rounded-full p-3 bg-slate-950 shadow-2xl z-10 overflow-hidden flex items-center justify-center ring-4 ring-white/20">
          <img
            src={formatImageUrl(PORTFOLIO_DATA.personal.profileImage)}
            alt="Chandni Kumari - Aspiring Data Analyst"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/profile.svg";
            }}
            className="w-full h-full object-cover object-top rounded-full transform group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />

          {/* Floating "Available for Internship" Badge below Circular Image */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-full bg-slate-950/90 border border-emerald-500/70 shadow-2xl backdrop-blur-md flex items-center gap-2.5 whitespace-nowrap">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-white tracking-wide">
              Available for Internship
            </span>
          </div>
        </div>
      </motion.div>

      {/* Premium Glassmorphism Information Card Overlapping Below Profile */}
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        className="w-full max-w-lg mt-4 z-20 p-5 sm:p-6 rounded-3xl glass-card border border-white/80 dark:border-slate-800 shadow-2xl shadow-blue-500/15 backdrop-blur-2xl bg-white/90 dark:bg-slate-900/90 flex flex-col items-center text-center"
      >
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-outfit tracking-tight">
          Chandni Kumari
        </h3>

        <p className="text-sm sm:text-base font-extrabold bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent mt-0.5">
          Aspiring Data Analyst
        </p>

        {/* Social Icons Row */}
        <div className="flex items-center justify-center gap-3 w-full pt-3 border-t border-slate-200/80 dark:border-slate-800">
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="p-2.5 rounded-xl bg-blue-600/10 hover:bg-blue-600 text-blue-600 hover:text-white dark:bg-blue-500/20 dark:text-blue-400 dark:hover:text-white border border-blue-500/30 transition-all shadow-sm"
          >
            <Linkedin className="w-4 h-4" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="p-2.5 rounded-xl bg-slate-800/10 hover:bg-slate-900 text-slate-800 hover:text-white dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-all shadow-sm"
          >
            <Github className="w-4 h-4" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            title="Email"
            className="p-2.5 rounded-xl bg-sky-500/10 hover:bg-sky-500 text-sky-600 hover:text-white dark:bg-sky-400/20 dark:text-sky-300 dark:hover:text-white border border-sky-400/30 transition-all shadow-sm"
          >
            <Mail className="w-4 h-4" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={`tel:${PORTFOLIO_DATA.personal.phone}`}
            title="Phone"
            className="p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-600 hover:text-white dark:bg-emerald-400/20 dark:text-emerald-300 dark:hover:text-white border border-emerald-400/30 transition-all shadow-sm"
          >
            <Phone className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Hero: React.FC = () => {
  // Typing animation effect
  const titles = [
    "Aspiring Data Analyst",
    "Power BI & SQL Specialist",
    "Dashboard Developer",
    "Data Visualization Enthusiast",
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText.length === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden"
    >
      {/* Background Particles Canvas */}
      <ParticlesBackground />

      {/* Ambient Radial Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-400/10 dark:bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col items-start text-left"
          >
            {/* Top Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-sky-500/10 border border-blue-500/20 dark:border-sky-400/30 text-blue-700 dark:text-sky-300 text-xs font-bold mb-5 backdrop-blur-md"
            >
              <span className="text-base">👋</span>
              <span>Hello &amp; Welcome to my Portfolio</span>
              <Sparkles className="w-3.5 h-3.5 text-sky-500 animate-pulse" />
            </motion.div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300 font-outfit">
              I'm
            </h2>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white font-outfit mt-1 mb-3">
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-sky-400 bg-clip-text text-transparent">
                Chandni Kumari
              </span>
            </h1>

            {/* Dynamic Typing Title */}
            <div className="h-10 sm:h-12 flex items-center mb-4">
              <span className="text-xl sm:text-3xl font-semibold italic tracking-wide text-slate-800 dark:text-slate-200 font-['Playfair_Display']">
                {displayText}
              </span>
              <span className="w-0.5 h-7 sm:h-8 bg-sky-500 ml-1.5 animate-pulse" />
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-2 my-2">
              <span className="px-3 py-1 rounded-lg bg-yellow-500/10 dark:bg-yellow-500/15 border border-yellow-500/30 text-yellow-700 dark:text-yellow-300 text-xs font-semibold flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5" /> Power BI
              </span>
              <span className="px-3 py-1 rounded-lg bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/30 text-blue-700 dark:text-blue-300 text-xs font-semibold flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5" /> SQL
              </span>
              <span className="px-3 py-1 rounded-lg bg-sky-500/10 dark:bg-sky-500/15 border border-sky-500/30 text-sky-700 dark:text-sky-300 text-xs font-semibold flex items-center gap-1.5">
                <FileCode2 className="w-3.5 h-3.5" /> Python
              </span>
              <span className="px-3 py-1 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
                <Sheet className="w-3.5 h-3.5" /> Excel
              </span>
            </div>

            {/* Mobile Profile Card Placement (centered between hero title and buttons) */}
            <div className="w-full my-6 flex justify-center lg:hidden">
              <ProfileCard />
            </div>

            {/* Summary */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-2 sm:mt-4 mb-8 max-w-2xl leading-relaxed font-normal">
              {PORTFOLIO_DATA.personal.summary}
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="/Chandni_Kumari_Resume.pdf"
                download="Chandni_Kumari_Resume.pdf"
                id="hero-download-resume-btn"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600 text-white font-bold text-sm shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => handleScrollTo("projects")}
                id="hero-view-projects-btn"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-200 dark:bg-slate-800/90 text-slate-900 dark:text-white font-bold text-sm border border-slate-300 dark:border-slate-700 hover:bg-slate-300 dark:hover:bg-slate-700 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4 text-sky-500" />
                <span>View Projects</span>
              </button>

              <button
                onClick={() => handleScrollTo("contact")}
                id="hero-contact-me-btn"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-sky-500/10 dark:bg-sky-400/10 text-blue-600 dark:text-sky-300 font-bold text-sm border border-blue-500/30 dark:border-sky-400/30 hover:bg-sky-500/20 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column Profile Showcase Card (Desktop) */}
          <div className="lg:col-span-7 hidden lg:flex justify-center my-6 lg:my-0">
            <ProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
};
