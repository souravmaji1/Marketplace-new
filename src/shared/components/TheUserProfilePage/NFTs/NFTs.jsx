import React from "react";
import { useSelector } from "react-redux";
import { useOwnedNFTs, useContract, useAddress } from "@thirdweb-dev/react";

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
    <div className="flex flex-wrap justify-center gap-4">
      {data.length === 0 ? (
        <p>No NFTs owned</p>
      ) : (
        data.map((nft, index) => (
          <div
            className="h-[429px] bg-neutral-700 rounded-2xl flex-col justify-start items-center inline-flex mb-4"
            key={index}
          >
            <div className="self-stretch h-[296px] rounded-tl-2xl rounded-tr-2xl flex-col justify-start items-start gap-2.5 flex">
              {nft.metadata.uri && (
                <img
                  className="self-stretch h-[296px] rounded-tl-2xl rounded-tr-2xl"
                  src={`https://ipfs.io/ipfs/${nft.metadata.uri.split('ipfs://')[1]}`}
                  alt={`NFT ${nft.metadata.image}`}
                />
              )}
            </div>
           
          </div>
        ))
      )}
    </div>
  );
};
