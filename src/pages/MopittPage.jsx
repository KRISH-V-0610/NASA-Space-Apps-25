// pages/MopittPage.jsx
import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { IoArrowBack } from "react-icons/io5";
import { useSoundEffect } from "../hooks/useSoundEffect";

export default function MopittPage() {
  const navigate = useNavigate();
  const clickSound = useSoundEffect("/sounds/mouse-click.mp3", { volume: 0.5 });
  const contentRef = useRef(null);
  const backButtonRef = useRef(null);

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

  const handleBackClick = async () => {
    await clickSound.play();
    navigate("/terra-details");
  };

  return (
    <div className="font-custom3 min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Back Button */}
      <button
        ref={backButtonRef}
        onClick={handleBackClick}
        className="cursor-target fixed top-6 left-6 z-50 px-5 py-3 border-2 border-white/60 bg-black/70 backdrop-blur-md hover:border-white hover:bg-black/80 transition-all duration-300 shadow-lg group flex items-center gap-3"
      >
        <IoArrowBack className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
        <span className="font-custom3 text-white text-sm tracking-wider font-semibold">
          Back
        </span>
        
        <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/70 group-hover:w-3 group-hover:h-3 transition-all duration-300" />
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/70 group-hover:w-3 group-hover:h-3 transition-all duration-300" />
      </button>

      {/* Content */}
      <div ref={contentRef} className="max-w-4xl mx-auto px-8 py-24">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">MOPITT</h1>
          <p className="text-xl text-white/70">Measurements of Pollution in the Troposphere</p>
          <div className="w-32 h-1 bg-red-400 mt-4"></div>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-red-400">Overview</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            MOPITT is designed to measure tropospheric carbon monoxide (CO) and methane (CH₄) on a global scale. 
            These measurements help scientists understand the distribution and transport of these important atmospheric 
            pollutants and greenhouse gases.
          </p>
          <p className="text-white/80 leading-relaxed">
            Built by the Canadian Space Agency, MOPITT uses gas correlation spectroscopy to detect CO concentrations 
            at different altitudes in the atmosphere, providing vertical profiles of pollution.
          </p>
        </section>

        {/* Technical Specifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-red-400">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-white/20 bg-white/5 p-6">
              <h3 className="font-semibold text-lg mb-2">Primary Measurement</h3>
              <p className="text-white/70">Carbon monoxide (CO)</p>
            </div>
            <div className="border border-white/20 bg-white/5 p-6">
              <h3 className="font-semibold text-lg mb-2">Spectral Range</h3>
              <p className="text-white/70">Thermal infrared (4.7 μm)</p>
            </div>
            <div className="border border-white/20 bg-white/5 p-6">
              <h3 className="font-semibold text-lg mb-2">Spatial Resolution</h3>
              <p className="text-white/70">22 km × 22 km</p>
            </div>
            <div className="border border-white/20 bg-white/5 p-6">
              <h3 className="font-semibold text-lg mb-2">Coverage</h3>
              <p className="text-white/70">Global every 3 days</p>
            </div>
          </div>
        </section>

        {/* Key Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-red-400">Key Applications</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span className="text-white/80">Tracking air pollution transport across continents</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span className="text-white/80">Monitoring biomass burning and wildfire emissions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span className="text-white/80">Industrial and urban pollution assessment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span className="text-white/80">Understanding atmospheric chemistry and oxidation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span className="text-white/80">Climate model validation for trace gas transport</span>
            </li>
          </ul>
        </section>

        {/* Scientific Impact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-red-400">Scientific Impact</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            MOPITT provides the longest continuous global record of carbon monoxide from space, spanning over two 
            decades. This dataset has been invaluable for understanding how pollution moves through the atmosphere 
            and how human activities affect air quality worldwide.
          </p>
          <p className="text-white/80 leading-relaxed">
            The instrument's measurements have revealed that pollution from Asia can travel across the Pacific Ocean 
            to North America, and that wildfires can inject CO high into the atmosphere where it can be transported 
            thousands of kilometers from its source.
          </p>
        </section>
      </div>
    </div>
  );
}