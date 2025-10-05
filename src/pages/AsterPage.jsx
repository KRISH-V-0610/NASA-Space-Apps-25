import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { IoArrowBack, IoMap, IoThermometer, IoSearch, IoAnalytics } from "react-icons/io5";
import AudioPlayerButton from "../components/AudioPlayerButton";


export default function AsterPage() {
  const navigate = useNavigate();
  const contentRef = useRef(null);
  const backButtonRef = useRef(null);
  const [activeSection, setActiveSection] = useState("overview");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // ASTER-specific slideshow images
  const slideshowImages = [
    "/TERRA-DETAILS/ASTER/Picture1.jpg",
  ];

  const sections = [
    { id: "overview", label: "Overview", icon: null },
    { id: "elevation", label: "Elevation Mapping", icon: IoMap },
    { id: "thermal", label: "Thermal Monitoring", icon: IoThermometer },
    { id: "mineral", label: "Mineral Exploration", icon: IoSearch },
    { id: "climate", label: "Climate Studies", icon: IoAnalytics },
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
                  alt={`ASTER Background ${index + 1}`}
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
              ASTER
            </h1>
            <p className="text-3xl text-white/90 mb-8 drop-shadow-lg">
              Advanced Spaceborne Thermal Emission and Reflection Radiometer
            </p>
            <div className="h-1 w-32 bg-purple-400 mb-8 shadow-lg"></div>

            <p className="text-xl text-white/90 leading-relaxed max-w-2xl drop-shadow-md">
              ASTER is the only high spatial resolution instrument on the Terra platform, serving as a 'zoom lens' for the other Terra instruments:cite[1]. 
              It captures detailed images of Earth in 14 different wavelengths from visible to thermal infrared light, providing unprecedented data for 
              surface temperature mapping, elevation modeling, and environmental monitoring:cite[1]:cite[2].
            </p>
          </div>

          {/* Slideshow Indicators */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
            {slideshowImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                    ? 'w-12 bg-purple-400'
                    : 'w-2 bg-white/40 hover:bg-white/60'
                  }`}
              />
            ))}
          </div>
        </section>

        {/* Content Sections */}
        <div className="px-12 py-24 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
          {/* Elevation Mapping Section */}
          <section id="elevation" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <IoMap className="text-3xl text-purple-400" />
              <h2 className="text-4xl font-bold text-white">Global Digital Elevation Mapping</h2>
            </div>


            <div className="bg-zinc-800/40 border border-white/10 rounded-xl p-6">
              <p className="text-white/90 leading-relaxed mb-4">
                ASTER's unique stereo imaging capability uses both nadir and backward-looking telescopes to create detailed 3D terrain models:cite[1]. 
                The ASTER Global Digital Elevation Model (GDEM) provides the most complete topographic mapping of Earth, covering 99% of the planet's surface 
                from 83°N to 83°S - the first system to provide comprehensive coverage of polar regions:cite[2].
              </p>
              <div className="flex items-start gap-3 bg-zinc-900/60 p-4 rounded-lg border border-white/5">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Global Impact</h4>
                  <p className="text-white/70 text-sm">The GDEM Version 3, released in 2019, provides 30-meter resolution elevation data used worldwide for environmental monitoring, infrastructure planning, and disaster management:cite[2].</p>
                </div>
              </div>
            </div>
          </section>

          {/* Thermal Monitoring Section */}
          <section id="thermal" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <IoThermometer className="text-3xl text-purple-400" />
              <h2 className="text-4xl font-bold text-white">Thermal Anomaly Detection</h2>
            </div>



            <div className="bg-zinc-800/40 border border-white/10 rounded-xl p-6">
              <p className="text-white/90 leading-relaxed mb-4">
                ASTER's five thermal infrared bands detect surface temperature variations with 90-meter resolution, identifying thermal anomalies for 
                geothermal exploration, volcanic monitoring, and urban heat island studies:cite[5]:cite[7]. The instrument can detect temperature 
                differences as small as 1.5 Kelvin, making it invaluable for environmental monitoring and resource exploration:cite[5].
              </p>
              <div className="flex items-start gap-3 bg-zinc-900/60 p-4 rounded-lg border border-white/5">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Geothermal Applications</h4>
                  <p className="text-white/70 text-sm">ASTER thermal data helps identify potential geothermal resources by detecting surface temperature anomalies, supporting renewable energy exploration worldwide:cite[3]:cite[7].</p>
                </div>
              </div>
            </div>
          </section>

          {/* Mineral Exploration Section */}
          <section id="mineral" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <IoSearch className="text-3xl text-purple-400" />
              <h2 className="text-4xl font-bold text-white">Mineral and Geological Mapping</h2>
            </div>


            <div className="bg-zinc-800/40 border border-white/10 rounded-xl p-6">
              <p className="text-white/90 leading-relaxed mb-4">
                ASTER's 14 spectral bands across visible, near-infrared, shortwave infrared, and thermal infrared ranges enable detailed mineralogical 
                mapping and identification of surface composition:cite[3]. The shortwave infrared bands are particularly valuable for detecting 
                mineral alteration zones associated with geothermal systems and ore deposits:cite[3].
              </p>
              <div className="flex items-start gap-3 bg-zinc-900/60 p-4 rounded-lg border border-white/5">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Exploration Efficiency</h4>
                  <p className="text-white/70 text-sm">ASTER data significantly reduces the cost and time required for mineral exploration by identifying promising target areas over large regions:cite[3].</p>
                </div>
              </div>
            </div>
          </section>

          {/* Climate Studies Section */}
          <section id="climate" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <IoAnalytics className="text-3xl text-purple-400" />
              <h2 className="text-4xl font-bold text-white">Urban Climate and Environmental Studies</h2>
            </div>



            <div className="bg-zinc-800/40 border border-white/10 rounded-xl p-6">
              <p className="text-white/90 leading-relaxed mb-4">
                ASTER's high-resolution thermal data reveals fine-scale urban heat patterns, helping cities understand and mitigate urban heat island effects:cite[4]:cite[8]. 
                Studies using ASTER data have shown temperature differences up to 2.96°C between urban centers and surrounding rural areas, with vegetation 
                playing a crucial role in reducing urban temperatures:cite[8].
              </p>
              <div className="flex items-start gap-3 bg-zinc-900/60 p-4 rounded-lg border border-white/5">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Urban Planning Impact</h4>
                  <p className="text-white/70 text-sm">ASTER thermal imagery helps urban planners identify heat vulnerability hotspots and evaluate the effectiveness of heat mitigation strategies like green infrastructure:cite[4].</p>
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