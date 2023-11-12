// import { CollectionCard } from "./CollectionCard";

// import { RocketLaunchIcon } from "Assets/svgs";
import {
  Basketball,
  Camera,
  MagicWand,
  MusicNotes,
  PainBrushIcon,
  Planet,
  Swatches,
  VideoCamera,
} from "Assets/svgs";
import { CategoryCard } from "./CategoryCard";
import {
  Artimage,
  CollectibleImage,
  MusicImage,
  PhotographyImage,
  SportImage,
  UtilityImage,
  VideoImage,
  VirtualWorldsImage,
} from "Assets/images";

const categories = [
  { name: "Art", amount: 34.53, icon: PainBrushIcon, bgImg: Artimage },
  {
    name: "Collectibles",
    amount: 34.53,
    icon: Swatches,
    bgImg: CollectibleImage,
  },
  {
    name: "Music",
    amount: 34.53,
    icon: MusicNotes,
    bgImg: MusicImage,
  },
  {
    name: "Photography",
    amount: 34.53,
    icon: Camera,
    bgImg: PhotographyImage,
  },
  {
    name: "Video",
    amount: 34.53,
    icon: VideoCamera,
    bgImg: VideoImage,
  },
  {
    name: "Utility",
    amount: 34.53,
    icon: MagicWand,
    bgImg: UtilityImage,
  },
  {
    name: "Sport",
    amount: 34.53,
    icon: Basketball,
    bgImg: SportImage,
  },
  {
    name: "Virtual Worlds",
    amount: 34.53,
    icon: Planet,
    bgImg: VirtualWorldsImage,
  },
];
export const BrowseCategories = () => {
  return (
    <div className="mb-5 pb-5 w-full lg:h-[58rem] h-fit  py-20 bg-zinc-800 flex-col justify-start items-center gap-[3.75rem] inline-flex">
      <div className="w-full h-[2.875rem] text-white text-[2.375rem] font-semibold capitalize leading-10">
        Browse Categories
      </div>

      <div
        className={`grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full gap-[30px]`}
      >
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            icon={category.icon}
            bgImg={category.bgImg}
            name={category.name}
          />
        ))}
      </div>
    </div>
  );
};
