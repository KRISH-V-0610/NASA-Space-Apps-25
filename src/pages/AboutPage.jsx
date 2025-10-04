// pages/AboutPage.jsx
import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { useSoundEffect } from "../hooks/useSoundEffect";
import { IoArrowBack } from "react-icons/io5";

export default function AboutPage() {
  const navigate = useNavigate();
  const clickSound = useSoundEffect("/sounds/mouse-click.mp3", { volume: 0.5 });
  const contentRef = useRef(null);
  const backButtonRef = useRef(null);

  useEffect(() => {
    // Entrance animation
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
    navigate("/terra25");
  };

  return (
    <div className="font-custom3 w-screen h-screen bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
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
        
        {/* Corner accents */}
        <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/70 group-hover:w-3 group-hover:h-3 transition-all duration-300" />
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/70 group-hover:w-3 group-hover:h-3 transition-all duration-300" />
      </button>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
            About Terra Mission
          </h1>
          
          <div className="text-white/80 text-lg leading-relaxed space-y-4">
            <p>
              NASA's Terra satellite is the flagship of the Earth Observing System (EOS) launched on December 18, 1999. 
              Terra carries five state-of-the-art sensors that study the interactions among the Earth's atmosphere, lands, oceans, and radiant energy.
            </p>
            
            <p>
              The satellite orbits Earth in a sun-synchronous polar orbit, providing global coverage and crossing the equator 
              at approximately 10:30 AM local time each day. This consistent timing allows for optimal lighting conditions and 
              long-term monitoring of Earth's environmental changes.
            </p>
            
            <p>
              Terra's instruments work together to provide comprehensive observations of Earth's climate system, 
              helping scientists better understand our planet's changing environment and climate patterns.
            </p>
          </div>

          <div className="mt-12 p-8 border-2 border-white/20 bg-white/5 backdrop-blur-md">
            <h2 className="text-2xl font-semibold text-white mb-4">Mission Objectives</h2>
            <ul className="text-white/70 text-left space-y-2 max-w-2xl mx-auto">
              <li>• Monitor Earth's climate and environmental changes</li>
              <li>• Study interactions between atmosphere, land, and oceans</li>
              <li>• Track greenhouse gases and aerosols</li>
              <li>• Measure Earth's radiation budget</li>
              <li>• Observe cloud formations and precipitation patterns</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}