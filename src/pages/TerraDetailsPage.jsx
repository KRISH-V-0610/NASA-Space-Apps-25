/* eslint-disable no-unused-vars */
import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF, Html, Line } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { useSoundEffect } from "../hooks/useSoundEffect";
import * as THREE from "three";


function DetailedTerraSatellite({ rotationSpeed, terraRef }) {
  const { scene } = useGLTF("/3Dmodels/terra2.glb");

  useFrame(() => {
    if (terraRef.current) {
      terraRef.current.rotation.y += rotationSpeed;
    }
  });

  return <primitive ref={terraRef} object={scene} scale={0.0004} />;
}

function InstrumentLabel({ name, color, delay, anchorPosition, parentRef, onNavigate }) {

  const navigate = useNavigate();  
  const labelRef = useRef();
  const lineRef = useRef();
  const groupRef = useRef();
  const [opacity, setOpacity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (labelRef.current) {
      gsap.from(labelRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: delay,
        ease: "back.out(1.7)"
      });
    }
  }, [delay]);

  useFrame(({ camera }) => {
    if (groupRef.current && parentRef?.current) {
      const worldPos = new THREE.Vector3();
      groupRef.current.getWorldPosition(worldPos);
      
      const satellitePos = new THREE.Vector3();
      parentRef.current.getWorldPosition(satellitePos);
      
      const toInstrument = worldPos.clone().sub(satellitePos).normalize();
      const toCamera = camera.position.clone().sub(satellitePos).normalize();
      const dotProduct = toInstrument.dot(toCamera);
      
      // Less aggressive fading - min opacity 0.35 instead of 0.1
      const newOpacity = THREE.MathUtils.clamp(
        THREE.MathUtils.mapLinear(dotProduct, -0.3, 0.4, 0.35, 1),
        0.35,
        1
      );
      
      setOpacity(newOpacity);
    }
  });

  const labelOffset = [
    anchorPosition[0] * 8,
    anchorPosition[1] * 8,
    anchorPosition[2] * 8
  ];

  const handleClick = () => {
    const instrumentPath = name.toLowerCase();
    navigate(`/terra-details/${instrumentPath}`);
  };

  return (
    <group ref={groupRef} position={anchorPosition}>
      {/* Glowing dot at instrument location */}
      <mesh>
        <sphereGeometry args={[0.045, 20, 20]} />
        <meshBasicMaterial 
          color={color} 
          transparent 
          opacity={opacity}
        />
      </mesh>
      
      {/* Outer glow ring */}
      <mesh>
        <sphereGeometry args={[0.07, 20, 20]} />
        <meshBasicMaterial 
          color={color} 
          transparent 
          opacity={opacity * 0.25}
        />
      </mesh>

      {/* Curved line from instrument to label */}
      <Line
        points={[
          [0, 0, 0],
          [labelOffset[0] * 0.3, labelOffset[1] * 0.3, labelOffset[2] * 0.3],
          [labelOffset[0] * 0.6, labelOffset[1] * 0.6, labelOffset[2] * 0.6],
          labelOffset
        ]}
        color={color}
        lineWidth={2.5}
        transparent
        opacity={opacity * 0.75}
        dashed={false}
      />

      {/* Clickable Label Button */}
      <Html position={labelOffset} center distanceFactor={6}>
        <button
          ref={labelRef}
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="pointer-events-auto select-none cursor-pointer transition-all duration-300 group"
          style={{ 
            opacity: opacity,
            transform: isHovered ? 'scale(1.08)' : 'scale(1)'
          }}
        >
          <div
            className="relative px-6 py-3 transition-all duration-300"
            style={{
              background: isHovered 
                ? 'rgba(0, 0, 0, 0.95)' 
                : 'rgba(0, 0, 0, 0.88)',
              backdropFilter: 'blur(16px)',
              border: `2px solid ${color}`,
              borderRadius: '10px',
              boxShadow: isHovered
                ? `0 0 35px ${color}AA, inset 0 0 20px ${color}25`
                : `0 0 20px ${color}${Math.floor(opacity * 100).toString(16).padStart(2, '0')}`,
              minWidth: '120px',
              textAlign: 'center'
            }}
          >
            {/* Animated corner accents */}
            <span 
              className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 transition-all duration-300"
              style={{ 
                borderColor: color,
                opacity: isHovered ? 1 : 0.5
              }}
            />
            <span 
              className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 transition-all duration-300"
              style={{ 
                borderColor: color,
                opacity: isHovered ? 1 : 0.5
              }}
            />

            {/* Label Text */}
            <p
              className="font-custom3 font-bold text-xl tracking-widest transition-all duration-300"
              style={{ 
                color: color,
                textShadow: isHovered
                  ? `0 0 15px ${color}DD, 0 0 25px ${color}88`
                  : `0 0 10px ${color}${Math.floor(opacity * 80).toString(16).padStart(2, '0')}`
              }}
            >
              {name}
            </p>

            {/* Hover indicator arrow */}
            {isHovered && (
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16"
                  style={{ fill: color }}
                >
                  <path d="M6 3l5 5-5 5V3z" />
                </svg>
              </div>
            )}

            {/* Pulse effect on hover */}
            {isHovered && (
              <div 
                className="absolute inset-0 rounded-lg animate-ping"
                style={{
                  border: `1px solid ${color}`,
                  opacity: 0.3
                }}
              />
            )}
          </div>
        </button>
      </Html>
    </group>
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

function SatelliteControlPanel({ rotationSpeed, setRotationSpeed, autoRotate, setAutoRotate, lightIntensity, setLightIntensity }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const panelRef = useRef(null);
  const contentRef = useRef(null);
  const clickSound = useSoundEffect("/sounds/mouse-click.mp3", { volume: 0.3 });

  useEffect(() => {
    if (contentRef.current) {
      if (isExpanded) {
        gsap.to(contentRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out"
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in"
        });
      }
    }
  }, [isExpanded]);

  const togglePanel = () => {
    clickSound.play();
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      ref={panelRef}
      className="cursor-target absolute top-6 right-6 bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl transition-all duration-300 hover:border-cyan-400/30 z-50"
    >
      {/* Header */}
      <button onClick={togglePanel} className="w-full px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="font-custom3 text-white/90 text-sm uppercase tracking-widest font-medium">
            Satellite Controls
          </span>
        </div>
        <svg
          className={`w-5 h-5 text-white/60 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expandable Content */}
      <div ref={contentRef} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
        <div className="px-6 pb-6 space-y-5 border-t border-white/5 pt-5">
          
        

          {/* Auto Rotate Toggle */}
          <div className="flex items-center justify-between py-2">
            <label className="font-custom3 text-white/70 text-xs uppercase tracking-wider font-medium">
              Auto Rotate View
            </label>
            <button
              onClick={() => {
                clickSound.play();
                setAutoRotate(!autoRotate);
              }}
              className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                autoRotate ? "bg-cyan-500/80" : "bg-white/10"
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                  autoRotate ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Light Intensity */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-custom3 text-white/70 text-xs uppercase tracking-wider font-medium">
                Light Intensity
              </label>
              <span className="text-emerald-400 text-sm font-thin ">{lightIntensity.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="2.5"
              step="0.1"
              value={lightIntensity}
              onChange={(e) => setLightIntensity(Number(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer slider-emerald "
            />
          </div>

          {/* Reset Button */}
          <button
            onClick={() => {
              clickSound.play();
              setRotationSpeed(0);
              setAutoRotate(false);
              setLightIntensity(1.2);
            }}
            className="font-custom3 w-full mt-3 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 rounded-lg text-white/70 hover:text-cyan-400 text-xs uppercase tracking-wider font-medium transition-all duration-300"
          >
            Reset to Defaults
          </button>
        </div>
      </div>

      {/* Corner Accents */}
      <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-400/30" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-400/30" />
    </div>
  );
}

export default function TerraDetailsPage() {
  const [rotationSpeed, setRotationSpeed] = useState(0);
  const [autoRotate, setAutoRotate] = useState(false);
  const [lightIntensity, setLightIntensity] = useState(1.2);
  const terraRef = useRef();

  // All instruments use white color
  const whiteColor = "#ffffff";

  // Instrument positions based on actual Terra satellite anatomy
  // anchorPosition: where the instrument actually is on the satellite
  // position: where the label should be displayed (offset for readability)
  const instruments = [
    { 
      name: "MODIS", 
      anchorPosition: [-0.55, -0.15, -0.25],  // Top front
      position: [3, 1, 0], 
      color: whiteColor, 
      delay: 0.5 
    },
    { 
      name: "ASTER", 
      anchorPosition: [0.02, -0.35, -0.30],  // Front right side
      position: [3, -0.5, 0], 
      color: whiteColor, 
      delay: 0.7 
    },
    { 
      name: "MISR", 
      anchorPosition: [-0.15, -0.4, 0.01],  // Front left
      position: [-3, 0.5, 0], 
      color: whiteColor, 
      delay: 0.9 
    },
    { 
      name: "CERES", 
      anchorPosition: [0.4, -0.30, -0.15],  // Bottom left
      position: [-3, -1.5, 0], 
      color: whiteColor, 
      delay: 1.1 
    },
    { 
      name: "MOPITT", 
      anchorPosition: [0.25, -0.35, -0.30],  // Bottom right
      position: [3, -1.8, 0], 
      color: whiteColor, 
      delay: 1.3 
    },
  ];

  return (
    <div className="w-screen h-screen relative">
      {/* Title */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50">
        <h1 className="text-4xl font-custom3 text-white tracking-wider text-center drop-shadow-lg">
          TERRA SATELLITE
        </h1>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-3" />
      </div>

  

      {/* Control Panel */}
      <SatelliteControlPanel
        rotationSpeed={rotationSpeed}
        setRotationSpeed={setRotationSpeed}
        autoRotate={autoRotate}
        setAutoRotate={setAutoRotate}
        lightIntensity={lightIntensity}
        setLightIntensity={setLightIntensity}
      />

      <Canvas shadows camera={{ position: [-10, 0, 10], fov: 50 }}>
        <OrbitControls 
          enableZoom={true} 
          enablePan={false}
          minDistance={1}
          maxDistance={20}
          autoRotate={autoRotate}
          autoRotateSpeed={2}
          rotateSpeed={0.5}
        />

        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={lightIntensity}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.0001}
        />
        <pointLight position={[-5, 2, 5]} intensity={0.4} />
        <pointLight position={[2, -5, -2]} intensity={0.3} />

        <Suspense fallback={<Loader />}>
          <Environment files="/Backgrounds/space2.exr" background blur={0} />
          <DetailedTerraSatellite rotationSpeed={rotationSpeed} terraRef={terraRef} />
          
          {/* Instrument Labels */}
          {instruments.map((instrument, index) => (
            <InstrumentLabel
              key={index}
              anchorPosition={instrument.anchorPosition}
              name={instrument.name}
              color={instrument.color}
              delay={instrument.delay}
              parentRef={terraRef}
            />
          ))}
        </Suspense>
      </Canvas>
    </div>
  );
}