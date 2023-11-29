import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContract, useContractEvents, useContractWrite } from "@thirdweb-dev/react";
import { ethers } from "ethers"; // Import ethers library

const NFTDetails = () => {

  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours}h ${minutes}m ${remainingSeconds}s`;
  };


  const { tokenId } = useParams();
  const { contract } = useContract("0xb289d4D9a8DFf6583B7387141BCDAb77d7Bb4198");
  const { data: auctionCreatedEvents } = useContractEvents(contract, "AuctionCreated");

  const { mutateAsync: placeBid, isLoading } = useContractWrite(contract, "placeBid");

  const tokenIdBigNumber = ethers.BigNumber.from(tokenId);
  const nftEvent = auctionCreatedEvents.find(
    (event) => event.data.tokenId.toHexString() === tokenIdBigNumber.toHexString()
  );

  const { tokenURI, name, description, startingPrice, duration, seller } = nftEvent?.data || {};
  
  const blockTime = 15; // Adjust this based on the Ethereum network block time
  const durationInSeconds = duration.mul(blockTime).toNumber();

  // Format duration in a more human-readable format
  const formattedDuration = formatDuration(durationInSeconds);

  // State to hold remaining time in seconds
  const [remainingTime, setRemainingTime] = useState(durationInSeconds);

  // Update remaining time every second
  useEffect(() => {
    const timer = setTimeout(() => {
      setRemainingTime((prevTime) => Math.max(0, prevTime - 1));
    }, 1000);

    return () => clearTimeout(timer);
  }, [remainingTime]);

  // Function to format remaining time in HH:mm:ss
  const formattedRemainingTime = formatDuration(remainingTime);
  

  const [imageSrc, setImageSrc] = useState("");
  const [bidAmount, setBidAmount] = useState(""); // State to hold the bid amount entered by the user

  useEffect(() => {
    async function fetchImage() {
      const response = await fetch(`https://ipfs.io/ipfs/${tokenURI.split('ipfs://')[1]}`);
      const blob = await response.blob();
      setImageSrc(URL.createObjectURL(blob));
    }

    fetchImage();
  }, [tokenURI]);

  const handlePlaceBid = async () => {
    // Validate bid amount (you can add more validation as needed)
    if (!bidAmount || isNaN(bidAmount) || parseFloat(bidAmount) <= 0) {
      alert("Please enter a valid bid amount.");
      return;
    }

    try {
      const data = await placeBid({ args: [tokenIdBigNumber] ,overrides:{
        value: ethers.utils.parseEther(bidAmount),
      } });
      console.info("Bid placed successfully", data);
    } catch (err) {
      console.error("Failed to place bid", err);
    }
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
          <div className="w-full text-white text-[51px] font-semibold capitalize leading-10">
            Name:  {nftEvent.data.name}
          </div>
          <div className="w-full text-white text-[22px] font-normal capitalize leading-9">
           Description: {nftEvent.data.description}
          </div>
          <div className="w-full text-white text-[22px] font-normal capitalize leading-9">
            Starting Price: {ethers.utils.formatEther(startingPrice)} ETH
          </div>
          <div className="w-full text-white text-[22px] font-normal capitalize leading-9">
            Auction Ends In:  {formattedRemainingTime}
          </div>
          <div className="w-full text-white text-[22px] font-normal capitalize leading-9">
            Seller: {seller}
          </div>
          <div className="w-full mt-4">
            <label className="text-white text-[22px] font-normal capitalize leading-9">
              Bid Amount:
              <input
                type="number"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                className="ml-2 p-2 rounded-md border border-gray-300"
                style={{ color: 'black' }}
              />
            </label>
          </div>
          <div className="w-full mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handlePlaceBid}
              disabled={isLoading}
            >
              Place Bid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetails;


