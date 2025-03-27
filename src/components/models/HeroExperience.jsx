import {
  Environment,
  Float,
  Lightformer,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef } from "react";
import { SciFiLaptop } from "./Sci-laptop";
import { Pc } from "./Pc";

const Lightformers = () => {
  const groupRef = useRef();

  return (
    <group ref={groupRef}>
      {/* Top Light */}
      <Lightformer
        intensity={4}
        position={[0, 5, 0]}
        scale={[10, 2, 1]}
        color="white"
        form="rect"
      />

      {/* Back Light */}
      <Lightformer
        intensity={2}
        position={[0, 0, -5]}
        scale={[5, 5, 1]}
        color="cyan"
        form="circle"
      />

      {/* Side Lights */}
      <Lightformer
        intensity={3}
        position={[5, 1, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[2, 4, 1]}
        color="blue"
        form="ring"
      />

      <Lightformer
        intensity={3}
        position={[-5, 1, 0]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[2, 4, 1]}
        color="magenta"
        form="ring"
      />
    </group>
  );
};

const HeroExperience = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={10} color={"#2d00f7"} />

      {/* 
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <group scale={1.3} position={[0, -2, 0]} rotation={[-0.5, 0, 0]}>
          <SciFiLaptop />
        </group>
      </Float>
      */}

      <Environment resolution={256}>
        <Lightformers />
      </Environment>

      <OrbitControls
        minDistance={2}
        maxDistance={5}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 3}
        maxAzimuthAngle={Math.PI / 3}
      />

      <group scale={0.07} position={[0, -2, 0]}>
        <Pc />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
