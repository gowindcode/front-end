import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    },

    increaseQty: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item._id === action.payload.item._id) {
            // Assuming you fetch the offerPrice and update the item object here
            return {
              ...item,
              quantity: action.payload.quantity,
            };
          }
          return item;
        }),
      };
    },

    qtyPriceUpdates: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item._id === action.payload.item._id) {
            // Assuming you fetch the offerPrice and update the item object here
            return {
              ...item,
              offerPrice: action.payload.offerPrice,
              quantity: action.payload.quantity, // Assuming offerPrice is fetched here
            };
          }
          return item;
        }),
      };
    },

    clearCart: (state) => {
      return {
        ...state,
        cartItems: [],
      };
    },
    removeItem: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload
        ),
      };
    },
  },
});

export const {
  addToCart,
  clearCart,
  removeItem,
  increaseQty,
  qtyPriceUpdates,
} = itemSlice.actions;

export default itemSlice.reducer;
