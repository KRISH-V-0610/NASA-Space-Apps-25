// pages/TerraDetailsPage.jsx
import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Html } from "@react-three/drei";
import { gsap } from "gsap";
import TargetCursor from "../components/ui/TargetCursor";

function DetailedTerraSatellite() {
  const { scene } = useGLTF("/3Dmodels/terra2.glb");
  const terraRef = useRef();

  useFrame(() => {
    if (terraRef.current) {
      terraRef.current.rotation.y += 0.005;
    }
  });

  return <primitive ref={terraRef} object={scene} scale={0.0008} />;
}

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-transparent border-t-cyan-400 rounded-full animate-spin"></div>
        </div>
        <p className="text-white text-lg font-light tracking-wider">Loading Details</p>
      </div>
    </Html>
  );
}

export default function TerraDetailsPage() {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.from(contentRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
      });
    }
  }, []);

  return (
    <div className="w-screen h-screen  relative overflow-hidden">


      hii
    </div>
  );
}