import React from "react";
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="left">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <img src={socialImg.imgPath} alt="social icon" />
            </div>
          ))}
        </div>
        <div className="right">
          <p>© 2024 Adrian Hajdin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
