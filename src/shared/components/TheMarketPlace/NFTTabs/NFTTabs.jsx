import React from "react";
import { NFTTab } from "./NFTTab";

export const NFTTabs = ({ tabs, currentTab, setCurrentTab }) => {
  return (
    <div className="w-full h-[4.375rem] bg-zinc-800 flex-col justify-center items-center gap-2.5 inline-flex">
      <div className="w-full h-full justify-center items-center gap-[1.875rem] flex">
        {tabs &&
          tabs.map((tab, key) => (
            <NFTTab
              key={key}
              name={tab}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            />
          ))}
      </div>
    </div>
  );
};
