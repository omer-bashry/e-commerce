/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productsSlice";
import cartReducer from "../features/cartSlice";
import favoriteReduser from "../features/favoriteSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    favorite: favoriteReduser,
  },
});
