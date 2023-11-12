import {
  BotAvatar,
  BotPrimaryPhoto,
  BotSecondaryPhoto,
  BotSecondaryPhotoTwo,
  DogPrimaryPhoto,
  DogSecondaryPhoto,
  DogSecondaryPhotoTwo,
  LifePrimaryPhoto,
  MrFoxAvatar,
  MushroomSecondaryPhoto,
  MushroomSecondaryPhotoTwo,
  ShroomieAvatar,
} from "Assets/images";
import { CollectionCard } from "./CollectionCard";

export const TrendingCollection = () => {
  return (
    <div className="inline-flex h-fit w-full flex-col items-center justify-start gap-[60px] bg-zinc-800 py-20">
      <div className={`flex w-full flex-col items-start justify-start`}>
        <div className="w-full text-[38px] font-semibold capitalize leading-10 text-white">
          Trending Collection
        </div>
        <div className="w-full text-[22px] font-normal capitalize leading-9 text-white">
          Checkout our weekly updated trending collection.
        </div>
      </div>

      <div
        className={
          "grid w-full h-fit grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]"
        }
      >
        <CollectionCard
          primaryImg={DogPrimaryPhoto}
          secondaryImg={DogSecondaryPhoto}
          secondaryImgTwo={DogSecondaryPhotoTwo}
          avatar={MrFoxAvatar}
          collectionName={"DSGN  Animals"}
          artistName={"MrFox"}
        />
        <CollectionCard
          primaryImg={LifePrimaryPhoto}
          secondaryImg={MushroomSecondaryPhoto}
          secondaryImgTwo={MushroomSecondaryPhotoTwo}
          avatar={ShroomieAvatar}
          collectionName={"Magic Mushrooms"}
          artistName={"Shroomie"}
        />
        <CollectionCard
          primaryImg={BotPrimaryPhoto}
          secondaryImg={BotSecondaryPhoto}
          secondaryImgTwo={BotSecondaryPhotoTwo}
          avatar={BotAvatar}
          collectionName={"Disco Mechine"}
          artistName={"Bekind2Robots"}
        />
      </div>
    </div>
  );
};
