import React from "react";
import TitleHeader from "../components/TitleHeader";
import TechIconCard from "../components/TechIconCard";
import { techStackIcons } from "../constants";

const TechStack = () => {
  return (
    <div id="techStack" className="flex-center py-10 md:py-20 md:px-10 px-5">
      <div className="w-full h-full container">
        <TitleHeader
          title="What I Do & How I Can Help You"
          sub="🤝 Let’s Bring Your Ideas to Life"
        />
        <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-1 xl:gap-16 md:gap-10 gap-5 mt-16">
          {techStackIcons.map((techStackIcon, index) => (
            <TechIconCard key={index} techStackIcon={techStackIcon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
