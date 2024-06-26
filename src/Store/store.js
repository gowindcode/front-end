import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../Redux/ItemSlice";
import authReducer from '../Redux/reducer';

export const store = configureStore({
  //we used reduce for cart items
  reducer: {
    itemShop: itemReducer,
    auth: authReducer
  },
});
