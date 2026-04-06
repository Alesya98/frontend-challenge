import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    items: JSON.parse(localStorage.getItem("my_favorites")) || [],
  },
  reducers: {
    addToFavourites: (state, action) => {
          const exists = state.items.find(
            (item) => item.id === action.payload.id,
          );
          if (!exists) state.items.push(action.payload);
    },

      removeFromFavourites: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload)
    }
    },
});

export default favouriteSlice.reducer;
export const { addToFavourites, removeFromFavourites } = favouriteSlice.actions;
