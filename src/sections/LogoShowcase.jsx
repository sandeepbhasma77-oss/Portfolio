import React from "react";
import { logoIconsList } from "../constants";
import LogoIcon from "../components/LogoIcon";

const LogoShowcase = () => {
  return (
    <div className="md:my-20 my-10 relative">
      {/* Gradients edges */}
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoShowcase;
