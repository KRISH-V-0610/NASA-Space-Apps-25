import React, { useEffect, useRef } from "react";
import "@google/model-viewer";

export default function App() {
  const modelViewerRef = useRef(null);

  useEffect(() => {
    // Create starry background
    const createStars = () => {
      const container = document.querySelector(".stars-container");
      if (!container) return;

      container.innerHTML = ""; // clear previous stars

      const starLayers = [
        { count: 100, size: 1, opacity: 1, animationDuration: "100s" },
        { count: 200, size: 0.7, opacity: 0.8, animationDuration: "150s" },
        { count: 300, size: 0.4, opacity: 0.6, animationDuration: "200s" },
      ];

      starLayers.forEach((layer, layerIndex) => {
        for (let i = 0; i < layer.count; i++) {
          const star = document.createElement("div");
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const twinkleDelay = Math.random() * 5;

          star.style.cssText = `
            position: absolute;
            left: ${left}%;
            top: ${top}%;
            width: ${layer.size}px;
            height: ${layer.size}px;
            background: white;
            border-radius: 50%;
            opacity: ${layer.opacity};
            animation: float${layerIndex} ${layer.animationDuration} linear infinite, 
                       twinkle 3s ease-in-out ${twinkleDelay}s infinite alternate;
            box-shadow: 0 0 ${layer.size * 2}px ${layer.size}px rgba(255,255,255,0.3);
          `;
          container.appendChild(star);
        }
      });

      const colorfulStars = [
        { color: "#B3E5FC", count: 20 },
        { color: "#C8E6C9", count: 15 },
        { color: "#FFECB3", count: 10 },
      ];

      colorfulStars.forEach((starType, typeIndex) => {
        for (let i = 0; i < starType.count; i++) {
          const star = document.createElement("div");
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const size = 0.8 + Math.random() * 0.8;

          star.style.cssText = `
            position: absolute;
            left: ${left}%;
            top: ${top}%;
            width: ${size}px;
            height: ${size}px;
            background: ${starType.color};
            border-radius: 50%;
            opacity: 0.7;
            animation: float${typeIndex % 3} ${150 + typeIndex * 20}s linear infinite, 
                       colorPulse 4s ease-in-out ${Math.random() * 3}s infinite alternate;
            box-shadow: 0 0 ${size * 3}px ${size}px ${starType.color}40;
          `;
          container.appendChild(star);
        }
      });
    };

    createStars();

    // Rotate Earth on Z-axis
    const rotateEarth = () => {
      const modelViewer = modelViewerRef.current;
      if (!modelViewer) return;

      let zRot = 0;

      const animate = () => {
        zRot += 0.2; // rotation speed
        if (zRot >= 360) zRot = 0;

        modelViewer.orientation = `0deg 0deg ${zRot}deg`;
        requestAnimationFrame(animate);
      };

      animate();
    };

    rotateEarth();

    // Add CSS keyframes
    const style = document.createElement("style");
    style.textContent = `
      @keyframes float0 {0% {transform: translate(0,0) rotate(0deg);} 100% {transform: translate(-100px,50px) rotate(360deg);}}
      @keyframes float1 {0% {transform: translate(0,0) rotate(0deg);} 100% {transform: translate(80px,-30px) rotate(-360deg);}}
      @keyframes float2 {0% {transform: translate(0,0) rotate(0deg);} 100% {transform: translate(-60px,-20px) rotate(180deg);}}
      @keyframes twinkle {0%,100% {opacity:0.3; transform:scale(0.8);} 50% {opacity:1; transform:scale(1.2);}}
      @keyframes colorPulse {0%,100% {opacity:0.4; transform:scale(0.9);} 50% {opacity:0.9; transform:scale(1.3);}}

      .stars-container {
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        pointer-events:none;
        z-index:1;
      }
      .earth-container {
        position: relative;
        z-index:2;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-black overflow-hidden relative">
      {/* Starry background */}
      <div className="stars-container"></div>

      {/* Earth semicircle at bottom-center */}
      <div
        className="earth-container absolute bottom-0 left-1/2"
        style={{
          width: "800px",
          height: "800px",
          transform: "translateX(-50%) translateY(50%)",
        }}
      >
        <model-viewer
          ref={modelViewerRef}
          src="/models/earth.glb"
          alt="Earth 3D Model"
          auto-rotate={false}
          disable-zoom
          camera-controls={false}
          exposure="1.2"
          shadow-intensity="1"
          environment-image="neutral"
          style={{
            width: "100%",
            height: "100%",
            filter: "drop-shadow(0 0 20px rgba(100, 150, 255, 0.5))",
          }}
          camera-orbit="0deg 75deg 105deg"
          field-of-view="30deg"
        ></model-viewer>
      </div>

      {/* Atmospheric glow below Earth */}
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 pointer-events-none"
        style={{
          width: "850px",
          height: "850px",
          background: "radial-gradient(circle, rgba(100,150,255,0.1) 0%, transparent 70%)",
          zIndex: 1,
        }}
      ></div>
    </div>
  );
}
