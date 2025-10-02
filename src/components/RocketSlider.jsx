import React, { useState, useRef, useEffect } from 'react';
import { FaRocket } from 'react-icons/fa6';
import { gsap } from 'gsap';

const RocketSlider = ({ onLaunch, onLaunchStart }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);
  const [isLaunching, setIsLaunching] = useState(false);
  const rocketRef = useRef(null);
  const trackRef = useRef(null);
  
  const LAUNCH_THRESHOLD = 35;
  const TRACK_HEIGHT = 400;

  useEffect(() => {
    if (position >= LAUNCH_THRESHOLD && !isLaunching && isDragging) {
      return;
    }
  }, [position, isLaunching, isDragging]);

  useEffect(() => {
    if (!isDragging && position >= LAUNCH_THRESHOLD && !isLaunching) {
      handleLaunch();
    }
  }, [isDragging, position, isLaunching]);

  const handleLaunch = () => {
    setIsLaunching(true);
    onLaunchStart?.();
    
    const tl = gsap.timeline({
      onComplete: () => {
        onLaunch();
      }
    });

    tl.to(rocketRef.current, {
      y: -TRACK_HEIGHT - 200,
      duration: 1.5,
      ease: 'power2.in'
    });
  };

  const getYFromEvent = (e) => {
    const trackRect = trackRef.current.getBoundingClientRect();
    const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
    const relativeY = trackRect.bottom - clientY;
    return Math.max(0, Math.min(100, (relativeY / TRACK_HEIGHT) * 100));
  };

  const handleStart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleMove = (e) => {
    if (!isDragging || isLaunching) return;
    e.preventDefault();
    const percentage = getYFromEvent(e);
    setPosition(percentage);
  };

  const handleEnd = (e) => {
    e.preventDefault();
    if (position < LAUNCH_THRESHOLD && !isLaunching) {
      const startPos = position;
      const duration = 0.5;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = (Date.now() - startTime) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        
        const easeOut = (t) => {
          const c4 = (2 * Math.PI) / 3;
          return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
        };
        
        const newPos = startPos * (1 - easeOut(progress));
        setPosition(newPos);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setPosition(0);
        }
      };
      
      animate();
    }
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (e) => handleMove(e);
      const handleMouseUp = (e) => handleEnd(e);
      const handleTouchMove = (e) => handleMove(e);
      const handleTouchEnd = (e) => handleEnd(e);

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleTouchEnd);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging, position, isLaunching]);

  return (
    <div className="absolute right-12 top-1/2 transform -translate-y-1/2 flex flex-col items-center select-none z-30">
      {/* Instruction text */}
      <div className="mb-4 text-white/80 text-xs font-custom3 tracking-widest text-center">
        <p>SLIDE TO LAUNCH</p>
      </div>

      {/* Track container */}
      <div className="relative flex items-center">
        {/* Vertical Track */}
        <div 
          ref={trackRef}
          className="relative w-6 bg-white/10 backdrop-blur-sm rounded-full overflow-visible"
          style={{ height: `${TRACK_HEIGHT}px` }}
        >
          {/* Fire/Glow effect - only visible when position > 0, fills from bottom to rocket position */}
          {position > 0 && (
            <div 
              className="absolute bottom-0 left-0 right-0 rounded-full pointer-events-none overflow-hidden transition-all duration-75"
              style={{ 
                height: `${position}%`,
                background: 'linear-gradient(to top, rgba(255, 87, 34, 0.9), rgba(255, 152, 0, 0.7), rgba(255, 193, 7, 0.5), rgba(255, 235, 59, 0.3))',
                boxShadow: '0 0 20px rgba(255, 152, 0, 0.5), inset 0 0 20px rgba(255, 235, 59, 0.3)',
              }}
            >
              {/* Animated glow overlay */}
              <div 
                className="absolute inset-0 animate-pulse"
                style={{
                  background: 'linear-gradient(to top, rgba(255, 255, 255, 0.1), transparent)',
                }}
              />
            </div>
          )}

          {/* Progress fill - white gradient overlay */}
          {position > 0 && (
            <div 
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/40 to-white/20 rounded-full transition-all duration-75"
              style={{ height: `${position}%` }}
            />
          )}
        </div>

        {/* Rocket - centered on the track */}
        <div
          ref={rocketRef}
          onMouseDown={handleStart}
          onTouchStart={handleStart}
          className="cursor-target absolute left-1/2 cursor-grab active:cursor-grabbing touch-none"
          style={{ 
            bottom: `${position}%`,
            transform: `translateX(-50%) translateY(50%)`,
            transition: isDragging ? 'none' : 'bottom 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {/* Rocket container */}
          <div className="relative group">
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-white/20 rounded-full blur-lg scale-125 group-hover:bg-white/30 transition-all duration-300 pointer-events-none" />
            
            {/* Rocket button - glassy white design */}
            <div className="relative bg-white/90 backdrop-blur-xl border-2 border-white/40 rounded-full w-16 h-16 group-hover:bg-white group-hover:border-white/60 transition-all duration-300 shadow-2xl group-active:scale-95 flex items-center justify-center">
              <FaRocket className="text-3xl text-gray-800" />
              
              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom indicator */}
      <div className="mt-4 text-white/40 text-xs font-light tracking-wider">
        {Math.round(position)}%
      </div>
    </div>
  );
};

export default RocketSlider;