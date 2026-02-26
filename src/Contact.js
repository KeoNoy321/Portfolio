import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactSection = styled(motion.section)`
  text-align: center;
  padding: 4rem 2rem 8rem;
  background: linear-gradient(180deg, var(--color-bg) 0%, var(--color-bg-variant) 100%);
`;

const Title = styled.h2`
  color: var(--color-primary);
  margin-bottom: 2rem;
  font-size: 2rem;
  position: relative;
  display: inline-block;
  
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

const ContactText = styled.p`
  color: var(--color-light);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.8;
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const ContactLink = styled(motion.a)`
  color: var(--color-primary);
  font-size: 1.5rem;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  span {
    font-size: 1rem;
  }

  &:hover {
    color: var(--color-white);
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
    border-color: var(--color-primary);
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.8rem 1rem;
    
    span {
      font-size: 0.9rem;
    }
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

const Contact = ({ contactData }) => {
  const email = contactData?.email || 'mprimary.work@gmail.com';
  const phone = contactData?.phone || '(484) 298-9873';
  const location = contactData?.location || 'Mercer Island, WA';
  
  return (
    <ContactSection
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <Title>Get In Touch</Title>
      <ContactText>
        I'm currently open to new opportunities and collaborations. 
        Whether you have a question or just want to say hi, feel free to reach out!
      </ContactText>
      
      <ContactInfo>
        <InfoItem>
          📧 Email: <a href={`mailto:${email}`}>{email}</a>
        </InfoItem>
        <InfoItem>
          📱 Phone: <a href={`tel:${phone}`}>{phone}</a>
        </InfoItem>
        <InfoItem>
          📍 Location: {location}
        </InfoItem>
      </ContactInfo>
      
      <ContactLinks>
        <ContactLink 
          href={`mailto:${email}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Email</span>
        </ContactLink>
      </ContactLinks>
    </ContactSection>
  );
};

export default Contact;
