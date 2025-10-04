// pages/Terra25LandingPage.jsx
import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useNavigate, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import EarthModel from "../components/3DModels/EarthModel";
import TerraSatellite from "../components/3DModels/TerraSatellite";
import OrbitPath from "../components/3DModels/OrbitPath";
import AstronautButton from "../components/AstronautButton";
import ChatbotInterface from "../components/ChatbotInterface";
import AdvancedControlPanel from "../components/AdvancedControlPanel";
import VideoLoadingScreen from "../components/VideoLoadingScreen";
import NavigationHeader from "../components/NavigationHeader";
// import SatelliteHintTooltip from "../components/SatelliteHintTooltip";
import { useSoundEffect } from "../hooks/useSoundEffect";

// Camera controller to zoom to satellite position
function CameraZoomController({ satellitePosition, shouldZoom, onZoomComplete }) {
  const { camera } = useThree();
  
  useEffect(() => {
    if (shouldZoom && satellitePosition) {
      // Calculate direction from satellite to camera
      const direction = camera.position.clone().sub(satellitePosition).normalize();
      
      // Target position: close to satellite but maintain viewing angle
      const targetPosition = satellitePosition.clone().add(direction.multiplyScalar(2));
      
      gsap.to(camera.position, {
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
        duration: 1.5,
        ease: "power2.inOut",
        onComplete: onZoomComplete
      });
    }
  }, [shouldZoom, satellitePosition, camera, onZoomComplete]);
  
  return null;
}

export default function Terra25Page() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentAnimation, setCurrentAnimation] = useState(3);
  const prevAnimationRef = useRef(currentAnimation);
  
  // Control panel states
  const [orbitTilt, setOrbitTilt] = useState(30);
  const [autoRotate, setAutoRotate] = useState(true);
  const [earthRotation, setEarthRotation] = useState(true);
  const [orbitSpeed, setOrbitSpeed] = useState(0.002);
  const [showOrbitPath, setShowOrbitPath] = useState(true);
  
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const canvasContainerRef = useRef(null);
  const loadingStartTimeRef = useRef(null);
  const minLoadingDurationRef = useRef(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  // Satellite zoom state
  const [satellitePosition, setSatellitePosition] = useState(null);
  const [shouldZoomToSatellite, setShouldZoomToSatellite] = useState(false);

  const clickSound = useSoundEffect("/sounds/mouse-click.mp3", { volume: 0.5 });

  // Handle loading overlay from intro page
  useEffect(() => {
    if (location.state?.showLoadingOverlay) {
      setShowLoading(true);
      // Generate random delay 3-5 seconds
      const minDelay = 3000 + Math.random() * 2000;
      minLoadingDurationRef.current = minDelay;
      loadingStartTimeRef.current = Date.now();
      
      console.log(`Loading overlay will display for ${(minDelay / 1000).toFixed(1)} seconds`);
      
      // Simulate progress over the delay period
      const interval = setInterval(() => {
        const elapsed = Date.now() - loadingStartTimeRef.current;
        const progress = Math.min((elapsed / minDelay) * 100, 100);
        setLoadingProgress(progress);
        
        if (progress >= 100) {
          clearInterval(interval);
          // Wait a bit at 100% then hide
          setTimeout(() => {
            setShowLoading(false);
          }, 500);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [location]);

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

  const handleSatelliteClick = async (position) => {
    await clickSound.play();
    
    // Store satellite position and trigger zoom
    setSatellitePosition(position);
    setShouldZoomToSatellite(true);
  };

  const handleZoomComplete = () => {
    // Fade out canvas after zoom completes
    if (canvasContainerRef.current) {
      gsap.to(canvasContainerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.in",
        onComplete: () => {
          navigate('/terra-details');
        }
      });
    }
  };

  return (
    <div className="font-custom3 w-screen h-screen bg-black relative overflow-hidden">
      {/* Navigation Header */}
      {!showLoading && <NavigationHeader teamName="DOMinators" />}

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
            
            {/* Camera zoom controller */}
            <CameraZoomController 
              satellitePosition={satellitePosition}
              shouldZoom={shouldZoomToSatellite}
              onZoomComplete={handleZoomComplete}
            />
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

      {/* Loading Overlay */}
      {showLoading && (
        <VideoLoadingScreen 
          progress={loadingProgress}
          isReady={loadingProgress >= 100}
          minDuration={minLoadingDurationRef.current}
          startTime={loadingStartTimeRef.current}
          onLoadComplete={() => setShowLoading(false)}
        />
      )}

      {/* Satellite Hint Tooltip - shows only once for first-time users */}
      {/* {!showLoading && <SatelliteHintTooltip />} */}

      {/* UI Elements - hide during loading */}
      {!showLoading && (
        <>
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
        </>
      )}
    </div>
  );
}