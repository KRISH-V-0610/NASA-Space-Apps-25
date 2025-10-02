/* eslint-disable no-unused-vars */
import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  useAnimations,
  Html,
  Line,
} from "@react-three/drei";
import * as THREE from "three";
import TargetCursor from "../components/ui/TargetCursor";
import { gsap } from "gsap";

// Earth Model (rotates automatically)
function EarthModel() {
  const { scene } = useGLTF("/3Dmodels/earth8k.glb");
  const earthRef = useRef();

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
  });

  return <primitive ref={earthRef} object={scene} scale={2.5} />;
}

// Orbital Path Visualization (tilted)
function OrbitPath({ tiltAngle }) {
  const points = [];
  const radius = 4;
  const inclination = 0.5;
  const tilt = (tiltAngle * Math.PI) / 180;

  for (let i = 0; i <= 128; i++) {
    const angle = (i / 128) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * inclination;
    const z = Math.sin(angle) * radius;

    const rotatedY = y * Math.cos(tilt) - z * Math.sin(tilt);
    const rotatedZ = y * Math.sin(tilt) + z * Math.cos(tilt);

    points.push(new THREE.Vector3(x, rotatedY, rotatedZ));
  }

  return (
    <Line
      points={points}
      color="#ffffff"
      lineWidth={1.5}
      opacity={0.25}
      transparent
    />
  );
}

// Terra Satellite Model (faster orbit)
function TerraSatellite({ tiltAngle }) {
  const { scene } = useGLTF("/3Dmodels/terra2.glb");
  const terraRef = useRef();
  const angleRef = useRef(0);

  useFrame(() => {
    angleRef.current += 0.012;

    const radius = 4;
    const inclination = 0.5;
    const tilt = (tiltAngle * Math.PI) / 180;

    const x = Math.cos(angleRef.current) * radius;
    const y = Math.sin(angleRef.current) * inclination;
    const z = Math.sin(angleRef.current) * radius;

    const rotatedY = y * Math.cos(tilt) - z * Math.sin(tilt);
    const rotatedZ = y * Math.sin(tilt) + z * Math.cos(tilt);

    terraRef.current.position.set(x, rotatedY, rotatedZ);
    terraRef.current.lookAt(0, 0, 0);
    terraRef.current.rotation.z += 0.01;
    terraRef.current.rotation.x = Math.PI / 8;
  });

  // Try these scale values one at a time to find the right size:
  // Start with 0.001, if still too big try 0.0005, 0.0001, etc.
  return <primitive ref={terraRef} object={scene} scale={0.00003} />;
}

// Simple Loading Component
function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-transparent border-t-cyan-400 rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"
            style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}>
          </div>
        </div>

        <p className="text-white text-lg font-light tracking-wider">
          Loading your experience
        </p>
      </div>
    </Html>
  );
}

// Fixed Astronaut Component - NO auto-rotation
function AstronautModel({ currentAnimation }) {
  const group = useRef();
  const { scene, animations } = useGLTF("/3Dmodels/astronaut.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && animations.length > 0 && animations[currentAnimation]) {
      Object.values(actions).forEach((a) => a.stop());
      const animationToPlay = animations[currentAnimation];
      if (animationToPlay && actions[animationToPlay.name]) {
        actions[animationToPlay.name].play();
      }
    }
  }, [currentAnimation, actions, animations]);

  // NO useFrame - removed auto-rotation


  return (
    <group ref={group} scale={0.7} position={[0, -1, 0.3]}>
      <primitive object={scene} />
    </group>
  );
}

// Chatbot Interface Component - slides from bottom center
function ChatbotInterface({ isOpen, onClose }) {
  const chatRef = useRef(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello! I'm your Terra assistant. How can I help you today?" }
  ]);

  useEffect(() => {
    if (chatRef.current) {
      if (isOpen) {
        gsap.to(chatRef.current, {
          bottom: "0%",
          opacity: 1,
          duration: 0.6,
          ease: "power3.out"
        });
      } else {
        gsap.to(chatRef.current, {
          bottom: "-100%",
          opacity: 0,
          duration: 0.4,
          ease: "power2.in"
        });
      }
    }
  }, [isOpen]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { type: "user", text: message }]);
      setMessage("");

      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: "bot",
          text: "I'm processing your request about Terra satellite data..."
        }]);
      }, 1000);
    }
  };

  return (
    <div
      ref={chatRef}
      className="fixed left-1/2 transform -translate-x-1/2 w-[600px] h-[500px] bg-black/90 backdrop-blur-xl border-t-2 border-l-2 border-r-2 border-white/20 rounded-t-3xl shadow-2xl z-50"
      style={{ bottom: '-100%', opacity: 0 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <h3 className="text-white font-medium text-lg">Terra Assistant</h3>
        </div>
        <button
          onClick={onClose}
          className="cursor-target text-white/60 hover:text-white transition-colors p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="h-[300px] overflow-y-auto p-6 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] px-5 py-3 rounded-2xl ${msg.type === 'user'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30'
                : 'bg-white/5 text-white/90 border border-white/10'
                }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-black/50">
        <div className="flex gap-3">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about Terra satellite..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
          />
          <button
            onClick={handleSend}
            className="cursor-target bg-cyan-500/20 border border-cyan-400/30 rounded-xl px-6 py-3 text-cyan-400 hover:bg-cyan-500/30 hover:border-cyan-400/50 transition-all font-medium"
          >
            Send
          </button>
        </div>
      </div>

      {/* Corner accents */}
      <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/50"></span>
      <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50"></span>
    </div>
  );
}

export default function Terra25Page() {
  const [currentAnimation, setCurrentAnimation] = useState(3);
  const prevAnimationRef = useRef(currentAnimation);
  const [orbitTilt, setOrbitTilt] = useState(30);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const changeAnimationOnClose = ()=>{
    {
        if (!isChatOpen) {
          // Chat is currently closed → open it
          prevAnimationRef.current = currentAnimation; // save current animation
          setCurrentAnimation(2); // play animation 2
        } else {
          // Chat is currently open → close it
          setCurrentAnimation(prevAnimationRef.current); // revert to previous animation
        }

        setIsChatOpen(!isChatOpen); // toggle chat
      }
  }

  return (
    <div className="w-screen h-screen bg-black relative overflow-hidden">
      {/* Target Cursor */}
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />

      <Canvas camera={{ position: [0, 3, 12], fov: 50 }} shadows>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
        <pointLight position={[-10, -10, -5]} intensity={0.3} />

        <Suspense fallback={<Loader />}>
          <EarthModel />
          <OrbitPath tiltAngle={orbitTilt} />
          <TerraSatellite tiltAngle={orbitTilt} />
          <Environment files="/Backgrounds/space2.exr" background />
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

      {/* Orbit Tilt Control */}
      <div className="cursor-target absolute top-6 right-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-6 py-4 shadow-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20">
        <label className="text-white/80 text-xs uppercase tracking-widest font-medium mb-3 block">
          Orbit Tilt: {orbitTilt}°
        </label>
        <input
          type="range"
          min="0"
          max="90"
          value={orbitTilt}
          onChange={(e) => setOrbitTilt(Number(e.target.value))}
          className="w-48 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
          style={{ accentColor: '#06b6d4' }}
        />
        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20"></span>
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20"></span>
      </div>

      {/* Astronaut Button - Fixed positioning */}
      <button
        onClick={changeAnimationOnClose}
        className="cursor-target absolute bottom-4 right-2 size-48 p-[-20px] overflow-hidden shadow-2xl hover:border-cyan-400/50 transition-all duration-300 group"
      >
        <Canvas camera={{ position: [0, 0.5, 3], fov: 50 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <Suspense fallback={null}>
            <AstronautModel currentAnimation={currentAnimation} />
          </Suspense>
        </Canvas>

        {/* Hover tooltip */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg border border-cyan-400/50 whitespace-nowrap">
            <p className="text-cyan-400 text-sm font-medium">Ask Terra Assistant</p>
          </div>
        </div>
      </button>

      {/* Animation control buttons */}
      {/* <div className="absolute bottom-6 right-6 flex gap-3">
        {[0, 1, 2, 3].map((i) => (
          <button
            key={i}
            onClick={() => setCurrentAnimation(i)}
            className={`
              cursor-target relative px-6 py-4 rounded-lg
              transition-all duration-300 border flex items-center gap-3 overflow-hidden
              ${currentAnimation === i
                ? "bg-cyan-500/10 backdrop-blur-md border-cyan-400/30 hover:border-cyan-400/60 text-cyan-400"
                : "bg-white/5 backdrop-blur-md border-white/10 hover:border-white/20 text-white/60 hover:text-white/80"
              }
            `}
          >
            <span className={`absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 ${currentAnimation === i ? 'bg-gradient-to-r from-cyan-500/20 to-cyan-400/10' : ''
              }`}></span>
            <span className="relative z-10 text-xs uppercase tracking-widest font-medium">{i + 1}</span>
            <span className={`absolute top-0 left-0 w-2 h-2 border-t border-l transition-all duration-300 ${currentAnimation === i ? 'border-cyan-400/50' : 'border-white/20'
              }`}></span>
            <span className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r transition-all duration-300 ${currentAnimation === i ? 'border-cyan-400/50' : 'border-white/20'
              }`}></span>
          </button>
        ))}
      </div> */}

      {/* Chatbot Interface - slides from bottom center */}
      <ChatbotInterface isOpen={isChatOpen} onClose={changeAnimationOnClose} />
    </div>
  );
}