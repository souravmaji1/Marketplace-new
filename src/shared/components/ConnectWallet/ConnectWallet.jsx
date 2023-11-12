import { WalletConnectSingleShip } from "Assets/images";
import { CoinbaseLogo, MetamaskLogo, WalletConnectLogo } from "Assets/svgs";
// import { Button } from "Components/Button";
// import { Input } from "Components/Input";

import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { connectors } from "./connectors";
import React, { useCallback, useEffect } from "react";
import {
  InjectedConnector,
  NoEthereumProviderError,
  UserRejectedRequestError,
} from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { injected } from "Root/utils/web3Connectors";
import {
  resetAppSlice,
  setIsIWalletConnected,
  setUser,
} from "Root/redux/slices/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { SUCCESS_ICON, WARNING_ICON } from "Root/constants";
import { setToastData } from "Root/redux/slices/uiSlice";
import {
  ConnectWallet,
  useAddress,
  useDisconnect,
  useMetamask,
} from "@thirdweb-dev/react";

export const CustomConnectWallet = () => {
  const connectMetaMask = useMetamask();
  const disconnectWallet = useDisconnect();
  const address = useAddress();

  const dispatch = useDispatch();

  useEffect(() => {
    if (address) {
      dispatch(setUser({ address: address }));
    }
  }, [address]);

  const onConnectMetamask = async () => {
    try {
      console.log("connectMetaMask", connectMetaMask);
      console.log("address before", address);
      await connectMetaMask();
      console.log("address after", address);
      dispatch(setIsIWalletConnected(true));
    } catch (e) {
      console.log("error in connection", e);
    }
  };

  const deactivateWallet = async () => {
    await disconnectWallet();

    dispatch(setIsIWalletConnected(false));

    dispatch(resetAppSlice());
  };

  const handleMessagesOnToast = (msg) => {
    dispatch(
      setToastData({
        icon: WARNING_ICON,
        toastMessage: msg,
        openToast: true,
      })
    );

    setTimeout(() => {
      dispatch(
        setToastData({
          icon: SUCCESS_ICON,
          toastMessage: "Account created successfully!",
          openToast: false,
        })
      );
    }, 3000);
  };

  return (
    <div className="w-full h-fit pb-5 mb-5 md:h-[691px] bg-zinc-800 justify-start items-center md:gap-[60px] flex md:flex-row flex-col">
      <div className="w-full md:w-1/2">
        <img className="w-full h-[691px]" src={WalletConnectSingleShip} />
      </div>

      <div className={`px-[30px] md:px-0 w-full md:w-1/2 h-fit`}>
        <div className="w-full h-fit md:h-[691px] py-[100px] flex-col justify-start items-start gap-10 inline-flex">
          <div className="w-full text-white text-[51px] font-semibold capitalize leading-20 md:leading-10">
            Connect wallet
          </div>
          <div className="w-full text-white text-[22px] font-normal capitalize leading-9">
            Choose a wallet you want to connect. There are several wallet
            providers.
          </div>

          {/*  */}
          <button
            onClick={() => {
              address ? deactivateWallet() : onConnectMetamask();
            }}
          >
            <div className="w-full py-5 md:py-0 md:w-80 h-[72px] pl-10 pr-5 bg-neutral-700 rounded-2xl border border-purple-500 justify-start items-center gap-5 inline-flex">
              <div className="w-10 h-10 justify-center items-center flex">
                <div className="w-10 h-10 relative flex-col justify-start items-start flex">
                  <div className="w-10 h-[37.08px] relative">
                    <img src={MetamaskLogo} alt="" />
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 text-white text-[22px] font-semibold capitalize leading-loose">
                Metamask
              </div>
            </div>
          </button>
          {/*  */}
          <ConnectWallet
            dropdownPosition={{
              side: "bottom",
              align: "center",
            }}
          />
          {/*  */}
          <button
            onClick={() => {
              activate(connectors.walletlink);
            }}
          >
            <div className="w-full py-5 md:py-0 md:w-80 h-[72px] pl-10 pr-5 bg-neutral-700 rounded-2xl border border-purple-500 justify-start items-center gap-5 inline-flex">
              <div className="w-10 h-10 justify-center items-center flex">
                <div className="w-10 h-10 relative flex-col justify-start items-start flex">
                  <div className="w-10 h-[37.08px] relative">
                    <img src={CoinbaseLogo} alt="" />
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 text-white text-[22px] font-semibold capitalize leading-loose">
                Coinbase
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
