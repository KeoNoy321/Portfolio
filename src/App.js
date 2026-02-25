import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import './App.css';
import FloatingIcons from './FloatingIcons';
import ResumeExperience from './ResumeExperience';
import MeExperience from './MeExperience';

function App() {
  return (
    <>
      <FloatingIcons />
      <Hero />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <About />
              <Skills />
              <Contact />
            </>
          } />
          <Route path="/resume" element={<ResumeExperience />} />
          <Route path="/me" element={<MeExperience />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
