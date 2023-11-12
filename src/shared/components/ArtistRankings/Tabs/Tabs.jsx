import React, { useState } from "react";
import { Tab } from "./Tab/Tab";

export const tabs = ["Today", "This Week", "This Month", "All Time"];
export const tabMap = {
  Today: 0,
  "This Week": 1,
  "This Month": 2,
  "All Time": 3,
};
export const mobileTabs = ["1d", "7d", "30d", "All Time"];
export const mobileTabMap = {
  "1d": 0,
  "7d": 1,
  "30d": 2,
  "All Time": 3,
};
export const Tabs = () => {
  const [currentTab, setCurrentTab] = useState(tabs[tabMap["Today"]]);
  const [mobileCurrentTab, setMobileCurrentTab] = useState(
    mobileTabs[mobileTabMap["Today"]]
  );

  return (
    <div className="w-full h-[60px] px-2.5 bg-zinc-800 flex-col justify-start items-center gap-2.5 inline-flex">
      <div className="hidden w-full justify-start items-start md:inline-flex">
        {tabs.map((tab, key) => (
          <Tab
            key={key}
            name={tab}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        ))}
      </div>
      <div className="md:hidden w-full justify-start items-start inline-flex">
        {mobileTabs.map((tab, key) => (
          <Tab
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
