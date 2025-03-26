import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const TechIconCardExperience = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  return (
    <Canvas>
      <ambientLight />
      {/* <directionalLight position={[3, 3, 10]} intensity={5} /> */}
      <Environment preset="forest" />
      <group scale={model.scale} rotation={[0, -Math.PI / 2, 0]}>
        <primitive object={scene.scene} />
      </group>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

export default TechIconCardExperience;
