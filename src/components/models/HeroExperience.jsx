import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Model } from "./Optimized-room";

const HeroExperience = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      gl={{
        toneMapping: THREE.ACESFilmicToneMapping,
        outputEncoding: THREE.sRGBEncoding,
      }}
      shadows
    >
      <OrbitControls
        enablePan={false}
        maxDistance={20}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <ambientLight intensity={0.5} color={"blue"} />

      {/* lamp's light */}
      <spotLight
        position={[4, 5, 4]}
        angle={0.15}
        penumbra={0.2}
        intensity={100}
        color="white"
      />

      <spotLight
        position={[-3, 5, 5]}
        angle={30}
        penumbra={1}
        intensity={150}
        color="#ffb199"
      />

      <pointLight position={[0, 1, 0]} intensity={30} color="#4cc9f0" />

      <group
        scale={1.3}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Model />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
