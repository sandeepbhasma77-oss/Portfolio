import { Box, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Laptop } from "../components/models/Laptop";

const Hero = () => {
  return (
    <section className="">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="bg" />
      </div>
      <div className="grid md:grid-cols-2 relative z-10">
        <div className="flex-col-center">
          <div className="px-20 flex flex-col gap-7">
            <div className="bg-black-200 py-2 px-4 rounded-full w-fit">
              <p>🧠 Crafting Digital Solutions</p>
            </div>
            <div className="xl:text-6xl md:text-3xl text-xl font-semibold w-[33vw] xl:leading-20">
              <h1 className="">
                Transform
                <span className="inline-block mx-3">
                  <img src="/images/person.png" alt="person" />
                </span>
                Ideas into Seamless Digital Experiences
              </h1>
            </div>
            <p className="text-white-50 text-xl">
              Hi, I’m Adrian, a developer based in Croatia with a passion for
              code.
            </p>
            <div className="w-fit cursor-pointer flex items-center gap-1 bg-white-50 text-black rounded-lg px-6 py-3">
              <p>See My Work</p>
              <img src="/images/arrow-right.svg" alt="arrow" />
            </div>
          </div>
        </div>
        <div className="h-dvh">
          <Canvas camera={{ position: [0.7, 5, 5] }}>
            <ambientLight />
            <Environment preset="city" />
            <group scale={20} position={[0, -2, 0]}>
              <Laptop />
            </group>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;
