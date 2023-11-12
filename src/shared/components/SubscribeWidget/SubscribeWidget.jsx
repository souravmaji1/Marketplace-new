import { AstronautImage } from "Assets/images";
import { EnvelopeSimple } from "Assets/svgs";
import { Button } from "Components/Button";
import React from "react";

export const SubscribeWidget = () => {
  return (
    <div className="w-full h-fit md:h-[550px] pt-10 pb-20 bg-zinc-800 flex-col justify-start items-center gap-2.5 inline-flex">
      <div className="w-full h-fit md:h-[430px] pb-[100px] p-[60px] bg-neutral-700 rounded-2xl justify-between items-center gap-20 flex flex-col md:flex-row">
        <div>
          <img
            className="w-[425px] h-[310px] rounded-2xl"
            src={AstronautImage}
          />
        </div>

        <div className="grow h-fit md:h-[272px] flex-col justify-start items-start gap-10 inline-flex">
          <div className="grow text-white text-[38px] font-semibold capitalize leading-10">
            Join our weekly digest
          </div>
          <div className="grow text-white text-[22px] font-normal capitalize leading-9">
            Get exclusive promotions & updates straight to your inbox.
          </div>

          <div className="self-stretch  h-[60px] md:pl-5 px-1 md:px-0 pt-2 md:py-4 bg-white rounded-2xl justify-start items-center gap-5 md:gap-3 flex flex-col md:flex-row">
            <div className="w-full md:grow shrink basis-0 text-zinc-800 text-[16px] font-normal leading-snug flex justify-center items-center">
              <input
                type="text"
                placeholder="Enter your email here"
                className="w-full h-full border-transparent "
              />
            </div>

            <Button className="w-full md:w-[211px] h-[60px] px-[50px] bg-purple-500 rounded-2xl justify-center md:justify-end items-center gap-3 inline-flex">
              <div className="w-5 h-5 relative">
                <EnvelopeSimple />
              </div>
              <div className="text-center text-white text-[16px] font-semibold leading-snug">
                Subscribe
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
