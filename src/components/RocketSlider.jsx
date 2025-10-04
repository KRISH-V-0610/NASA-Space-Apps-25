import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useSoundEffect } from '../hooks/useSoundEffect';
import { IoMdRocket } from "react-icons/io";


const RocketSlider = ({ onLaunch, onLaunchStart }) => {
  const rocketSound = useSoundEffect("/sounds/rocket.wav", { volume: 0.25 });

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
    rocketSound.play();
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
          {/* Animated Flame Effect - fills from bottom to rocket position */}
          {position > 0 && (
            <div
              className="absolute bottom-0 left-0 right-0 pointer-events-none transition-all duration-75 overflow-visible"
              style={{ height: `${position}%` }}
            >
              {/* Core flame */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                {/* Inner bright core */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-full animate-flame-flicker"
                  style={{
                    background: 'linear-gradient(to top, #ff4500 0%, #ff6b35 20%, #ffa500 40%, #ffcc00 60%, #ffeb3b 80%, rgba(255, 235, 59, 0.3) 100%)',
                    filter: 'blur(2px)',
                  }}
                />
                
                {/* Bright white hot center */}
                <div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 animate-flame-core"
                  style={{
                    height: '30%',
                    background: 'linear-gradient(to top, #ffffff, #ffeb3b, transparent)',
                    filter: 'blur(1px)',
                  }}
                />

                {/* Flickering particles */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-full animate-flame-particles"
                  style={{
                    background: 'radial-gradient(circle at 50% 100%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 200, 0, 0.4) 30%, transparent 60%)',
                  }}
                />
              </div>

              {/* Outer glow and heat distortion */}
              <div
                className="absolute -inset-2 animate-flame-glow"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(255, 100, 0, 0.4) 0%, rgba(255, 150, 0, 0.2) 40%, transparent 70%)',
                  filter: 'blur(8px)',
                }}
              />

              {/* Sparks effect */}
              <div className="absolute inset-0 overflow-visible">
                <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-yellow-300 rounded-full animate-spark-1" style={{ marginLeft: '-4px' }} />
                <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-orange-400 rounded-full animate-spark-2" style={{ marginLeft: '4px' }} />
                <div className="absolute bottom-0 left-1/2 w-0.5 h-0.5 bg-yellow-200 rounded-full animate-spark-3" style={{ marginLeft: '-2px' }} />
              </div>
            </div>
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
            <div className="relative text-white size-12 transition-all duration-300 shadow-2xl group-active:scale-95 flex items-center justify-center">
              {/* <FaRocket className="text-3xl text-gray-800" /> */}
              <IoMdRocket className='text-[96px]'/>

              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom indicator */}
      <div className="mt-8 text-white/40 text-xs font-light tracking-wider">
        {Math.round(position)}%
      </div>
    </div>
  );
};

export default RocketSlider;