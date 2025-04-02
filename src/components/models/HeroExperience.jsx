import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Model } from "./Optimized-room";
import { useMediaQuery } from "react-responsive";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const HeroExperience = () => {
  // const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      gl={{
        toneMapping: THREE.ACESFilmicToneMapping,
        outputEncoding: THREE.sRGBEncoding,
      }}
    >
      <OrbitControls
        enablePan={false}
        enableZoom={isTablet ? false : true}
        maxDistance={20}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <HeroLights />
      <Particles count={100} />

      <group scale={1} position={[0, -2.5, 0]} rotation={[0, -Math.PI / 4, 0]}>
        <Model />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
