import { useContractMetadata } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import {
  BotAvatar,
  BotPrimaryPhoto,
  BotSecondaryPhoto,
  BotSecondaryPhotoTwo,
  DogPrimaryPhoto,
  DogSecondaryPhoto,
  DogSecondaryPhotoTwo,
  LifePrimaryPhoto,
  MrFoxAvatar,
  MushroomSecondaryPhoto,
  MushroomSecondaryPhotoTwo,
  ShroomieAvatar,
} from "Assets/images";
import Spinner from "Components/Spinner/Spinner";
import { CollectionCard } from "Components/TrendingCollection";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Read-only mode
const readOnlySdk = new ThirdwebSDK("mumbai", {
  clientId: import.meta.env.VITE_CLIENT_ID, // Use client id if using on the client side, get it from dashboard settings
  secretKey: import.meta.env.VITE_SECRET_KEY, // Use secret key if using on the server, get it from dashboard settings
});

export const Collections = () => {
  const {
    user: {
      profile: { name, collections },
    },
  } = useSelector((state) => state.appSlice);

  console.log("collections", collections);

  const [collectionDetails, setCollectionDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchContractMetadat = async (address) => {
    if (address) {
      const contract = await readOnlySdk.getContract(address);
      console.log("contract instance", contract);
      const name = await contract.call("name");
      const symbol = await contract.call("symbol");
      console.log("contract name", { name, symbol });
      return { name, symbol };
    } else {
      return { name: "", symbol: "" };
    }
  };

  // const getContractDetails = (address) => {
  //   const { data: contractMetadata } = useContractMetadata(address);

  //   console.log("getContractDetails", contractMetadata);
  // };

  useEffect(() => {
    // getContractDetails(collections[0]);
    if (collections.length > 0) {
      (async () => {
        setLoading(true);
        const allContractsWithDetails = await Promise.all(
          collections.map(async (addr) => {
            return await fetchContractMetadat(addr);
          })
        );
        console.log(
          "allContractsWithDetails ----------------",
          allContractsWithDetails
        );
        setCollectionDetails(allContractsWithDetails);
        setLoading(false);
      })();
    }
  }, []);

  return (
    <>
      {collectionDetails.length > 0 ? (
        <div className="w-full h-fit px-base pt-[60px] pb-20 mb-1 bg-neutral-700 md:grid-cols-3 justify-start items-center gap-[30px] grid">
          {collectionDetails.map((col) => (
            <CollectionCard
              primaryImg={DogPrimaryPhoto}
              secondaryImg={DogSecondaryPhoto}
              secondaryImgTwo={DogSecondaryPhotoTwo}
              avatar={MrFoxAvatar}
              collectionName={col.name}
              artistName={name}
              // address={collections[0]}
            />
          ))}
        </div>
      ) : (
        <div className="w-full h-[200px] flex items-center justify-center">
          {loading ? (
            <Spinner />
          ) : (
            <p className="text-center text-white">No collections found!</p>
          )}
        </div>
      )}
    </>
  );
};
