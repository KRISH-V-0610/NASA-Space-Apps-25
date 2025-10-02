/* eslint-disable no-unused-vars */
// components/VideoLoadingScreen.jsx
import React, { useRef, useEffect, useState } from "react";
import TextType from './ui/TextType';

export default function VideoLoadingScreen({ onLoadComplete,
  videoSrc = "/Backgrounds/loading-background.mp4" }) {
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.4)' }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="absolute " />

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="relative mb-8">
          <h1 className="font-custom3 text-3xl md:text-3xl text-white tracking-wider relative z-10"
          >
            <TextType
              text={["Loading Your Experience . . .","Loading Your Experience . . .","Loading Your Experience . . .","Loading Your Experience . . .","Loading Your Experience . . ."]}
              typingSpeed={30}
              pauseDuration={100}
              showCursor={false}
              cursorCharacter=""
            />
          </h1>
        </div>
      </div>
    </div>
  );
}