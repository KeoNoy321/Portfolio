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
import Dashboard from './Dashboard';
import { resumeProfiles } from './resumeData';

// Resume page components
const ResumePage = () => {
  const profile = resumeProfiles.resume;
  return (
    <>
      <Hero heroData={profile.hero} />
      <main>
        <About aboutData={profile.about} />
        <Skills skillsData={profile.skills} />
        <ResumeExperience />
        <Contact contactData={profile.contact} />
      </main>
    </>
  );
};

const MePage = () => {
  const profile = resumeProfiles.me;
  return (
    <>
      <Hero heroData={profile.hero} />
      <main>
        <About aboutData={profile.about} />
        <Skills skillsData={profile.skills} />
        <MeExperience />
        <Contact contactData={profile.contact} />
      </main>
    </>
  );
};

function App() {
  return (
    <>
      <FloatingIcons />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/me" element={<MePage />} />
      </Routes>
    </>
  );
}

export default App;
