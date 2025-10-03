// components/3DModels/OrbitPath.jsx
import React from "react";
import { Line } from "@react-three/drei";
import * as THREE from "three";

export default function OrbitPath({ 
  tiltAngle, 
  radius = 4, 
  color = "#ffffff",
  opacity = 0.25 
}) {
  const points = [];
  const inclination = 0.5;
  const tilt = (tiltAngle * Math.PI) / 180;

  for (let i = 0; i <= 128; i++) {
    const angle = (i / 128) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * inclination;
    const z = Math.sin(angle) * radius;

    const rotatedY = y * Math.cos(tilt) - z * Math.sin(tilt);
    const rotatedZ = y * Math.sin(tilt) + z * Math.cos(tilt);

    points.push(new THREE.Vector3(x, rotatedY, rotatedZ));
  }

  return (
    <Line
      points={points}
      color={color}
      lineWidth={1.5}
      opacity={opacity}
      transparent
    />
  );
}
