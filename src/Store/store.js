import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../Redux/ItemSlice";

export const store = configureStore({
  //we used reduce for cart items
  reducer: {
    itemShop: itemReducer,
  },
});
