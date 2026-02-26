import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FormContainer = styled(motion.div)`
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: rotateX(2deg);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: var(--color-light);
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.5rem;
  color: var(--color-white);
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 20px rgba(0, 255, 163, 0.2);
  }
  
  &::placeholder {
    color: var(--color-muted);
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem 1rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.5rem;
  color: var(--color-white);
  font-size: 1rem;
  font-family: inherit;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 20px rgba(0, 255, 163, 0.2);
  }
  
  &::placeholder {
    color: var(--color-muted);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-variant) 100%);
  border: none;
  border-radius: 0.5rem;
  color: var(--color-dark);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 255, 163, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  padding: 1rem;
  background: rgba(0, 255, 163, 0.2);
  border: 1px solid var(--color-primary);
  border-radius: 0.5rem;
  color: var(--color-primary);
  text-align: center;
`;

const ContactSection = styled(motion.section)`
  text-align: center;
  padding: 4rem 2rem 8rem;
  background: linear-gradient(180deg, var(--color-bg) 0%, var(--color-bg-variant) 100%);
  transform-style: preserve-3d;
  perspective: 1000px;
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
  transform-style: preserve-3d;
  transform: translateZ(10px);
  
  span {
    font-size: 1rem;
  }

  &:hover {
    color: var(--color-white);
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.05) translateZ(20px);
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
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setLoading(false);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };
  
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
      
      <FormContainer
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        {submitted ? (
          <SuccessMessage
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            ✓ Message sent successfully! I'll get back to you soon.
          </SuccessMessage>
        ) : (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or just say hi!"
                required
              />
            </FormGroup>
            <SubmitButton
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </Form>
        )}
      </FormContainer>
      
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
