// components/3DModels/TerraSatellite.jsx
import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function TerraSatellite({ 
  tiltAngle, 
  modelPath = "/3Dmodels/terra2.glb",
  scale = 0.00003,
  orbitSpeed = 0.002,
  orbitRadius = 4,
  onClick
}) {
  const { scene } = useGLTF(modelPath);
  const { gl } = useThree();
  const terraRef = useRef();
  const angleRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);
  const scaleRef = useRef(scale);

  useFrame(() => {
    const currentSpeed = isHovered ? orbitSpeed * 0.1 : orbitSpeed;
    angleRef.current += currentSpeed;

    const inclination = 0.5;
    const tilt = (tiltAngle * Math.PI) / 180;

    const x = Math.cos(angleRef.current) * orbitRadius;
    const y = Math.sin(angleRef.current) * inclination;
    const z = Math.sin(angleRef.current) * orbitRadius;

    const rotatedY = y * Math.cos(tilt) - z * Math.sin(tilt);
    const rotatedZ = y * Math.sin(tilt) + z * Math.cos(tilt);

    if (terraRef.current) {
      terraRef.current.position.set(x, rotatedY, rotatedZ);
      terraRef.current.lookAt(0, 0, 0);
      
      terraRef.current.rotation.z += isHovered ? 0.001 : 0.008;
      terraRef.current.rotation.x = Math.PI / 8;

      const targetScale = isHovered ? scale * 1.5 : scale;
      scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, targetScale, 0.1);
      terraRef.current.scale.set(scaleRef.current, scaleRef.current, scaleRef.current);
    }
  });

  const handlePointerOver = () => {
    setIsHovered(true);
    gl.domElement.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    setIsHovered(false);
    gl.domElement.style.cursor = 'default';
  };

  return (
    <group>
      {/* Large invisible hitbox for easy clicking */}
      <mesh
        position={[
          terraRef.current?.position.x || 0,
          terraRef.current?.position.y || 0,
          terraRef.current?.position.z || 0
        ]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onClick={onClick}
      >
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* Actual satellite model */}
      <primitive 
        ref={terraRef} 
        object={scene}
      />
    </group>
  );
}