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

const TimelineContainer = styled.div`
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: var(--color-bg);
    border: 3px solid var(--color-primary);
    border-radius: 50%;
    top: 25px;
    z-index: 1;
    
    @media (max-width: 768px) {
      left: 11px;
    }
  }
  
  ${TimelineContainer}:nth-child(odd) &::after {
    right: -10px;
    
    @media (max-width: 768px) {
      left: 11px;
      right: auto;
    }
  }
  
  ${TimelineContainer}:nth-child(even) &::after {
    left: -10px;
    
    @media (max-width: 768px) {
      left: 11px;
      right: auto;
    }
  }
`;

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

  &:hover {
    border-color: var(--color-primary);
    box-shadow: 0 0 30px rgba(0, 219, 222, 0.3);
    transform: translateY(-5px);
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
  background: rgba(252, 0, 255, 0.1);
  border-radius: 1rem;
`;

const Description = styled.ul`
  color: var(--color-light);
  margin: 1rem 0 0 0;
  padding-left: 1.2rem;
  
  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
    font-size: 0.95rem;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechBadge = styled.span`
  font-size: 0.75rem;
  color: var(--color-primary);
  background: rgba(0, 219, 222, 0.1);
  padding: 0.3rem 0.6rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 219, 222, 0.3);
`;

const experienceData = [
  {
    company: "Meta",
    logo: "https://logo.clearbit.com/meta.com",
    role: "Software Engineer",
    duration: "Dec 2024 – Present",
    location: "Seattle, WA",
    description: [
      "Built end-to-end document ingestion, embedding, and semantic retrieval pipelines using Hugging Face Transformers",
      "Designed AI agent orchestration frameworks using LangChain for multi-step reasoning and tool usage",
      "Developed enterprise AI chatbot systems combining LLM reasoning with retrieval augmentation",
      "Engineered multi-agent query pipelines improving response accuracy for complex queries",
      "Built and deployed deep learning models (GRUs, Transformers) for user engagement prediction (~20% lift)"
    ],
    tech: ["Python", "LangChain", "HuggingFace", "Transformers", "LLMs", "RAG", "PyTorch"]
  },
  {
    company: "Sofar Ocean",
    logo: "https://logo.clearbit.com.sofarocean.com",
    role: "Software Engineer",
    duration: "Jan 2022 – Nov 2024",
    location: "San Francisco, CA",
    description: [
      "Led development of backend-heavy full-stack systems (70% backend / 30% frontend) for oceanic data",
      "Designed scalable data pipelines for time-series environmental data from Spotter buoy network",
      "Developed scientific data processing workflows using NumPy, Pandas, SciPy, Xarray",
      "Built backend services with FastAPI and Flask for ocean data access",
      "Implemented geospatial data processing using PostgreSQL/PostGIS",
      "Led firmware engineering team for connected Spotter buoys",
      "Built React + TypeScript dashboards with Mapbox/Leaflet for ocean visualization"
    ],
    tech: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL/PostGIS", "AWS", "C++", "NumPy"]
  },
  {
    company: "Uber",
    logo: "https://logo.clearbit.com/uber.com",
    role: "Software Engineer II",
    duration: "Jan 2020 – Jan 2022",
    location: "San Francisco, CA",
    description: [
      "Developed scalable microservices for Uber Health's patient transportation platform",
      "Designed AI-enhanced features for scheduling and route optimization",
      "Built secure APIs compliant with HIPAA regulations",
      "Implemented data pipelines and ETL workflows for operational insights",
      "Containerized backend services with Docker and integrated into AWS CI/CD pipelines"
    ],
    tech: ["Java", "Spring Boot", "React", "AWS", "Docker", "Kubernetes", "ETL", "HIPAA"]
  },
  {
    company: "Uber",
    logo: "https://logo.clearbit.com/uber.com",
    role: "Software Engineer I",
    duration: "May 2017 – Dec 2019",
    location: "San Francisco, CA",
    description: [
      "Built and scaled distributed microservices for Uber Eats order lifecycle using CQRS and event-driven architecture",
      "Designed backend systems for dynamic pricing, service fees, and courier payouts",
      "Developed RESTful APIs for internal tools and partner platforms",
      "Contributed to core dispatch and marketplace optimization services",
      "Built internal operations dashboards using React + REST APIs + SQL/SSRS"
    ],
    tech: ["Java", "Spring Boot", "React", "AWS", "CQRS", "Kafka", "PostgreSQL", "Microservices"]
  },
  {
    company: "Google",
    logo: "https://logo.clearbit.com/google.com",
    role: "Software Engineering Intern",
    duration: "May 2016 – Aug 2016",
    location: "Mountain View, CA",
    description: [
      "Designed and implemented distributed backend services using C++ and Java",
      "Developed responsive user interfaces using Angular",
      "Participated in peer code reviews and technical design docs in Agile environment"
    ],
    tech: ["C++", "Java", "Angular", "Distributed Systems"]
  },
  {
    company: "Originate",
    logo: "https://logo.clearbit.com.originate.com",
    role: "Software Engineering Intern",
    duration: "Jun 2015 – Aug 2015",
    location: "San Francisco, CA",
    description: [
      "Designed and developed Java-based web forms and data collection tools",
      "Re-engineered legacy Java portlet, migrating frontend to jQuery and Underscore.js",
      "Optimized Oracle Database schema, reducing page load latency by 15%"
    ],
    tech: ["Java", "jQuery", "Underscore.js", "Oracle DB", "RESTful APIs"]
  }
];

const Experience = () => {
  return (
    <ExperienceSection id="experience" className="bg-dots">
      <Title>Work Experience</Title>
      <Timeline>
        {experienceData.map((item, index) => (
          <TimelineItem
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <TimelineDot />
            <Content>
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
              <Description>
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </Description>
              <TechStack>
                {item.tech.map((tech, i) => (
                  <TechBadge key={i}>{tech}</TechBadge>
                ))}
              </TechStack>
            </Content>
          </TimelineItem>
        ))}
      </Timeline>
    </ExperienceSection>
  );
};

export default Experience;
