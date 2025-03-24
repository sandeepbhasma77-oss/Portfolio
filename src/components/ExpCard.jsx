import React from "react";

const ExpCard = ({ expCard }) => {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between items-start mb-40 ">
      <div className="md:w-[25vw] md:translate-y-0 translate-y-10 break-inside-avoid-column exp-card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black curtain-card"></div>
        <div className="common-card rounded-xl md:p-10 p-5 mb-5">
          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, i) => (
              <img
                key={i}
                src="/images/silver-star.png"
                alt="star"
                className="size-12 -ms-3"
              />
            ))}
          </div>
          <div className="mb-5">
            <p className="text-white-50 md:text-lg">{expCard.desc}</p>
          </div>
          <div>
            <img src={expCard.imgPath} alt="exp-img" />
          </div>
        </div>
      </div>
      <div className=" md:w-[45vw] md:px-0 ps-20 overflow-hidden">
        <div className="expText">
          <h1 className="font-semibold text-3xl">{expCard.title}</h1>
          <p className="my-5 text-white-50">🗓️&nbsp;{expCard.date}</p>
          <p className="text-[#839CB5] italic">Responsibilities</p>
          <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
            {expCard.responsibilities.map((responsibility, index) => (
              <li key={index} className="text-lg">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExpCard;
