import React, { useEffect } from "react";
// import { ArtistProfileCover, ArtistProfilePhoto } from "Assets/images";
import classes from "./ArtistInfo.module.css";
import {
  CopyIcon,
  DiscordLogo,
  GlobeIcon,
  InstagramLogo,
  PlusIcon,
  TwitterLogo,
  YoutubeLogo,
} from "Assets/svgs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useAddress } from "@thirdweb-dev/react";

export const ArtistInfo = () => {
  const navigate = useNavigate();
  const address = useAddress();
  const {
    isLoggedIn,
    user: { profile },
  } = useSelector((state) => state.appSlice);

  useEffect(() => {
    if (!address || !isLoggedIn) {
      navigate("/");
    }
  }, []);
  return (
    <div className="w-full px-[30px] md:px-base mt-[40px] h-fit py-10 bg-zinc-800 flex-col justify-start items-center gap-[30px] inline-flex">
      <div
        className={`w-full flex md:justify-between items-center ${classes.ArtistName}`}
      >
        <div className="w-[510px] text-white text-[51px] font-semibold capitalize leading-10">
          {profile?.name || "Animakid"}
        </div>

        <div
          className={`flex gap-[20px] items-center ${classes.WalletDetails}`}
        >
          <div
            className="w-[166px] h-[60px] bg-purple-500 rounded-2xl justify-center items-center gap-3 inline-flex cursor-pointer"
            onClick={() => navigate("/create-nft")}
          >
            <div className="text-center text-white text-[16px] font-semibold leading-snug">
              Mint NFT
            </div>
          </div>

          <div className="w-[186px] h-[60px] px-[50px] bg-purple-500 rounded-2xl justify-center items-center gap-3 inline-flex">
            <div className="w-5 h-5 relative">
              <CopyIcon />
            </div>
            <div className="text-center text-white text-[16px] font-semibold leading-snug">
              0xc0E3...B79C
            </div>
          </div>
          {/*  */}
          <div className="w-[145px] h-[60px] px-[30px] rounded-2xl border border-purple-500 justify-center items-center gap-3 inline-flex">
            <div className="w-5 h-5 relative">
              <PlusIcon />
            </div>
            <div className="text-center text-white text-[16px] font-semibold leading-snug">
              Follow
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className={`w-full`}>
        <div className="w-full md:w-[599px] h-fit flex-col justify-start items-start gap-[30px] inline-flex">
          <div className="w-full rounded-2xl md:justify-start md:items-start gap-5 md:flex grid grid-cols-3">
            <div className="md:grow shrink basis-0 rounded-2xl flex-col justify-start items-start inline-flex">
              <div className="self-stretch text-white text-[20px] md:text-[28px] font-bold capitalize leading-10">
                250k+
              </div>
              <div className="self-stretch text-white text-[18px] md:text-[22px] font-normal capitalize leading-9">
                Volume
              </div>
            </div>
            <div className="md:grow shrink basis-0 rounded-2xl flex-col justify-start items-start inline-flex">
              <div className="self-stretch text-white text-[20px] md:text-[28px] font-bold capitalize leading-10">
                50+
              </div>
              <div className="self-stretch text-white text-[18px] md:text-[22px] font-normal capitalize leading-9">
                NFTs Sold
              </div>
            </div>
            <div className="md:grow shrink basis-0 rounded-2xl flex-col justify-start items-start inline-flex">
              <div className="self-stretch text-white text-[20px] md:text-[28px] font-bold capitalize leading-10">
                3000+
              </div>
              <div className="self-stretch text-white text-[18px] md:text-[22px] font-normal capitalize leading-9">
                Followers
              </div>
            </div>
          </div>
          <div className="self-stretch md:mb-0 mb-5 h-20 flex-col justify-start items-start gap-2.5 flex">
            <div className="self-stretch text-zinc-500 text-[22px] font-bold capitalize leading-9">
              Bio
            </div>
            <div className="self-stretch text-white text-[22px] font-normal capitalize leading-9">
              The internet's friendliest designer kid.
            </div>
          </div>
          <div className="self-stretch h-[77px] flex-col justify-start items-start gap-2.5 flex">
            <div className="text-zinc-500 text-[22px] font-bold capitalize leading-9">
              Links
            </div>
            <div className="justify-start items-start gap-2.5 inline-flex">
              <div className="w-8 h-8 relative">
                <GlobeIcon />
              </div>
              <div className="w-8 h-8 relative">
                <img src={DiscordLogo} />
              </div>
              <div className="w-8 h-8 relative">
                <img src={YoutubeLogo} />
              </div>
              <div className="w-8 h-8 relative">
                <img src={TwitterLogo} />
              </div>
              <div className="w-8 h-8 relative">
                <img src={InstagramLogo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// tablets - 1024
// mobile - 780
