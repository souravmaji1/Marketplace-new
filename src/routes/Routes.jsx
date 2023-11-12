import { Routes, Route } from "react-router-dom";

import { ScreenWrapper } from "Components/ScreenWrapper";
import {
  CreateACcount,
  Home,
  WalletConnect,
  ArtistRankings,
  MarketPlace,
  ArtistPage,
  NFTPage,
  UserProfile,
  CreateNftCollection,
  CreateNft,
} from "./LazyLoad";
import { useDispatch } from "react-redux";
import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { setUser } from "Root/redux/slices/appSlice";
import {
  ThirdwebProvider,
  coinbaseWallet,
  metamaskWallet,
  paperWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import { getNetworkName } from "Root/utils/general";
import { ChakraProvider } from '@chakra-ui/react'

const HomeScreen = () => (
  <ScreenWrapper>
    <Home />
  </ScreenWrapper>
);
const CreateAccountScreen = () => (
  <ScreenWrapper>
    <CreateACcount />
  </ScreenWrapper>
);
const WalletConnectScreen = () => (
  <ScreenWrapper>
    <WalletConnect />
  </ScreenWrapper>
);
const ArtistRankingScreen = () => (
  <ScreenWrapper>
    <ArtistRankings />
  </ScreenWrapper>
);
const MarketPlaceScreen = () => (
  <ScreenWrapper>
    <MarketPlace />
  </ScreenWrapper>
);
const ArtistScreen = () => (
  <ScreenWrapper>
    <ArtistPage />
  </ScreenWrapper>
);
const UserProfileScreen = () => (
  <ScreenWrapper>
    <UserProfile />
  </ScreenWrapper>
);

const NFTScreen = () => (
  <ScreenWrapper>
    <NFTPage />
  </ScreenWrapper>
);
const CreateNftCollectionPage = () => (
  <ScreenWrapper>
    <CreateNftCollection />
  </ScreenWrapper>
);

const CreateNftPage = () => (
  <ScreenWrapper>
    <CreateNft />
  </ScreenWrapper>
);

export function MainRoutes() {
  const dispatch = useDispatch();
  const { account, chainId } = useWeb3React();
  useEffect(() => {
    if (account) {
      dispatch(setUser({ address: account }));
    }
  }, [account]);

  useEffect(() => {
    console.log("current chainId: " + chainId, getNetworkName(chainId));
  }, [chainId]);

  return (
    <>
      <ThirdwebProvider
        activeChain={"mumbai"}
        supportedWallets={[
          metamaskWallet(),
          coinbaseWallet(),
          walletConnect(),
          paperWallet({
            paperClientId: "f3938e08-d7dc-4bf2-8244-e1cfc3401550",
          }),

        ]}
        // signer={
        //   new ethers.providers.Web3Provider(window.ethereum).getSigner() || {}
        // }
        // supportedWallets={[metamaskWallet(), walletConnect()]}
        clientId="f3324b0ff2cfad9f6974b1c11c89ab79"
      >
        <ChakraProvider>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/create-account" element={<CreateAccountScreen />} />
          <Route
            path="/create-nft-collection"
            element={<CreateNftCollectionPage />}
          />
          
          <Route path="/create-nft" element={<CreateNftPage />} />
         

          <Route path="/connect-wallet" element={<WalletConnectScreen />} />
          <Route path="/rankings" element={<ArtistRankingScreen />} />
          <Route path="/marketplace" element={<MarketPlaceScreen />} />
          <Route path="/artist" element={<ArtistScreen />} />
          <Route path="/user-profile" element={<UserProfileScreen />} />
          <Route path="/nft" element={<NFTScreen />} />

          {/* <Route Component={NotFoundRoute} /> */}
        </Routes>
        </ChakraProvider>
      </ThirdwebProvider>
    </>
  );
}
