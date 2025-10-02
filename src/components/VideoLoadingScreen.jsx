/* eslint-disable no-unused-vars */
// components/VideoLoadingScreen.jsx
import React, { useRef, useEffect } from "react";
import { useProgress } from "@react-three/drei";
import TextType from "./ui/TextType";

export default function VideoLoadingScreen({ 
  onLoadComplete,
  videoSrc = "/Backgrounds/loading-background.mp4" 
}) {
  const { progress, loaded, total } = useProgress();
  const videoRef = useRef(null);

  // Only use progress to detect completion
  useEffect(() => {
    if (progress === 100 && loaded === total && total > 0) {
      const timeout = setTimeout(() => onLoadComplete(), 500); // small fade-out delay
      return () => clearTimeout(timeout);
    }
  }, [progress, loaded, total, onLoadComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black">
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
