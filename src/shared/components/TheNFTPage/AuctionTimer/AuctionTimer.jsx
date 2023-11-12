import { Button } from "Components/Button";
import React from "react";

export const AuctionTimer = () => {
  return (
    <div className="w-full md:w-[295px] h-[237px] p-[30px] bg-neutral-700 rounded-2xl flex-col justify-start items-start gap-[30px] inline-flex">
      <div className="self-stretch w-full h-[87px] bg-neutral-700 bg-opacity-50 rounded-2xl backdrop-blur-[10px] flex-col justify-end items-start gap-2.5 flex">
        <div className="self-stretch text-white text-[12px] font-normal leading-3">
          Auction ends in:
        </div>
        <div className="self-stretch w-full justify-center md:justify-start items-start gap-2.5 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
            <div className="self-stretch text-white text-[38px] font-bold capitalize leading-10">
              59
            </div>
            <div className="self-stretch grow shrink basis-0 text-white text-[12px] font-normal leading-3">
              Hours
            </div>
          </div>
          <div className="text-white text-[28px] font-bold capitalize leading-10">
            :
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
            <div className="self-stretch text-white text-[38px] font-bold capitalize leading-10">
              59
            </div>
            <div className="self-stretch grow shrink basis-0 text-white text-[12px] font-normal leading-3">
              Minutes
            </div>
          </div>
          <div className="text-white text-[28px] font-bold capitalize leading-10">
            :
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-[5px] inline-flex">
            <div className="self-stretch text-white text-[38px] font-bold capitalize leading-10">
              59
            </div>
            <div className="self-stretch grow shrink basis-0 text-white text-[12px] font-normal leading-3">
              Seconds
            </div>
          </div>
        </div>
      </div>
      <Button className="self-stretch h-[60px] px-[50px] bg-purple-500 rounded-2xl justify-center items-center gap-3 inline-flex text-center text-white text-[16px] font-semibold leading-snug">
        Place Bid
      </Button>
    </div>
  );
};
