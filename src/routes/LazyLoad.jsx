import { lazy } from "react";

export const Home = lazy(() => import("Containers/Home"));
export const CreateACcount = lazy(() => import("Containers/CreateACcount"));
export const CreateNftCollection = lazy(() =>
  import("Containers/CreateNftCollection")
);
export const CreateNft = lazy(() => import("Containers/CreateNft"));
export const WalletConnect = lazy(() => import("Containers/WalletConnect"));
export const ArtistRankings = lazy(() => import("Containers/Rankings"));
export const MarketPlace = lazy(() => import("Containers/MarketPlace"));
export const ArtistPage = lazy(() => import("Containers/ArtistPage"));
export const UserProfile = lazy(() => import("Containers/UserProfile"));
export const NFTPage = lazy(() => import("Containers/NFTPage"));
