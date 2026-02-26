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
import Background3D from './Background3D';
import { resumeProfiles } from './resumeData';

// Resume page components
const ResumePage = () => {
  const profile = resumeProfiles.resume;
  return (
    <>
      <Hero heroData={profile.hero} resumeUrl="/Alex-Maeda_Full Stack Engineer.pdf" />
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
      <Hero heroData={profile.hero} resumeUrl="/Alex_Maeda_Golang_Py_0225.pdf" />
      <main>
        <About aboutData={profile.about} />
        <Skills skillsData={profile.skills} />
        <MeExperience />
        <Contact contactData={profile.contact} />
      </main>
    </>
  );
};

const HomePage = () => {
  const profile = resumeProfiles.home;
  return (
    <>
      <Hero heroData={profile.hero} resumeUrl="/Alex_Maeda_Java_Backend_Engineer.pdf" />
      <main>
        <About aboutData={profile.about} />
        <Skills skillsData={profile.skills} />
        <ResumeExperience />
        <Contact contactData={profile.contact} />
      </main>
    </>
  );
};

function App() {
  return (
    <>
      <Background3D />
      <FloatingIcons />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/me" element={<MePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
