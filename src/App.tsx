import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollProgress } from './components/ScrollProgress';
import { CursorGlow } from './components/CursorGlow';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { AICareerAssistant } from './components/AICareerAssistant';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] text-slate-900 dark:text-slate-100 relative selection:bg-blue-500 selection:text-white transition-colors duration-300">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <>
          <ScrollProgress />
          <CursorGlow />
          <Navbar />
          <Home />
          <Footer />
          <BackToTop />
          <AICareerAssistant />
        </>
      )}
    </div>
  );
}
