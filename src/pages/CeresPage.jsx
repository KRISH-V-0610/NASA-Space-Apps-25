import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { IoArrowBack, IoSunny, IoCloud, IoStatsChart, IoAnalytics } from "react-icons/io5.jsx";
import AudioPlayerButton from "../components/AudioPlayerButton.jsx";


export default function CeresPage() {
  const navigate = useNavigate();
  const contentRef = useRef(null);
  const backButtonRef = useRef(null);
  const [activeSection, setActiveSection] = useState("overview");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // CERES-specific slideshow images
  const slideshowImages = [
    "/TERRA-DETAILS/CERES/ceres_olr_science_lrg.jpg",
  ];

  const sections = [
    { id: "overview", label: "Overview", icon: null },
    { id: "technology", label: "Technology", icon: IoSunny },
    { id: "radiation", label: "Radiation Budget", icon: IoStatsChart },
    { id: "clouds", label: "Cloud Studies", icon: IoCloud },
    { id: "climate", label: "Climate Impact", icon: IoAnalytics },
  ];

  // Image slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % slideshowImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      backButtonRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6 }
    ).fromTo(
      contentRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.3"
    );
  }, []);

  const handleBackClick = () => {
    navigate("/terra-details");
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white flex">
      {/* Side Navigation */}
      <nav className="fixed left-0 h-full w-64 bg-zinc-900/60 backdrop-blur-xl border-r border-white/50 p-6 overflow-y-auto z-50">
        <div>
          <button
            ref={backButtonRef}
            onClick={handleBackClick}
            className="fixed top-6 left-6 z-50 px-5 py-3 border-2 border-white/40 bg-zinc-900/90 backdrop-blur-md hover:border-white hover:bg-zinc-800 transition-all duration-300 shadow-lg group flex items-center gap-3"
          >
            <IoArrowBack className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
            <span className="text-white text-sm tracking-wider font-semibold">Back</span>

            <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/50 group-hover:w-3 group-hover:h-3 group-hover:border-white transition-all duration-300" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/50 group-hover:w-3 group-hover:h-3 group-hover:border-white transition-all duration-300" />
          </button>
        </div>

        <div className="space-y-2 mt-24">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 ${activeSection === section.id
                    ? 'bg-white/10 text-white border border-white/30'
                    : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
              >
                {Icon && <Icon className="text-lg" />}
                <span className="text-sm font-medium">{section.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Main Content */}
      <div ref={contentRef} className="ml-64 flex-1">
        {/* Hero Section with Slideshow Background */}
        <section id="overview" className="relative h-screen flex items-center justify-start px-12">
          {/* Slideshow Background */}
          <div className="absolute inset-0 overflow-hidden">
            {slideshowImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <img
                  src={image}
                  alt={`CERES Background ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-zinc-900"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
          </div>

          {/* Title Content */}
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-8xl font-bold mb-6 text-white drop-shadow-2xl">
              CERES
            </h1>
            <p className="text-3xl text-white/90 mb-8 drop-shadow-lg">
              Clouds and the Earth's Radiant Energy System
            </p>
            <div className="h-1 w-32 bg-orange-400 mb-8 shadow-lg"></div>

            <p className="text-xl text-white/90 leading-relaxed max-w-2xl drop-shadow-md">
              CERES instruments provide critical measurements of Earth's energy balance, tracking how much solar energy 
              our planet receives, how much is reflected back to space, and how much thermal energy Earth emits. 
              This data is fundamental to understanding climate change and improving climate prediction models :cite[1]:cite[6].
            </p>
          </div>

          {/* Slideshow Indicators */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
            {slideshowImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                    ? 'w-12 bg-orange-400'
                    : 'w-2 bg-white/40 hover:bg-white/60'
                  }`}
              />
            ))}
          </div>
        </section>

        {/* Content Sections */}
        <div className="px-12 py-24 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
          {/* Technology Section */}
          <section id="technology" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <IoSunny className="text-3xl text-orange-400" />
              <h2 className="text-4xl font-bold text-white">Advanced Radiometer Technology</h2>
            </div>

            <div className="bg-zinc-800/40 border border-white/10 rounded-xl p-6">
              <p className="text-white/90 leading-relaxed mb-4">
                Each CERES instrument is a narrow field-of-view scanning radiometer that measures broadband radiances 
                in three spectral channels: shortwave (0.3-5 μm) for reflected sunlight, total (0.3-200 μm) for entire 
                outgoing spectrum, and window (8-12 μm) for thermal radiation. The instruments achieve nadir footprint 
                sizes of 20 km on Terra and Aqua platforms, enabling high spatial resolution for detailed climate studies :cite[1].
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-start gap-3 bg-zinc-900/60 p-4 rounded-lg border border-white/5">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Scanning Modes</h4>
                    <p className="text-white/70 text-sm">Three operational modes: cross-track for global coverage, rotating azimuth for angular models, and programmable for instrument intercomparison :cite[1]</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-zinc-900/60 p-4 rounded-lg border border-white/5">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Calibration Systems</h4>
                    <p className="text-white/70 text-sm">Comprehensive onboard calibration including solar diffuser, tungsten lamp system, blackbodies, and space views for maximum accuracy :cite[1]</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Radiation Budget Section */}
          <section id="radiation" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <IoStatsChart className="text-3xl text-orange-400" />
              <h2 className="text-4xl font-bold text-white">Earth's Radiation Budget Monitoring</h2>
            </div>

            <div className="bg-zinc-800/40 border border-white/10 rounded-xl p-6">
              <p className="text-white/90 leading-relaxed mb-4">
                CERES provides continuous monitoring of Earth's Energy Imbalance (EEI), the crucial difference between 
                incoming solar radiation and outgoing thermal radiation. This measurement is fundamental to understanding 
                climate change, as positive energy imbalance means Earth is accumulating heat. CERES data shows excellent 
                agreement with ocean heat uptake measurements from the Argo float network, validating climate models and 
                providing confidence in global warming projections :cite[6].
              </p>
              <div className="flex items-start gap-3 bg-zinc-900/60 p-4 rounded-lg border border-white/5">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Climate Accuracy</h4>
                  <p className="text-white/70 text-sm">CERES has doubled the accuracy of radiative flux estimates at top of atmosphere and Earth's surface, providing the first long-term global estimates of radiative fluxes within Earth's atmosphere :cite[6]</p>
                </div>
              </div>
            </div>
          </section>

          {/* Cloud Studies Section */}
          <section id="clouds" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <IoCloud className="text-3xl text-orange-400" />
              <h2 className="text-4xl font-bold text-white">Cloud-Radiation Interactions</h2>
            </div>


            <div className="bg-zinc-800/40 border border-white/10 rounded-xl p-6">
              <p className="text-white/90 leading-relaxed mb-4">
                CERES works in conjunction with imagers like MODIS to determine how clouds affect Earth's radiation balance. 
                Clouds both cool Earth by reflecting sunlight (albedo effect) and warm it by trapping outgoing thermal 
                radiation (greenhouse effect). CERES measurements have revealed that the net effect of clouds currently 
                cools Earth, but climate change could alter this balance, making cloud feedback one of the largest 
                uncertainties in climate projections :cite[1]:cite[6].
              </p>
              <div className="flex items-start gap-3 bg-zinc-900/60 p-4 rounded-lg border border-white/5">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Data Fusion Innovation</h4>
                  <p className="text-white/70 text-sm">CERES integrates data from multiple instruments including MODIS, VIIRS, and geostationary imagers, with over 90% of CERES data products involving two or more instruments :cite[1]</p>
                </div>
              </div>
            </div>
          </section>

          {/* Climate Impact Section */}
          <section id="climate" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <IoAnalytics className="text-3xl text-orange-400" />
              <h2 className="text-4xl font-bold text-white">Climate Change Research and Policy Impact</h2>
            </div>


            <div className="bg-zinc-800/40 border border-white/10 rounded-xl p-6">
              <p className="text-white/90 leading-relaxed mb-4">
                With seven instruments launched on five satellites since 1997, CERES provides the most comprehensive 
                record of Earth's radiation budget ever assembled. This long-term dataset spans multiple solar cycles, 
                El Niño events, and major volcanic eruptions, enabling scientists to separate natural climate variability 
                from human-caused climate change. The continuous data record from TRMM, Terra, Aqua, and subsequent 
                missions ensures climate modelers have consistent, accurate measurements for validating and improving 
                climate projections :cite[1]:cite[6].
              </p>
              <div className="flex items-start gap-3 bg-zinc-900/60 p-4 rounded-lg border border-white/5">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Future Continuity</h4>
                  <p className="text-white/70 text-sm">The Libera instrument selected for launch on JPSS-3 will continue CERES measurements with updated capabilities, ensuring uninterrupted climate data records through 2027 and beyond :cite[6]</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
        <div className="fixed bottom-6 right-6 z-40">
        <AudioPlayerButton audioSrc="/music/ASTER.mp3" />
      </div>
    </div>
  );
}