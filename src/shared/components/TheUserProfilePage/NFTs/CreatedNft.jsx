import { useContract, useContractRead } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import { useAddress } from "@thirdweb-dev/react";


export const CreatedNFTCard = () => {
  const { contract } = useContract("0x5ef84e1B60E892e7929D6Af21521480732f21367");
  const address = useAddress();

  // Assuming _user is the user address or some identifier needed for the function
  const { data, isLoading } = useContractRead(contract, "getUserListedNFTs", [address]);

  useEffect(() => {
    // You can do something with the data or handle loading state changes here
    if (!isLoading) {
      console.log("User's listed NFTs:", data);
    }
  }, [data, isLoading]);

  return (
    <div>

      {/* Render your component content here */}
      {isLoading && <p>Loading...</p>}

      {!isLoading && data && data.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4">
          {data.map((nft, index) => (
            <div
              className="h-[429px] bg-neutral-700 rounded-2xl flex-col justify-start items-center inline-flex mb-4"
              key={index}
            >
              <div className="self-stretch h-[296px] rounded-tl-2xl rounded-tr-2xl flex-col justify-start items-start gap-2.5 flex">
                {nft.tokenURI && (
                  <img
                    className="self-stretch h-[296px] rounded-tl-2xl rounded-tr-2xl"
                    src={`https://ipfs.io/ipfs/${nft.tokenURI.split('ipfs://')[1]}`}
                    alt={`NFT ${nft.name}`}
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">{nft.name}</h3>
                <p className="text-gray-500">{nft.description}</p>
                <p className="text-green-500">Price: {nft.price.toString()} ETH</p>
                <p className="text-blue-500">Token ID: {nft.tokenId.toString()}</p>
                {/* Add more properties as needed */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
