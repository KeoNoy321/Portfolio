import React, { useMemo, useRef } from 'react';
import styled from 'styled-components';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Stars } from '@react-three/drei';

const Wrapper = styled.section`
  min-height: 100vh;
  padding-top: 6rem;
  position: relative;
  overflow: hidden;
  background: radial-gradient(circle at center, #12121a 0%, #050509 100%);
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 5rem;
  z-index: 2;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.75rem;
  background: linear-gradient(to right, var(--color-primary), var(--color-primary-variant));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subheading = styled.p`
  max-width: 480px;
  margin: 0 auto;
  font-size: 0.95rem;
  color: var(--color-light);
  opacity: 0.85;
`;

const Legend = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  pointer-events: none;
`;

const LegendItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: var(--color-light);
  background: rgba(0, 0, 0, 0.5);
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(12px);
`;

const LegendDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ color }) => color};
  box-shadow: 0 0 12px ${({ color }) => color};
`;

const skills = [
  { name: 'Python', category: 'lang', color: '#00ffa3' },
  { name: 'Go', category: 'lang', color: '#00ffa3' },
  { name: 'Java', category: 'lang', color: '#00ffa3' },
  { name: 'TypeScript', category: 'lang', color: '#00ffa3' },
  { name: 'React', category: 'frontend', color: '#00d4ff' },
  { name: 'Next.js', category: 'frontend', color: '#00d4ff' },
  { name: 'Tailwind', category: 'frontend', color: '#00d4ff' },
  { name: 'LangChain', category: 'ai', color: '#ff6b6b' },
  { name: 'LLMs', category: 'ai', color: '#ff6b6b' },
  { name: 'RAG', category: 'ai', color: '#ff6b6b' },
  { name: 'PostgreSQL', category: 'data', color: '#7b61ff' },
  { name: 'Redis', category: 'data', color: '#7b61ff' },
  { name: 'Kafka', category: 'data', color: '#7b61ff' },
  { name: 'AWS', category: 'cloud', color: '#fbbf24' },
  { name: 'Kubernetes', category: 'cloud', color: '#fbbf24' },
  { name: 'Docker', category: 'cloud', color: '#fbbf24' },
];

function SkillNode({ skill, index, total }) {
  const ref = useRef();

  const basePosition = useMemo(() => {
    const ring = Math.floor(index / 6);
    const inRingIndex = index % 6;
    const radius = 4.5 + ring * 1.6;
    const angle = (inRingIndex / 6) * Math.PI * 2;
    const y = (ring - 1) * 1.4;
    return { radius, angle, y };
  }, [index]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.12;
    const spin = t + basePosition.angle;
    const x = Math.cos(spin) * basePosition.radius;
    const z = Math.sin(spin) * basePosition.radius;
    const y = basePosition.y + Math.sin(t * 1.4 + index) * 0.25;
    if (ref.current) {
      ref.current.position.set(x, y, z);
      ref.current.rotation.y = -spin;
    }
  });

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[0.22, 20, 20]} />
        <meshStandardMaterial
          color={skill.color}
          emissive={skill.color}
          emissiveIntensity={1.2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      <Html
        distanceFactor={12}
        style={{
          pointerEvents: 'none',
          fontSize: '0.7rem',
          fontWeight: 500,
          letterSpacing: '0.03em',
          textTransform: 'uppercase',
          color: 'white',
          textShadow: '0 0 8px rgba(0,0,0,0.9)',
        }}
      >
        {skill.name}
      </Html>
    </group>
  );
}

function ConstellationScene() {
  return (
    <>
      <color attach="background" args={['#050509']} />
      <ambientLight intensity={0.35} />
      <pointLight position={[8, 8, 8]} intensity={1.1} color="#00ffa3" />
      <pointLight position={[-10, -6, -8]} intensity={0.5} color="#7b61ff" />
      <Stars
        radius={120}
        depth={80}
        count={2500}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <group position={[0, 0, 0]}>
        {skills.map((skill, index) => (
          <SkillNode key={skill.name} skill={skill} index={index} total={skills.length} />
        ))}
      </group>
    </>
  );
}

function SkillConstellation() {
  return (
    <Wrapper>
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ConstellationScene />
      </Canvas>
      <Overlay>
        <Heading>Skill Constellation</Heading>
        <Subheading>
          Explore a 3D map of my core skills grouped by focus area. Watch nodes orbit and pulse as
          part of a living tech stack.
        </Subheading>
        <Legend>
          <LegendItem>
            <LegendDot color="#00ffa3" /> Languages
          </LegendItem>
          <LegendItem>
            <LegendDot color="#00d4ff" /> Frontend
          </LegendItem>
          <LegendItem>
            <LegendDot color="#ff6b6b" /> AI / ML
          </LegendItem>
          <LegendItem>
            <LegendDot color="#7b61ff" /> Data / Infra
          </LegendItem>
          <LegendItem>
            <LegendDot color="#fbbf24" /> Cloud / Platform
          </LegendItem>
        </Legend>
      </Overlay>
    </Wrapper>
  );
}

export default SkillConstellation;

