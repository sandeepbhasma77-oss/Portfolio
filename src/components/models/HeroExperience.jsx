import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Laptop } from "./Laptop";

const HeroExperience = () => {
  return (
    <Canvas camera={{ position: [0.7, 5, 5] }}>
      <ambientLight />
      <Environment preset="city" />
      <group scale={20} position={[0, -2, 0]}>
        <Laptop />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
