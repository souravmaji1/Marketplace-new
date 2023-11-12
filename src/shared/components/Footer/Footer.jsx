import {
  BrandIcon,
  DiscordLogo,
  InstagramLogo,
  StoreFrontIcon,
  TwitterLogo,
  YoutubeLogo,
} from "Assets/svgs";
import { Button } from "Components/Button";
import React from "react";

export const Footer = () => {
  return (
    <div className="w-full h-fit lg:h-[334px] px-[30px] gap-[35px] lg:px-base py-10 bg-neutral-700 flex-col justify-start items-center lg:gap-[30px] inline-flex">
      <div className="w-full h-fit lg:h-[191px] gap-[30px] items-start flex lg:flex-row flex-col justify-between">
        {/*  */}
        <div className="w-[30%] h-fit lg:h-[191px] pr-[84px] flex-col justify-start items-start gap-[30px] inline-flex">
          <div className="w-[243.41px] h-8 relative flex gap-5">
            <img src={StoreFrontIcon} alt="" />
            <img src={BrandIcon} alt="" />
            {/* <div className="w-8+ h-8 left-0 top-0 absolute" /> */}
          </div>
          <div className="flex-col justify-start items-start gap-5 flex">
            <div className="w-[238px] text-stone-300 text-[16px] font-normal leading-snug">
              NFT marketplace for Gatochain Foundation.
            </div>
            <div className="flex-col justify-start items-start gap-[15px] flex">
              <div className="w-[238px] h-[18px] text-stone-300 text-[16px] font-normal leading-snug">
                Join our community
              </div>
              <div className="justify-start items-start gap-2.5 inline-flex">
                <div className="w-8 h-8 relative">
                  <img src={DiscordLogo} alt="" />
                </div>
                <div className="w-8 h-8 relative">
                  <img src={YoutubeLogo} alt="" />
                </div>
                <div className="w-8 h-8 relative">
                  <img src={TwitterLogo} alt="" />
                </div>
                <div className="w-8 h-8 relative">
                  <img src={InstagramLogo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="w-[20%] h-fit flex-col justify-start items-start gap-[25px] inline-flex">
          <div className="text-white text-[22px] font-bold capitalize leading-9">
            Explore
          </div>
          <div className="flex-col justify-start items-start gap-5 flex">
            <div className="text-stone-300 text-[16px] font-normal leading-snug">
              Marketplace
            </div>
            <div className="text-stone-300 text-[16px] font-normal leading-snug">
              Rankings
            </div>
            <div className="text-stone-300 text-[16px] font-normal leading-snug">
              Connect a wallet
            </div>
          </div>
        </div>
        {/*  */}

        <div className="w-full lg:w-[40%] h-fit flex-col justify-start items-start gap-[25px] inline-flex">
          <div className="text-white text-[22px] font-bold capitalize leading-9">
            Join our weekly digest
          </div>
          <div className="flex-col w-full justify-start items-start gap-5 flex">
            <div className="w-full text-stone-300 text-[16px] font-normal leading-snug">
              Get exclusive promotions & updates straight to your inbox.
            </div>
            {/*  */}
            <div className="self-stretch w-full h-[60px] md:pl-5 px-1 md:px-0 pt-2 md:py-4 bg-white rounded-2xl justify-start items-center gap-[40px] md:gap-3 flex flex-col md:flex-row">
              <div className="w-full md:grow shrink basis-0 text-zinc-800 text-[16px] font-normal leading-snug flex justify-center items-center">
                <input
                  type="text"
                  placeholder="Enter your email here"
                  className="w-full h-full border-transparent "
                />
              </div>

              <Button className="w-full md:w-[211px] h-[60px] px-[50px] bg-purple-500 rounded-2xl justify-center md:justify-end items-center gap-3 inline-flex">
                <div className="text-center text-white text-[16px] font-semibold leading-snug">
                  Subscribe
                </div>
              </Button>
            </div>
            {/*  */}
          </div>
        </div>
      </div>

      <div className="w-full mt-[50px] h-[33px] flex-col justify-start items-start gap-5 inline-flex">
        <div className="self-stretch h-[0px] border border-zinc-500"></div>
        <div className="self-stretch text-stone-300 text-[12px] font-normal leading-3">
          Ⓒ Gatochain Foundation
        </div>
      </div>
    </div>
  );
};
