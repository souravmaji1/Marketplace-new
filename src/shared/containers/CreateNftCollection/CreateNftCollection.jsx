import { memo } from "react";
import { CreateNftCollectionPage } from "Components/CreateNftCollectionPage";

function CreateNftCollection() {
  return (
    <>
      <CreateNftCollectionPage />
    </>
  );
}

export default memo(CreateNftCollection);
