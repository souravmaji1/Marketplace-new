import React from "react";
import { Link } from "react-router-dom";

export const Row = ({ count, name, image }) => {
  return (
    <Link
      to={`/artist`}
      className="w-full h-[84px] pl-[20px] py-3 bg-neutral-700 rounded-2xl justify-between items-center gap-2.5 flex "
    >
      <div className="grow  h-[60px] justify-start items-center gap-5 flex">
        <div className="w-[30px] h-[30px] bg-zinc-800 rounded-2xl gap-2.5 text-center flex items-center justify-center text-zinc-500 text-[16px] font-normal leading-snug">
          {count !== null && count}
        </div>
        <div className="grow shrink basis-0 h-[60px] rounded-2xl justify-center items-center gap-5 flex">
          <div className="flex-col justify-start items-end inline-flex">
            <div className="w-[60px] justify-start items-start gap-2.5 inline-flex">
              <div className="w-[60px] h-[60px] justify-center items-center flex">
                <img
                  className="w-[60px] h-[60px] rounded-[100px]"
                  src={image}
                />
              </div>
            </div>
          </div>
          <div className="grow  shrink basis-0 flex-col justify-center items-start gap-[5px] inline-flex">
            <div className="self-stretch text-white text-[1rem] lg:text-[22px] font-semibold capitalize leading-loose">
              {name}
            </div>
          </div>
        </div>
      </div>

      <div className="justify-end  items-center flex">
        <div className="hidden md:block w-[100px]  text-green-600 text-[16px] font-normal leading-snug">
          +1.41%
        </div>
        <div className="hidden md:block w-[100px]  text-white text-[16px] font-normal leading-snug">
          602
        </div>
        <div className="w-[100px]   text-white text-[16px] font-normal leading-snug">
          12.4 ETH
        </div>
      </div>
    </Link>
  );
};
