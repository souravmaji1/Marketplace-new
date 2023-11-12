import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import uiSlice from "./slices/uiSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducers = combineReducers({
  appSlice,
  uiSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

// export const store = configureStore({
//   reducer: {
//     appSlice,
//     uiSlice,
//   },
// });
