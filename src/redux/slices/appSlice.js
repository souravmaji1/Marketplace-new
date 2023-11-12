import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    address: "",
    profile: {
      email: "",
      name: "",
      collections: [],
      nfts: [],
    },
  },
  isLoggedIn: false,
  isWalletConnected: false,
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setIsILoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setIsIWalletConnected: (state, action) => {
      state.isWalletConnected = action.payload;
    },
    setUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    resetAppSlice: (state) => {
      state.user = {
        address: "",
        profile: {
          email: "",
          name: "",
          collections: [],
          nfts: [],
        },
      };
      state.isLoggedIn = false;
      state.isWalletConnected = false;
    },
    logout: (state) => {
      state.user = {
        ...state.user,
        profile: {
          email: "",
          name: "",
          collections: [],
          nfts: [],
        },
      };
      state.isLoggedIn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setIsILoggedIn,
  setIsIWalletConnected,
  setUser,
  resetAppSlice,
  logout,
} = appSlice.actions;

export default appSlice.reducer;
