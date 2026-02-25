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

const meExperienceData = [
  {
    id: '1',
    company: "Meta",
    logo: "https://logo.clearbit.com/meta.com",
    role: "Software Engineer",
    duration: "Dec 2024 - Present",
    summary: "Architected and helped launch Site Links for Meta Ads, scaling to $7B ARR within two months. Designed and built scalable backend services in Python, exposing high-throughput Thrift/gRPC APIs. Built asynchronous pipelines using Kafka for ad delivery systems.",
    tech: ["Go", "Python", "Kafka", "Thrift", "gRPC", "Kubernetes", "Redis", "AWS", "PostgreSQL", "Docker"]
  },
  {
    id: '2',
    company: "Sofar Ocean",
    logo: "https://logo.clearbit.com/sofarocean.com",
    role: "Software Engineer",
    duration: "Jan 2022 - Nov 2024",
    summary: "Led development of backend-heavy systems supporting ingestion, processing, and visualization of real-time oceanic and atmospheric data. Built scalable backend data pipelines in Python processing real-time telemetry from distributed ocean sensor networks.",
    tech: ["Python", "FastAPI", "Django", "React", "TypeScript", "PostgreSQL", "AWS", "Docker", "GraphQL"]
  },
  {
    id: '3',
    company: "Uber",
    logo: "https://logo.clearbit.com/uber.com",
    role: "Software Engineer II",
    duration: "Jan 2020 - Jan 2022",
    summary: "Built mission-critical microservices in Golang for Uber Health's patient transportation platform with high reliability requirements. Designed secure REST APIs compliant with HIPAA standards, integrating with EHR systems.",
    tech: ["Go", "Python", "PostgreSQL", "AWS", "Docker", "Jenkins", "REST APIs", "ETL", "HIPAA"]
  },
  {
    id: '4',
    company: "Uber",
    logo: "https://logo.clearbit.com/uber.com",
    role: "Software Engineer I",
    duration: "May 2017 - Dec 2019",
    summary: "Built distributed microservices in Golang for the Uber Eats order lifecycle using event-driven architecture and message queues. Implemented real-time dispatch systems leveraging courier availability and demand signals.",
    tech: ["Go", "PostgreSQL", "AWS", "Docker", "Thrift", "REST APIs", "Microservices", "Event-Driven"]
  },
  {
    id: '5',
    company: "Google",
    logo: "https://logo.clearbit.com/google.com",
    role: "Software Engineering Intern",
    duration: "May 2016 - Aug 2016",
    summary: "Built backend modules in Python integrating Google Classroom with Google Calendar services. Developed responsive user interfaces using Angular.",
    tech: ["Python", "Angular", "GCP", "REST APIs"]
  },
  {
    id: '6',
    company: "Originate",
    logo: "https://logo.clearbit.com/originate.com",
    role: "Software Engineering Intern",
    duration: "Jun 2015 - Aug 2015",
    summary: "Improved platform performance by optimizing data schemas and streamlining RESTful API endpoints, reducing page load latency by 15%. Gained exposure to GCP, containerization, and streaming data pipelines.",
    tech: ["REST APIs", "GCP", "Docker", "Data Pipelines"]
  }
];

const Content = styled(motion.div)`
  padding: 25px 30px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  position: relative;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    border-color: var(--color-primary);
    box-shadow: 0 0 30px rgba(0, 219, 222, 0.3);
    transform: translateY(-5px);
  }
`;

// Helper function to calculate duration in months
const calculateDurationMonths = (duration) => {
  const months = {
    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
    'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
  };
  
  const parseDate = (dateStr) => {
    const parts = dateStr.trim().split(' ');
    if (parts.length === 2) {
      const month = months[parts[0]];
      const year = parseInt(parts[1]);
      return { month, year };
    }
    return null;
  };

  const parts = duration.split('-').map(s => s.trim());
  if (parts.length !== 2) return 12;

  const startDate = parseDate(parts[0]);
  let endDate;
  
  if (parts[1].toLowerCase() === 'present') {
    endDate = { month: new Date().getMonth(), year: new Date().getFullYear() };
  } else {
    endDate = parseDate(parts[1]);
  }

  if (!startDate || !endDate) return 12;

  const monthDiff = (endDate.year - startDate.year) * 12 + (endDate.month - startDate.month);
  return Math.max(monthDiff, 1);
};

function MeExperience() {
  const maxDuration = Math.max(...meExperienceData.map(item => calculateDurationMonths(item.duration)));
  
  return (
    <ExperienceSection id="me-experience" className="bg-dots">
      <Timeline>
        {meExperienceData.map((item, index) => {
          const durationMonths = calculateDurationMonths(item.duration);
          const minHeight = 120 + ((durationMonths / maxDuration) * 230);
          
          return (
            <TimelineItem
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TimelineDot />
              <Content style={{ minHeight: `${minHeight}px` }}>
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