import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// Windows 95/98 Color Scheme
const WIN95_BG = '#008080';
const WIN95_DARK = '#000000';
const WIN95_LIGHT = '#c0c0c0';
const WIN95_WHITE = '#ffffff';
const WIN95_GRAY = '#808080';
const WIN95_WINDOW = '#fffcfe';

const DesktopContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #0a0a0f 50%, #12121a 100%);
  position: relative;
  overflow: hidden;
  font-family: 'MS Sans Serif', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const DesktopIcon = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  padding: 8px;
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 4px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
  }
  
  &:active {
    background: rgba(0, 0, 0, 0.2);
  }
`;

const IconImage = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  margin-bottom: 4px;
`;

const IconLabel = styled.span`
  color: #ffffff;
  font-size: 11px;
  text-align: center;
  text-shadow: 1px 1px 2px #000000;
  word-wrap: break-word;
  max-width: 72px;
`;

const WindowContainer = styled(motion.div)`
  position: absolute;
  background: #c0c0c0;
  border: 2px solid #ffffff;
  border-right-color: #000000;
  border-bottom-color: #000000;
  box-shadow: 2px 2px 0 #808080, 4px 4px 10px rgba(0, 0, 0, 0.5);
  min-width: 300px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
`;

const TitleBar = styled.div`
  background: ${props => props.$active ? '#000080' : '#808080'};
  color: #ffffff;
  padding: 2px 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 12px;
  min-height: 20px;
`;

const TitleBarButtons = styled.div`
  display: flex;
  gap: 2px;
`;

const TitleBarButton = styled.button`
  width: 16px;
  height: 14px;
  background: #c0c0c0;
  border: 1px solid #ffffff;
  border-right-color: #000000;
  border-bottom-color: #000000;
  font-size: 10px;
  line-height: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:active {
    border: 1px solid #000000;
    border-right-color: #ffffff;
    border-bottom-color: #ffffff;
  }
`;

const WindowContent = styled.div`
  background: #fffcfe;
  color: #000000;
  padding: 8px;
  flex: 1;
  overflow: auto;
  font-size: 12px;
  line-height: 1.5;
`;

const Taskbar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 28px;
  background: #c0c0c0;
  border-top: 2px solid #ffffff;
  display: flex;
  align-items: center;
  padding: 2px 4px;
  gap: 4px;
  z-index: 1000;
`;

const TaskbarButton = styled.button`
  background: ${props => props.$active ? '#fffcfe' : '#c0c0c0'};
  border: 1px solid #ffffff;
  border-right-color: #000000;
  border-bottom-color: #000000;
  padding: 2px 8px;
  font-size: 11px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 120px;
  text-align: left;
  
  &:active {
    border: 1px solid #000000;
    border-right-color: #ffffff;
    border-bottom-color: #ffffff;
    background: #fffcfe;
  }
`;

const StartButton = styled.button`
  background: #c0c0c0;
  border: 1px solid #ffffff;
  border-right-color: #000000;
  border-bottom-color: #000000;
  padding: 2px 6px;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:active {
    border: 1px solid #000000;
    border-right-color: #ffffff;
    border-bottom-color: #ffffff;
  }
`;

const Clock = styled.div`
  margin-left: auto;
  background: #c0c0c0;
  border: 1px solid #808080;
  border-right-color: #000000;
  border-bottom-color: #ffffff;
  padding: 2px 8px;
  font-size: 11px;
`;

// Desktop icons configuration
const desktopIcons = [
  { id: 'mycomputer', label: 'My Computer', icon: '🖥️', windowTitle: 'My Computer', content: 'System Information\n\nCPU: Senior Level\nMemory: 10+ Years Experience\nDisk: Unlimited Potential\n\nWelcome to Alex Maeda\'s system!' },
  { id: 'projects', label: 'My Projects', icon: '📁', windowTitle: 'My Projects', content: 'Projects Folder\n\n▸ Meta Ads Platform - $7B ARR\n▸ Sofar Ocean IoT System\n▸ Uber Health Platform\n▸ Uber Eats Marketplace\n▸ AI/ML Pipeline System' },
  { id: 'resume', label: 'Resume', icon: '📄', windowTitle: 'Resume - Alex Maeda', content: 'ALEX MAEDA\n============\n\nSenior Full Stack Engineer\nAI/ML & Cloud Infrastructure Expert\n\nEXPERIENCE:\n• Meta - Software Engineer (2024-Present)\n• Sofar Ocean - Software Engineer (2022-2024)\n• Uber - Software Engineer II (2020-2022)\n• Uber - Software Engineer I (2017-2019)\n\nSKILLS:\nPython, Go, Java, TypeScript, React,\nLangChain, AWS, Kubernetes, PostgreSQL' },
  { id: 'about', label: 'About Me', icon: '👤', windowTitle: 'About Me', content: 'About Alex Maeda\n\nI\'m a Senior Full Stack Engineer specializing in:\n\n• AI/ML Integration & LLM Systems\n• Distributed Systems Architecture\n• Cloud Infrastructure (AWS/GCP)\n• Backend Development (Python, Go, Java)\n\nBased in Mercer Island, WA\nOpen to remote work opportunities.' },
  { id: 'skills', label: 'Skills', icon: '⚡', windowTitle: 'Technical Skills', content: 'Programming: Python, Go, Java, TypeScript\n\nBackend: FastAPI, Django, Spring Boot, GraphQL\n\nAI/ML: LangChain, LangGraph, HuggingFace, PyTorch\n\nCloud: AWS, GCP, Kubernetes, Docker, Terraform\n\nDatabases: PostgreSQL, MongoDB, Redis, Kafka' },
  { id: 'contact', label: 'Contact', icon: '📧', windowTitle: 'Contact', content: 'Get In Touch\n\nEmail: alex.maeda@email.com\nLocation: Mercer Island, WA\n\nAvailable for:\n• Full-time positions\n• Consulting projects\n• Technical advisory roles' },
  { id: 'recycle', label: 'Recycle Bin', icon: '🗑️', windowTitle: 'Recycle Bin', content: 'Recycle Bin is empty\n\nFailed projects and broken dreams\nhave been permanently deleted.' },
  { id: 'linkedin', label: 'LinkedIn', icon: '💼', windowTitle: 'LinkedIn', content: 'LinkedIn Profile\n\nConnect with me on LinkedIn for professional networking and opportunities.\n\n[Profile Link Available]' },
];

function RetroOS() {
  const [windows, setWindows] = useState({});
  const [activeWindow, setActiveWindow] = useState(null);
  const [time, setTime] = useState(new Date());

  // Update clock every minute
  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const openWindow = (iconId) => {
    setWindows(prev => ({ ...prev, [iconId]: true }));
    setActiveWindow(iconId);
  };

  const closeWindow = (iconId) => {
    setWindows(prev => ({ ...prev, [iconId]: false }));
    if (activeWindow === iconId) {
      setActiveWindow(null);
    }
  };

  const minimizeWindow = (iconId) => {
    if (activeWindow === iconId) {
      setActiveWindow(null);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  // Calculate icon positions in a grid
  const getIconPosition = (index) => {
    const cols = 6;
    const row = Math.floor(index / cols);
    const col = index % cols;
    return {
      position: 'absolute',
      top: `${60 + row * 110}px`,
      left: `${20 + col * 90}px`,
    };
  };

  return (
    <DesktopContainer>
      {/* Desktop Icons */}
      {desktopIcons.map((icon, index) => (
        <DesktopIcon
          key={icon.id}
          style={getIconPosition(index)}
          onDoubleClick={() => openWindow(icon.id)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
        >
          <IconImage>{icon.icon}</IconImage>
          <IconLabel>{icon.label}</IconLabel>
        </DesktopIcon>
      ))}

      {/* Windows */}
      <AnimatePresence>
        {desktopIcons.map((icon) => (
          windows[icon.id] && (
            <WindowContainer
              key={icon.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              style={{
                top: '15%',
                left: activeWindow === icon.id ? '30%' : '32%',
                zIndex: activeWindow === icon.id ? 100 : 10,
              }}
              onClick={() => setActiveWindow(icon.id)}
            >
              <TitleBar $active={activeWindow === icon.id}>
                <span>{icon.icon} {icon.windowTitle}</span>
                <TitleBarButtons>
                  <TitleBarButton onClick={() => minimizeWindow(icon.id)}>_</TitleBarButton>
                  <TitleBarButton onClick={() => minimizeWindow(icon.id)}>□</TitleBarButton>
                  <TitleBarButton onClick={() => closeWindow(icon.id)}>×</TitleBarButton>
                </TitleBarButtons>
              </TitleBar>
              <WindowContent>
                <pre style={{ 
                  fontFamily: 'inherit', 
                  whiteSpace: 'pre-wrap',
                  margin: 0,
                  color: '#000080'
                }}>
                  {icon.content}
                </pre>
              </WindowContent>
            </WindowContainer>
          )
        ))}
      </AnimatePresence>

      {/* Taskbar */}
      <Taskbar>
        <StartButton>
          <span>🪟</span> Start
        </StartButton>
        {desktopIcons.filter(icon => windows[icon.id]).map(icon => (
          <TaskbarButton
            key={icon.id}
            $active={activeWindow === icon.id}
            onClick={() => activeWindow === icon.id ? minimizeWindow(icon.id) : setActiveWindow(icon.id)}
          >
            {icon.icon} {icon.label.substring(0, 15)}
          </TaskbarButton>
        ))}
        <Clock>{formatTime(time)}</Clock>
      </Taskbar>
    </DesktopContainer>
  );
}

export default RetroOS;
