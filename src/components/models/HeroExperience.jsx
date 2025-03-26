import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Laptop } from "./Laptop";
import { SciFiLaptop } from "./Sci-laptop";

const HeroExperience = () => {
  return (
    <Canvas camera={{ position: [0.7, 5, 5] }}>
      <ambientLight />
      <Environment preset="city" />
      {/* <group scale={20} position={[0, -2, 0]}>
        <Laptop />
      </group> */}

      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <group scale={1.3} position={[0, -2, 0]} rotation={[-0.5, 0, 0]}>
          <SciFiLaptop />
        </group>
      </Float>
    </Canvas>
  );
};

export default HeroExperience;
