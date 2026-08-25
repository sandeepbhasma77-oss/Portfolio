import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef } from "react";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense } from "react";

const ScrollPerformance = () => {
  const { gl, setFrameloop } = useThree();
  const isPaused = useRef(false);
  const isVisible = useRef(true);

  useEffect(() => {
    let resumeTimer;

    const pauseWhileScrolling = () => {
      if (!isVisible.current) return;
      if (!isPaused.current) {
        setFrameloop("demand");
        isPaused.current = true;
      }
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => {
        isPaused.current = false;
        setFrameloop("always");
      }, 120);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setFrameloop("never");
      } else if (isVisible.current) {
        setFrameloop("always");
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible.current = entry.isIntersecting;
      if (!entry.isIntersecting) {
        window.clearTimeout(resumeTimer);
        setFrameloop("never");
        return;
      }
      if (!document.hidden) setFrameloop("always");
    }, { threshold: 0.01 });

    observer.observe(gl.domElement);

    window.addEventListener("scroll", pauseWhileScrolling, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", pauseWhileScrolling);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.clearTimeout(resumeTimer);
      setFrameloop("always");
    };
  }, [gl, setFrameloop]);

  return null;
};

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      dpr={isMobile ? 1 : [1, 1.5]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      <ScrollPerformance />
      {/* deep blue ambient */}
      <ambientLight intensity={0.2} color="#1a1a40" />
      {/* Configure OrbitControls to disable panning and control zoom based on device type */}
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={!isTablet} // Disables zoom on tablets
        maxDistance={20} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
      />

      <Suspense fallback={null}>
        <HeroLights compact={isMobile} />
        <Particles count={isMobile ? 30 : isTablet ? 60 : 100} />
        <group
          scale={isMobile ? 0.7 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room enableBloom={!isMobile} />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
