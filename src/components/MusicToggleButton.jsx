import React, { useState, useEffect } from "react";

const MusicToggleButton = ({ 
  isMuted, 
  audioLoaded, 
  onToggle, 
  className = "" 
}) => {
  const bars = 5;
  
  const getRandomHeights = () => {
    return Array.from({ length: bars }, () => Math.random() * 0.8 + 0.2);
  };

  const [heights, setHeights] = useState(Array(bars).fill(0.1));
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (audioLoaded && !isMuted) {
      const waveformIntervalId = setInterval(() => {
        setHeights(getRandomHeights());
      }, 100);

      return () => {
        clearInterval(waveformIntervalId);
      };
    } else {
      setHeights(Array(bars).fill(0.1));
    }
  }, [audioLoaded, isMuted, bars]);

  const handleClick = () => {
    if (audioLoaded) {
      onToggle();
    }
  };

  // Loading state
  if (!audioLoaded) {
    return (
      <button
        disabled
        className={`
          cursor-target absolute bottom-6 left-6 px-8 py-5 
          transition-all z-20 border border-white/10 flex items-center gap-4 
          bg-black/40 backdrop-blur-md text-white/40 cursor-not-allowed
          ${className}
        `}
      >
        <div className="flex gap-1">
          <div className="w-1 h-6 bg-white/40 animate-pulse"></div>
          <div className="w-1 h-6 bg-white/40 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-1 h-6 bg-white/40 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-1 h-6 bg-white/40 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          <div className="w-1 h-6 bg-white/40 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
        <span className="text-xs uppercase tracking-widest font-medium">Loading</span>
        {/* Corner accents */}
        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20"></span>
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20"></span>
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        cursor-target absolute bottom-6 left-6 
        transition-all z-20 border flex items-center gap-4
        ${isHovered ? "px-10 py-6" : "px-8 py-5"}
        ${isMuted 
          ? "bg-black/40 backdrop-blur-md border-white/10 hover:border-emerald-400/60 text-white/60 hover:text-emerald-300" 
          : "bg-emerald-500/10 backdrop-blur-md border-emerald-400/30 hover:border-emerald-400/60 text-emerald-400 hover:text-emerald-300"
        }
        group overflow-hidden
        ${className}
      `}
      style={{
        transition: "all 0.3s ease"
      }}
    >
      {/* Background glow effect */}
      <span className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-emerald-500/20 to-emerald-400/10`}></span>

      {/* Waveform visualization */}
      <div className="flex h-6 items-center gap-1 relative z-10">
        {heights.map((height, index) => (
          <div
            key={index}
            className={`
              w-1 transition-all duration-300
              ${isMuted 
                ? "bg-white/40 group-hover:bg-emerald-400/80" 
                : "bg-emerald-400 group-hover:bg-emerald-300"
              }
            `}
            style={{
              height: `${Math.max(6, height * 20)}px`,
              transition: `height 0.3s ease ${index * 0.05}s, background-color 0.3s ease`
            }}
          />
        ))}
      </div>

      {/* Status text */}
      <span className="text-xs uppercase tracking-widest font-medium relative z-10 transition-all duration-300">
        {isMuted ? "Muted" : "Playing"}
      </span>

      {/* Corner accent lines */}
      <span className={`absolute top-0 left-0 w-2 h-2 border-t border-l transition-all duration-300 border-emerald-400/50 group-hover:w-4 group-hover:h-4`}></span>
      <span className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r transition-all duration-300 border-emerald-400/50 group-hover:w-4 group-hover:h-4`}></span>
    </button>
  );
};

export default MusicToggleButton;