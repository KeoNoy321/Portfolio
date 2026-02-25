import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { dashboardContact } from './resumeData';

const DashboardSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  background: radial-gradient(circle at center, #1a1a40 0%, #0f0c29 100%);
  position: relative;
  overflow: hidden;
`;

const BackgroundShape = styled(motion.div)`
  position: absolute;
  width: 50vw;
  height: 50vw;
  background: radial-gradient(circle, var(--color-primary-variant) 0%, rgba(0,0,0,0) 70%);
  filter: blur(80px);
  z-index: 0;
  opacity: 0.3;
  border-radius: 50%;
  
  @media (max-width: 768px) {
    width: 80vw;
    height: 80vw;
  }
`;

const Name = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(to right, var(--color-primary), var(--color-primary-variant));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Headline = styled(motion.h2)`
  font-size: 1.5rem;
  color: var(--color-light);
  margin-bottom: 3rem;
  font-family: 'Courier New', Courier, monospace;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ContactContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
`;

const ContactItem = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.8rem;
  color: var(--color-light);
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--color-primary);
    color: var(--color-white);
    transform: translateY(-3px);
  }
  
  svg {
    color: var(--color-primary);
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
  }
`;

function Dashboard() {
  return (
    <DashboardSection>
      <BackgroundShape 
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }} 
        style={{ top: '-10%', left: '-10%' }} 
      />
      <BackgroundShape 
        animate={{ x: [0, -100, 0], y: [0, 50, 0] }} 
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }} 
        style={{ bottom: '-10%', right: '-10%', background: 'radial-gradient(circle, var(--color-primary) 0%, rgba(0,0,0,0) 70%)' }} 
      />
      
      <Name
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {dashboardContact.name}
      </Name>
      
      <Headline
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {dashboardContact.headline}
      </Headline>
      
      <ContactContainer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <ContactItem href={`mailto:${dashboardContact.email}`}>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Email</span>
        </ContactItem>
        
        <ContactItem href={`tel:${dashboardContact.phone}`}>
          <FontAwesomeIcon icon={faPhone} />
          <span>Phone</span>
        </ContactItem>
        
        <ContactItem 
          href={dashboardContact.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          <span>LinkedIn</span>
        </ContactItem>
        
        <ContactItem 
          href={dashboardContact.github} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
          <span>GitHub</span>
        </ContactItem>
      </ContactContainer>
    </DashboardSection>
  );
}

export default Dashboard;
