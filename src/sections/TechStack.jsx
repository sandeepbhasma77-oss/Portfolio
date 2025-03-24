import React from "react";
import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/TechIconCardExperience";
import { techStackIcons } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#techStack", // wrapper
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="techStack" className="flex-center section-padding">
      <div className="w-full h-full container">
        <TitleHeader
          title="What I Do & How I Can Help You"
          sub="🤝 Let’s Bring Your Ideas to Life"
        />
        <div className="tech-grid">
          {techStackIcons.map((techStackIcon, index) => (
            <div
              key={index}
              className="common-card tech-card xl:rounded-full rounded-lg"
            >
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIconCardExperience model={techStackIcon.modelPath} />
                </div>
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
