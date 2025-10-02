/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import TargetCursor from "../components/ui/TargetCursor";
import MusicToggleButton from "../components/MusicToggleButton";
import RocketSlider from "../components/RocketSlider";




export default function VideoBackground({ videoSrc, audioRef, isMuted, setIsMuted, audioLoaded }) {


  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const exploreTextRef = useRef(null);
  const terra25TextRef = useRef(null);
  const rocketSliderRef = useRef(null);
  const musicButtonRef = useRef(null);
  const navigate = useNavigate();

  // Set up event listeners for video loading
  useEffect(() => {
    const video = videoRef.current;

    const handleVideoCanPlay = () => {
      setVideoLoaded(true);
    };

    if (video) {
      video.addEventListener('canplay', handleVideoCanPlay);
    }

    return () => {
      if (video) {
        video.removeEventListener('canplay', handleVideoCanPlay);
      }
    };
  }, []);

  // Entrance animations
  useEffect(() => {
    if (videoLoaded && contentRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(exploreTextRef.current, {
        y: -200,
        opacity: 0,
        duration: 1.2,
        delay: 0.3
      })
        .from(terra25TextRef.current, {
          y: 200,
          opacity: 0,
          duration: 1.2
        }, "-=0.9");
    }
  }, [videoLoaded]);

  // Auto-play video on mount
  useEffect(() => {
    const playVideo = async () => {
      if (!videoRef.current) return;

      try {
        videoRef.current.muted = true;
        videoRef.current.playsInline = true;
        videoRef.current.setAttribute('playsinline', '');
        videoRef.current.setAttribute('webkit-playsinline', '');
        videoRef.current.preload = "auto";

        await videoRef.current.play();
      } catch (error) {
        setTimeout(playVideo, 1000);
      }
    };

    playVideo();
  }, []);

  // Handle unmute button click
  const handleUnmute = async () => {
    if (!audioRef?.current || !audioLoaded) return;

    try {
      audioRef.current.muted = false;
      audioRef.current.loop = true;
      audioRef.current.volume = 1.0;

      await audioRef.current.play();
      setIsMuted(false);

      if (videoRef.current) {
        videoRef.current.muted = false;
      }
    } catch (error) {
      console.log("Audio play failed:", error);
    }
  };

  // Handle mute button click
  const handleMute = () => {
    if (audioRef?.current && videoRef.current) {
      audioRef.current.muted = true;
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      handleUnmute();
    } else {
      handleMute();
    }
  };

  // Handle rocket launch start - fade UI elements immediately
  const handleRocketLaunchStart = () => {
    const tl = gsap.timeline();

    // Fade out all UI elements simultaneously
    tl.to([exploreTextRef.current, terra25TextRef.current], {
      y: (index) => index === 0 ? -300 : 300,
      opacity: 0,
      duration: 0.8,
      ease: "power2.in"
    })
    .to([rocketSliderRef.current, musicButtonRef.current], {
      opacity: 0,
      duration: 0.6,
      ease: "power2.in"
    }, "<");
  };

  // Handle rocket launch navigation
  const handleRocketLaunch = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        navigate("/terra25");
      }
    });

    // Extended zoom and fade video
    tl.to(videoRef.current, {
      scale: 4,
      opacity: 0,
      duration: 2.5,
      ease: "power2.inOut"
    });
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
      />

      {/* Background Video */}
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted={true}
        playsInline
        preload="auto"
        className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-5"></div>

      {/* Main Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white px-4"
      >
        {/* Main Title */}
        <div className="ml-12 text-center mb-4 mt-[-96px]">
          <h1
            ref={exploreTextRef}
            className="text-7xl md:text-8xl lg:text-[272px]"
          >
            <span className="inline-block font-custom2">
              EXPLORE
            </span>
          </h1>
          <h2
            ref={terra25TextRef}
            className="text-6xl md:text-7xl lg:text-[128px] tracking-tight mt-[-24px]"
          >
            <span className="text-10xl inline-block font-custom2 tracking-normal">
              Terra'25
            </span>
          </h2>
        </div>

        {/* Loading indicator */}
        {!videoLoaded && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-black/60 backdrop-blur-md border border-white/10">
            <div className="flex items-center justify-center space-x-4">
              <div className="flex gap-1">
                <div className="w-1 h-8 bg-emerald-400 animate-pulse"></div>
                <div className="w-1 h-8 bg-emerald-400 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-1 h-8 bg-emerald-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1 h-8 bg-emerald-400 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <div className="w-1 h-8 bg-emerald-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <span className="text-white font-light uppercase tracking-widest text-sm">Initializing</span>
            </div>
            <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-400/50"></span>
            <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-400/50"></span>
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-cyan-400/50"></span>
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-400/50"></span>
          </div>
        )}
      </div>

      {/* Rocket Slider - Right side */}
      {videoLoaded && (
        <div ref={rocketSliderRef}>
          <RocketSlider 
            onLaunch={handleRocketLaunch}
            onLaunchStart={handleRocketLaunchStart}
          />
        </div>
      )}

      {/* Music Toggle Button */}
      <div ref={musicButtonRef}>
        <MusicToggleButton
          isMuted={isMuted}
          audioLoaded={audioLoaded}
          onToggle={toggleMute}
        />
      </div>
    </div>
  );
}