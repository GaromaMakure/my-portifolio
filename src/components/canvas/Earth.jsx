import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Preload } from "@react-three/drei";

import CanvasLoader from "../Loader";

const EarthModel = () => (
  <Float speed={1.2} rotationIntensity={0.3} floatIntensity={1}>
    <mesh scale={2.2}>
      <sphereGeometry args={[1, 48, 48]} />
      <meshStandardMaterial
        color="#2563eb"
        emissive="#1d4ed8"
        emissiveIntensity={0.2}
        roughness={0.6}
        metalness={0.3}
      />
    </mesh>
  </Float>
);

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.5]}
      gl={{ preserveDrawingBuffer: true, powerPreference: "high-performance" }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 3, 5]} intensity={1} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <EarthModel />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
