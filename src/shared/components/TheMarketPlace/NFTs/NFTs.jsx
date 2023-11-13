import { useContract, useContractEvents } from "@thirdweb-dev/react";
import { Link} from "react-router-dom";
import React from "react";
import NFTDetails from "./NFTDetails";

export const NFTs = () => {
  const { contract } = useContract("0xBdaA43F8B49e182fc625b9b16c915ba7ECdBF364");

  // Get all events emitted by the contract
  const { data: allEvents } = useContractEvents(contract, "NFTListed");

  // Convert BigNumber to decimal
  const convertToDecimal = (value) => {
    return parseInt(value._hex, 16);
  };
  return (
    <div className="w-full h-fit px-[30px] md:px-base pt-[60px] pb-20 mb-1 bg-neutral-700 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-start items-center gap-[30px] grid">
 {allEvents &&
          allEvents.map((event, index) => (
            <Link
              to={`/NFTs/${event.data.tokenId}`} // Update the link path accordingly
              className="h-[429px] bg-neutral-700 rounded-2xl flex-col justify-start items-center inline-flex mb-8"
              key={index}
            >
              <div className="self-stretch h-[296px] rounded-tl-2xl rounded-tr-2xl flex-col justify-start items-start gap-2.5 flex">
                <img
                  className="self-stretch h-[296px] rounded-tl-2xl rounded-tr-2xl"
                  src={`https://ipfs.io/ipfs/${event.data.tokenURI.split('ipfs://')[1]}`}
                  alt={`Token ${index + 1}`}
                />
              </div>
              <div className="self-stretch bg-primary-bg h-[173px] px-[30px] pt-5 pb-[25px] flex-col justify-start items-start rounded-bl-2xl rounded-br-2xl gap-[25px] flex">
                <div className="self-stretch h-[60px] flex-col justify-start items-start gap-[5px] flex">
                  <div className="self-stretch text-white text-[22px] font-semibold capitalize leading-loose">
                    {event.data.name}
                  </div>
                  <div className="self-stretch justify-start items-start gap-3 inline-flex">
                    <div className="justify-start items-start gap-2.5 flex">
                      <div className="w-6 h-6 justify-center items-center flex">
                        <img
                          className="w-6 h-6 rounded-[120px]"
                          src="" // Replace with the actual image source
                          alt="Artist Avatar"
                        />
                      </div>
                    </div>
                    <div className="grow shrink basis-0 text-white text-[16px] font-normal leading-snug">
                      {event.data.artist}
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start">
                  <div className="grow shrink basis-0 pr-[21px] flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch text-zinc-500 text-[12px] font-normal leading-3">
                      Price
                    </div>
                    <div className="self-stretch text-white text-[16px] font-normal leading-snug">
                      {convertToDecimal(event.data.price)} ETH
                    </div>
                  </div>
                  {/* Add the highest bid information if available */}
                </div>
              </div>
            </Link>
          ))}
          
        
      
    </div>
  );
};
