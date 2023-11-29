import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContract, useContractEvents, useContractWrite,useContractRead } from "@thirdweb-dev/react";
import { ethers } from "ethers";

const NFTDetails = () => {
  const { tokenId } = useParams();
  const navigate = useNavigate();
  const { contract } = useContract("0x5ef84e1B60E892e7929D6Af21521480732f21367");
  const { data: allEvents } = useContractRead(contract, "getAllListedNFTs");
  const { mutateAsync: buyNFT, isLoading: isBuying } = useContractWrite(contract, "buyNFT");
  

  // Add a useEffect to log the allEvents data
  useEffect(() => {
    console.log("All Events:", allEvents);
  }, [allEvents]);

  // Check if allEvents is still loading
  if (!allEvents) {
    return <div>Loading...</div>;
  }

  // Find the specific NFT event using the tokenId
  const nftEvent = allEvents.find((event) => event.tokenId.toString() === tokenId);

  // Check if the NFT event is found
  if (!nftEvent) {
    return <div>NFT not found</div>;
  }

  // Destructure NFT data from the event
  const { tokenURI, price } = nftEvent;

  // Convert BigNumber to decimal for price
  const convertedPrice = parseInt(price._hex, 16);

  // Fetch image from the IPFS using tokenURI
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    async function fetchImage() {
      const response = await fetch(`https://ipfs.io/ipfs/${tokenURI.split('ipfs://')[1]}`);
      const blob = await response.blob();
      setImageSrc(URL.createObjectURL(blob));
    }

    fetchImage();
  }, [tokenURI]);

  const buyNFTHandler = async () => {
    try {
      const data = await buyNFT({ args: [tokenId],  overrides:{
        value: nftEvent.price,
      },
    });
      console.info("Contract call success", data);
      navigate("/marketplace");
    } catch (err) {
      console.error("Contract call failure", err);
      // Handle errors or display an error message to the user
    }
  };

  const convertToDecimal = (value) => {
    return parseInt(value._hex, 16);
  };

  const convertWeiToEther = (weiValue) => {
    return ethers.utils.formatEther(weiValue);
  };

  return (
    <div className="w-full mb-5 pb-5 h-fit bg-zinc-800 justify-start items-center md:gap-[60px] flex md:flex-row flex-col">
      
      <div className="w-full md:w-1/2">
        <img className="w-full h-[691px]" src={imageSrc} alt={`NFT ${tokenId}`} style={{ maxWidth: "100%" }} />
      </div>

      <div className={`px-[30px] md:px-0 w-full md:w-1/2 h-full`}>
        <div className="w-full h-[831px] py-[100px] flex-col justify-start items-start gap-10 inline-flex">
          <div className="w-full text-white text-[51px] font-semibold capitalize leading-10">
            NFT Details
          </div>
          <div className="w-full text-white text-[22px] font-normal capitalize leading-9">
            Token ID: {tokenId}
          </div>
          <div className="w-full text-white text-[22px] font-normal capitalize leading-9">
            Price: {convertWeiToEther(nftEvent.price)} ETH
          </div>

          {/* Add any other details you want to display */}
          
          <button onClick={buyNFTHandler} disabled={isBuying} className="bg-green-500 text-white py-2 px-4 rounded">
            {isBuying ? "Buying..." : "Buy NFT"}
          </button>

        </div>
      </div>
    </div>
  );
};

export default NFTDetails;
