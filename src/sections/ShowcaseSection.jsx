import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function AppShowcase() {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            // markers: true,
          },
        }
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="w-full xl:mt-20 mt-0 flex-center">
      <div className="md:px-20 px-5 mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
          {/* Ryde App Showcase - Takes full width on mobile, half width on desktop */}
          <div ref={rydeRef} className="lg:col-span-7">
            <div className="h-full flex flex-col justify-between">
              <div className="h-[80%]">
                <img
                  src="/images/project1.png"
                  alt="Ryde App Interface"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="space-y-5 mt-5">
                <div className="flex gap-2 mb-4">
                  <div className="bg-black-200 py-2 px-4 rounded-full w-fit">
                    <p>🧠 Design</p>
                  </div>
                  <div className="bg-black-200 py-2 px-4 rounded-full w-fit">
                    <p>🧠 Development</p>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold xl:max-w-[40vw]">
                  On-Demand Rides Made Simple with a Powerful, User-Friendly App
                  called Ryde
                </h2>
              </div>
            </div>
          </div>

          {/* Right column for Library and YC Directory - Stacked on mobile, column on desktop */}
          <div className="xl:col-span-5 flex md:flex-row flex-col xl:flex-col gap-5">
            {/* Library Management Platform */}
            <div ref={libraryRef}>
              <img
                src="/images/project2.png"
                alt="Library Management Platform"
                className="w-full object-cover"
              />
              <h2 className="text-xl md:text-2xl font-bold mt-5">
                The Library Management Platform
              </h2>
            </div>

            {/* YC Directory */}
            <div ref={ycDirectoryRef}>
              <img
                src="/images/project3.png"
                alt="YC Directory App"
                className="w-full object-cover"
              />
              <h2 className="text-xl md:text-2xl font-bold mt-5">
                YC Directory - A Startup Showcase App
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
