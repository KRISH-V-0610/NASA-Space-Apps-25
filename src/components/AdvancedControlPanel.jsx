// components/AdvancedControlPanel.jsx
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useSoundEffect } from "../hooks/useSoundEffect";

export default function AdvancedControlPanel({
  orbitTilt,
  setOrbitTilt,
  autoRotate,
  setAutoRotate,
  earthRotation,
  setEarthRotation,
  orbitSpeed,
  setOrbitSpeed,
  showOrbitPath,
  setShowOrbitPath,
  className = ""
}) {
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

  const handleToggle = (setter, value) => {
    clickSound.play();
    setter(!value);
  };

  return (
    <div
      ref={panelRef}
      className={`cursor-target absolute top-6 right-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl transition-all duration-300 ${
        isExpanded ? "hover:border-cyan-400/30" : "hover:border-white/20"
      } ${className}`}
    >
      {/* Header Button */}
      <button
        onClick={togglePanel}
        className="w-full px-6 py-4 flex items-center justify-between cursor-pointer group"
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-white/90 text-sm  tracking-widest font-medium">
            Scene Controls
          </span>
        </div>
        
        <svg
          className={`w-5 h-5 text-white/60 transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expandable Content */}
      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="px-6 pb-6 space-y-5 border-t border-white/5 pt-5">
          
          {/* Orbit Tilt Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-white/70 text-xs  tracking-wider font-medium">
                Orbit Tilt
              </label>
              <span className="text-cyan-400 text-sm font-bold">{orbitTilt}°</span>
            </div>
            <input
              type="range"
              min="0"
              max="90"
              value={orbitTilt}
              onChange={(e) => setOrbitTilt(Number(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer slider-cyan"
            />
          </div>

          {/* Camera Auto Rotate Toggle */}
          <div className="flex items-center justify-between py-2">
            <label className="text-white/70 text-xs  tracking-wider font-medium">
              Auto Rotate Camera
            </label>
            <button
              onClick={() => handleToggle(setAutoRotate, autoRotate)}
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

          {/* Earth Rotation Toggle */}
          <div className="flex items-center justify-between py-2">
            <label className="text-white/70 text-xs  tracking-wider font-medium">
              Earth Rotation
            </label>
            <button
              onClick={() => handleToggle(setEarthRotation, earthRotation)}
              className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                earthRotation ? "bg-emerald-500/80" : "bg-white/10"
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                  earthRotation ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Orbit Speed Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-white/70 text-xs  tracking-wider font-medium">
                Satellite Speed
              </label>
              <span className="text-emerald-400 text-sm font-bold">{orbitSpeed.toFixed(3)}x</span>
            </div>
            <input
              type="range"
              min="0.001"
              max="0.01"
              step="0.001"
              value={orbitSpeed}
              onChange={(e) => setOrbitSpeed(Number(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer slider-emerald"
            />
          </div>

          {/* Show Orbit Path Toggle */}
          <div className="flex items-center justify-between py-2">
            <label className="text-white/70 text-xs  tracking-wider font-medium">
              Show Orbit Path
            </label>
            <button
              onClick={() => handleToggle(setShowOrbitPath, showOrbitPath)}
              className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                showOrbitPath ? "bg-purple-500/80" : "bg-white/10"
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                  showOrbitPath ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Reset Button */}
          <button
            onClick={() => {
              clickSound.play();
              setOrbitTilt(90);
              setAutoRotate(true);
              setEarthRotation(true);
              setOrbitSpeed(0.002);
              setShowOrbitPath(true);
            }}
            className="w-full mt-3 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 rounded-lg text-white/70 hover:text-cyan-400 text-xs  tracking-wider font-medium transition-all duration-300"
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