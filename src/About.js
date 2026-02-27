import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled(motion.section)`
  text-align: center;
  padding: 4rem 2rem;
  transform-style: preserve-3d;
  perspective: 1000px;
`;

const AboutContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transform-style: preserve-3d;
  perspective: 800px;
  transform: perspective(800px) rotateX(6deg);
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.3s ease;
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.06) inset,
    0 -4px 0 rgba(0, 0, 0, 0.22),
    0 6px 0 rgba(0, 0, 0, 0.08),
    0 12px 24px rgba(0, 0, 0, 0.22),
    0 24px 48px rgba(0, 0, 0, 0.12);
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    transform: perspective(800px) rotateX(0deg) translateZ(22px);
    box-shadow:
      0 1px 0 rgba(255, 255, 255, 0.1) inset,
      0 -6px 0 rgba(0, 0, 0, 0.18),
      0 12px 0 rgba(0, 0, 0, 0.05),
      0 20px 40px rgba(0, 0, 0, 0.28),
      0 0 40px rgba(0, 255, 163, 0.15),
      0 0 70px rgba(123, 97, 255, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Title = styled.h2`
  color: var(--color-primary);
  margin-bottom: 2rem;
  font-size: 2rem;
  position: relative;
  display: inline-block;
  transform: translateZ(20px);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(to right, var(--color-primary), var(--color-primary-variant));
    border-radius: 2px;
  }
`;

const Text = styled.p`
  color: var(--color-light);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const StatItem = styled(motion.div)`
  text-align: center;
  transform-style: preserve-3d;
  perspective: 800px;
  transform: perspective(800px) translateZ(15px) rotateX(4deg);
  padding: 1rem;
  border-radius: 0.75rem;
  background: rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.15), 0 6px 16px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: perspective(800px) translateZ(22px) rotateX(0deg);
    box-shadow: 0 4px 0 rgba(0, 0, 0, 0.1), 0 12px 28px rgba(0, 255, 163, 0.2);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(to right, var(--color-primary), var(--color-primary-variant));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StatLabel = styled.div`
  color: var(--color-light);
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const About = ({ aboutData }) => {
  const paragraphs = aboutData?.paragraphs || [
    'Senior Full Stack Engineer with 8+ years of experience building scalable, AI - powered distributed systems. I specialize in bridging the gap between backend architecture and frontend experience, delivering end-to-end solutions that handle millions of requests.',
    'Currently building AI/ML platforms at Meta, I\'ve previously led engineering teams at Sofar Ocean (IoT/Ocean Data), Uber (Healthcare & Eats), and interned at Google. My expertise spans Generative AI, LLM orchestration, cloud infrastructure, and full - stack development.',
    'I\'m passionate about building systems that make a real-world impact — from ocean data collection to healthcare logistics to AI that helps people work smarter.'
  ];
  
  const stats = aboutData?.stats || [
    { number: '8+', label: 'Years Experience' },
    { number: '6', label: 'Top Companies' },
    { number: 'AI/ML', label: 'Specialization' },
    { number: 'Full Stack', label: 'Expertise' }
  ];
  
  return (
    <AboutSection
      className="bg-grid neural-bg"
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <AboutContainer className="holo-card card-hover-gradient">
        <Title>About Me</Title>
        {paragraphs.map((text, index) => (
          <Text key={index}>{text}</Text>
        ))}
        
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 + (index * 0.1) }}
            >
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </StatsGrid>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
