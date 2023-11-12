import {
  ThirdwebSDK,
  getSignerAndProvider,
  useAddress,
  useSigner,
} from "@thirdweb-dev/react";
import { EnvelopeSimple, LockKey, UserIcon } from "Assets/svgs";
import { Button } from "Components/Button";
import { Input } from "Components/Input";
import Spinner from "Components/Spinner/Spinner";
import ErrorIcon from "Root/assets/toasts/ErrorIcon";
import SuccesIcon from "Root/assets/toasts/succesIcon";
import { BASE_URL, ERROR_ICON, SUCCESS_ICON } from "Root/constants";
import { setIsILoggedIn, setUser } from "Root/redux/slices/appSlice";
import { setToastData } from "Root/redux/slices/uiSlice";
import fetchWrapper from "Root/utils/fetchWrapper";
import { ethers } from "ethers";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const initialData = {
  contractName: "",
  description: "",
  symbol: "",
  imageUrl: "",
};

// const provider = new ethers.providers.JsonRpcProvider(
//   "https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78"
// );

const CreateCollection = () => {
  const address = useAddress();
  const signer = useSigner();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // getSignerAndProvider()
  const {
    user: {
      profile: { email },
    },
  } = useSelector((state) => state.appSlice);

  const accessToken = localStorage.getItem("accessToken");

  console.log("email access", { email, accessToken });

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const { contractName, description, symbol, imageUrl } = formData;
  // const [passwordError, setPasswordError] = useState("");
  // const [passwordMismatchError, setPasswordMismatchError] = useState("");

  const handleChange = (value, key) => {
    setFormData({ ...formData, [key]: value });
  };

  const onSubmit = async () => {
    try {
      setLoading(true);
      let contractPayload = {
        // Required parameters
        name: contractName, // Name of the contract
        primary_sale_recipient: address, // Wallet address to receive funds from sales
        voting_token_address: "0x00", // Only used for Vote

        // Optional metadata
        // app_uri: "https://example.com", // Website of your contract dApp
        description: description, // Description of your contract
        // external_link: "https://example.com", // External link to view contract info on your website
        symbol: symbol, // Symbol of the contract tokens
        image: imageUrl, // Image to use for the contract
      };

      console.log("contractPayload", { contractPayload, address });

      // const signer = await new ethers.providers.Web3Provider(
      //   window.ethereum
      // ).getSigner();
      // const signer = await provider.getSigner(address);

      const sdk = await ThirdwebSDK.fromSigner(
        signer,
        "https://rpc-mumbai.maticvigil.com",
        {
          clientId: import.meta.env.VITE_CLIENT_ID, // Use client id if using on the client side, get it from dashboard settings
          secretKey: import.meta.env.VITE_SECRET_KEY, // Use secret key if using on the server, get it from dashboard settings
        }
      );

      const txResult = await sdk.deployer.deployBuiltInContract(
        "nft-collection",
        contractPayload
      );

      console.log("txResult", txResult);

      let editProfilePayload = {
        email,
        collections: [txResult],
      };
      let { payload } = await fetchWrapper(
        `${BASE_URL}edit-profile`,
        editProfilePayload,
        "post",
        accessToken
      );

      console.log("sdk", sdk);

      // let { payload } = await fetchWrapper(
      //   `${BASE_URL}auth/signup`,
      //   signupPayload,
      //   "post"
      // );
      // setLoading(false);
      if (payload?.email) {
        dispatch(
          setUser({
            profile: {
              email: payload?.email,
              name: payload?.name,
              collections: payload?.collections,
              nfts: payload?.nfts,
            },
          })
        );
        // window.localStorage.setItem("accessToken", payload?.accessToken);
        // dispatch(setIsILoggedIn(true));
        dispatch(
          setToastData({
            icon: SUCCESS_ICON,
            toastMessage: "Collection created successfully!",
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

        navigate("/");
      } else {
        dispatch(
          setToastData({
            icon: ERROR_ICON,
            toastMessage: payload?.message,
            openToast: true,
          })
        );

        setTimeout(() => {
          dispatch(
            setToastData({
              icon: SUCCESS_ICON,
              toastMessage: "",
              openToast: false,
            })
          );
        }, 3000);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log("error on submit", e);
    }
  };

  console.log("address", address);

  return (
    <form className="w-full h-fit flex-col justify-center gap-5 items-start inline-flex">
      <div className="w-full md:w-[330px] h-[46px]  mb-4">
        <Input
          placeholder={"contract name"}
          value={contractName}
          onChange={(val) => handleChange(val, "contractName")}
          icon={<UserIcon pathFill="#BDBDBD" />}
        />
      </div>
      <div className="w-full md:w-[330px] h-[46px] mb-4">
        <Input
          placeholder={"description"}
          type="email"
          value={description}
          onChange={(val) => handleChange(val, "description")}
          icon={<EnvelopeSimple pathFill="#BDBDBD" />}
        />
      </div>
      <div className="w-full md:w-[330px] h-[46px] mb-4">
        <Input
          placeholder={"symbol"}
          type="text"
          value={symbol}
          onChange={(val) => handleChange(val, "symbol")}
          icon={<LockKey className={`h-full w-full`} pathFill="#BDBDBD" />}
        />
      </div>
      <div className="w-full md:w-[330px] h-[46px]  mb-4">
        <Input
          placeholder={"image url"}
          type="text"
          value={imageUrl}
          onChange={(val) => handleChange(val, "imageUrl")}
          icon={<LockKey className={`h-full w-full`} pathFill="#BDBDBD" />}
        />
      </div>
      <Button
        className={`w-full md:w-[330px] h-[46px] px-[50px] bg-purple-500 rounded-2xl justify-center items-center gap-3 inline-flex disabled:bg-slate-300`}
        disabled={
          !contractName || !symbol || !description || !imageUrl || loading
        }
        onClick={() => onSubmit()}
      >
        {loading ? (
          <Spinner />
        ) : (
          <div className="text-center text-white text-[16px] font-semibold leading-snug">
            Create collection
          </div>
        )}
      </Button>
    </form>
  );
};

export default CreateCollection;
