import { SpaceShipPurpleShade } from "Assets/images";
import { EnvelopeSimple, LockKey, UserIcon } from "Assets/svgs";
import { Button } from "Components/Button";
import { Input } from "Components/Input";
import React, { useEffect, useState } from "react";
import CreateCollection from "./components/CreateCollection";
import SignIn from "./components/SignIn";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { useAddress } from "@thirdweb-dev/react";

export const CreateNftCollectionPage = () => {
  const navigate = useNavigate();
  const [formView, setFormView] = useState("signup");
  const address = useAddress();

  useEffect(() => {
    if (!address) {
      navigate("/connect-wallet");
    }
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     const sdk = new ThirdwebSDK(
  //       Polygon, // The currently active chain
  //       {
  //         supportedChains: [Polygon, Mumbai], // The chains you want to support
  //       },
  //     );
  //   })()
  // },[])

  return (
    <div className="w-full mb-5 pb-5 h-fit bg-zinc-800 justify-start items-center md:gap-[60px] flex md:flex-row flex-col">
      <div className="w-full md:w-1/2">
        <img className="w-full h-[691px]" src={SpaceShipPurpleShade} />
      </div>

      <div className={`px-[30px] md:px-0 w-full md:w-1/2 h-full`}>
        <div className="w-full h-[691px] py-[100px] flex-col justify-start items-start gap-10 inline-flex">
          <div className="w-full text-white text-[51px] font-semibold capitalize leading-10">
            Create Collection
          </div>
          <div className="w-full text-white text-[22px] font-normal capitalize leading-9">
            Enter metadata and start creating your own collections right away!
          </div>

          {/*  */}

          <CreateCollection />
        </div>
      </div>
    </div>
  );
};
