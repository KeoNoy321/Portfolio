import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsSection = styled(motion.section)`
  padding: 4rem 2rem;
  position: relative;
`;

const Title = styled.h2`
  text-align: center;
  color: var(--color-primary);
  margin-bottom: 3rem;
  font-size: 2rem;
  position: relative;
  z-index: 1;
  
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

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const SkillCategory = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: var(--transition);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--color-primary);
    box-shadow: 0 0 30px rgba(0, 219, 222, 0.2);
    transform: translateY(-8px);
  }
`;

const CategoryTitle = styled.h3`
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(0,0,0,0.2);
  border-radius: 0.8rem;
  width: 100px;
  text-align: center;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(0,0,0,0.3);
  }
`;

const SkillIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 0.5rem;

  &:hover {
    transform: scale(1.15);
    transition: transform 0.2s ease;
  }
`;

const SkillName = styled.span`
  font-size: 0.85rem;
  color: var(--color-light);
`;

const FallbackIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary);
  color: var(--color-dark);
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 50%;
  margin-bottom: 0.5rem;
`;

const CategoryIcon = styled.span`
  font-size: 1.5rem;
`;

const skillsData = {
  "Programming Languages": [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
  ],
  "Backend Development": [
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
    { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    { name: "gRPC", icon: "https://grpc.io/img/grpc_logo.svg" },
    { name: "REST APIs", icon: null }
  ],
  "Frontend Development": [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
  ],
  "AI / ML & LLMs": [
    { name: "LangChain", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
    { name: "LangGraph", icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4" },
    { name: "HuggingFace", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
    { name: "OpenAI/GPT-4", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "Claude", icon: "https://www.anthropic.com/images/icons/apple-touch-icon.png" },
    { name: "Llama", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "RAG", icon: null },
    { name: "NLP", icon: null }
  ],
  "Database & Data Engineering": [
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "DynamoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
    { name: "Snowflake", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/snowflake/snowflake-original.svg" },
    { name: "Apache Spark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" },
    { name: "ETL Pipelines", icon: null }
  ],
  "Cloud & Infrastructure": [
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
    { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    { name: "CI/CD", icon: null }
  ]
};

const categoryIcons = {
  "Programming Languages": "💻",
  "Backend Development": "⚙️",
  "Frontend Development": "🎨",
  "AI / ML & LLMs": "🤖",
  "Database & Data Engineering": "📊",
  "Cloud & Infrastructure": "☁️"
};

const Skills = () => {
  const [imageErrors, setImageErrors] = React.useState({});

  const handleImageError = (skillName) => {
    setImageErrors(prev => ({ ...prev, [skillName]: true }));
  };

  const getSkillIcon = (skill) => {
    if (imageErrors[skill.name]) {
      return null;
    }
    return (
      <SkillIcon 
        src={skill.icon} 
        alt="" 
        onError={() => handleImageError(skill.name)}
      />
    );
  };

  const getFallbackIcon = (skillName) => {
    return skillName.charAt(0).toUpperCase();
  };

  return (
    <SkillsSection
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <Title>Technical Skills</Title>
      <SkillsContainer>
        {Object.entries(skillsData).map(([category, skills], index) => (
          <SkillCategory
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CategoryTitle>
              <CategoryIcon>{categoryIcons[category]}</CategoryIcon>
              {category}
            </CategoryTitle>
            <SkillList>
              {skills.map(skill => (
                <SkillItem
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {getSkillIcon(skill)}
                  {imageErrors[skill.name] ? (
                    <FallbackIcon>{getFallbackIcon(skill.name)}</FallbackIcon>
                  ) : null}
                  <SkillName>{skill.name}</SkillName>
                </SkillItem>
              ))}
            </SkillList>
          </SkillCategory>
        ))}
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
