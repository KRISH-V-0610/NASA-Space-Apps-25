import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { IoArrowBack, IoEye, IoCloud, IoLeaf, IoAnalytics } from "react-icons/io5";
import AudioPlayerButton from "../components/AudioPlayerButton";


export default function MisrPage() {
  const navigate = useNavigate();
  const contentRef = useRef(null);
  const backButtonRef = useRef(null);
  const [activeSection, setActiveSection] = useState("overview");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // MISR-specific slideshow images
  const slideshowImages = [
    "/TERRA-DETAILS/MISR/image.png",
    // "/TERRA-DETAILS/MISR/misr_aerosol_view.jpg",
    // "/TERRA-DETAILS/MISR/misr_cloud_height.jpg"
  ];

  const sections = [
    { id: "overview", label: "Overview", icon: null },
    { id: "multi-angle", label: "Multi-Angle Imaging", icon: IoEye },
    { id: "aerosols", label: "Aerosol Research", icon: IoCloud },
    { id: "vegetation", label: "Vegetation Structure", icon: IoLeaf },
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
                  alt={`MISR Background ${index + 1}`}
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
              MISR
            </h1>
            <p className="text-3xl text-white/90 mb-8 drop-shadow-lg">
              Multi-angle Imaging SpectroRadiometer
            </p>
            <div className="h-1 w-32 bg-emerald-400 mb-8 shadow-lg"></div>

            <p className="text-xl text-white/90 leading-relaxed max-w-2xl drop-shadow-md">
              MISR's revolutionary nine-angle viewing capability provides unprecedented 3D observations of Earth's atmosphere 
              and surface. For over 25 years, it has transformed our understanding of aerosols, clouds, and vegetation structure, 
              offering unique insights into climate change and environmental monitoring.
            </p>
          </div>

          {/* Slideshow Indicators */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
            {slideshowImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                    ? 'w-12 bg-emerald-400'
                    : 'w-2 bg-white/40 hover:bg-white/60'
                  }`}
              />
            ))}
          </div>
        </section>

        {/* Content Sections */}
        <div className="px-12 py-24 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
          {/* Multi-Angle Imaging Section */}
          <section id="multi-angle" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <IoEye className="text-3xl text-emerald-400" />
              <h2 className="text-4xl font-bold text-white">Revolutionary Multi-Angle Imaging</h2>
            </div>

            <div className="bg-zinc-800/40 border border-white/10 rounded-xl p-6">
              <p className="text-white/90 leading-relaxed mb-4">
                MISR features nine separate cameras viewing Earth at different angles (0°, ±26.1°, ±45.6°, ±60.0°, ±70.5°), 
                capturing 36 distinct spectral and angular measurements simultaneously. This unique capability provides 
                stereoscopic views that reveal 3D structure of clouds, aerosol plumes, and surface features.
              </p>
              <div className="flex items-start gap-3 bg-zinc-900/60 p-4 rounded-lg border border-white/5">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Scientific Innovation</h4>
                  <p className="text-white/70 text-sm">First instrument to provide systematic multi-angle observations of Earth, revolutionizing 3D atmospheric and surface studies.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Aerosol Research Section */}
          <section id="aerosols" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <IoCloud className="text-3xl text-emerald-400" />
              <h2 className="text-4xl font-bold text-white">Atmospheric Aerosol Research</h2>
            </div>

            <div className="bg-zinc-800/40 border border-white/10 rounded-xl p-6">
              <p className="text-white/90 leading-relaxed mb-4">
                MISR's multi-angle observations uniquely determine aerosol particle properties, including size, shape, 
                and composition. This capability helps distinguish between natural dust, sea salt, smoke, and pollution 
                particles, providing critical data for air quality monitoring and climate research.
              </p>
              <div className="flex items-start gap-3 bg-zinc-900/60 p-4 rounded-lg border border-white/5">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Air Quality Impact</h4>
                  <p className="text-white/70 text-sm">Enables precise tracking of pollution sources and transport, supporting public health initiatives and environmental policy.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Vegetation Structure Section */}
          <section id="vegetation" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <IoLeaf className="text-3xl text-emerald-400" />
              <h2 className="text-4xl font-bold text-white">Vegetation Structure Analysis</h2>
            </div>

            <div className="bg-zinc-800/40 border border-white/10 rounded-xl p-6">
              <p className="text-white/90 leading-relaxed mb-4">
                By observing vegetation from multiple angles, MISR captures information about canopy structure, 
                leaf area index, and surface roughness. This data helps monitor forest health, estimate biomass, 
                and understand ecosystem changes in response to climate and human activities.
              </p>
              <div className="flex items-start gap-3 bg-zinc-900/60 p-4 rounded-lg border border-white/5">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Ecosystem Monitoring</h4>
                  <p className="text-white/70 text-sm">Supports forest management, carbon cycle studies, and biodiversity conservation through detailed vegetation structure mapping.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Climate Studies Section */}
          <section id="climate" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <IoAnalytics className="text-3xl text-emerald-400" />
              <h2 className="text-4xl font-bold text-white">Climate Change Research</h2>
            </div>

            <div className="bg-zinc-800/40 border border-white/10 rounded-xl p-6">
              <p className="text-white/90 leading-relaxed mb-4">
                MISR provides critical data for climate models by measuring cloud heights and properties, surface albedo, 
                and aerosol radiative forcing. Its long-term record helps scientists understand how Earth's energy balance 
                is changing and improves predictions of future climate scenarios.
              </p>
              <div className="flex items-start gap-3 bg-zinc-900/60 p-4 rounded-lg border border-white/5">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Climate Science Impact</h4>
                  <p className="text-white/70 text-sm">Essential for validating climate models and understanding the complex interactions between aerosols, clouds, and radiation in the climate system.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
        <div className="fixed bottom-6 right-6 z-40">
                    <AudioPlayerButton audioSrc="/music/MISR.mp3" />
        </div>
    </div>
  );
}