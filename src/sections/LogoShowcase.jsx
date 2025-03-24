import React from "react";
import { logoIconsList } from "../constants";
import LogoIcon from "../components/LogoIcon";

const LogoShowcase = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-left-box w-36 h-full absolute bottom-0 left-0 z-20"></div>
      <div className="gradient-right-box w-36 h-full absolute bottom-0 right-0 z-20"></div>
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
