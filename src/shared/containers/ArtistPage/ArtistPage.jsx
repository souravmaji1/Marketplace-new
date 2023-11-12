import { memo } from "react";
import { TheArtistPage } from "Components/TheArtistPage";

function ArtistPage() {
  return (
    <>
      <TheArtistPage />
    </>
  );
}

export default memo(ArtistPage);
