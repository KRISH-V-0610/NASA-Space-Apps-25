// src/App.jsx
import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import VideoBackground from './pages/IntroPage';
import Terra25Page from './pages/Terra25LandingPage';
import TerraDetailsPage from './pages/TerraDetailsPage';
import MusicToggleButton from './components/MusicToggleButton';

const AppContent = ({ audioRef, isMuted, setIsMuted, audioLoaded }) => {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={
          <VideoBackground
            videoSrc='/Backgrounds/bgvideo.mp4'
            audioRef={audioRef}
            isMuted={isMuted}
            setIsMuted={setIsMuted}
            audioLoaded={audioLoaded}
          />
        } />
        <Route path="/terra25" element={<Terra25Page />} />
        <Route path="/terra-details" element={<TerraDetailsPage />} />
      </Routes>
      
      {/* Global Music Toggle Button - show on terra25 and terra-details pages */}
      {(location.pathname === '/terra25' || location.pathname === '/terra-details') && (
        <MusicToggleButton
          isMuted={isMuted}
          audioLoaded={audioLoaded}
          onToggle={() => {
            if (isMuted && audioRef.current) {
              audioRef.current.muted = false;
              audioRef.current.play();
              setIsMuted(false);
            } else if (audioRef.current) {
              audioRef.current.muted = true;
              setIsMuted(true);
            }
          }}
        />
      )}
    </>
  );
};

const App = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    
    const handleAudioCanPlay = () => {
      setAudioLoaded(true);
    };

    if (audio) {
      audio.addEventListener('canplay', handleAudioCanPlay);
    }

    return () => {
      if (audio) {
        audio.removeEventListener('canplay', handleAudioCanPlay);
      }
    };
  }, []);

  return (
    <Router>
      {/* Global Background Music */}
      <audio
        ref={audioRef}
        src='/music/bgmusic.mp3'
        loop
        muted={true}
        preload="auto"
      />
      
      <AppContent 
        audioRef={audioRef}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
        audioLoaded={audioLoaded}
      />
    </Router>
  );
};

export default App;