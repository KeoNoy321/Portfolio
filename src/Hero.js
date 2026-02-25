import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.header`
  height: 100vh;
  padding-top: 7rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  background: radial-gradient(circle at center, #1a1a40 0%, #0f0c29 100%);
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  padding: 0 2rem;
  width: 100%;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(to right, var(--color-primary), var(--color-primary-variant));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  color: var(--color-light);
  margin-bottom: 2rem;
  font-family: 'Courier New', Courier, monospace;
  white-space: nowrap;
  overflow: visible;
  text-overflow: ellipsis;
  width: 100%;
  max-width: 100%;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    white-space: normal;
  }
`;

const CTA = styled(motion.div)`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const BackgroundShape = styled(motion.div)`
  position: absolute;
  width: 50vw;
  height: 50vw;
  background: radial-gradient(circle, var(--color-primary-variant) 0%, rgba(0,0,0,0) 70%);
  filter: blur(80px);
  z-index: -1;
  opacity: 0.3;
  border-radius: 50%;
  
  @media (max-width: 768px) {
    width: 80vw;
    height: 80vw;
  }
`;

const FloatingParticle = styled(motion.div)`
  position: absolute;
  width: 10px;
  height: 10px;
  background: var(--color-primary);
  border-radius: 50%;
  opacity: 0.5;
  filter: blur(2px);
  z-index: 0;
`;

const Badge = styled(motion.span)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(0, 219, 222, 0.1);
  border: 1px solid var(--color-primary);
  border-radius: 2rem;
  font-size: 0.9rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`;

const Hero = ({ heroData }) => {
  const name = heroData?.name || 'Alex Maeda';
  const location = heroData?.location || 'Mercer Island, WA';
  const subtitle = heroData?.subtitle || 'Senior Full Stack Engineer | AI/ML & Cloud Infrastructure Expert';
  const tagline = heroData?.tagline || 'Building scalable systems • AI/ML Integration • Distributed Architecture';
  const showCta = heroData?.showCta !== false;
  
  return (
    <HeroSection id="home">
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

      {[...Array(8)].map((_, i) => (
        <FloatingParticle
          key={i}
          initial={{ x: Math.random() * 100 - 50 + "vw", y: Math.random() * 100 + "vh" }}
          animate={{ y: -100 }}
          transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
          style={{ left: `${Math.random() * 100}%`, width: `${Math.random() * 15 + 5}px`, height: `${Math.random() * 15 + 5}px` }}
        />
      ))}
      
      <HeroContainer>
        <Badge
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          🌍 {location}
        </Badge>
        <Title
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          {name}
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </Subtitle>
        <Subtitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ fontSize: '1rem', marginBottom: '1rem' }}
        >
          {tagline}
        </Subtitle>
        {showCta && (
        <CTA
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#contact" className="btn btn-primary">
            Get In Touch
          </a>
          <a href="#skills" className="btn">
            Skills
          </a>
        </CTA>
        )}
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
