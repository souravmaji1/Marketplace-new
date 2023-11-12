import React from "react";
import { InfoCard } from "./InfoCard";
import {
  CreateCollectionIcon,
  StartEarningIcon,
  WalletSetupIcon,
} from "Assets/svgs";

const info = [
  {
    title: "Setup Your wallet",
    description:
      "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    icon: WalletSetupIcon,
  },
  {
    title: "Create Collection",
    description:
      "Upload your work and setup your collection. Add a description, social links and floor price.",
    icon: CreateCollectionIcon,
  },
  {
    title: "Start Earning",
    description:
      "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    icon: StartEarningIcon,
  },
];
export const HowItWorks = () => {
  return (
    <div className="w-full h-fit md:h-[738px] py-20 bg-zinc-800 flex-col justify-start items-center gap-12 inline-flex">
      <div className="w-full">
        <div className="w-full text-white text-[38px] font-semibold capitalize leading-10">
          How it works
        </div>
        <div className="w-[1050px] text-white text-[22px] font-normal capitalize leading-9">
          Find out how to get started
        </div>
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-3 w-full gap-[30px]`}>
        {info.map((item, key) => (
          <InfoCard
            key={key}
            description={item.description}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};
