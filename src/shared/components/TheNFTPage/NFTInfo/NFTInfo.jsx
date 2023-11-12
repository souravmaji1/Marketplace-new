import React from "react";
// import classes from "./NFTInfo.module.css";
import { GlobeIcon } from "Assets/svgs";
import { AuctionTimer } from "../AuctionTimer";
import { Tags } from "../Tags";
import { NebulaKidAvatarImage } from "Assets/images";

export const NFTInfo = () => {
  return (
    <>
      <div className="w-full px-[30px] md:px-base mt-[40px] h-fit py-10 bg-zinc-800 flex-col justify-start items-center gap-[30px] inline-flex">
        <div
          className={`w-full flex flex-col gap-[20px] md:gap-0 md:flex-row md:justify-between items-start`}
        >
          <div className="w-[605px] text-white text-[51px] font-semibold capitalize leading-10">
            The Orbitians
            <div className="w-full mt-2 text-zinc-500 text-[22px] font-normal capitalize leading-9">
              Minted on Sep 30, 2022
            </div>
          </div>

          <AuctionTimer />
        </div>

        {/*  */}
        <div className={`w-full h-fit md:mt-[-150px]`}>
          <div className="w-full lg:w-[605px] h-fit flex-col justify-start items-center gap-[30px] inline-flex">
            <div className="w-full  lg:w-[605px] text-zinc-500 text-[22px] font-bold capitalize leading-9">
              Created By
            </div>
            <div className="w-full lg:w-[605px] h-[31px] rounded-2xl justify-start items-center gap-3 inline-flex">
              <div className="justify-start items-start gap-2.5 flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  <img
                    className="w-6 h-6 rounded-[120px]"
                    src={NebulaKidAvatarImage}
                  />
                </div>
              </div>
              <div className="grow shrink basis-0 text-white text-[22px] font-semibold capitalize leading-loose">
                Orbitian
              </div>
            </div>
            <div className="w-full text-zinc-500 text-[22px] font-bold capitalize leading-9">
              Description
            </div>

            <div className="w-full lg:w-[605px] text-white text-[.9375rem] lg:text-[1.375rem] font-normal leading-9">
              The Orbitians
              <br />
              is a collection of 10,000 unique NFTs on the Ethereum
              blockchain,  There are all sorts of beings in the NFT Universe.
              The most advanced and friendly of the bunch are Orbitians.   They
              live in a metal space machines, high up in the sky and only have
              one foot on Earth.
              <br />
              These Orbitians are a peaceful race, but they have been at war
              with a group of invaders for many generations. The invaders are
              called Upside-Downs, because of their inverted bodies that live on
              the ground, yet do not know any other way to be. Upside-Downs
              believe that they will be able to win this war if they could only
              get an eye into Orbitian territory, so they've taken to make human
              beings their target.
            </div>
            <div className="w-full lg:w-[605px] text-zinc-500 text-[22px] font-bold capitalize leading-9">
              Details
            </div>
            <div className="w-full  lg:w-[605px] h-[35px] justify-start items-start gap-2.5 inline-flex">
              <div className="w-8 h-8 relative">
                <GlobeIcon />
              </div>
              <div className="grow shrink basis-0 text-white text-[22px] font-normal leading-9">
                View on Etherscan
              </div>
            </div>
            <div className="w-full  lg:w-[605px] h-[35px] justify-start items-start gap-2.5 inline-flex">
              <div className="w-8 h-8 relative">
                <GlobeIcon />
              </div>
              <div className="grow shrink basis-0 text-white text-[22px] font-normal leading-9">
                View Original
              </div>
            </div>

            <Tags />
          </div>
        </div>
      </div>
    </>
  );
};
