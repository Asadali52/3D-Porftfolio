'use client';

import React, { useEffect, useState } from 'react';
import { Float, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const TechIcons = ({ model }) => {
  const [modelUrl, setModelUrl] = useState(null);

  useEffect(() => {
    setModelUrl(`${window.location.origin}${model.modelPath}`);
  }, [model.modelPath]);

  if (!modelUrl) {
    return <div>Loading...</div>;
  }

  const scene = useGLTF(modelUrl);

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <OrbitControls enableZoom={false} />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};

export default TechIcons;