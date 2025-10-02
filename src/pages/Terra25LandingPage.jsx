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
import OrbitTiltControl from "../components/OrbitTiltControl";

export default function Terra25Page() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [currentAnimation, setCurrentAnimation] = useState(3);
  const prevAnimationRef = useRef(currentAnimation);
  const [orbitTilt, setOrbitTilt] = useState(30);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const canvasContainerRef = useRef(null);

  const handleChatToggle = () => {
    if (!isChatOpen) {
      prevAnimationRef.current = currentAnimation;
      setCurrentAnimation(1);
    } else {
      setCurrentAnimation(prevAnimationRef.current);
    }
    setIsChatOpen(!isChatOpen);
  };

  const handleSatelliteClick = () => {
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

  if (isLoading) {
    return <VideoLoadingScreen onLoadComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="font-custom3 w-screen h-screen bg-black relative overflow-hidden">
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
            <EarthModel />
            <OrbitPath tiltAngle={orbitTilt} />
            <TerraSatellite 
              tiltAngle={orbitTilt}
              onClick={handleSatelliteClick}
            />
            <Environment files="/Backgrounds/space2.exr" background resolution={512} />
          </Suspense>

          <OrbitControls
            enableZoom={true}
            minDistance={6}
            maxDistance={25}
            enablePan={false}
            zoomSpeed={0.5}
            autoRotate={false}
          />
        </Canvas>
      </div>

      <OrbitTiltControl orbitTilt={orbitTilt} setOrbitTilt={setOrbitTilt} />
      
      <AstronautButton
        currentAnimation={currentAnimation}
        setCurrentAnimation={setCurrentAnimation}
        onClick={handleChatToggle}
      />

      <ChatbotInterface 
        isOpen={isChatOpen} 
        onClose={() => {
          setIsChatOpen(false);
          setCurrentAnimation(3);
        }} 
      />
    </div>
  );
}