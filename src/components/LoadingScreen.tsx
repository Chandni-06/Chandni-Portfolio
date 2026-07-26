import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BarChart3, Database, Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing Analytics Portfolio...');

  useEffect(() => {
    const texts = [
      'Initializing Analytics Portfolio...',
      'Connecting SQL Data Source...',
      'Loading Power BI Models...',
      'Calculations Ready!'
    ];

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 20) + 10;
        const index = Math.min(Math.floor((next / 100) * texts.length), texts.length - 1);
        setLoadingText(texts[index]);
        return Math.min(next, 100);
      });
    }, 180);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        id="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 text-white"
      >
        <div className="relative flex flex-col items-center max-w-sm w-full px-6 text-center">
          {/* Animated Icon Glow */}
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-tr from-blue-600 via-sky-500 to-emerald-400 p-0.5 shadow-[0_0_40px_rgba(37,99,235,0.5)]"
          >
            <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-sky-400">
              <BarChart3 className="w-10 h-10" />
            </div>
          </motion.div>

          {/* Name & Subtitle */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-extrabold tracking-tight font-outfit"
          >
            CHANDNI KUMARI
          </motion.h1>
          <p className="text-xs uppercase tracking-widest text-sky-400 font-semibold mt-1 mb-8">
            Aspiring Data Analyst
          </p>

          {/* Progress Bar Container */}
          <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden mb-3 border border-slate-700">
            <motion.div
              className="bg-gradient-to-r from-blue-600 via-sky-400 to-emerald-400 h-full rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>

          {/* Progress info */}
          <div className="flex justify-between items-center w-full text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
              {loadingText}
            </span>
            <span className="text-sky-400 font-bold">{progress}%</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
