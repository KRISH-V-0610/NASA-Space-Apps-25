// components/OrbitTiltControl.jsx
import React from "react";

export default function OrbitTiltControl({ orbitTilt, setOrbitTilt }) {
  return (
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
  );
}