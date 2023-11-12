import { memo } from "react";
import { BrowseCategories } from "Components/BrowseCategories";
import { DiscoverMoreNFTs } from "Components/DiscoverMoreNFTs";
import { NFTHighlight } from "Components/NFTHighlight";
import { HowItWorks } from "Components/HowItWorks/HowItWorks";
import { SubscribeWidget } from "Components/SubscribeWidget";
import { TrendingCollection } from "Components/TrendingCollection";
import { TopCreators } from "Components/TopCreators";
import { HomeHero } from "Components/HomeHero";

function Home() {
  return (
    <>
      <div className={`px-[30px] mb-2 h-fit md:px-base w-full`}>
        <HomeHero />
        <TrendingCollection />
        <TopCreators />
        <BrowseCategories />
        <DiscoverMoreNFTs />
      </div>
      <NFTHighlight />
      <div className="px-[30px] md:px-base">
        <HowItWorks />
        <SubscribeWidget />
      </div>
    </>
  );
}

export default memo(Home);
