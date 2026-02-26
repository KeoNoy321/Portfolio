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
  transform: rotateX(2deg);
  
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
  transform: translateZ(15px);
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
      className="bg-grid"
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <AboutContainer>
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
