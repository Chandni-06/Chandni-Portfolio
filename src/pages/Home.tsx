import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Resume } from '../components/Resume';
import { Education } from '../components/Education';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
  return (
    <main className="w-full relative overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Education />
      <Contact />
    </main>
  );
};
