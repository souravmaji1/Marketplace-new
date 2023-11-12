import React from "react";
import { Link } from "react-router-dom";

export const CreatedNFTCard = ({
  artistName,
  artistAvatar,
  NFTImage,
  NFTName,
}) => {
  return (
    <Link
      // to={`/nft`}
      className="h-[429px] bg-neutral-700 rounded-2xl flex-col justify-start items-center inline-flex"
    >
      <div className="self-stretch h-[296px] rounded-tl-2xl rounded-tr-2xl flex-col justify-start items-start gap-2.5 flex">
        <img
          className="self-stretch h-[296px] rounded-tl-2xl rounded-tr-2xl"
          src={NFTImage}
        />
      </div>
      <div className="self-stretch bg-primary-bg h-[173px] px-[30px] pt-5 pb-[25px] flex-col justify-start items-start rounded-bl-2xl rounded-br-2xl gap-[25px] flex">
        <div className="self-stretch h-[60px] flex-col justify-start items-start gap-[5px] flex">
          <div className="self-stretch text-white text-[22px] font-semibold capitalize leading-loose">
            {NFTName}
          </div>
          <div className="self-stretch justify-start items-start gap-3 inline-flex">
            <div className="justify-start items-start gap-2.5 flex">
              <div className="w-6 h-6 justify-center items-center flex">
                <img className="w-6 h-6 rounded-[120px]" src={artistAvatar} />
              </div>
            </div>
            <div className="grow shrink basis-0 text-white text-[16px] font-normal leading-snug">
              {artistName}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
