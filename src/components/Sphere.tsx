import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Sphere() {
  const points = useRef<THREE.Points>(null);
  const particlesCount = 12000; // Increased particles

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    const radius = 4; // Increased radius

    for (let i = 0; i < particlesCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.x = state.clock.getElapsedTime() * 0.1;
    points.current.rotation.y = state.clock.getElapsedTime() * 0.15;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025} // Slightly larger points
        color="#ffffff"
        transparent
        opacity={0.9} // Increased opacity
        sizeAttenuation
      />
    </points>
  );
}
