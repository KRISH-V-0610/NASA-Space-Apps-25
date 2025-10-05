import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { IoArrowBack, IoFlame, IoLeaf, IoCloudOutline, IoWater } from "react-icons/io5";
import AudioPlayerButton from "../components/AudioPlayerButton";

export default function ModisPage() {
  const navigate = useNavigate();
  const contentRef = useRef(null);
  const backButtonRef = useRef(null);
  const [activeSection, setActiveSection] = useState("overview");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Add your 3 slideshow images here
  const slideshowImages = [
    "/TERRA-DETAILS/MODIS/karl_tmo_2010259_lrg.jpg",
    "/TERRA-DETAILS/MODIS/rabaul_amo_2006280_721_lrg.jpg",
    "/TERRA-DETAILS/MODIS/caspiansea_amo_2014138_lrg.jpg"

  ];

  const sections = [
    { id: "overview", label: "Overview", icon: null },
    { id: "wildfires", label: "Wildfire Detection", icon: IoFlame },
    { id: "agriculture", label: "Agriculture", icon: IoLeaf },
    { id: "air-quality", label: "Air Quality", icon: IoCloudOutline },
    { id: "oceans", label: "Ocean Monitoring", icon: IoWater },
  ];

  // Image slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % slideshowImages.length
      );
    }, 3000); // Change image every 5 seconds

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
                  alt={`MODIS Background ${index + 1}`}
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
              MODIS
            </h1>
            <p className="text-3xl text-white/90 mb-8 drop-shadow-lg">
              Moderate Resolution Imaging Spectroradiometer
            </p>
            <div className="h-1 w-32 bg-white mb-8 shadow-lg"></div>

            <p className="text-xl text-white/90 leading-relaxed max-w-2xl drop-shadow-md">
              NASA's MODIS instrument on the Terra satellite has been pivotal over the past 25 years in monitoring Earth's systems.
              It addresses environmental challenges, aids scientific research, and impacts our communities through actionable insights
              on wildfires, agriculture, air quality, and oceans.
            </p>
          </div>

          {/* Slideshow Indicators */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
            {slideshowImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                    ? 'w-12 bg-white'
                    : 'w-2 bg-white/40 hover:bg-white/60'
                  }`}
              />
            ))}
          </div>
        </section>

        {/* Content Sections */}
        <div className="px-12 py-24 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
          {/* Wildfire Detection Section */}
          <section id="wildfires" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <IoFlame className="text-3xl text-orange-400" />
              <h2 className="text-4xl font-bold text-white">Wildfire Detection and Monitoring</h2>
            </div>

            <div className="bg-zinc-800/40 border border-white/10 rounded-xl p-6">
              <p className="text-white/90 leading-relaxed mb-4">
                MODIS detects thermal anomalies for near-real-time wildfire tracking. This helps communities respond quickly to fires,
                protecting lives and property. Fire Information for Resource Management System (FIRMS) uses MODIS data to alert emergency services.
              </p>
              <div className="flex items-start gap-3 bg-zinc-900/60 p-4 rounded-lg border border-white/5">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Community Impact</h4>
                  <p className="text-white/70 text-sm">Enables rapid emergency response, saving lives and protecting communities from devastating wildfires.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Agriculture Section */}
          <section id="agriculture" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <IoLeaf className="text-3xl text-green-400" />
              <h2 className="text-4xl font-bold text-white">Agricultural Monitoring and Food Security</h2>
            </div>


            <div className="bg-zinc-800/40 border border-white/10 rounded-xl p-6">
              <p className="text-white/90 leading-relaxed mb-4">
                MODIS monitors crop health and productivity using vegetation indices like NDVI. It identifies areas affected by drought
                or disease, supporting farmers and communities in maintaining food security.
              </p>
              <div className="flex items-start gap-3 bg-zinc-900/60 p-4 rounded-lg border border-white/5">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Global Impact</h4>
                  <p className="text-white/70 text-sm">Supports global food security by helping farmers optimize crop management and predict harvest yields.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Air Quality Section */}
          <section id="air-quality" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <IoCloudOutline className="text-3xl text-purple-400" />
              <h2 className="text-4xl font-bold text-white">Air Quality and Atmospheric Studies</h2>
            </div>

            <div className="bg-zinc-800/40 border border-white/10 rounded-xl p-6">
              <p className="text-white/90 leading-relaxed mb-4">
                MODIS measures aerosol optical depth and other atmospheric parameters to monitor air pollution. Communities benefit
                from better understanding air quality and its health impacts.
              </p>
              <div className="flex items-start gap-3 bg-zinc-900/60 p-4 rounded-lg border border-white/5">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Health Impact</h4>
                  <p className="text-white/70 text-sm">Provides critical data for public health officials to issue air quality warnings and protect vulnerable populations.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Ocean Monitoring Section */}
          <section id="oceans" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <IoWater className="text-3xl text-blue-400" />
              <h2 className="text-4xl font-bold text-white">Ocean and Coastal Ecosystem Monitoring</h2>
            </div>

            <div className="bg-zinc-800/40 border border-white/10 rounded-xl p-6">
              <p className="text-white/90 leading-relaxed mb-4">
                MODIS monitors sea surface temperatures, chlorophyll concentrations, and ocean color, supporting marine ecosystem
                health, fisheries, and climate research.
              </p>
              <div className="flex items-start gap-3 bg-zinc-900/60 p-4 rounded-lg border border-white/5">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Marine Impact</h4>
                  <p className="text-white/70 text-sm">Helps fishing communities and marine scientists understand ocean health and predict changes in marine ecosystems.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
        <div className="fixed bottom-6 right-6 z-40">
        <AudioPlayerButton audioSrc="/music/MODIS.mp3" />
      </div>
    </div>
  );
}