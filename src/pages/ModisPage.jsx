// pages/ModisPage.jsx
import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { IoArrowBack } from "react-icons/io5";
import { useSoundEffect } from "../hooks/useSoundEffect";

export default function ModisPage() {
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
          <h1 className="text-5xl font-bold mb-4">MODIS</h1>
          <p className="text-xl text-white/70">Moderate Resolution Imaging Spectroradiometer</p>
          <div className="w-32 h-1 bg-cyan-400 mt-4"></div>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Overview</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            MODIS is a key instrument aboard Terra that views the entire Earth's surface every 1 to 2 days, 
            acquiring data in 36 spectral bands ranging from 0.4 μm to 14.4 μm. It plays a vital role in the 
            development of validated, global, interactive Earth system models.
          </p>
          <p className="text-white/80 leading-relaxed">
            The instrument captures data about large-scale global dynamics including changes in Earth's cloud 
            cover, radiation budget, and processes occurring in the oceans, on land, and in the lower atmosphere.
          </p>
        </section>

        {/* Technical Specifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-white/20 bg-white/5 p-6">
              <h3 className="font-semibold text-lg mb-2">Spectral Coverage</h3>
              <p className="text-white/70">36 spectral bands (0.4 - 14.4 μm)</p>
            </div>
            <div className="border border-white/20 bg-white/5 p-6">
              <h3 className="font-semibold text-lg mb-2">Spatial Resolution</h3>
              <p className="text-white/70">250m, 500m, and 1000m</p>
            </div>
            <div className="border border-white/20 bg-white/5 p-6">
              <h3 className="font-semibold text-lg mb-2">Swath Width</h3>
              <p className="text-white/70">2,330 km</p>
            </div>
            <div className="border border-white/20 bg-white/5 p-6">
              <h3 className="font-semibold text-lg mb-2">Coverage</h3>
              <p className="text-white/70">Global every 1-2 days</p>
            </div>
          </div>
        </section>

        {/* Key Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Key Applications</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">•</span>
              <span className="text-white/80">Ocean color monitoring and phytoplankton productivity</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">•</span>
              <span className="text-white/80">Land surface temperature and vegetation indices</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">•</span>
              <span className="text-white/80">Cloud properties and atmospheric water vapor</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">•</span>
              <span className="text-white/80">Fire detection and burn scar mapping</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">•</span>
              <span className="text-white/80">Snow and ice cover monitoring</span>
            </li>
          </ul>
        </section>

        {/* Scientific Impact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Scientific Impact</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            MODIS data has revolutionized our understanding of Earth's climate system. Its measurements have 
            been instrumental in tracking deforestation, monitoring drought conditions, studying ocean ecosystems, 
            and detecting changes in polar ice sheets.
          </p>
          <p className="text-white/80 leading-relaxed">
            The instrument's 25+ years of continuous observations provide an invaluable long-term dataset for 
            climate research and environmental monitoring.
          </p>
        </section>
      </div>
    </div>
  );
}