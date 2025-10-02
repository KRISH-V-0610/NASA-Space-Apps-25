
// components/3DModels/AstronautModel.jsx
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function AstronautModel({ 
  currentAnimation, 
  modelPath = "/3Dmodels/astronaut.glb",
  scale = 0.7,
  position = [0, -1, 0.3]
}) {
  const group = useRef();
  const { scene, animations } = useGLTF(modelPath);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && animations.length > 0 && animations[currentAnimation]) {
      Object.values(actions).forEach((a) => a.stop());
      const animationToPlay = animations[currentAnimation];
      if (animationToPlay && actions[animationToPlay.name]) {
        actions[animationToPlay.name].play();
      }
    }
  }, [currentAnimation, actions, animations]);

  return (
    <group ref={group} scale={scale} position={position}>
      <primitive object={scene} />
    </group>
  );
}