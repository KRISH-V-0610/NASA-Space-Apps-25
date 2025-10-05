// src/App.jsx
import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import VideoBackground from './pages/IntroPage';
import Terra25Page from './pages/Terra25LandingPage';
import TerraDetailsPage from './pages/TerraDetailsPage';
import MusicToggleButton from './components/MusicToggleButton';

import MisrPage from './pages/MisrPage';
import MopittPage from './pages/MopittPage';
import CeresPage from './pages/CeresPage';
import AsterPage from './pages/AsterPage';
import ModisPage from './pages/ModisPage';


// Import new navigation pages
import AboutPage from './pages/AboutPage';
import DataInsightsPage from './pages/data-insights/DataInsightsPage.jsx';
import EventPage from './pages/events/EventPage';
import CatalogPage from './pages/catalog/CatalogPage';



// Data Insights child pages
// import StationNavigator from './pages/data-insights/components/StationNavigator.jsx';

// import PrismaticBurst from './pages/data-insights/components/PrismaticBurst';
import SurfaceTemp from './pages/data-insights/components/SurfaceTemp';

import WildfireStory from './pages/data-insights/pages/WildfireStory';
import SurfaceTempPage from './pages/data-insights/pages/SurfaceTempPage';
import PollutionPage from './pages/data-insights/pages/PollutionPage';
import DeforestationStory from './pages/data-insights/pages/DeforestationStory';
import TopologyStory from './pages/data-insights/pages/TopologyStory.jsx';

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

        {/* Navigation Pages */}
        <Route path="/terra25/about" element={<AboutPage />} />
        <Route path="/terra25/data-insights" element={<DataInsightsPage />} />
        <Route path="/terra25/events" element={<EventPage />} />
        <Route path="/terra25/catalog" element={<CatalogPage />} />

        {/* Instrument Detail Pages */} 
        <Route path="/terra-details/modis" element={<ModisPage />} />
        <Route path="/terra-details/aster" element={<AsterPage />} />
        <Route path="/terra-details/misr" element={<MisrPage />} />
        <Route path="/terra-details/ceres" element={<CeresPage />} />
        <Route path="/terra-details/mopitt" element={<MopittPage />} /> 


            {/* 📊 Data Insights (merged from DataInsightsPage.jsx) */}
        <Route path="/terra25/data-insights/wildfire" element={<WildfireStory />} />
        <Route path="/terra25/data-insights/surface-temp" element={<SurfaceTemp />} />
        <Route path="/terra25/data-insights/surface-temp-page" element={<SurfaceTempPage />} />
        <Route path="/terra25/data-insights/pollution" element={<PollutionPage />} />
        <Route path="/terra25/data-insights/radiation" element={<TopologyStory />} />
        
        <Route path="/terra25/data-insights/deforestation" element={<DeforestationStory />} />
        <Route path="/terra25/data-insights/:stationId" element={<WildfireStory />} />


        <Route path="/terra25/data-insights/wildfire" element={<WildfireStory />} />
        <Route path="/terra25/data-insights/ndvi" element={<DeforestationStory />} />
        <Route path="/terra25/data-insights/aster" element={<SurfaceTempPage />} />
        <Route path="/terra25/data-insights/aerosol" element={<PollutionPage />} />
        <Route path="/cloud" element={<SurfaceTemp />} />

      </Routes>

      {/* Global Music Toggle Button - show on terra25 and terra-details pages */}
      {(location.pathname === '/terra25' || location.pathname === '/terra-details') && (
        <MusicToggleButton
          isMuted={isMuted}
          audioLoaded={audioLoaded}
          onToggle={() => {
            if (isMuted && audioRef.current) {
              audioRef.current.muted = false;
              audioRef.current.play().catch(() => {
          // autoplay blocked → require click
          console.log("Autoplay blocked, waiting for user interaction.");
        });
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