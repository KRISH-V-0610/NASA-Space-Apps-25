// components/3DModels/EarthModel.jsx
import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function EarthModel({ modelPath = "/3Dmodels/earth8k.glb", scale = 2.5 }) {
  const { scene, materials } = useGLTF(modelPath);
  const earthRef = useRef();

  useEffect(() => {
    if (materials) {
      Object.values(materials).forEach((mat) => {
        mat.metalness = 0.2;
        mat.roughness = 0.6;
        mat.envMapIntensity = 1.2;
      });
    }
  }, [materials]);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.010;
    }
  });

  return (
    <group ref={earthRef} position={[0, 0, 0]} scale={scale}>
      <primitive object={scene} />
    </group>
  );
}