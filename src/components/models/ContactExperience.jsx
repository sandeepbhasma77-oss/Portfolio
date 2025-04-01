import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Guy } from "./Guy";
import { Computer } from "./Computer";

const ContactExperience = () => {
  return (
    <Canvas style={{ width: "100%", height: "100%" }}>
      <ambientLight />
      <Environment preset="city" />
      <OrbitControls
        // enableZoom={false}
        // ~60° to the left and ~60° to the right from center
        // minAzimuthAngle={-Math.PI / 3} // left limit (~-60°)
        // maxAzimuthAngle={Math.PI / 3} // right limit (~+60°)
        // maxPolarAngle={Math.PI / 2}
        // minPolarAngle={Math.PI / 2}
      />

      {/* <group rotation={[0, 0.7, 0]} position={[0, -2.6, 0]} scale={2}>
        <Guy />
      </group> */}

      <group>
        <Computer />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
