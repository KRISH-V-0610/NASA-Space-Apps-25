import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { IoArrowBack, IoFlame, IoAnalytics, IoEarth, IoStatsChart } from "react-icons/io5";
import AudioPlayerButton from "../components/AudioPlayerButton";


export default function MopittPage() {
  const navigate = useNavigate();
  const contentRef = useRef(null);
  const backButtonRef = useRef(null);
  const [activeSection, setActiveSection] = useState("overview");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // MOPITT-specific slideshow images
  const slideshowImages = [
    "/TERRA-DETAILS/MOPITT/mopitt_global_co.jpg",
    "/TERRA-DETAILS/MOPITT/mopitt_wildfire_tracking.jpg",
    "/TERRA-DETAILS/MOPITT/mopitt_pollution_transport.jpg"
  ];

  const sections = [
    { id: "overview", label: "Overview", icon: null },
    { id: "technology", label: "Technology", icon: IoAnalytics },
    { id: "wildfires", label: "Wildfire Tracking", icon: IoFlame },
    { id: "pollution", label: "Pollution Transport", icon: IoEarth },
    { id: "climate", label: "Climate Impact", icon: IoStatsChart },
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
                  alt={`MOPITT Background ${index + 1}`}
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
              MOPITT
            </h1>
            <p className="text-3xl text-white/90 mb-8 drop-shadow-lg">
              Measurements of Pollution in the Troposphere
            </p>
            <div className="h-1 w-32 bg-red-400 mb-8 shadow-lg"></div>

            <p className="text-xl text-white/90 leading-relaxed max-w-2xl drop-shadow-md">
              MOPITT is the first space-based instrument to continuously measure global tropospheric carbon monoxide, 
              providing unprecedented insights into pollution transport, wildfire emissions, and atmospheric chemistry 
              since its launch in 1999. This Canadian-built instrument has revolutionized our understanding of how 
              pollutants move through Earth's atmosphere :cite[1]:cite[7].
            </p>
          </div>

          {/* Slideshow Indicators */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
            {slideshowImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                    ? 'w-12 bg-red-400'
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
              <IoAnalytics className="text-3xl text-red-400" />
              <h2 className="text-4xl font-bold text-white">Revolutionary Gas Correlation Technology</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="relative group overflow-hidden rounded-xl border border-white/10 bg-zinc-800/40">
                <img
                  src="https://terra.nasa.gov/sites/default/files/styles/medium/public/2024-07/MOPITT_0.jpg"
                  alt="MOPITT Instrument Design"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative group overflow-hidden rounded-xl border border-white/10 bg-zinc-800/40">
                <img
                  src="https://mopitt.physics.utoronto.ca/wp-content/uploads/2023/10/mopitt_diagram.png"
                  alt="MOPITT Optical System"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            <div className="bg-zinc-800/40 border border-white/10 rounded-xl p-6">
              <p className="text-white/90 leading-relaxed mb-4">
                MOPITT employs sophisticated gas correlation spectroscopy, using onboard containers of carbon monoxide 
                as optical filters to detect the same gas in Earth's atmosphere. The instrument measures emitted and 
                reflected radiance in three spectral bands: 4.7 μm thermal channels for upper tropospheric CO, 
                2.3 μm solar channels for total CO column measurements, and 2.2 μm channels for methane detection :cite[1]:cite[6].
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-start gap-3 bg-zinc-900/60 p-4 rounded-lg border border-white/5">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Spatial Resolution</h4>
                    <p className="text-white/70 text-sm">22 km at nadir with 640 km swath width, measuring CO in 5-km vertical layers :cite[1]</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-zinc-900/60 p-4 rounded-lg border border-white/5">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Measurement Innovation</h4>
                    <p className="text-white/70 text-sm">First instrument to provide continuous global CO measurements from space, creating unprecedented long-term dataset :cite[7]</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Wildfire Tracking Section */}
          <section id="wildfires" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <IoFlame className="text-3xl text-red-400" />
              <h2 className="text-4xl font-bold text-white">Wildfire Emission Monitoring</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-6">
              <div className="relative group overflow-hidden rounded-xl border border-white/10 bg-zinc-800/40">
                <img
                  src="https://eoimages.gsfc.nasa.gov/images/imagerecords/149000/149285/mopitt_co_wildfires_lrg.jpg"
                  alt="Wildfire CO Emissions Tracking"
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            <div className="bg-zinc-800/40 border border-white/10 rounded-xl p-6">
              <p className="text-white/90 leading-relaxed mb-4">
                MOPITT plays a critical role in monitoring carbon monoxide emissions from wildfires and biomass burning 
                worldwide. The instrument can track smoke plumes as they travel thousands of kilometers and even detect 
                when wildfire smoke reaches the lower stratosphere through pyro-cumulonimbus events :cite[5]:cite[10]. 
                During the extensive 2017 Canadian wildfire season, MOPITT observed smoke plumes that traveled across 
                continents and oceans, demonstrating the global transport of pollution.
              </p>
              <div className="flex items-start gap-3 bg-zinc-900/60 p-4 rounded-lg border border-white/5">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Environmental Impact</h4>
                  <p className="text-white/70 text-sm">Wildfire smoke can increase CO₂ levels by +1.8 to +3.9 ppm and transport pollution globally, affecting air quality and climate :cite[5]</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pollution Transport Section */}
          <section id="pollution" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <IoEarth className="text-3xl text-red-400" />
              <h2 className="text-4xl font-bold text-white">Global Pollution Transport Patterns</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-6">
              <div className="relative group overflow-hidden rounded-xl border border-white/10 bg-zinc-800/40">
                <img
                  src="https://eoimages.gsfc.nasa.gov/images/imagerecords/149000/149334/mopitt_global_transport_lrg.jpg"
                  alt="Global Pollution Transport"
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            <div className="bg-zinc-800/40 border border-white/10 rounded-xl p-6">
              <p className="text-white/90 leading-relaxed mb-4">
                MOPITT's two-decade record has revealed how pollution travels across continents and oceans. The instrument 
                has documented pollution transport from Asia across the Pacific to North America, observed deep convective 
                transport of CO in the Asian summer monsoon region, and identified large horizontal gradients in CO at 
                synoptic scales :cite[7]:cite[8]. These observations help scientists understand intercontinental 
                pollution transport and its impacts on regional air quality.
              </p>
              <div className="flex items-start gap-3 bg-zinc-900/60 p-4 rounded-lg border border-white/5">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Urban Pollution Detection</h4>
                  <p className="text-white/70 text-sm">MOPITT can detect isolated CO plumes from major cities and urban areas, providing crucial data for air quality management and policy development :cite[7]</p>
                </div>
              </div>
            </div>
          </section>

          {/* Climate Impact Section */}
          <section id="climate" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <IoStatsChart className="text-3xl text-red-400" />
              <h2 className="text-4xl font-bold text-white">Climate Research and Policy Impact</h2>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-6">
              <div className="relative group overflow-hidden rounded-xl border border-white/10 bg-zinc-800/40">
                <img
                  src="https://eoimages.gsfc.nasa.gov/images/imagerecords/149000/149188/mopitt_climate_studies_lrg.jpg"
                  alt="Climate Impact Research"
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            <div className="bg-zinc-800/40 border border-white/10 rounded-xl p-6">
              <p className="text-white/90 leading-relaxed mb-4">
                With over 250 studies published in 2022 alone using its data, MOPITT has become fundamental to climate 
                research :cite[8]. The instrument's long-term dataset enables scientists to analyze CO trends, 
                validate climate models, and assess the effectiveness of pollution control measures. MOPITT data 
                have been used to study everything from seasonal CO climatology to the impact of El Niño events 
                on atmospheric chemistry through altered fire patterns :cite[7].
              </p>
              <div className="flex items-start gap-3 bg-zinc-900/60 p-4 rounded-lg border border-white/5">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Scientific Legacy</h4>
                  <p className="text-white/70 text-sm">MOPITT's continuous 20+ year record provides the foundation for understanding long-term changes in atmospheric composition and validating climate change projections</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
        <div className="fixed bottom-6 right-6 z-40">
              <AudioPlayerButton audioSrc="/music/MOPITT.mp3" />
          </div>
    </div>
  );
}