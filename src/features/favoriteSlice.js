/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  favoriteList: [],
};

const favoriteSlice = createSlice({
  name: "favorit",
  initialState,
  reducers: {
    add: (state, action) => {
      // Retrieve the favorites from local storage and parse it as JSON
      const allFavorites = JSON.parse(localStorage.getItem("favorite")) || [];
      const newItem = action.payload;

      const existingItem = allFavorites.find((item) => item.id === newItem.id);
      if (allFavorites.length > 0 && existingItem) {
        console.log("..");
      } else {
        localStorage.setItem(
          "favorite",
          JSON.stringify([...allFavorites, action.payload])
        );
      }
    },
    deleteFromFavorite: (state, action) => {
      const favorites = JSON.parse(localStorage.getItem("favorite"));
      const updatedCart = favorites.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("favorite", JSON.stringify(updatedCart));
    },
    clearFavorite: (state, action)=>{
        localStorage.setItem("favorite", JSON.stringify([])) || [];
    }
  },
});

export const { add, deleteFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
