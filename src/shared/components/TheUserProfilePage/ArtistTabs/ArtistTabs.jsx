import React from "react";
import { ArtistTab } from "./ArtistTab";
import { useSelector } from "react-redux";

export const ArtistTabs = ({ tabs, currentTab, setCurrentTab }) => {
  return (
    <div className="w-full h-[4.375rem] bg-zinc-800 flex-col justify-center items-center gap-2.5 inline-flex">
      <div className="w-full h-full justify-center items-center gap-[20px] lg:gap-[1.875rem] flex">
        {tabs &&
          tabs.map((tab, key) => (
            <ArtistTab
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
