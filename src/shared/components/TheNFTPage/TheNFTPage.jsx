import React from "react";

import { NFTs } from "./NFTs";
import { NFTCover } from "./NFTCover";
import { NFTInfo } from "./NFTInfo";
import { Link } from "react-router-dom";
import { ArrowRight } from "Assets/svgs";

export const TheNFTPage = () => {
  return (
    <>
      <NFTCover />
      <NFTInfo />

      <div className="w-full h-[0px] border border-neutral-700"></div>
      <div className={`px-[30px] mt-2 md:px-base`}>
        <div className="w-full h-[60px] justify-center lg:justify-between md:justify-between items-center md:items-start md:gap-[100px] inline-flex">
          <div className="grow shrink basis-0 md:justify-start justify-center items-start gap-2.5 inline-flex">
            <div className="self-stretch text-white text-[38px] font-semibold capitalize leading-10">
              More from this artist
            </div>
          </div>
          <Link
            to={`/artist`}
            className="w-[267px] hidden hover:text-white h-[60px] px-[25px] rounded-2xl  border border-purple-500 justify-center items-center gap-3 md:inline-flex text-center text-white text-[16px] font-semibold leading-snug"
          >
            <div className="w-5 h-5 relative">
              {" "}
              <ArrowRight />
            </div>
            Go To Artist Page
            {/* </div> */}
          </Link>
        </div>
      </div>
      <div>
        <NFTs />
        <div className={`px-[30px] mt-2 md:px-base`}>
          <Link
            to={`/artist`}
            className="w-full mb-2 md:hidden hover:text-white h-[60px] px-[25px] rounded-2xl  border border-purple-500 justify-center items-center gap-3 inline-flex text-center text-white text-[16px] font-semibold leading-snug"
          >
            <div className="w-5 h-5 relative">
              {" "}
              <ArrowRight />
            </div>
            Go To Artist Page
            {/* </div> */}
          </Link>
        </div>
      </div>
    </>
  );
};
