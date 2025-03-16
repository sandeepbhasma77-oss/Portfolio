import React from "react";
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <div className="flex-center my-10 text-white-50">
      <div className="container grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-5">
        <div>
          <p className="md:text-start text-center">Terms & Conditions</p>
        </div>
        <div className="flex justify-center items-center gap-5">
          {socialImgs.map((socialImg, index) => (
            <div
              key={index}
              className="common-card md:size-12 size-10 flexcenter rounded-xl"
            >
              <img src={socialImg.imgPath} alt="icons" />
            </div>
          ))}
        </div>
        <div>
          <p className="md:text-end text-center">© 2024 Adrian Hajdin. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
