import React, { useState } from "react";
import { WalletConnectSingleShip } from "Assets/images";
import {
  CoinbaseLogo,
  MagnifyingGlass,
  MetamaskLogo,
  WalletConnectLogo,
} from "Assets/svgs";
import { NFTTabs } from "./NFTTabs";
import { NFTs } from "./NFTs";
import { Collections } from "./Collections";

const tabs = ["NFTs", "Collections"];
export const tabMap = {
  NFTs: 0,
  Collections: 1,
};

export const TheMarketPlace = () => {
  const [currentTab, setCurrentTab] = useState(tabs[tabMap["NFTs"]]);

  return (
    <>
      <div className="w-full px-[30px] md:px-base h-fit py-20 bg-zinc-800 flex-col justify-start items-center gap-10 inline-flex">
        <div className="w-full text-white text-[51px] font-semibold capitalize md:leading-10 leading-snug">
          Browse Marketplace
        </div>
        <div className="w-full text-white text-[22px] font-normal leading-9">
          Browse through more than 50k NFTs on the NFT Marketplace.
        </div>
        <div className="w-full h-[60px] py-3 rounded-2xl border border-neutral-700 px-5 justify-center items-center flex">
          <div className="h-[60px] grow justify-start items-center flex bg-transparent">
            <input
              placeholder="Search your favourite NFTs"
              className="grow shrink basis-0 text-zinc-500 text-[16px] font-normal bg-transparent border-none border-transparent focus:border-transparent leading-snug focus:ring-0 focus:outline-none focus:border-none h-full w-full"
            />
          </div>
          <div className="w-6 h-6 relative">
            <MagnifyingGlass className={`w-full h-full`} />
          </div>
        </div>
      </div>
      <div className="w-full h-[0px] border border-neutral-700"></div>

      <div className={`px-[30px] md:px-base`}>
        <NFTTabs
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          tabs={tabs}
        />
      </div>
      <div>
        {currentTab === tabs[tabMap.NFTs] ? <NFTs /> : null}
        {currentTab === tabs[tabMap.Collections] ? <Collections /> : null}
      </div>
    </>
  );
};
