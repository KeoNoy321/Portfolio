import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  ExperienceSection, 
  Timeline, 
  TimelineItem, 
  TimelineDot, 
  TechStack, 
  TechBadge,
  CompanyHeader,
  CompanyLogo,
  RoleTitle,
  CompanyInfo,
  CompanyName,
  Duration,
  Summary
} from './Experience';
import { resumeProfiles } from './resumeData';

const Content = styled(motion.div)`
  padding: 25px 30px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  position: relative;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform-style: preserve-3d;
  perspective: 800px;
  transform: perspective(800px) rotateX(6deg);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.06) inset,
    0 -4px 0 rgba(0, 0, 0, 0.22),
    0 6px 0 rgba(0, 0, 0, 0.08),
    0 12px 24px rgba(0, 0, 0, 0.22),
    0 24px 48px rgba(0, 0, 0, 0.12);

  &:hover {
    border-color: var(--color-primary);
    transform: perspective(800px) rotateX(0deg) translateZ(26px);
    box-shadow:
      0 1px 0 rgba(255, 255, 255, 0.1) inset,
      0 -6px 0 rgba(0, 0, 0, 0.18),
      0 12px 0 rgba(0, 0, 0, 0.05),
      0 20px 40px rgba(0, 0, 0, 0.28),
      0 0 45px rgba(0, 255, 163, 0.28),
      0 0 80px rgba(123, 97, 255, 0.12);
  }
`;

function MeExperience() {
  const profile = resumeProfiles.me;
  const meExperienceData = profile.experience || [];

  return (
    <ExperienceSection id="me-experience" className="bg-dots">
      <Timeline>
        {meExperienceData.map((item, index) => {
          const minHeight = 180;

          return (
            <TimelineItem
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TimelineDot />
              <Content className="holo-card card-hover-gradient" style={{ minHeight: `${minHeight}px` }}>
                <CompanyHeader>
                  <CompanyLogo src={item.logo} alt={item.company} onError={(e) => { e.target.style.display = 'none'; }} />
                  <div>
                    <RoleTitle>{item.role}</RoleTitle>
                    <CompanyInfo>
                      <CompanyName>{item.company}</CompanyName>
                      <Duration>{item.duration}</Duration>
                    </CompanyInfo>
                  </div>
                </CompanyHeader>
                <Summary>{item.summary}</Summary>
                <TechStack>
                  {item.tech.map((tech) => (
                    <TechBadge key={tech}>{tech}</TechBadge>
                  ))}
                </TechStack>
              </Content>
            </TimelineItem>
          );
        })}
      </Timeline>
    </ExperienceSection>
  );
}

export default MeExperience;