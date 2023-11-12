import React from "react";
import { NftCoverImage } from "Assets/images";
// import classes from "./NFTCover.module.css";

export const NFTCover = () => {
  return (
    <div className={`w-full h-fit relative`}>
      <img
        className={`w-full h-[20rem] md:h-[26.25rem] lg:h-[31.25rem] `}
        src={NftCoverImage}
        alt=""
      />
    </div>
  );
};

// tablets - 1024
// mobile - 780
