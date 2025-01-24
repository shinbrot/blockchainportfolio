import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Sphere from './components/Sphere';
import Snow from './components/Snow';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <Sphere />
            <Snow />
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.3}
            />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-16">
        <div className="w-full backdrop-blur-sm bg-black/20">
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;