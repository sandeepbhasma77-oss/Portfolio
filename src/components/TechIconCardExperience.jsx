import { useGSAP } from "@gsap/react";
import {
  Environment,
  OrbitControls,
  useGLTF,
  useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { useRef } from "react";

const TechIconCardExperience = ({ model }) => {
  const scene = useGLTF(model);
  const group = useRef();
  const { progress } = useProgress();

  useGSAP(() => {
    if (progress === 100) {
      gsap.to(group.current.rotation, {
        duration: 2,
        x: Math.PI / 2,
        ease: "power2.inOut",
      });
    }
  });

  return (
    <Canvas>
      <ambientLight />
      <directionalLight position={[3, 3, 10]} intensity={5} />
      <Environment preset="apartment" />
      <group ref={group}>
        <primitive
          object={scene.scene}
          scale={0.05}
          rotation={[0, -Math.PI / 2, 0]}
        />
      </group>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

export default TechIconCardExperience;
