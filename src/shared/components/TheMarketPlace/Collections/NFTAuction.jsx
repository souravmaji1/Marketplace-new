import React from "react";
import { Link } from "react-router-dom";
import { useContract, useContractEvents } from "@thirdweb-dev/react";
import { ethers } from "ethers";

export default function NFTs() {
  const { contract } = useContract("0xb289d4D9a8DFf6583B7387141BCDAb77d7Bb4198");

  const { data: auctionCreatedEvents } = useContractEvents(contract, "AuctionCreated");


  const convertWeiToEther = (weiValue) => {
    return ethers.utils.formatEther(weiValue);
  };

  return (
    <div className="w-full h-fit px-[30px] md:px-base pt-[60px] pb-20 mb-1 bg-neutral-700 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-start items-center gap-[30px] grid">
      {auctionCreatedEvents &&
        auctionCreatedEvents.map((event, index) => (
          <Link
            to={`/Collection/${event.data.tokenId}`}
            key={index}
          >
            <div
              className="h-[429px] bg-neutral-700 rounded-2xl flex-col justify-start items-center inline-flex mb-8"
            >
              <img
                className="self-stretch h-[296px] rounded-tl-2xl rounded-tr-2xl"
                src={`https://ipfs.io/ipfs/${event.data.tokenURI.split('ipfs://')[1]}`}
                alt={`Auction ${index + 1}`}
              />
              <div className="self-stretch bg-primary-bg h-[173px] px-[30px] pt-5 pb-[25px] flex-col justify-start items-start rounded-bl-2xl rounded-br-2xl gap-[25px] flex">
                <div className="self-stretch text-white text-[22px] font-semibold capitalize leading-loose">
                  {event.data.name}
                </div>
                <div className="self-stretch text-white text-[16px] font-normal leading-snug">
                  Starting Price: {convertWeiToEther(event.data.startingPrice)} ETH
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
