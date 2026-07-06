import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Preload } from "@react-three/drei";

import CanvasLoader from "../Loader";

const ComputerModel = ({ isMobile }) => (
  <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.5}>
    <group
      scale={isMobile ? 0.85 : 1}
      position={isMobile ? [0, -0.5, 0] : [0, -0.25, 0]}
    >
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[2.4, 1.5, 0.12]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.3, 0.07]}>
        <planeGeometry args={[2.1, 1.2]} />
        <meshStandardMaterial color="#915EFF" emissive="#915EFF" emissiveIntensity={0.15} />
      </mesh>
      <mesh position={[0, -0.65, 0]}>
        <boxGeometry args={[0.9, 0.08, 0.6]} />
        <meshStandardMaterial color="#2d2d44" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[0, -0.35, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.5, 16]} />
        <meshStandardMaterial color="#3d3d5c" metalness={0.7} roughness={0.3} />
      </mesh>
    </group>
  </Float>
);

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.5]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ComputerModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
