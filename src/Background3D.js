import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';

function FloatingShape({ position, color, speed }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * speed;
    meshRef.current.rotation.y = t * speed * 0.5;
    meshRef.current.position.y = position[1] + Math.sin(t * speed) * 0.5;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function OrbitingOrb({ radius, height, color, speed, phase = 0 }) {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + phase;
    const x = Math.cos(t) * radius;
    const z = Math.sin(t) * radius - 4;
    const y = height + Math.sin(t * 1.5) * 0.2;
    if (groupRef.current) {
      groupRef.current.position.set(x, y, z);
      groupRef.current.rotation.y = t;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[0.25, 24, 24]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1}
          roughness={0.2}
          metalness={0.7}
        />
      </mesh>
    </group>
  );
}

function Scene() {
  const shapes = useMemo(() => [
    { position: [-3, 2, -2], color: '#00ffa3', speed: 0.5 },
    { position: [3, 1, -3], color: '#7b61ff', speed: 0.7 },
    { position: [-2, -1, -2], color: '#00d4ff', speed: 0.6 },
    { position: [2, 2, -1], color: '#ff6b6b', speed: 0.4 },
    { position: [0, 0, -4], color: '#00ffa3', speed: 0.3 },
  ], []);

  const orbitingOrbs = useMemo(() => [
    { radius: 4.5, height: 1.2, color: '#00ffa3', speed: 0.25, phase: 0 },
    { radius: 5.2, height: 0.2, color: '#7b61ff', speed: 0.22, phase: Math.PI / 2 },
    { radius: 3.8, height: -0.8, color: '#00d4ff', speed: 0.3, phase: Math.PI },
    { radius: 6, height: 1.8, color: '#ff6b6b', speed: 0.18, phase: (3 * Math.PI) / 2 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffa3" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7b61ff" />
      
      <Stars 
        radius={100} 
        depth={50} 
        count={3000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1}
      />
      
      {shapes.map((shape, index) => (
        <FloatingShape 
          key={index} 
          position={shape.position} 
          color={shape.color} 
          speed={shape.speed} 
        />
      ))}

      {orbitingOrbs.map((orb, index) => (
        <OrbitingOrb
          key={`orb-${index}`}
          radius={orb.radius}
          height={orb.height}
          color={orb.color}
          speed={orb.speed}
          phase={orb.phase}
        />
      ))}
    </>
  );
}

function Background3D() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none',
    }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  );
}

export default Background3D;
