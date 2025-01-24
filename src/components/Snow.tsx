import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Snow() {
  const points = useRef<THREE.Points>(null);
  const particlesCount = 2000; // More particles

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;     // Wider spread
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // Wider spread
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20; // Wider spread
    }

    return positions;
  }, []);

  useFrame(() => {
    if (!points.current) return;
    
    const positions = points.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3 + 1] -= 0.03; // Faster falling speed
      
      if (positions[i * 3 + 1] < -10) {
        positions[i * 3 + 1] = 10;
      }
    }
    
    points.current.geometry.attributes.position.needsUpdate = true;
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
        size={0.02}
        color="#ffffff"
        transparent
        opacity={0.3} // Adjusted opacity
        sizeAttenuation
      />
    </points>
  );
}