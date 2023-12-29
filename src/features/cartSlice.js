/* eslint-disable no-unused-vars */
// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // You may want to structure your cart data based on your requirements
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        // If the item is already in the cart, update quantity and price
        existingItem.quantety += newItem.quantety;
        existingItem.price += newItem.price;
        localStorage.setItem("cart", JSON.stringify(state.items));
      } else {
        // If the item is not in the cart, add it
        // state.items.push(newItem);
        state.items = [...state.items, newItem];
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
      console.log(state.items);
    },
    removeFromCart: (state, action) => {
      // state.items = state.items.filter((item) => item.id !== action.payload.id);
      const cart = JSON.parse(localStorage.getItem("cart"));
      const updatedCart = cart.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify([])) || [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const selectCart = (state) => state.cart; // Selector to access the cart state

export default cartSlice.reducer;
