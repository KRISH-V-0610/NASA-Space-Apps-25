// components/AudioPlayerButton.jsx
import React, { useRef, useState, useEffect } from "react";
import { IoPlay, IoPause, IoVolumeHigh, IoVolumeMute } from "react-icons/io5.jsx";
import { useSoundEffect } from "../hooks/useSoundEffect.jsx";

export default function AudioPlayerButton({ 
  audioSrc = "/music/bgmusic.mp3",
  className = "" 
}) {
  const clickSound = useSoundEffect("/sounds/mouse-click.mp3", { volume: 0.2 });
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1.0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = false; // Explicitly set loop to false
    }
  }, [volume]);

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  const togglePlay = async () => {
    await clickSound.play();
    
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.currentTime = 0;
        audioRef.current.loop = false; // Ensure loop is false before playing
        audioRef.current.play().catch(err => {
          console.log("Audio playback failed:", err);
        });
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = async () => {
    await clickSound.play();
    
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {/* Hidden audio element - NO LOOP */}
      <audio
        ref={audioRef}
        src={audioSrc}
        onEnded={handleAudioEnd}
      />

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className="group relative size-12 bg-black/40 backdrop-blur-md border-2 border-white/30 hover:border-white/60 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
        
        <div className="relative z-10">
          {isPlaying ? (
            <IoPause className="text-white text-2xl group-hover:scale-110 transition-transform duration-300" />
          ) : (
            <IoPlay className="text-white text-2xl group-hover:scale-110 transition-transform duration-300 ml-1" />
          )}
        </div>

        {isPlaying && (
          <div className="absolute inset-0 rounded-full border-2 border-purple-400/50 animate-ping" />
        )}

        <span className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-white/30 rounded-tl-full transition-all duration-300 group-hover:border-white/60" />
        <span className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-white/30 rounded-br-full transition-all duration-300 group-hover:border-white/60" />
      </button>

      {/* Mute Button */}
      <button
        onClick={toggleMute}
        className="group relative size-12 bg-black/40 backdrop-blur-md border-2 border-white/30 hover:border-white/60 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
        
        <div className="relative z-10">
          {isMuted ? (
            <IoVolumeMute className="text-white text-2xl group-hover:scale-110 transition-transform duration-300" />
          ) : (
            <IoVolumeHigh className="text-white text-2xl group-hover:scale-110 transition-transform duration-300" />
          )}
        </div>

        <span className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-white/30 rounded-tl-full transition-all duration-300 group-hover:border-white/60" />
        <span className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-white/30 rounded-br-full transition-all duration-300 group-hover:border-white/60" />
      </button>
    </div>
  );
}