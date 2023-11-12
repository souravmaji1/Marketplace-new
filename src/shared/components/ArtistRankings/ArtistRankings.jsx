import React from "react";
import { Tabs } from "./Tabs";
import { Row } from "./Row";
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
// import { Table } from "Components/Table/Table";
// import { TableBody } from "Components/Table/TableBody";
// import { TableColumn } from "Components/Table/TableColumn";
// import { TableHeader } from "Components/Table/TableHeader";
// import { TableRow } from "Components/Table/TableRow";
// import { Th } from "Components/Table/TableTh";

const tableHeader = ["#", "Artist", "Change", "NFTs Sold", "Colume"];
const artists = [
  {
    name: "Jaydon Ekstrom Bothman",
    image: RoboticaAvatar,
  },
  { name: "KeepItReal", amount: 34.53, image: KeepitreelAvatar },
  { name: "DigiLab", amount: 34.53, image: DigilabAvatar },
  { name: "GravityOne", amount: 34.53, image: GravityoneAvatar },
  { name: "Juanie", amount: 34.53, image: JuanieAvatar },
  { name: "BlueWhale", amount: 34.53, image: BluewhaleAvatar },
  { name: "MrFox", amount: 34.53, image: MrFoxAvatar },
  { name: "BlueWhale", amount: 34.53, image: BluewhaleAvatar },
  { name: "MrFox", amount: 34.53, image: MrFoxAvatar },
  { name: "Shroomie", amount: 34.53, image: ShroomieAvatar },
  { name: "Robotica", amount: 34.53, image: RoboticaAvatar },
  { name: "RustyRobot", amount: 34.53, image: RustyrobotAvatar },
  { name: "Animakid", amount: 34.53, image: AnimakidImg },
  { name: "Dotgu", amount: 34.53, image: DotguAvatar },
  { name: "Ghiblier", amount: 34.53, image: GhiblierAvatar },
  { name: "Robotica", amount: 34.53, image: RoboticaAvatar },
  { name: "RustyRobot", amount: 34.53, image: RustyrobotAvatar },
  { name: "Animakid", amount: 34.53, image: AnimakidImg },
  { name: "Dotgu", amount: 34.53, image: DotguAvatar },
  { name: "Ghiblier", amount: 34.53, image: GhiblierAvatar },
];
export const ArtistRankings = () => {
  return (
    <>
      <div className="w-full h-[271px] py-20 bg-zinc-800 flex-col justify-start items-center gap-10 inline-flex">
        <div className="w-full text-white text-[51px] font-semibold capitalize leading-10">
          Top Creators
        </div>
        <div className="w-full text-white text-[22px] font-normal leading-9">
          Check out top ranking NFT artists on the NFT Marketplace.
        </div>
      </div>
      <Tabs />

      <div className={`flex flex-col gap-[20px] mb-[40px]`}>
        <div className="w-full h-[46px] py-3 rounded-2xl border border-neutral-700 justify-between mt-[40px] items-center gap-2.5 inline-flex">
          <div className="grow h-[22px] justify-start items-center gap-5 inline-flex">
            <div className="w-[30px] text-center text-zinc-500 text-[16px] font-normal leading-snug">
              #
            </div>
            <div className="text-secondary text-[16px] font-normal leading-snug">
              Artist
            </div>
          </div>
          <div className={`flex h-[22px] justify-between items-center pr-2`}>
            <div className="hidden md:block  w-[100px]  text-secondary text-[16px] font-normal leading-snug">
              Change
            </div>
            <div className="hidden md:block w-[100px]  text-secondary text-[16px] font-normal leading-snug">
              NFTs Sold
            </div>
            <div className="w-[100px]   text-secondary text-[16px] font-normal leading-snug">
              Volume
            </div>
          </div>
        </div>

        {artists.map((artist, key) => (
          <Row
            key={key}
            name={artist.name}
            count={key + 1}
            image={artist.image}
          />
        ))}
      </div>
    </>
  );
};
