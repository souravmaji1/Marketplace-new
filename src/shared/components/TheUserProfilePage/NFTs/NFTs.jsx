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
import { useSelector } from "react-redux";
import { CreatedNFTCard } from "./CreatedNft";
import { useOwnedNFTs, useContract, useAddress, ThirdwebNftMedia } from "@thirdweb-dev/react";


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
  const {
    user: {
      profile: { name, collections, nfts },
    },
  } = useSelector((state) => state.appSlice);

  console.log("nfts", { collections, nfts });

  const contractAddress = "0x4761F54E1eA449c175b14f521a3F790cE97b8E90";
  const address = useAddress();
  const { contract } = useContract(contractAddress);
  const { data, isLoading, error } = useOwnedNFTs(contract, address);
  console.log(data);

  

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
   {data.length === 0 ? (
        <p>No NFTs owned</p>
      ) : (
        <div>
          {data.map((nft, index) => (
            <div key={index}>
              <p>NFT ID: {nft.metadata.id}</p>
              {/* Assuming there is an 'imageUrl' property in your NFT data */}
              {nft.metadata.uri && (
                
                <img
                src={`https://ipfs.io/ipfs/${nft.metadata.uri.split('ipfs://')[1]}`}
                  alt={`NFT ${nft.metadata.image}`}
                  style={{ maxWidth: '200px' }}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
