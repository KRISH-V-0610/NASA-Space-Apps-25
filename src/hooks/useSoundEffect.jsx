// hooks/useSoundEffect.js
import { useRef, useCallback } from "react";

/**
 * useSoundEffect - React hook to play any sound effect on demand
 * @param {string} audioSrc - Path to your audio file (e.g., "/sounds/click.mp3")
 * @param {Object} options - Configuration options
 * @param {number} options.volume - Initial volume (0 to 1), default: 1
 * @param {boolean} options.loop - Whether to loop the sound, default: false
 * @param {number} options.playbackRate - Playback speed (0.5 to 2), default: 1
 * @returns {Object} - { play, stop, pause, resume, setVolume, setPlaybackRate }
 */
export function useSoundEffect(audioSrc, options = {}) {
  const {
    volume = 1,
    loop = false,
    playbackRate = 1
  } = options;

  const audioRef = useRef(null);

  // Initialize audio only once
  if (!audioRef.current && audioSrc) {
    audioRef.current = new Audio(audioSrc);
    audioRef.current.volume = Math.min(Math.max(volume, 0), 1);
    audioRef.current.loop = loop;
    audioRef.current.playbackRate = Math.min(Math.max(playbackRate, 0.5), 2);
  }

  // Play the sound
  const play = useCallback((customVolume) => {
    if (!audioRef.current) return;

    // Set custom volume if provided
    if (typeof customVolume === "number") {
      audioRef.current.volume = Math.min(Math.max(customVolume, 0), 1);
    }

    audioRef.current.currentTime = 0; // restart if already playing
    audioRef.current.play().catch(err => {
      console.warn("Audio playback failed:", err);
    });
  }, []);

  // Stop the sound and reset to beginning
  const stop = useCallback(() => {
    if (!audioRef.current) return;
    
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }, []);

  // Pause the sound at current position
  const pause = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
  }, []);

  // Resume from paused position
  const resume = useCallback(() => {
    if (!audioRef.current) return;
    
    audioRef.current.play().catch(err => {
      console.warn("Audio playback failed:", err);
    });
  }, []);

  // Set volume dynamically
  const setVolume = useCallback((newVolume) => {
    if (!audioRef.current) return;
    audioRef.current.volume = Math.min(Math.max(newVolume, 0), 1);
  }, []);

  // Set playback rate dynamically
  const setPlaybackRate = useCallback((rate) => {
    if (!audioRef.current) return;
    audioRef.current.playbackRate = Math.min(Math.max(rate, 0.5), 2);
  }, []);

  return {
    play,
    stop,
    pause,
    resume,
    setVolume,
    setPlaybackRate
  };
}