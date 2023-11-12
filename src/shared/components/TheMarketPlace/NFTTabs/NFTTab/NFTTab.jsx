import React from "react";

export const NFTTab = ({ name, currentTab, setCurrentTab }) => {
  return (
    <div
      onClick={() => setCurrentTab(name)}
      className={`${
        currentTab === name ? "border-b-2 border-b-zinc-500" : ""
      } w-1/2 cursor-pointer h-[3.75rem] px-[1.875rem] justify-center items-center gap-4 flex`}
    >
      <div
        className={`${
          currentTab === name ? "text-white" : "text-secondary"
        } text-center text-[1.125rem] lg:text-[1.375rem] font-semibold capitalize leading-loose`}
      >
        {name}
      </div>
      <div className="px-2.5 py-[.3125rem] bg-zinc-500 rounded-2xl justify-start items-center gap-2.5 flex">
        <div className="text-white text-[.6rem] md:text-[1rem] font-normal leading-snug">
          302
        </div>
      </div>
    </div>
  );
};
