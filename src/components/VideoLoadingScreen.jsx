/* eslint-disable no-unused-vars */
// components/VideoLoadingScreen.jsx
import React, { useRef, useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import { gsap } from "gsap";
import TextType from "./ui/TextType";

export default function VideoLoadingScreen({ 
  onLoadComplete,
  videoSrc = "/Backgrounds/loading-background.mp4" 
}) {
  const { progress, loaded, total } = useProgress();
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Detect completion and trigger fade out
  useEffect(() => {
    if (progress === 100 && loaded === total && total > 0 && !isFadingOut) {
      setIsFadingOut(true);

      // Start fade out animation
      const tl = gsap.timeline({
        onComplete: () => {
          onLoadComplete();
        }
      });

      // Fade out the entire loading screen over 3 seconds
      tl.to(containerRef.current, {
        opacity: 0,
        duration: 3,
        ease: "power2.inOut"
      });
    }
  }, [progress, loaded, total, onLoadComplete, isFadingOut]);

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
      <div className="absolute inset-0 flex flex-col items-center justify-center">
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
      </div>
    </div>
  );
}