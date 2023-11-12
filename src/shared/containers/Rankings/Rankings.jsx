import { ArtistRankings } from "Components/ArtistRankings";
import { memo } from "react";
// import { ArtistRankings } from "Components/ArtistRankings";

function Rankings() {
  return (
    <div className={`px-[30px] md:px-base`}>
      <ArtistRankings />
    </div>
  );
}

export default memo(Rankings);
