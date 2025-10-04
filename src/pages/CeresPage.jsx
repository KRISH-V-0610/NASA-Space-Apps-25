// pages/CeresPage.jsx
import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { IoArrowBack } from "react-icons/io5";
import { useSoundEffect } from "../hooks/useSoundEffect";

export default function CeresPage() {
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
          <h1 className="text-5xl font-bold mb-4">CERES</h1>
          <p className="text-xl text-white/70">Clouds and the Earth's Radiant Energy System</p>
          <div className="w-32 h-1 bg-orange-400 mt-4"></div>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-orange-400">Overview</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            CERES measures both solar-reflected and Earth-emitted radiation from the top of the atmosphere to the 
            Earth's surface. Understanding these energy flows is critical for climate research and weather prediction.
          </p>
          <p className="text-white/80 leading-relaxed">
            The instrument consists of two identical scanners that measure shortwave (reflected sunlight) and longwave 
            (emitted thermal) radiation, providing comprehensive data on Earth's radiation budget.
          </p>
        </section>

        {/* Technical Specifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-orange-400">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-white/20 bg-white/5 p-6">
              <h3 className="font-semibold text-lg mb-2">Scanners</h3>
              <p className="text-white/70">2 identical scanning radiometers</p>
            </div>
            <div className="border border-white/20 bg-white/5 p-6">
              <h3 className="font-semibold text-lg mb-2">Spectral Channels</h3>
              <p className="text-white/70">Shortwave, Longwave, Total</p>
            </div>
            <div className="border border-white/20 bg-white/5 p-6">
              <h3 className="font-semibold text-lg mb-2">Spatial Resolution</h3>
              <p className="text-white/70">20 km at nadir</p>
            </div>
            <div className="border border-white/20 bg-white/5 p-6">
              <h3 className="font-semibold text-lg mb-2">Scanning</h3>
              <p className="text-white/70">Cross-track and biaxial</p>
            </div>
          </div>
        </section>

        {/* Key Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-orange-400">Key Applications</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-orange-400 mt-1">•</span>
              <span className="text-white/80">Measuring Earth's radiation budget and energy balance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 mt-1">•</span>
              <span className="text-white/80">Cloud radiative forcing and feedback studies</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 mt-1">•</span>
              <span className="text-white/80">Climate model validation and improvement</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 mt-1">•</span>
              <span className="text-white/80">Solar radiation monitoring at Earth's surface</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-400 mt-1">•</span>
              <span className="text-white/80">Aerosol and cloud property retrievals</span>
            </li>
          </ul>
        </section>

        {/* Scientific Impact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-orange-400">Scientific Impact</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            CERES data is fundamental to understanding climate change. By measuring the balance between incoming 
            solar radiation and outgoing thermal radiation, scientists can quantify Earth's energy imbalance and 
            track how it changes over time.
          </p>
          <p className="text-white/80 leading-relaxed">
            The instrument's precise measurements have revealed how clouds affect climate, showing that they both 
            cool Earth by reflecting sunlight and warm it by trapping heat. This dual role makes clouds one of the 
            most important yet uncertain factors in climate projections.
          </p>
        </section>
      </div>
    </div>
  );
}