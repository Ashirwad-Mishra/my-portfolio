// src/Components/DraggableTable.tsx
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody, RapierRigidBody } from '@react-three/rapier';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

export default function DraggableTable() {
  const bodyRef = useRef<RapierRigidBody>(null);
  const [isDragging, setIsDragging] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const euler = useRef(new THREE.Euler(0, 0, 0, 'YXZ'));
  const quaternion = useRef(new THREE.Quaternion());

  const deskTexture = useTexture('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/hardwood2_diffuse.jpg');
  deskTexture.wrapS = deskTexture.wrapT = THREE.RepeatWrapping;
  deskTexture.repeat.set(2, 2);

  useEffect(() => {
    document.body.style.cursor = isDragging ? 'grabbing' : 'auto';
  }, [isDragging]);

  const handlePointerDown = (e: any) => {
    e.stopPropagation();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setIsDragging(true);
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: any) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;

    euler.current.y -= deltaX * 0.01; // Rotate around Y-axis
    euler.current.x -= deltaY * 0.01; // Rotate around X-axis
    
    euler.current.x = Math.max(-Math.PI / 1.5, Math.min(Math.PI / 1.5, euler.current.x));

    quaternion.current.setFromEuler(euler.current);

    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: any) => {
    e.stopPropagation();
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    setIsDragging(false);
  };

  useFrame(() => {
    if (bodyRef.current) {
      bodyRef.current.setNextKinematicRotation(quaternion.current);
    }
  });

  return (
    <RigidBody
      ref={bodyRef}
      type="kinematicPosition"
      colliders="cuboid"
    >
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.5, 0]}
        receiveShadow
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerOut={handlePointerUp}
      >
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial map={deskTexture} color="#856a54" />
      </mesh>
    </RigidBody>
  );
}