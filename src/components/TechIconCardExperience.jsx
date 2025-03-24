import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const TechIconCardExperience = ({ model }) => {
  const scene = useGLTF(model);

  return (
    <Canvas>
      <ambientLight />
      <directionalLight position={[3, 3, 10]} intensity={5} />
      <Environment preset="apartment" />
      <primitive
        object={scene.scene}
        scale={0.05}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

export default TechIconCardExperience;
