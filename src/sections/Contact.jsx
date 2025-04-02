import {  OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import TitleHeader from "../components/TitleHeader";
import Button from "../components/Button";
import { Computer } from "../components/models/Computer";

const Contact = () => {
  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form className="w-full flex flex-col gap-7">
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="What’s your good name?"
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="What’s your email address?"
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    placeholder="How can I help you?"
                    rows="5"
                  />
                </div>

                <Button text="Send Message" />
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
                <ambientLight intensity={0.5} color="#fff4e6" />

                <directionalLight
                  position={[5, 5, 3]}
                  intensity={2.5}
                  color="#ffd9b3"
                />

                <directionalLight
                  position={[5, 9, 1]}
                  castShadow
                  intensity={2.5}
                  color="#ffd9b3"
                />

                <OrbitControls
                  enableZoom={false}
                  minPolarAngle={Math.PI / 5}
                  maxPolarAngle={Math.PI / 2}
                />

                <group scale={[1, 1, 1]}>
                  <mesh
                    receiveShadow
                    position={[0, -1.5, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  >
                    <planeGeometry args={[30, 30]} />
                    <meshStandardMaterial color="#a46b2d" />
                  </mesh>
                </group>

                <group scale={0.03} position={[0, -1.49, -2]} castShadow>
                  <Computer />
                </group>
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
