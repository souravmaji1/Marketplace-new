import React from "react";
import { Highlight } from "./Highlight";
import { LifePrimaryPhoto, ShroomieAvatar } from "Assets/images";
const highlights = [LifePrimaryPhoto, "https://via.placeholder.com/330x296"];
export const NFTHighlight = () => {
  return (
    <div className="w-full h-[660px] flex-col justify-start items-center inline-flex">
      <Highlight image={highlights[0]} />
    </div>
  );
};
