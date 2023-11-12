import React from "react";

export const InfoCard = ({ title, description, icon }) => {
  return (
    <div className="md:h-[449px] py-5 h-fit px-[30px] pt-2.5 md:pb-[30px] bg-neutral-700 rounded-2xl flex-row md:flex-col justify-start items-center gap-5 inline-flex">
      <div className="w-[300px]  md:w-full md:h-[100px]  lg:h-[250px] h-[150px] relative">
        <img src={icon} className="w-full h-full" />
      </div>
      <div className="self-stretch h-full  md:h-[129px] flex-col justify-start items-center gap-2.5 flex">
        <div className="self-stretch text-left md:text-center text-white text-[22px] font-semibold capitalize leading-loose">
          {title}
        </div>
        <div className="self-stretch grow  text-left md:text-center text-white text-[16px] font-normal leading-snug">
          {description}
        </div>
      </div>
    </div>
  );
};
