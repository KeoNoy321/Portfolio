import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import './App.css';
import FloatingIcons from './FloatingIcons';

function App() {
  return (
    <>
      <FloatingIcons />
      <Navbar />
      <Hero />
      <main>
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default App;
