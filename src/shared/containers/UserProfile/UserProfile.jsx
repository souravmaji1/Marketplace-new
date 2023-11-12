import { memo } from "react";
import { TheArtistPage } from "Components/TheUserProfilePage";

function ArtistPage() {
  return (
    <>
      <TheArtistPage />
    </>
  );
}

export default memo(ArtistPage);
