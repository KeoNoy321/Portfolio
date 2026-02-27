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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.3s ease, background 0.3s ease;
  transform-style: preserve-3d;
  perspective: 800px;
  transform: perspective(800px) rotateX(8deg) rotateY(-2deg);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.06) inset,
    0 -4px 0 rgba(0, 0, 0, 0.25),
    0 6px 0 rgba(0, 0, 0, 0.1),
    0 12px 24px rgba(0, 0, 0, 0.25),
    0 24px 48px rgba(0, 0, 0, 0.15);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--color-primary);
    transform: perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(28px);
    box-shadow:
      0 1px 0 rgba(255, 255, 255, 0.12) inset,
      0 -6px 0 rgba(0, 0, 0, 0.2),
      0 12px 0 rgba(0, 0, 0, 0.06),
      0 20px 40px rgba(0, 0, 0, 0.3),
      0 0 50px rgba(0, 255, 163, 0.3),
      0 0 90px rgba(123, 97, 255, 0.15);
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
  min-width: 100px;
  max-width: 180px;
  flex: 1 1 auto;
  text-align: center;
  transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
  transform-style: preserve-3d;
  perspective: 800px;
  transform: perspective(800px) translateZ(0) rotateX(5deg);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.04) inset,
    0 -2px 0 rgba(0, 0, 0, 0.2),
    0 4px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: perspective(800px) translateY(-12px) rotateX(8deg) rotateY(-8deg) translateZ(35px);
    background: rgba(0,0,0,0.4);
    box-shadow:
      0 2px 0 rgba(255, 255, 255, 0.08) inset,
      0 -4px 0 rgba(0, 0, 0, 0.15),
      0 16px 40px rgba(0, 255, 163, 0.35),
      0 0 40px rgba(0, 255, 163, 0.2);
    z-index: 10;
  }
`;

const SkillIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 0.5rem;
  transform-style: preserve-3d;
  transform: translateZ(5px);

  &:hover {
    transform: scale(1.3) translateZ(15px);
    transition: transform 0.2s ease;
  }
`;

const SkillName = styled.span`
  font-size: 0.85rem;
  color: var(--color-light);
  word-wrap: break-word;
  max-width: 100%;
  line-height: 1.2;
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

const categoryIcons = {
  "Programming Languages": "💻",
  "Backend Development": "⚙️",
  "Frontend Development": "🎨",
  "AI / ML & LLMs": "🤖",
  "Database & Data Engineering": "📊",
  "Cloud & Infrastructure": "☁️"
};

// Default skills data
const defaultSkillsData = {
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
    { name: "gRPC", icon: "https://grpc.io/img/grpc_logo.svg" }
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
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" }
  ],
  "Database & Data Engineering": [
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "DynamoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
    { name: "Snowflake", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/snowflake/snowflake-original.svg" },
    { name: "Apache Spark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" }
  ],
  "Cloud & Infrastructure": [
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
    { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
    { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" }
  ]
};

const Skills = ({ skillsData = defaultSkillsData, categoryIconsData = categoryIcons }) => {
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
      className="neural-bg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <Title>Technical Skills</Title>
      <SkillsContainer>
        {Object.entries(skillsData).map(([category, skills], index) => (
          <SkillCategory
            className="card-hover-gradient"
            key={category}
            initial={{ opacity: 0, rotateY: index % 2 === 0 ? -30 : 30, y: 50 }}
            whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <CategoryTitle>
              <CategoryIcon>{categoryIconsData[category] || '💻'}</CategoryIcon>
              {category}
            </CategoryTitle>
            <SkillList>
              {skills.map(skill => (
                <SkillItem
                  key={skill.name}
                  initial={{ opacity: 0, rotateY: 15, scale: 0.8 }}
                  whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  whileHover={{ scale: 1.1, rotateX: 10, rotateY: -10, z: 30 }}
                  whileTap={{ scale: 0.95 }}
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
