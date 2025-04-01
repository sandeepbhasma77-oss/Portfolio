import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Room } from "./Room";
import * as THREE from "three";

const HeroExperience = () => {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }} shadows>
      <OrbitControls />
      <ambientLight intensity={0.3} color="#ffffff" />

      <directionalLight position={[0, 7, 0]} intensity={1.5} color="#780000" />

      <spotLight
        position={[0, 15, 0]}
        angle={0.4}
        decay={0.5}
        penumbra={0.9}
        intensity={50}
        color="#0466c8"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <spotLight
        position={[0.1, 0.2, 0.3]}
        angle={0.7}
        decay={0.5}
        penumbra={0.9}
        intensity={10}
        color="#7209b7"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Room geometry group */}
      <group position={[0, -3.5, 0]} rotation={[0, -Math.PI / 4, 0]}>
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
