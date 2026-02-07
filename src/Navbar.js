import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.6);
  width: max-content;
  padding: 0.8rem 2rem;
  z-index: 100;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 0.5rem;
  border-radius: 3rem;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    gap: 0.3rem;
    bottom: 1rem;
  }
`;

const NavLink = styled.a`
  background: transparent;
  padding: 0.8rem 1.2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-light);
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: var(--transition);
  position: relative;

  &:hover {
    background: rgba(0, 219, 222, 0.15);
    color: var(--color-primary);
  }

  &.active {
    background: var(--color-primary);
    color: var(--color-bg);
    box-shadow: 0 0 20px rgba(0, 219, 222, 0.4);
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 0.8rem;
    font-size: 0.85rem;
    
    span {
      display: none;
    }
    
    &::after {
      content: attr(data-tooltip);
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.9);
      color: var(--color-white);
      padding: 0.5rem 0.8rem;
      border-radius: 0.5rem;
      font-size: 0.75rem;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
      margin-bottom: 0.5rem;
    }
    
    &:hover::after {
      opacity: 1;
    }
  }
`;

const NavIcon = styled.span`
  display: none;
  
  @media (min-width: 769px) {
    display: inline;
    margin-right: 0.5rem;
  }
`;

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section, header');
      const scrollPosition = window.scrollY + 300;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveNav('#' + id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', icon: '🏠', tooltip: 'Home' },
    { href: '#about', label: 'About', icon: '👤', tooltip: 'About' },
    { href: '#skills', label: 'Skills', icon: '⚡', tooltip: 'Skills' },
    { href: '#experience', label: 'Experience', icon: '💼', tooltip: 'Experience' },
    { href: '#contact', label: 'Contact', icon: '📬', tooltip: 'Contact' }
  ];

  return (
    <Nav>
      {navItems.map(item => (
        <NavLink 
          key={item.href}
          href={item.href} 
          onClick={() => setActiveNav(item.href)}
          className={activeNav === item.href ? 'active' : ''}
          data-tooltip={item.tooltip}
        >
          <NavIcon>{item.icon}</NavIcon>
          <span>{item.label}</span>
        </NavLink>
      ))}
    </Nav>
  );
};

export default Navbar;
