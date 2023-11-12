import React, { useState } from "react";
import { WalletConnectSingleShip } from "Assets/images";
import {
  CoinbaseLogo,
  MagnifyingGlass,
  MetamaskLogo,
  WalletConnectLogo,
} from "Assets/svgs";

import { NFTs } from "./NFTs";
import { Collections } from "./Collections";
import { ArtistTabs } from "./ArtistTabs";
import { ArtistCover } from "./ArtistCover";
import { ArtistInfo } from "./ArtistInfo";

const tabs = ["Created", "Owned", "Collection"];
export const tabMap = {
  Created: 0,
  Owned: 1,
  Collections: 2,
};

export const TheArtistPage = () => {
  const [currentTab, setCurrentTab] = useState(tabs[tabMap["Created"]]);

  return (
    <>
      <ArtistCover />
      <ArtistInfo />
      <div className="w-full h-[0px] border border-neutral-700"></div>

      <div className={`px-[30px] md:px-base`}>
        <ArtistTabs
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          tabs={tabs}
        />
      </div>
      <div>
        {currentTab === tabs[tabMap.Created] ? <NFTs /> : null}
        {currentTab === tabs[tabMap.Owned] ? <NFTs /> : null}
        {currentTab === tabs[tabMap.Collections] ? <Collections /> : null}
      </div>
    </>
  );
};
