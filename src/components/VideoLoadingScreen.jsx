/* eslint-disable no-unused-vars */
// components/VideoLoadingScreen.jsx
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import TextType from "./ui/TextType";

export default function VideoLoadingScreen({ 
  onLoadComplete,
  videoSrc = "/Backgrounds/loading-background.mp4",
  progress = 0,
  isReady = false,
  minDuration = 0,
  startTime = null
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [displayProgress, setDisplayProgress] = useState(0);

  // Smoothly animate progress bar based on time elapsed
  useEffect(() => {
    if (!startTime || !minDuration) return;

    const animateProgress = () => {
      const elapsed = Date.now() - startTime;
      const timeProgress = Math.min((elapsed / minDuration) * 100, 100);
      
      // Use the maximum of time-based progress and actual progress
      const targetProgress = Math.max(timeProgress, progress);
      
      // Smooth GSAP animation
      gsap.to({ value: displayProgress }, {
        value: targetProgress,
        duration: 0.3,
        ease: "power2.out",
        onUpdate: function() {
          setDisplayProgress(this.targets()[0].value);
        }
      });
    };

    const interval = setInterval(animateProgress, 100);
    return () => clearInterval(interval);
  }, [startTime, minDuration, progress, displayProgress]);

  // Trigger fade out when ready
  useEffect(() => {
    if (!startTime || !minDuration) return;
    
    const timeElapsed = Date.now() - startTime;
    const minTimeReached = timeElapsed >= minDuration;
    
    const shouldComplete = isReady && minTimeReached && displayProgress >= 99;

    if (shouldComplete && !isFadingOut) {
      setIsFadingOut(true);

      const tl = gsap.timeline({
        onComplete: () => {
          onLoadComplete();
        }
      });

      tl.to(containerRef.current, {
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut"
      });
    }
  }, [isReady, displayProgress, startTime, minDuration, isFadingOut, onLoadComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-black"
      style={{ opacity: 1 }}
    >
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.4)" }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Loading text overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
        <div className="relative mb-8">
          <h1 className="font-custom3 text-3xl md:text-3xl text-white tracking-wider relative z-10">
            <TextType
              text={[
                "Loading Your Experience . . .",
                "Loading Your Experience . . .",
                "Loading Your Experience . . ."
              ]}
              typingSpeed={30}
              pauseDuration={100}
              showCursor={false}
            />
          </h1>
        </div>

        {/* Progress Bar */}
        <div className="w-[400px] max-w-[90vw]">
          <div className="relative h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              className="absolute top-0 left-0 h-full bg-white/90
              rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(displayProgress, 100)}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </div>
          </div>
          
          {/* Progress percentage */}
          <div className="mt-3 text-center">
            <span className="text-white font-custom3 text-sm tracking-wider">
              {Math.round(displayProgress)}%
            </span>
          </div>
        </div>

        {/* Loading status text */}
        <div className="text-white/60 text-xs font-custom3 tracking-widest">
          {displayProgress < 30 && "LOADING MODELS..."}
          {displayProgress >= 30 && displayProgress < 70 && "INITIALIZING SCENE..."}
          {displayProgress >= 70 && displayProgress < 100 && "FINALIZING..."}
          {displayProgress >= 100 && "READY"}
        </div>
      </div>
    </div>
  );
}