import { NFTCard } from "Components/DiscoverMoreNFTs";
import React from "react";
import {
  AstroFictionNFTImage,
  DistantGalaxyNFTImage,
  LifeOnEdenaNFTImage,
  MoonDancerAvatarImage,
  NebulaKidAvatarImage,
  SpaceoneAvatarImage,
} from "Assets/images";

const NFTS = [
  {
    artistName: "Animakid",
    artistAvatar: MoonDancerAvatarImage,
    NFTImage: DistantGalaxyNFTImage,
    NFTName: "Distant Galaxy",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    artistName: "Animakid",
    artistAvatar: NebulaKidAvatarImage,
    NFTImage: LifeOnEdenaNFTImage,
    NFTName: "Life On Edena",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    artistName: "Animakid",
    artistAvatar: SpaceoneAvatarImage,
    NFTImage: AstroFictionNFTImage,
    NFTName: "AstroFiction",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    artistName: "Animakid",
    artistAvatar: MoonDancerAvatarImage,
    NFTImage: DistantGalaxyNFTImage,
    NFTName: "Distant Galaxy",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    artistName: "Animakid",
    artistAvatar: NebulaKidAvatarImage,
    NFTImage: LifeOnEdenaNFTImage,
    NFTName: "Life On Edena",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    artistName: "Animakid",
    artistAvatar: SpaceoneAvatarImage,
    NFTImage: AstroFictionNFTImage,
    NFTName: "AstroFiction",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    artistName: "Animakid",
    artistAvatar: MoonDancerAvatarImage,
    NFTImage: DistantGalaxyNFTImage,
    NFTName: "Distant Galaxy",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    artistName: "Animakid",
    artistAvatar: NebulaKidAvatarImage,
    NFTImage: LifeOnEdenaNFTImage,
    NFTName: "Life On Edena",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
  {
    artistName: "Animakid",
    artistAvatar: SpaceoneAvatarImage,
    NFTImage: AstroFictionNFTImage,
    NFTName: "AstroFiction",
    price: "1.63 ETH",
    highestBid: "0.33 wETH",
  },
];
export const NFTs = () => {
  return (
    <div className="w-full h-fit px-[30px] md:px-base pt-[60px] pb-20 mb-1 bg-neutral-700 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-center gap-[30px] grid">
      {NFTS.map((nft, key) => (
        <NFTCard
          key={key + 1}
          NFTImage={nft.NFTImage}
          NFTName={nft.NFTName}
          artistAvatar={nft.artistAvatar}
          artistName={nft.artistName}
          highestBid={nft.highestBid}
          price={nft.price}
        />
      ))}
    </div>
  );
};
