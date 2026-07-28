import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LoadingScreen } from "./components/LoadingScreen";
import { ScrollProgress } from "./components/ScrollProgress";
import { CursorGlow } from "./components/CursorGlow";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { AICareerAssistant } from "./components/AICareerAssistant";
import { ProjectDetails } from "./pages/ProjectDetails";

function AppShell() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] text-slate-900 dark:text-slate-100 relative selection:bg-blue-500 selection:text-white transition-colors duration-300">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>

      <Footer />
      <BackToTop />
      <AICareerAssistant />
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] text-slate-900 dark:text-slate-100 relative selection:bg-blue-500 selection:text-white transition-colors duration-300">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

        {!isLoading && <AppShell />}
      </div>
    </BrowserRouter>
  );
}
