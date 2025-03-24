import React from "react";

const Button = () => {
  return (
    <div className="w-72 h-16 rounded-full bg-black-200 flex-center group relative overflow-hidden">
      <div
        className="absolute -right-10 origin-center group-hover:right-10 top-1/2 -translate-y-1/2 
      w-[120%] h-[120%] group-hover:size-10 rounded-full bg-white-50 transition-all duration-500"
      />
      <p
        className="uppercase text-lg text-black group-hover:text-white-50 group-hover:-translate-x-5 translate-x-0 
      transition-all duration-500"
      >
        See My Work
      </p>
      <div
        className="group-hover:bg-white-50 rounded-full size-10 absolute right-10 top-1/2 -translate-y-1/2 
      flex-center overflow-hidden"
      >
        <img
          className="size-7 -translate-x-32 group-hover:translate-x-0 
          transition-all duration-500"
          src="/images/arrow-right.svg"
          alt="arrow"
        />
      </div>
    </div>
  );
};

export default Button;
