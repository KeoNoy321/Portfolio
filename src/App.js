import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
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
import SkillConstellation from './SkillConstellation';

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
  const location = useLocation();

  useEffect(() => {
    const handlePointerMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      const root = document.documentElement;
      root.style.setProperty('--cursor-x', String(x));
      root.style.setProperty('--cursor-y', String(y));
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  const getResumeUrlForPath = (pathname) => {
    if (pathname.startsWith('/resume')) {
      return '/Alex-Maeda_Full Stack Engineer.pdf';
    }
    if (pathname.startsWith('/me')) {
      return '/Alex_Maeda_Golang_Py_0225.pdf';
    }
    if (pathname.startsWith('/home') || pathname.startsWith('/skills-map')) {
      return '/Alex_Maeda_Java_Backend_Engineer.pdf';
    }
    // hide on dashboard routes
    return null;
  };

  const resumeUrl = getResumeUrlForPath(location.pathname);

  return (
    <>
      <Background3D />
      <FloatingIcons />
      <div className="cursor-light" />
      {resumeUrl && (
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="btn btn-primary"
          style={{
            position: 'fixed',
            top: '1.5rem',
            right: '1.5rem',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          <FontAwesomeIcon icon={faDownload} />
          Download Resume
        </a>
      )}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/skills-map" element={<SkillConstellation />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/me" element={<MePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
