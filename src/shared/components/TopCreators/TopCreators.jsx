import { Link } from "react-router-dom";
import { RocketLaunchIcon } from "Assets/svgs";
import { ArtistCard } from "./ArtistCard";
import {
  AnimakidImg,
  BluewhaleAvatar,
  DigilabAvatar,
  DotguAvatar,
  GhiblierAvatar,
  GravityoneAvatar,
  JuanieAvatar,
  KeepitreelAvatar,
  MrFoxAvatar,
  RoboticaAvatar,
  RustyrobotAvatar,
  ShroomieAvatar,
} from "Assets/images";
import { Button } from "Components/Button";
const artists = [
  { name: "KeepItReal", amount: 34.53, image: KeepitreelAvatar },
  { name: "DigiLab", amount: 34.53, image: DigilabAvatar },
  { name: "GravityOne", amount: 34.53, image: GravityoneAvatar },
  { name: "Juanie", amount: 34.53, image: JuanieAvatar },
  { name: "BlueWhale", amount: 34.53, image: BluewhaleAvatar },
  { name: "MrFox", amount: 34.53, image: MrFoxAvatar },
  { name: "Shroomie", amount: 34.53, image: ShroomieAvatar },
  { name: "Robotica", amount: 34.53, image: RoboticaAvatar },
  { name: "RustyRobot", amount: 34.53, image: RustyrobotAvatar },
  { name: "Animakid", amount: 34.53, image: AnimakidImg },
  { name: "Dotgu", amount: 34.53, image: DotguAvatar },
  { name: "Ghiblier", amount: 34.53, image: GhiblierAvatar },
];
export const TopCreators = () => {
  return (
    <div className="inline-flex h-fit w-full flex-col items-center justify-start gap-[3.75rem] bg-zinc-800 py-20">
      <div className={`flex w-full justify-between`}>
        <div>
          <div className="text-[38px] font-semibold capitalize leading-10 text-white">
            Top creators
          </div>
          <div className=" text-[22px] font-normal capitalize leading-9 text-white">
            Checkout Top Rated Creators on the NFT Marketplace
          </div>
        </div>
        <div>
          <Link
            to={`/rankings`}
            className="hidden md:flex h-[3.75rem] hover:text-white w-[15.4375rem] items-center justify-center  gap-3 rounded-2xl border border-purple-500  bg-transparent text-center text-[1rem] font-semibold leading-snug text-white "
          >
            <RocketLaunchIcon className={`text-[#A259FF]`} pathFill="#A259FF" />{" "}
            View Rankings
          </Link>
        </div>
      </div>

      <div
        className={`m-auto grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 flex-wrap items-start justify-between gap-[1.875rem]`}
      >
        {artists.map((artist, index) => (
          <ArtistCard
            key={index}
            amount={artist.amount}
            image={artist.image}
            name={artist.name}
            count={index + 1}
          />
        ))}
      </div>
      <div className="w-full">
        <Link
          to={`/rankings`}
          className="md:hidden flex h-[3.75rem] hover:text-white w-full md:w-[15.4375rem] items-center justify-center  gap-3 rounded-2xl border border-purple-500  bg-transparent text-center text-[1rem] font-semibold leading-snug text-white "
        >
          <RocketLaunchIcon className={`text-[#A259FF]`} pathFill="#A259FF" />{" "}
          View Rankings
        </Link>
      </div>
    </div>
  );
};
