import { useProgress } from "@react-three/drei";
import React from "react";

const ModelLoader = () => {
  const { progress } = useProgress();

  return (
    <div
      className={`absolute inset-0 flex-center ${
        progress === 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="loader"></div>
    </div>
  );
};

export default ModelLoader;
