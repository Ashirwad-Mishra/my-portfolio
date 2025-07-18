// src/Components/Workbench.tsx
import React, { useState, useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Text, useTexture, OrbitControls } from '@react-three/drei';
import { a, useSpring } from '@react-spring/three';
import * as THREE from 'three';

// --- Draggable Interactive Brick Component (No Physics) ---

type InteractiveObjectProps = {
  position: [number, number, number];
  rotation?: [number, number, number];
  size: [number, number, number];
  textureUrl: string;
  label: string;
  onClick?: () => void;
  setOrbitControlsEnabled: (enabled: boolean) => void;
};

function InteractiveObject({ position, rotation = [0, 0, 0], size, textureUrl, label, onClick, setOrbitControlsEnabled }: InteractiveObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const texture = useTexture(textureUrl);
  const { camera } = useThree();
  const wasDragged = useRef(false);

  const { scale } = useSpring({
    scale: hovered ? 1.15 : 1,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  useEffect(() => {
    document.body.style.cursor = isDragging ? 'grabbing' : hovered ? 'pointer' : 'auto';
  }, [hovered, isDragging]);

  useFrame((state) => {
    if (isDragging) {
      const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -0.45);
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(state.mouse, camera);
      const intersection = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, intersection);
      
      meshRef.current.position.x = THREE.MathUtils.clamp(intersection.x, -4.5, 4.5);
      meshRef.current.position.z = THREE.MathUtils.clamp(intersection.z, -4.5, 4.5);
    }
  });

  const handlePointerDown = (e: any) => {
    e.stopPropagation();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setIsDragging(true);
    wasDragged.current = false;
    setOrbitControlsEnabled(false);
  };

  const handlePointerMove = (e: any) => {
    if (isDragging) {
      if (e.movementX !== 0 || e.movementY !== 0) {
        wasDragged.current = true;
      }
    }
  };

  const handlePointerUp = (e: any) => {
    e.stopPropagation();
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    setIsDragging(false);
    setOrbitControlsEnabled(true);
    
    if (!wasDragged.current && onClick) {
      onClick();
    }
  };

  return (
    <a.mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={scale}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
      onPointerOut={(e) => { e.stopPropagation(); setHovered(false); }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      castShadow
    >
      <boxGeometry args={size} />
      <meshStandardMaterial map={texture} />
      {hovered && !isDragging && (
        <Text position={[0, size[1] / 2 + 0.2, 0]} fontSize={0.15} color="white" anchorX="center">
          {label}
        </Text>
      )}
    </a.mesh>
  );
}

// --- Main Workbench Scene Component ---

type WorkbenchProps = {
  setView: React.Dispatch<React.SetStateAction<string>>;
};

export default function Workbench({ setView }: WorkbenchProps) {
  const [orbitControlsEnabled, setOrbitControlsEnabled] = useState(true);
  const deskTexture = useTexture('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/hardwood2_diffuse.jpg');
  
  deskTexture.wrapS = deskTexture.wrapT = THREE.RepeatWrapping;
  deskTexture.repeat.set(2, 2);

  return (
    <>
      <OrbitControls enabled={orbitControlsEnabled} />

      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 5, 2]} intensity={1.5} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
      
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial map={deskTexture} color="#856a54" />
      </mesh>
      
      {/* Interactive, draggable bricks */}
      <InteractiveObject setOrbitControlsEnabled={setOrbitControlsEnabled} position={[-2.2, -0.45, 0]} size={[1.5, 1, 0.1]} rotation={[0, 0.2, 0]} label="My Projects" textureUrl="https://picsum.photos/id/10/300/200" onClick={() => setView('projects')} />
      <InteractiveObject setOrbitControlsEnabled={setOrbitControlsEnabled} position={[2.2, -0.45, -0.5]} size={[1, 1.4, 0.1]} rotation={[0, -0.25, 0]} label="About Me" textureUrl="https://picsum.photos/id/20/200/280" onClick={() => setView('about')} />
      
      {/* --- NEW: Writings Brick --- */}
      <InteractiveObject setOrbitControlsEnabled={setOrbitControlsEnabled} position={[-0.8, -0.45, 1.2]} size={[1, 1.4, 0.1]} rotation={[0, 0.1, 0]} label="My Writings" textureUrl="https://picsum.photos/id/180/200/280" onClick={() => setView('writings')} />
      
      <InteractiveObject setOrbitControlsEnabled={setOrbitControlsEnabled} position={[0.8, -0.45, 1.2]} size={[1.2, 0.8, 0.1]} rotation={[0, -0.1, 0]} label="My Toolkit" textureUrl="https://picsum.photos/id/30/240/160" onClick={() => setView('skills')} />
      <InteractiveObject setOrbitControlsEnabled={setOrbitControlsEnabled} position={[2, -0.45, 1.5]} size={[0.8, 0.8, 0.1]} rotation={[0, -0.2, 0]} label="Contact" textureUrl="https://picsum.photos/id/40/160/160" onClick={() => setView('contact')} />
    </>
  );
}