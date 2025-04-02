import React from "react";

const Button = ({ text, className }) => {
  return (
    <div className={`${className} cursor-pointer`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" className="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Button;
