import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useStorageUpload } from "@thirdweb-dev/react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { useSDK } from "@thirdweb-dev/react";
import { useAddress } from "@thirdweb-dev/react";
import { EnvelopeSimple, LockKey, UserIcon } from "Assets/svgs";
import { Button } from "Components/Button";
import { Input } from "Components/Input";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { ethers } from "ethers";

export default function UploadAndMint() {
  const [file, setFile] = useState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [bidname, setBidname] = useState("");
  const [biddescritpion, setBiddescription] = useState("");
  const [price, setPrice] = useState("");
  const [bidprice, setBidprice] = useState("");
  const [duration, setDuration] = useState(null); // New state for duration
  const sdk = useSDK();
  const address = useAddress();
  const { mutateAsync: upload } = useStorageUpload();
  const { contract: souravnft } = useContract("0x1401B7964854161870e15Ec49ecc66c1b44F6317");
  const { contract: NFTMarketplace } = useContract("0x5ef84e1B60E892e7929D6Af21521480732f21367");
  const { mutateAsync: safeMint, isLoading: mintIsLoading } = useContractWrite(souravnft, "safeMint");
  const { mutateAsync: listNFTForSale, isLoading: listIsLoading } = useContractWrite(NFTMarketplace, "listNFTForSale");
  const { mutateAsync: createAuction, isLoading: auctionLoading } = useContractWrite(NFTMarketplace, "createAuction");
  
 

  const mintNft = async () => {
    try {
      const img = await sdk.storage.upload(file);
  
      const mintData = await safeMint({ args: [address, img] });
  
   //   const data = await mintWithSignature({ args: [payload, signedPayload] });

      console.info("contract call successs", mintData);
  
      const event = mintData.receipt.logs[0]; // Assuming the token ID is in the first event
      const tokenID = event.topics[3]; // Adjust the index based on your event structure
      const decimalTokenID = parseInt(tokenID, 16);
      console.log("Decimal Token ID:", decimalTokenID);

      const mintprice = ethers.utils.parseUnits(price, "ether");
      const listNft = await listNFTForSale({ args: [decimalTokenID, mintprice, name, description] });
      console.log(listNft)


  
   
    } catch (mintError) {
      console.error("Minting failed", mintError);
    }
  };

  const auctionNft = async () => {
    try {
      const img = await sdk.storage.upload(file);
  
      const mintData = await safeMint({ args: [address, img] });
  
   //   const data = await mintWithSignature({ args: [payload, signedPayload] });

      console.info("contract call successs", mintData);
  
      const event = mintData.receipt.logs[0]; // Assuming the token ID is in the first event
      const tokenID = event.topics[3]; // Adjust the index based on your event structure
      const decimalTokenID = parseInt(tokenID, 16);
      console.log("Decimal Token ID:", decimalTokenID);

      if (duration) {
        const unixTimestamp = duration.getTime() / 1000;
        const mintbidprice = ethers.utils.parseUnits(bidprice, "ether");
        const auctionnft = await createAuction({ args: [decimalTokenID, mintbidprice , unixTimestamp,bidname,biddescritpion] });
        console.info("Minting success", auctionnft);
      } else {
        console.error("Please select a duration for the auction");
      }
   
    } catch (mintError) {
      console.error("Minting failed", mintError);
    }
  };
  

 

  return (
    <div>


<Tabs>
<div className="w-full md:w-[330px] h-[46px]  mb-4">
  <TabList sx={{borderBottom:'none',margin:"14px"}}>
    <Tab _selected={{ color: 'white', bg: 'purple.400' }} sx={{color:"white"}}  >Direct Listing</Tab>
    <Tab _selected={{ color: 'white', bg: 'purple.400' }} sx={{color:"white"}}  >Auction Listing</Tab>
  </TabList>
</div>
  <TabPanels>
    <TabPanel>
    <div className="w-full md:w-[330px] h-[46px]  mb-4">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      </div>
  
      <div className="w-full md:w-[330px] h-[46px]  mb-4">
      <input  className={`w-full h-full border-none outline-none focus:outline-none rounded-2xl focus:ring-white`} style={{color:'black'}}   type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="w-full md:w-[330px] h-[46px]  mb-4">
      <input  className={`w-full h-full border-none outline-none focus:outline-none rounded-2xl focus:ring-white`} style={{color:'black'}}  type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="w-full md:w-[330px] h-[46px]  mb-4">
      <input  className={`w-full h-full border-none outline-none focus:outline-none rounded-2xl focus:ring-white`} style={{color:'black'}}  type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
     
    
      <div className="w-full md:w-[330px] h-[46px]  mb-4">
      <button   className={`w-full md:w-[330px] h-[46px] px-[50px] bg-purple-500 rounded-2xl justify-center items-center gap-3 inline-flex disabled:bg-slate-300`}   onClick={mintNft} disabled={mintIsLoading || listIsLoading}>
        {mintIsLoading || listIsLoading ? "Processing..." : "List for Sale"}
      </button>
      </div>
    </TabPanel>


   
    <TabPanel>
    <div className="w-full md:w-[330px] h-[46px]  mb-4">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      </div>
      <div className="w-full md:w-[330px] h-[46px]  mb-4">
      <DatePicker
        selected={duration}
        onChange={(date) => setDuration(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="MMMM d, yyyy h:mm aa"
        placeholderText="Select auction end date and time"
        className={`w-full h-full border-none outline-none focus:outline-none rounded-2xl focus:ring-white`}
      />
      </div>
      <div className="w-full md:w-[330px] h-[46px]  mb-4">
      <input  className={`w-full h-full border-none outline-none focus:outline-none rounded-2xl focus:ring-white`} style={{color:'black'}}   type="text" placeholder="Name" value={bidname} onChange={(e) => setBidname(e.target.value)} />
      </div>
      <div className="w-full md:w-[330px] h-[46px]  mb-4">
      <input  className={`w-full h-full border-none outline-none focus:outline-none rounded-2xl focus:ring-white`} style={{color:'black'}}  type="text" placeholder="Description" value={biddescritpion} onChange={(e) => setBiddescription(e.target.value)} />
      </div>
      <div className="w-full md:w-[330px] h-[46px]  mb-4">
      <input  className={`w-full h-full border-none outline-none focus:outline-none rounded-2xl focus:ring-white`} style={{color:'black'}}  type="number" placeholder="Starting Price" value={bidprice} onChange={(e) => setBidprice(e.target.value)} />
      </div>
      <div className="w-full md:w-[330px] h-[46px]  mb-4">
      <button   className={`w-full md:w-[330px] h-[46px] px-[50px] bg-purple-500 rounded-2xl justify-center items-center gap-3 inline-flex disabled:bg-slate-300`}   onClick={auctionNft} disabled={mintIsLoading || listIsLoading}>
        {mintIsLoading || auctionLoading ? "Processing..." : "List for Auction"}
      </button>
      </div>
    </TabPanel>
    
  </TabPanels>
</Tabs>








  
     
    </div>
  );
}

