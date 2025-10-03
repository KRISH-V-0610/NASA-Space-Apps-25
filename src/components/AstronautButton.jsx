// components/AstronautButton.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import AstronautModel from "./3DModels/AstronautModel";
// import { useSoundEffect } from "../hooks/useSoundEffect";


export default function AstronautButton({ 
  currentAnimation, 
  setCurrentAnimation, 
  onClick 
}) {
    // const clickSound = useSoundEffect("/sounds/mouse-click.mp3", { volume: 0.5 });
  

  return (
    <button
      onMouseEnter={() => setCurrentAnimation(2)}
      onMouseLeave={() => {
        if (currentAnimation === 2) setCurrentAnimation(3);
      }
      }
      onClick={onClick}
      className="cursor-target absolute bottom-4 right-2 size-48 overflow-hidden shadow-2xl hover:border-cyan-400/50 transition-all duration-300 group"
    >
      <Canvas camera={{ position: [0, 0.5, 3], fov: 50 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Suspense fallback={null}>
          <AstronautModel currentAnimation={currentAnimation} />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-black/90 backdrop-blur-md px-4 py-2 rounded-lg border border-cyan-400/50 whitespace-nowrap">
          <p className="text-cyan-400 text-sm font-medium">Ask Terra Assistant</p>
        </div>
      </div>
    </button>
  );
}