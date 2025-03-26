import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const TechIconCardExperience = ({ model }) => {
  return (
    <Canvas>
      <ambientLight />
      {/* <directionalLight position={[3, 3, 10]} intensity={5} /> */}
      <Environment preset="forest" />
      {/* model components */}
      {model()}
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

export default TechIconCardExperience;
