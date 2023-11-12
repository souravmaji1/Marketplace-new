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
import { convertBase64, uploadImageToCloudinary } from "Root/utils/general";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const initialData = {
  contractAddress: "",
  nftName: "",
  description: "",
  imageUrl: "",
};

// Read-only mode
const readOnlySdk = new ThirdwebSDK("mumbai", {
  clientId: import.meta.env.VITE_CLIENT_ID, // Use client id if using on the client side, get it from dashboard settings
  secretKey: import.meta.env.VITE_SECRET_KEY, // Use secret key if using on the server, get it from dashboard settings
});

// const provider = new ethers.providers.JsonRpcProvider(
//   "https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78"
// );

const CreateNftForm = () => {
  const address = useAddress();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signer = useSigner();

  // getSignerAndProvider()
  const {
    user: {
      profile: { name, email, collections, nfts },
    },
  } = useSelector((state) => state.appSlice);
  const accessToken = localStorage.getItem("accessToken");

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const [uploadedFile, setUploadedFile] = useState();
  const { contractAddress, description, nftName, imageUrl } = formData;
  const [collectionDetails, setCollectionDetails] = useState([]);
  const [dropdownLoading, setDropdownLoading] = useState(false);

  const handleFileUpload = async (e) => {
    try {
      // console.log("is array", e.target.files[0]);
      // console.log("is array parse", JSON.parse(e.target.files[0]));
      // console.log(
      //   `https://api.cloudinary.com/v1_1/${
      //     import.meta.env.VITE_CLOUD_NAME
      //   }/upload`,
      //   import.meta.env.VITE_PRESET_KEY
      // );
      console.log("event: " + e);
      const file = e.target.files[0];
      console.log("file: " + file);
      setUploadedFile(file);
    } catch (e) {
      console.log("error in handleFIleupload: " + e);
    }
  };

  //   function resetFile() {
  //     const file = document.getElementById('fileupload');
  //     file.value = '';

  // }

  console.log("uploadFile", uploadedFile);

  const fetchContractMetadat = async (address) => {
    setDropdownLoading(true);
    if (address) {
      const contract = await readOnlySdk.getContract(address);
      console.log("contract instance", contract);
      const name = await contract.call("name");
      const symbol = await contract.call("symbol");
      console.log("contract name", { name, symbol });
      return { name, symbol, address };
    } else {
      return { name: "", symbol: "", address };
    }
    setDropdownLoading(false);
  };

  useEffect(() => {
    // getContractDetails(collections[0]);
    if (collections.length > 0) {
      (async () => {
        setLoading(true);
        const allContractsWithDetails = await Promise.all(
          collections.map(async (addr) => {
            return await fetchContractMetadat(addr);
          })
        );
        console.log(
          "allContractsWithDetails ----------------",
          allContractsWithDetails
        );
        setCollectionDetails(allContractsWithDetails);
        setLoading(false);
      })();
    }
  }, []);

  const handleChange = (value, key) => {
    setFormData({ ...formData, [key]: value });
  };

  const onSubmit = async () => {
    try {
      console.log("mark1");
      setLoading(true);
      let uploadedImageUrl;
      if (uploadedFile?.name) {
        const base64 = await convertBase64(uploadedFile);
        // console.log("base64: " + base64);

        uploadedImageUrl = await uploadImageToCloudinary(base64);
        console.log("uploadedImageUrl", uploadedImageUrl);
      }
      // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
      const metadata = [
        {
          name: nftName,
          description,
          image: uploadedImageUrl?.secure_url
            ? uploadedImageUrl?.secure_url
            : imageUrl, // URL, IPFS URI, or File object
          // ... Any other metadata you want to include
        },
      ];
      console.log("mark2", { metadata, address });

      // const signer = await new ethers.providers.Web3Provider(
      //   window.ethereum
      // ).getSigner();
      // const signer = await provider.getSigner(address);
      console.log("mark3", signer);
      const sdk = await ThirdwebSDK.fromSigner(
        signer,
        "https://rpc-mumbai.maticvigil.com",
        {
          clientId: import.meta.env.VITE_CLIENT_ID, // Use client id if using on the client side, get it from dashboard settings
          secretKey: import.meta.env.VITE_SECRET_KEY, // Use secret key if using on the server, get it from dashboard settings
        }
      );
      console.log("mark4", sdk);
      const contract = await sdk.getContract(contractAddress, "nft-collection");
      console.log("mark5", contract);
      const txResult = await contract?.mint(address, metadata);
      console.log("mark6", txResult);

      console.log("txResult", txResult);

      if (txResult) {
        console.log("mark7", txResult);
        const tokenId = txResult.id.toNumber();
        console.log("mark9", tokenId);
        const data = await txResult.data(tokenId);
        console.log("mark8", data);
        const newNft = {
          metadata: {
            description,
            id: tokenId,
            image: uploadedImageUrl?.secure_url
              ? uploadedImageUrl?.secure_url
              : imageUrl,
            name: nftName,
          },
          tokenId,
          owner: address,
          supply: 1,
          type: "ERC721",
        };
        console.log("txResult", newNft);

        dispatch(
          setUser({
            profile: {
              email: email,
              name,
              collections,
              nfts: [...nfts, newNft],
            },
          })
        );

        let editProfilePayload = {
          email,
          nfts: newNft,
        };
        let { payload } = await fetchWrapper(
          `${BASE_URL}edit-profile`,
          editProfilePayload,
          "post",
          accessToken
        );

        console.log("payload api resp", payload);

        // if(payload?.email){

        dispatch(
          setToastData({
            icon: SUCCESS_ICON,
            toastMessage: "Nft minted successfully!",
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
        // }

        navigate("/user-profile");
      } else {
        dispatch(
          setToastData({
            icon: ERROR_ICON,
            toastMessage: "Unable to mint nft!",
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
      <div className="w-full md:w-[330px] h-[46px] mb-4">
        <select
          id="contractnames"
          class="w-full h-full bg-white rounded-2xl border border-zinc-500 justify-start items-center inline-flex px-5"
          style={{ color: "black" }}
          // onChange={(e) => console.log("col.address", e.target.value)}
          onChange={(e) => handleChange(e.target.value, "contractAddress")}
        >
          <option selected style={{ color: "black" }}>
            Select Collection
          </option>

          {collectionDetails.length > 0 &&
            collectionDetails.map((col) => (
              <option
                value={col.address}
                key={col.address}
                style={{ color: "black" }}
              >
                {col.name}
              </option>
            ))}
        </select>
      </div>

      <div className="w-full md:w-[330px] h-[46px]  mb-4">
        <Input
          placeholder={"Nft name"}
          value={nftName}
          onChange={(val) => handleChange(val, "nftName")}
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

      <div className="w-full md:w-[330px] h-[46px]  mb-4">
        <Input
          placeholder={"image url"}
          type="text"
          value={imageUrl}
          onChange={(val) => handleChange(val, "imageUrl")}
          icon={<LockKey className={`h-full w-full`} pathFill="#BDBDBD" />}
        />
      </div>

      <div className="w-full md:w-[330px] h-[46px]  mb-4">
        <div className="file-input-container">
          <label htmlFor="file-upload" className="file-input-label">
            {uploadedFile
              ? uploadedFile?.name.length > 20
                ? `${uploadedFile?.name?.slice(0, 20)}...`
                : uploadedFile?.name
              : "Choose a file"}
          </label>
          <input
            type="file"
            id="fileupload"
            accept="image/png, image/jpeg"
            className="file-input"
            onChange={(e) => {
              console.log("e before", e);
              handleFileUpload(e);
            }}
          />
        </div>
      </div>
      <Button
        className={`w-full md:w-[330px] h-[46px] px-[50px] bg-purple-500 rounded-2xl justify-center items-center gap-3 inline-flex disabled:bg-slate-300`}
        disabled={
          !contractAddress ||
          !description ||
          (!imageUrl && !uploadedFile?.name) ||
          !nftName ||
          loading
        }
        onClick={() => onSubmit()}
      >
        {loading ? (
          <Spinner />
        ) : (
          <div className="text-center text-white text-[16px] font-semibold leading-snug">
            Create Nft
          </div>
        )}
      </Button>
    </form>
  );
};

export default CreateNftForm;
