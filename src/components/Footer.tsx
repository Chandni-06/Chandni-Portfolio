import React from "react";
import {
  Heart,
  BarChart2,
  Linkedin,
  Github,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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
    <footer
      id="main-footer"
      className="relative overflow-hidden border-t border-slate-800/80 bg-slate-950 text-slate-400 pt-14 pb-8"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="absolute -top-20 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/5">
          {/* Col 1: Brand */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-400 p-0.5 shadow-lg shadow-blue-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-sky-400">
                  <BarChart2 className="w-5 h-5" />
                </div>
              </div>
              <div>
                <span className="font-outfit font-extrabold text-xl sm:text-2xl text-white block leading-none">
                  Chandni Kumari
                </span>
                <span className="text-[11px] uppercase tracking-[0.28em] text-sky-400/90 font-semibold">
                  Aspiring Data Analyst
                </span>
              </div>
            </div>

            <p className="text-xs font-semibold text-sky-400 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Bengaluru, Karnataka, India
            </p>
          </div>

          {/* Col 3: Social & Connect */}
          <div className="md:col-span-5 space-y-4 md:justify-self-end">
            <h4 className="text-sm font-bold text-white uppercase tracking-[0.22em] font-outfit">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-white/5 hover:bg-blue-600 text-slate-300 hover:text-white border border-white/5 hover:border-blue-400/30 transition-all cursor-pointer"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-white/5 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/5 hover:border-white/10 transition-all cursor-pointer"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="p-3 rounded-2xl bg-white/5 hover:bg-sky-500 text-slate-300 hover:text-white border border-white/5 hover:border-sky-400/30 transition-all cursor-pointer"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 relative">
          <p className="flex items-center gap-1.5 font-medium">
            Made with{" "}
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />{" "}
            by <span className="text-slate-200 font-bold">Chandni Kumari</span>
          </p>

          <p className="text-slate-500">
            © {currentYear} Chandni Kumari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
