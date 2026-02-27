import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { dashboardContact } from './resumeData';

const DashboardSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  background: radial-gradient(circle at center, #1a1a2e 0%, #0a0a0f 100%);
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 1000px;
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
  transform: translateZ(50px);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Headline = styled(motion.h2)`
  font-size: 1.5rem;
  color: var(--color-light);
  margin-bottom: 2rem;
  font-family: 'Courier New', Courier, monospace;
  position: relative;
  z-index: 1;
  transform: translateZ(30px);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// About Section Styles
const AboutSection = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto 3rem;
  padding: 2rem;
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transform-style: preserve-3d;
  perspective: 800px;
  transform: perspective(800px) rotateX(6deg);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.06) inset,
    0 -4px 0 rgba(0, 0, 0, 0.22),
    0 6px 0 rgba(0, 0, 0, 0.08),
    0 12px 24px rgba(0, 0, 0, 0.22),
    0 24px 48px rgba(0, 0, 0, 0.12);
  &:hover {
    transform: perspective(800px) rotateX(0deg) translateZ(22px);
    box-shadow:
      0 1px 0 rgba(255, 255, 255, 0.1) inset,
      0 -6px 0 rgba(0, 0, 0, 0.18),
      0 12px 0 rgba(0, 0, 0, 0.05),
      0 20px 40px rgba(0, 0, 0, 0.28),
      0 0 40px rgba(0, 255, 163, 0.15),
      0 0 70px rgba(123, 97, 255, 0.1);
  }
`;

const AboutTitle = styled.h3`
  color: var(--color-primary);
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  transform: translateZ(20px);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: linear-gradient(to right, var(--color-primary), var(--color-primary-variant));
    border-radius: 2px;
  }
`;

const AboutText = styled.p`
  color: var(--color-light);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`;

const SoftSkills = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SoftSkillBadge = styled.span`
  color: var(--color-light);
  background: rgba(255, 255, 255, 0.08);
  padding: 0.6rem 1.2rem;
  border-radius: 2rem;
  font-size: 0.95rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transform-style: preserve-3d;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  
  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
    transform: translateY(-4px) translateZ(12px);
    box-shadow: 0 4px 0 rgba(0, 0, 0, 0.1), 0 10px 24px rgba(0, 255, 163, 0.25), 0 0 20px rgba(0, 255, 163, 0.15);
  }
`;

// Contact Section Styles (matching Contact.js)
const ContactSection = styled(motion.div).attrs({
  id: 'contact',
})`
  text-align: center;
  padding: 2rem;
  max-width: 600px;
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transform-style: preserve-3d;
  perspective: 800px;
  transform: perspective(800px) rotateX(6deg);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.06) inset,
    0 -4px 0 rgba(0, 0, 0, 0.2),
    0 6px 0 rgba(0, 0, 0, 0.08),
    0 12px 24px rgba(0, 0, 0, 0.2),
    0 24px 48px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: perspective(800px) rotateX(0deg) translateZ(20px);
    box-shadow:
      0 1px 0 rgba(255, 255, 255, 0.08) inset,
      0 -6px 0 rgba(0, 0, 0, 0.16),
      0 12px 0 rgba(0, 0, 0, 0.05),
      0 18px 36px rgba(0, 0, 0, 0.25),
      0 0 35px rgba(0, 255, 163, 0.12),
      0 0 60px rgba(123, 97, 255, 0.08);
  }
`;

const ContactTitle = styled.h3`
  color: var(--color-primary);
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  transform: translateZ(20px);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: linear-gradient(to right, var(--color-primary), var(--color-primary-variant));
    border-radius: 2px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-light);
  font-size: 1rem;
  
  a {
    color: var(--color-primary);
    text-decoration: none;
    
    &:hover {
      color: var(--color-white);
      text-decoration: underline;
    }
  }
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const ContactLink = styled(motion.a)`
  color: var(--color-primary);
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-decoration: none;
  transform-style: preserve-3d;
  perspective: 800px;
  transform: perspective(800px) translateZ(10px) rotateX(4deg);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.15), 0 6px 16px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease, color 0.3s ease;
  
  span {
    font-size: 1rem;
  }

  &:hover {
    color: var(--color-white);
    background: rgba(255, 255, 255, 0.1);
    transform: perspective(800px) scale(1.05) rotateX(0deg) translateZ(28px);
    border-color: var(--color-primary);
    box-shadow: 0 4px 0 rgba(0, 0, 0, 0.1), 0 12px 28px rgba(0, 255, 163, 0.3), 0 0 30px rgba(0, 255, 163, 0.2);
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.8rem 1rem;
    
    span {
      font-size: 0.9rem;
    }
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
      
      {/* About Section with Soft Skills */}
      <AboutSection
        className="card-hover-gradient"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <AboutTitle>About Me</AboutTitle>
        <AboutText>
          Senior Software Engineer with 9+ years of experience building scalable, distributed systems 
          at Meta, Uber, and Sofar Ocean. Passionate about clean code, innovative solutions, and 
          building systems that make a real-world impact — from healthcare logistics to ocean data 
          collection to AI-powered platforms.
        </AboutText>
        <SoftSkills>
          <SoftSkillBadge>Problem Solver</SoftSkillBadge>
          <SoftSkillBadge>Innovative Approach</SoftSkillBadge>
          <SoftSkillBadge>Team Leader</SoftSkillBadge>
          <SoftSkillBadge>Mentor</SoftSkillBadge>
          <SoftSkillBadge>Self-Motivated</SoftSkillBadge>
          <SoftSkillBadge>Detail-Oriented</SoftSkillBadge>
        </SoftSkills>
      </AboutSection>
      
      {/* Contact Section */}
      <ContactSection
        className="card-hover-gradient"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <ContactTitle>Get In Touch</ContactTitle>
        <ContactInfo>
          <InfoItem>
            📧 Email: <a href={`mailto:${dashboardContact.email}`}>{dashboardContact.email}</a>
          </InfoItem>
          <InfoItem>
            📱 Phone: <a href={`tel:${dashboardContact.phone}`}>{dashboardContact.phone}</a>
          </InfoItem>
        </ContactInfo>
        <ContactLinks>
          <ContactLink 
            href={`mailto:${dashboardContact.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Email</span>
          </ContactLink>
          <ContactLink 
            href={`tel:${dashboardContact.phone}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faPhone} />
            <span>Phone</span>
          </ContactLink>
        </ContactLinks>
      </ContactSection>
    </DashboardSection>
  );
}

export default Dashboard;
