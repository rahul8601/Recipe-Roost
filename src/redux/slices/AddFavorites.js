import { createSlice } from "@reduxjs/toolkit";

import toast from "react-hot-toast";

const initialState = JSON.parse(localStorage.getItem("FavoriteItems")) || [];

export const AddFavorites = createSlice({
  name: "AddFavoritesItems",
  initialState,
  reducers: {
    addRecipe: (state, action) => {
      const filteredItems = state.filter(
        (item) => item.idMeal === action.payload.idMeal
      );
      const itemExists = filteredItems.length > 0;

      if (!itemExists) {
        state?.push(action.payload);
        localStorage.setItem("FavoriteItems", JSON.stringify(state));
        toast.success(`Added: ${action.payload.strMeal} `);
      } else {
        toast.success(` Recipe Already Added `);
      }
    },
    removeRecipe: (state, action) => {
      toast.error(`Remove: ${action.payload.strMeal} `);
      const removeState = state.filter(
        (item) => item.idMeal !== action.payload.idMeal
      );
      localStorage.setItem("FavoriteItems", JSON.stringify(removeState));
      return removeState;
    },
  },
});

export const { addRecipe, removeRecipe } = AddFavorites.actions;
export default AddFavorites.reducer;
