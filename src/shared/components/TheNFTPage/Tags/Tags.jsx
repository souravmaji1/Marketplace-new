import React from "react";

export const Tags = () => {
  return (
    <div className="w-full  lg:w-[605px] h-fit flex-col justify-start items-start gap-5 inline-flex">
      <div className="text-zinc-500 text-[22px] font-semibold capitalize leading-loose">
        Tags
      </div>
      <div className="self-stretch justify-start items-start gap-5 flex-col lg:flex-row inline-flex">
        <div className="w-[150px] h-[46px] px-[30px] bg-neutral-700 rounded-2xl justify-center items-center gap-3 inline-flex">
          <div className="text-center text-white text-[16px] font-semibold uppercase leading-snug">
            Animation
          </div>
        </div>
        <div className="w-[150px] h-[46px] px-[30px] bg-neutral-700 rounded-2xl justify-center items-center gap-3 inline-flex">
          <div className="text-center text-white text-[16px] font-semibold uppercase leading-snug">
            illustration
          </div>
        </div>
        <div className="w-[150px] h-[46px] px-[30px] bg-neutral-700 rounded-2xl justify-center items-center gap-3 inline-flex">
          <div className="text-center text-white text-[16px] font-semibold uppercase leading-snug">
            Moon
          </div>
        </div>
        <div className="w-[150px] h-[46px] px-[30px] bg-neutral-700 rounded-2xl justify-center items-center gap-3 inline-flex">
          <div className="text-center text-white text-[16px] font-semibold uppercase leading-snug">
            Moon
          </div>
        </div>
      </div>
    </div>
  );
};
