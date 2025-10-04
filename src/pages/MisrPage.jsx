// pages/MisrPage.jsx
import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { IoArrowBack } from "react-icons/io5";
import { useSoundEffect } from "../hooks/useSoundEffect";

export default function MisrPage() {
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
          <h1 className="text-5xl font-bold mb-4">MISR</h1>
          <p className="text-xl text-white/70">Multi-angle Imaging SpectroRadiometer</p>
          <div className="w-32 h-1 bg-emerald-400 mt-4"></div>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Overview</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            MISR is unique among Earth-observing instruments in its ability to view Earth simultaneously at nine 
            different angles. This multi-angle viewing capability provides unprecedented information about atmospheric 
            aerosols, cloud properties, and surface characteristics.
          </p>
          <p className="text-white/80 leading-relaxed">
            The instrument uses nine separate digital cameras pointed at different angles, all viewing Earth in four 
            different wavelengths of light, capturing a total of 36 different views of each location on Earth.
          </p>
        </section>

        {/* Technical Specifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-white/20 bg-white/5 p-6">
              <h3 className="font-semibold text-lg mb-2">Viewing Angles</h3>
              <p className="text-white/70">9 cameras (0°, ±26.1°, ±45.6°, ±60.0°, ±70.5°)</p>
            </div>
            <div className="border border-white/20 bg-white/5 p-6">
              <h3 className="font-semibold text-lg mb-2">Spectral Bands</h3>
              <p className="text-white/70">4 bands (446, 558, 672, 866 nm)</p>
            </div>
            <div className="border border-white/20 bg-white/5 p-6">
              <h3 className="font-semibold text-lg mb-2">Spatial Resolution</h3>
              <p className="text-white/70">275m to 1.1 km</p>
            </div>
            <div className="border border-white/20 bg-white/5 p-6">
              <h3 className="font-semibold text-lg mb-2">Swath Width</h3>
              <p className="text-white/70">360 km</p>
            </div>
          </div>
        </section>

        {/* Key Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Key Applications</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span className="text-white/80">Aerosol type and distribution mapping</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span className="text-white/80">Cloud height and 3D structure determination</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span className="text-white/80">Surface bidirectional reflectance studies</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span className="text-white/80">Plume height measurements from volcanoes and fires</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 mt-1">•</span>
              <span className="text-white/80">Land surface characterization and change detection</span>
            </li>
          </ul>
        </section>

        {/* Scientific Impact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-emerald-400">Scientific Impact</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            MISR's multi-angle observations have revolutionized aerosol science, providing crucial data for understanding 
            air quality, climate forcing, and the role of atmospheric particles in Earth's radiation budget.
          </p>
          <p className="text-white/80 leading-relaxed">
            The instrument's ability to measure particle shapes and types has improved climate models and helped 
            scientists distinguish between natural and human-made aerosols in the atmosphere.
          </p>
        </section>
      </div>
    </div>
  );
}