import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect } from "react";

const Man = () => {
  const scene = useGLTF("/models/man.glb");
  const { actions } = useAnimations(scene.animations, scene.scene);

  useEffect(() => {
    actions["Vinnie idle"]?.play();
  }, [scene]);

  return (
    <group scale={3} position={[0, -2, 0]} rotation={[0, -Math.PI / 7, 0]}>
      <primitive object={scene.scene} />
    </group>
  );
};

export default Man;
