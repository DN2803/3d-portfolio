import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

const ThreeCanvas = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        {/* Your 3D models and elements go here */}
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeCanvas;