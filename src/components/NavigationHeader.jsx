/* eslint-disable no-unused-vars */
// components/NavigationHeader.jsx
import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { useSoundEffect } from "../hooks/useSoundEffect.jsx";
import { IoEarthOutline } from "react-icons/io5";


export default function NavigationHeader({ teamName = "TEAM TERRA" }) {
  const teamNameRef = useRef(null);
  const navLinksRef = useRef([]);
  const clickSound = useSoundEffect("/sounds/mouse-click.mp3", { volume: 0.5 });
  const navigate = useNavigate();

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navItems = [
    { label: "About", path: "/terra-details" },
    { label: "Data Insights", path: "/terra25/data-insights" },
    { label: "Events", path: "/terra25/events" },
    { label: "Analysis Catalog", path: "/terra25/catalog" }
  ];

  // Entrance animation
  useEffect(() => {
    // Set initial state to fully visible
    if (teamNameRef.current) {
      gsap.set(teamNameRef.current, { opacity: 1, y: 0 });
    }

    navLinksRef.current.forEach((link) => {
      if (link) {
        gsap.set(link, { opacity: 1, x: 0 });
      }
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Slide in team name from top
    tl.fromTo(
      teamNameRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.3 }
    );

    // Stagger slide in navigation links
    navLinksRef.current.forEach((link, index) => {
      if (link) {
        tl.fromTo(
          link,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.4)"
          },
          `-=${0.4 - index * 0.1}` // Overlap animations
        );
      }
    });
  }, []);

  const handleMouseEnter = (index, element) => {
    setHoveredIndex(index);

    gsap.to(element, {
      x: 8,
      duration: 0.3,
      ease: "power2.out"
    });

    // Glow effect
    gsap.to(element.querySelector('.nav-glow'), {
      opacity: 0.4,
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (index, element) => {
    setHoveredIndex(null);

    gsap.to(element, {
      x: 0,
      duration: 0.3,
      ease: "power2.out"
    });

    gsap.to(element.querySelector('.nav-glow'), {
      opacity: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleClick = async (path, element) => {
    await clickSound.play();

    // Click animation - scale down then up
    gsap.timeline({
      onComplete: () => navigate(path)
    })
      .to(element, {
        scale: 0.95,
        duration: 0.1,
        ease: "power2.in"
      })
      .to(element, {
        scale: 1,
        duration: 0.2,
        ease: "elastic.out(1, 0.3)"
      });

    // Pulse effect
    gsap.fromTo(
      element.querySelector('.nav-pulse'),
      { scale: 1, opacity: 0.6 },
      {
        scale: 1.5,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      }
    );
  };

  return (
    <div className="fixed top-24 left-12 z-40 flex mt-16 flex-col gap-6" style={{ opacity: 1 }}>
      {/* Team Name */}
      <div ref={teamNameRef} className="relative" style={{ opacity: 1 }}>
        <h1 className="font-custom3 text-white tracking-widest font-bold drop-shadow-lg">
          <span className="text-3xl flex items-center gap-1">
            <span>D</span>
            <IoEarthOutline className="inline-block ml-[-0.15em] mb-1" />

            <span className=" ml-[-0.15em]">Minators</span>
          </span>

        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-3">
        {navItems.map((item, index) => (
          <button
            key={item.label}
            ref={(el) => (navLinksRef.current[index] = el)}
            onClick={(e) => handleClick(item.path, e.currentTarget)}
            onMouseEnter={(e) => handleMouseEnter(index, e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(index, e.currentTarget)}
            className="cursor-target relative group text-left nav-button"
            style={{ opacity: 1 }}
          >
            {/* Glow effect (hidden by default) */}
            <div className="nav-glow absolute inset-0 bg-white/20 blur-xl opacity-0" />

            {/* Pulse effect on click */}
            <div className="nav-pulse absolute inset-0 border-[1px]  
            border-white opacity-0" />

            {/* Main button content */}
            <div className="relative px-5 py-3 border-2 border-white/60 bg-black/70 backdrop-blur-md transition-all duration-300 group-hover:border-white group-hover:bg-black/80 shadow-lg">
              {/* Text */}
              <span className="font-custom3 text-white text-sm tracking-wider font-semibold transition-all duration-300 drop-shadow-md">
                {item.label}
              </span>

              {/* Arrow indicator */}
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>

              {/* Active indicator line */}
              {hoveredIndex === index && (
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-white/80 via-white to-white/80 rounded-r-full shadow-lg" />
              )}
            </div>
          </button>
        ))}
      </nav>
    </div>
  );
}