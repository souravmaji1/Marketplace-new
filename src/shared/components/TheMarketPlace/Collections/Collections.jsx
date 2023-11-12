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
import { CollectionCard } from "Components/TrendingCollection";
import React from "react";

export const Collections = () => {
  return (
    <div className="w-full h-fit px-[30px] md:px-base pt-[60px] pb-20 mb-1 bg-neutral-700 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  justify-start items-center gap-[30px] grid">
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
  );
};
