// pages/TerraDetailsPage.jsx
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF, Html } from "@react-three/drei";

function DetailedTerraSatellite() {
  const { scene } = useGLTF("/3Dmodels/terra2.glb");
  const terraRef = useRef();

  useFrame(() => {
    if (terraRef.current) {
      terraRef.current.rotation.y += 0.003; // Slow rotation
    }
  });

  return <primitive ref={terraRef} object={scene} scale={0.0006} />;
}

function InstrumentLabel({ position, name, color, lineStart, lineEnd }) {
  return (
    <group>
      {/* Label Box */}
      <Html position={position} center distanceFactor={10}>
        <div
          className="pointer-events-none select-none"
          style={{
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
            border: `2px solid ${color}`,
            borderRadius: '8px',
            padding: '8px 16px',
            whiteSpace: 'nowrap',
            boxShadow: `0 0 20px ${color}40`,
          }}
        >
          <p
            className="font-bold text-sm tracking-wider"
            style={{ color: color }}
          >
            {name}
          </p>
        </div>
      </Html>
    </group>
  );
}

function InstrumentArrows() {
  // Positions are approximate - adjust based on your Terra model's actual geometry
  const instruments = [
    {
      name: "MODIS",
      position: [1.5, 1.2, 0],
      color: "#00d9ff",
    },
    {
      name: "ASTER",
      position: [0, -1.5, 0.5],
      color: "#ff6b35",
    },
    {
      name: "MISR",
      position: [-1, -0.8, 0.8],
      color: "#ffd700",
    },
    {
      name: "CERES",
      position: [-1.8, -1, -0.5],
      color: "#ff1493",
    },
    {
      name: "MOPITT",
      position: [0.5, -1.8, -0.3],
      color: "#7fff00",
    },
  ];

  return (
    <>
      {instruments.map((instrument, index) => (
        <InstrumentLabel
          key={index}
          position={instrument.position}
          name={instrument.name}
          color={instrument.color}
        />
      ))}
    </>
  );
}

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-transparent border-t-cyan-400 rounded-full animate-spin"></div>
        </div>
        <p className="text-white text-lg font-light tracking-wider">Loading Terra Satellite</p>
      </div>
    </Html>
  );
}

export default function TerraDetailsPage() {
  return (
    <div className="w-screen h-screen relative">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <OrbitControls 
          enableZoom={true} 
          enablePan={false}
          minDistance={5}
          maxDistance={15}
          autoRotate={false}
          rotateSpeed={0.5}
        />

        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[-5, -5, -5]} intensity={1} />

        <Suspense fallback={<Loader />}>
          {/* HDR Background */}
          <Environment files="/Backgrounds/space2.exr" background />
          
          {/* Terra Satellite Model */}
          <DetailedTerraSatellite />
          
          {/* Instrument Labels with Arrows */}
          <InstrumentArrows />
        </Suspense>
      </Canvas>
    </div>
  );
}