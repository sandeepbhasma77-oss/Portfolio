import React from "react";

const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById("counter");
        if (target && id) {
          const offset = window.innerHeight * 0.15; // scroll 10% down into the section
          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className} cursor-pointer`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" className="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
