import React from 'react';
import { Heart, BarChart2, Linkedin, Github, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-400 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 p-0.5">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center text-sky-400 font-bold">
                  <BarChart2 className="w-5 h-5" />
                </div>
              </div>
              <span className="font-outfit font-extrabold text-xl text-white">
                Chandni Kumari 🤎
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Aspiring Data Analyst passionate about converting raw metrics into actionable Business Intelligence. Skilled in Power BI, SQL, Python, and Excel.
            </p>

            <p className="text-xs font-semibold text-sky-400">
              Bengaluru, Karnataka, India
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-outfit">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              <button onClick={() => handleScrollTo('home')} className="text-left hover:text-sky-400 transition-colors cursor-pointer">Home</button>
              <button onClick={() => handleScrollTo('about')} className="text-left hover:text-sky-400 transition-colors cursor-pointer">About</button>
              <button onClick={() => handleScrollTo('skills')} className="text-left hover:text-sky-400 transition-colors cursor-pointer">Skills</button>
              <button onClick={() => handleScrollTo('projects')} className="text-left hover:text-sky-400 transition-colors cursor-pointer">Projects</button>
              <button onClick={() => handleScrollTo('resume')} className="text-left hover:text-sky-400 transition-colors cursor-pointer">Resume</button>
              <button onClick={() => handleScrollTo('education')} className="text-left hover:text-sky-400 transition-colors cursor-pointer">Education</button>
              <button onClick={() => handleScrollTo('contact')} className="text-left hover:text-sky-400 transition-colors cursor-pointer">Contact</button>
            </div>
          </div>

          {/* Col 3: Social & Connect */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-outfit">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-sky-500 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p className="flex items-center gap-1.5 font-medium">
            Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> by <span className="text-slate-200 font-bold">Chandni Kumari</span>
          </p>

          <p>© {currentYear} Chandni Kumari. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
