import React from "react";
import { ArtistProfileCover, ArtistProfilePhoto } from "Assets/images";
import classes from "./ArtistCover.module.css";

export const ArtistCover = () => {
  return (
    <div className={`w-full h-[370px] relative`}>
      <img
        className={`w-full h-[320px] ${classes.ArtistCover}`}
        src={ArtistProfileCover}
        alt=""
      />
      <img
        src={ArtistProfilePhoto}
        className={`absolute m-auto left-[115px] bottom-[-10px] w-[120px] h-[120px] ${classes.ArtistProfilePhoto}`}
        alt=""
      />
    </div>
  );
};

// tablets - 1024
// mobile - 780
