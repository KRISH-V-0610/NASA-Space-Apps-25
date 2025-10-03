// pages/Terra25LandingPage.jsx
import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import VideoLoadingScreen from "../components/VideoLoadingScreen";
import EarthModel from "../components/3DModels/EarthModel";
import TerraSatellite from "../components/3DModels/TerraSatellite";
import OrbitPath from "../components/3DModels/OrbitPath";
import AstronautButton from "../components/AstronautButton";
import ChatbotInterface from "../components/ChatbotInterface";
import AdvancedControlPanel from "../components/AdvancedControlPanel";
import { useSoundEffect } from "../hooks/useSoundEffect";

export default function Terra25Page() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [currentAnimation, setCurrentAnimation] = useState(3);
  const prevAnimationRef = useRef(currentAnimation);
  
  // Control panel states
  const [orbitTilt, setOrbitTilt] = useState(30);
  const [autoRotate, setAutoRotate] = useState(true);
  const [earthRotation, setEarthRotation] = useState(true);
  const [orbitSpeed, setOrbitSpeed] = useState(0.002);
  const [showOrbitPath, setShowOrbitPath] = useState(true);
  
  const [isChatOpen, setIsChatOpen] = useState(false);
  const canvasContainerRef = useRef(null);

  const clickSound = useSoundEffect("/sounds/mouse-click.mp3", { volume: 0.5 });

  const handleChatToggle = async () => {
    await clickSound.play();
    if (!isChatOpen) {
      prevAnimationRef.current = currentAnimation;
      setCurrentAnimation(1);
    } else {
      setCurrentAnimation(prevAnimationRef.current);
    }
    setIsChatOpen(!isChatOpen);
  };

  const handleSatelliteClick = async () => {
    await clickSound.play();
    
    if (canvasContainerRef.current) {
      gsap.to(canvasContainerRef.current, {
        scale: 5,
        duration: 1.5,
        ease: "power2.inOut"
      });

      gsap.to(canvasContainerRef.current, {
        opacity: 0,
        duration: 0.8,
        delay: 0.7,
        ease: "power2.in",
        onComplete: () => {
          navigate('/terra-details');
        }
      });
    }
  };

  return (
    <div className="font-custom3 w-screen h-screen bg-black relative overflow-hidden">
      {/* 3D Scene */}
      <div ref={canvasContainerRef} className="w-full h-full" style={{ transformOrigin: 'center center' }}>
        <Canvas camera={{ position: [0, 3, 12], fov: 50 }} shadows>
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1.5}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -5]} intensity={0.3} />

          <Suspense fallback={null}>
            <EarthModel rotationEnabled={earthRotation} />
            {showOrbitPath && <OrbitPath tiltAngle={orbitTilt} />}
            <TerraSatellite 
              tiltAngle={orbitTilt}
              onClick={handleSatelliteClick}
              orbitSpeed={orbitSpeed}
            />
            <Environment files="/Backgrounds/space2.exr" background resolution={512} />
          </Suspense>

          <OrbitControls
            enableZoom={true}
            minDistance={6}
            maxDistance={25}
            enablePan={false}
            zoomSpeed={0.5}
            autoRotate={autoRotate}
          />
        </Canvas>
      </div>

      {/* Overlay Loading Screen */}
      {isLoading && <VideoLoadingScreen onLoadComplete={() => setIsLoading(false)} />}

      <AdvancedControlPanel
        orbitTilt={orbitTilt}
        setOrbitTilt={setOrbitTilt}
        autoRotate={autoRotate}
        setAutoRotate={setAutoRotate}
        earthRotation={earthRotation}
        setEarthRotation={setEarthRotation}
        orbitSpeed={orbitSpeed}
        setOrbitSpeed={setOrbitSpeed}
        showOrbitPath={showOrbitPath}
        setShowOrbitPath={setShowOrbitPath}
      />
      
      <AstronautButton
        currentAnimation={currentAnimation}
        setCurrentAnimation={setCurrentAnimation}
        onClick={handleChatToggle}
      />

      <ChatbotInterface 
        isOpen={isChatOpen} 
        onClose={async () => {
          await clickSound.play();
          setIsChatOpen(false);
          setCurrentAnimation(3);
        }} 
      />
    </div>
  );
}