import { createSlice } from "@reduxjs/toolkit";
import SuccesIcon from "Root/assets/toasts/succesIcon";
import { SUCCESS_ICON } from "Root/constants";

const initialState = {
  toastData: {
    icon: SUCCESS_ICON,
    toastMessage: "Success!",
    openToast: false,
  },
  loading: false,
};

export const uiSlice = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {
    setToastData: (state, action) => {
      state.toastData = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    resetUiSlice: (state) => {
      state.toastData = {
        Icon: SuccesIcon,
        toastMessage: "Success!",
        openToast: false,
      };
      state.loading = false;
      //   state.isWalletConnected = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToastData, setLoading, resetUiSlice } = uiSlice.actions;

export default uiSlice.reducer;
