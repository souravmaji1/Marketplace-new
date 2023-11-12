import ErrorIcon from "Root/assets/toasts/ErrorIcon";
import WarningIcon from "Root/assets/toasts/WarningIcon";
import SuccesIcon from "Root/assets/toasts/succesIcon";
import { ERROR_ICON, SUCCESS_ICON, WARNING_ICON } from "Root/constants";
import axios from "axios";
import Web3 from "web3";

export const conciseAddress = (address) => {
  if (Web3.utils.isAddress(address)) {
    return `${address.slice(0, 6)}...${address.slice(
      address.length - 4,
      address.length
    )}`;
  }
  return "-";
};

export const GetIcon = (iconName) => {
  let Icon = SuccesIcon;
  switch (iconName) {
    case SUCCESS_ICON:
      Icon = SuccesIcon;
      break;
    case WARNING_ICON:
      Icon = WarningIcon;
      break;
    case ERROR_ICON:
      Icon = ErrorIcon;
      break;
    default:
      Icon = SuccesIcon;
      break;
  }
  return Icon;
};

export const getNetworkName = (chainId) => {
  let Icon = "mumbai";
  switch (chainId) {
    case "137":
      Icon = "polygon";
      break;
    case "80001":
      Icon = "mumbai";
      break;
    default:
      Icon = "mumbai";
      break;
  }
  return Icon;
};

export const uploadImageToCloudinary = async (uri) => {
  try {
    // if (photo?.assets && photo?.assets?.length > 0) {
    if (uri) {
      // const source = {
      //   uri: "data:image/jpeg;base64," + photo.assets[0].base64,
      // };

      let dataObj = {
        file: uri,
        upload_preset: import.meta.env.VITE_PRESET_KEY,
      };
      const { data } = await axios.post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUD_NAME
        }/upload`,
        dataObj
      );
      return data || "";
    }
  } catch (err) {
    console.log("error: ", err);
  }
};

export const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
