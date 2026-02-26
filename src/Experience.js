import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceSection = styled(motion.section)`
  padding: 4rem 2rem;
`;

const Title = styled.h2`
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 3rem;
  font-size: 2rem;
  position: relative;
  
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

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    width: 4px;
    background: linear-gradient(to bottom, var(--color-primary), var(--color-primary-variant));
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
    border-radius: 2px;
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

// TimelineContainer alias for use in resume pages
const TimelineContainer = Timeline;

const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 50px;
    padding-right: 15px;
  }

  &:nth-child(odd) {
    left: 0;
    
    @media (max-width: 768px) {
      left: 0;
    }
  }

  &:nth-child(even) {
    left: 50%;
    
    @media (max-width: 768px) {
      left: 0;
    }
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: var(--color-bg);
  border: 3px solid var(--color-primary);
  border-radius: 50%;
  top: 25px;
  z-index: 10;
  
  ${TimelineItem}:nth-child(odd) & {
    right: -10px;
    
    @media (max-width: 768px) {
      left: 11px;
      right: auto;
    }
  }
  
  ${TimelineItem}:nth-child(even) & {
    left: -10px;
    
    @media (max-width: 768px) {
      left: 11px;
      right: auto;
    }
  }
`;

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
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: rotateX(3deg);

  &:hover {
    border-color: var(--color-primary);
    box-shadow: 0 0 30px rgba(0, 255, 163, 0.3);
    transform: rotateX(0deg) translateZ(20px);
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const CompanyLogo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 8px;
  background: #fff;
  padding: 5px;
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const RoleTitle = styled.h3`
  color: var(--color-primary);
  margin: 0;
  font-size: 1.2rem;
`;

const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const CompanyName = styled.h4`
  color: var(--color-light);
  margin: 0;
  font-size: 0.95rem;
  font-weight: 500;
`;

const Duration = styled.span`
  color: var(--color-primary-variant);
  font-size: 0.85rem;
  padding: 0.25rem 0.75rem;
  background: rgba(123, 97, 255, 0.1);
  border-radius: 1rem;
`;

const TechStack = styled.div`
  display: none;
`;

const TechBadge = styled(motion.span)`
  display: none;
`;

const Summary = styled.p`
  display: none;
`;

// Additional components for resume pages
const TimelineSeparator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimelineConnector = styled.div`
  width: 2px;
  flex-grow: 1;
  background: linear-gradient(to bottom, var(--color-primary), var(--color-primary-variant));
  min-height: 20px;
`;

const TimelineContent = styled(motion.div)`
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
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: rotateX(3deg);

  &:hover {
    border-color: var(--color-primary);
    box-shadow: 0 0 30px rgba(0, 255, 163, 0.3);
    transform: rotateX(0deg) translateZ(20px);
  }

  h3 {
    color: var(--color-primary);
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
  }

  h4 {
    color: var(--color-light);
    margin: 0 0 0.5rem 0;
    font-size: 0.95rem;
    font-weight: 500;
  }

  p {
    color: var(--color-light);
    margin: 0.5rem 0;
    line-height: 1.5;
    font-size: 0.85rem;
    opacity: 0.9;
  }

  .period {
    color: var(--color-primary-variant);
    font-size: 0.85rem;
    padding: 0.25rem 0.75rem;
    background: rgba(123, 97, 255, 0.1);
    border-radius: 1rem;
    display: inline-block;
    margin-bottom: 0.5rem;
  }
`;

// Helper function to calculate duration in months
const calculateDurationMonths = (duration) => {
  const parseDate = (dateStr) => {
    const months = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    const parts = dateStr.trim().split(' ');
    if (parts.length === 2) {
      const month = months[parts[0]];
      const year = parseInt(parts[1]);
      return { month, year };
    }
    return null;
  };

  const parts = duration.split('–').map(s => s.trim());
  if (parts.length !== 2) return 12; // default

  const startDate = parseDate(parts[0]);
  let endDate;
  
  if (parts[1].toLowerCase() === 'present') {
    endDate = { month: new Date().getMonth(), year: new Date().getFullYear() };
  } else {
    endDate = parseDate(parts[1]);
  }

  if (!startDate || !endDate) return 12;

  const months = (endDate.year - startDate.year) * 12 + (endDate.month - startDate.month);
  return Math.max(months, 1);
};

const experienceData = [
  {
    company: "Meta",
    logo: "https://logo.clearbit.com/meta.com",
    role: "Software Engineer",
    duration: "Dec 2024 – Present",
    summary: "Building AI-driven distributed systems including document ingestion pipelines, AI agent orchestration frameworks, and enterprise chatbot systems. Deployed deep learning models achieving 20% engagement lift.",
    tech: ["Python", "LangChain", "HuggingFace", "Transformers", "LLMs", "RAG", "PyTorch", "Django", "React", "TypeScript", "GraphQL", "Docker", "Kubernetes", "Terraform"]
  },
  {
    company: "Sofar Ocean",
    logo: "https://logo.clearbit.com/sofarocean.com",
    role: "Software Engineer",
    duration: "Jan 2022 – Nov 2024",
    summary: "Led development of backend-heavy full-stack systems for real-time oceanic data from Spotter buoy network. Built scalable data pipelines, geospatial processing systems, and visualization dashboards for environmental intelligence.",
    tech: ["Python", "FastAPI", "Flask", "React", "TypeScript", "PostgreSQL", "GeoPandas", "NumPy", "Pandas", "AWS", "Docker", "Mapbox", "Leaflet"]
  },
  {
    company: "Uber",
    logo: "https://logo.clearbit.com/uber.com",
    role: "Software Engineer II",
    duration: "Jan 2020 – Jan 2022",
    summary: "Developed scalable microservices for Uber Health's patient transportation platform. Built HIPAA-compliant APIs, AI-enhanced scheduling features, and data pipelines for healthcare operations.",
    tech: ["Java", "Spring Boot", "React", "AWS", "Docker", "Kubernetes", "ETL", "HIPAA", "Microservices"]
  },
  {
    company: "Uber",
    logo: "https://logo.clearbit.com/uber.com",
    role: "Software Engineer I",
    duration: "May 2017 – Dec 2019",
    summary: "Built distributed microservices for Uber Eats order lifecycle using CQRS and event-driven architecture. Designed backend systems for dynamic pricing, courier payouts, and marketplace optimization.",
    tech: ["Java", "Spring Boot", "React", "AWS", "CQRS", "Kafka", "PostgreSQL", "Microservices", "Docker", "CloudFormation"]
  },
  {
    company: "Google",
    logo: "https://logo.clearbit.com/google.com",
    role: "Software Engineering Intern",
    duration: "May 2016 – Aug 2016",
    summary: "Designed distributed backend services using C++ and Java for large-scale data processing. Developed responsive UIs using Angular in an Agile environment.",
    tech: ["C++", "Java", "Angular", "Distributed Systems"]
  },
  {
    company: "Originate",
    logo: "https://logo.clearbit.com/originate.com",
    role: "Software Engineering Intern",
    duration: "Jun 2015 – Aug 2015",
    summary: "Developed Java-based web forms and data collection tools. Re-engineered legacy Java portlet with jQuery migration, reducing page load latency by 15%.",
    tech: ["Java", "jQuery", "Underscore.js", "Oracle DB", "RESTful APIs", "SQL"]
  }
];

const Experience = () => {
  // Find max duration for scaling
  const maxDuration = Math.max(...experienceData.map(item => calculateDurationMonths(item.duration)));
  
  return (
    <ExperienceSection id="experience" className="bg-dots">
      <Title>Work Experience</Title>
      <Timeline>
        {experienceData.map((item, index) => {
          const durationMonths = calculateDurationMonths(item.duration);
          // Scale height: minimum 120px, max 350px based on duration ratio
          const minHeight = 120 + ((durationMonths / maxDuration) * 230);
          
          return (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TimelineDot />
              <Content 
                style={{ minHeight: `${minHeight}px` }}
                initial={{ opacity: 0, rotateY: index % 2 === 0 ? -30 : 30, y: 50 }}
                whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
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
              </Content>
            </TimelineItem>
          );
        })}
      </Timeline>
    </ExperienceSection>
  );
};

export default Experience;
export { 
  ExperienceSection, 
  Title, 
  Timeline, 
  TimelineContainer,
  TimelineItem, 
  TimelineDot, 
  Content, 
  CompanyHeader, 
  CompanyLogo, 
  RoleTitle, 
  CompanyInfo, 
  CompanyName, 
  Duration, 
  TechStack, 
  TechBadge, 
  Summary,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent
};
