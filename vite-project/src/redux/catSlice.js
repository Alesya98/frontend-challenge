import { createSlice } from "@reduxjs/toolkit";
import { getRandomCat } from "../api/catAPI";

const initialState = {
  value: [],
  loading: false,
  error: null,
};

const catSlice = createSlice({
  name: "cats",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getRandomCat.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getRandomCat.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      })

      .addCase(getRandomCat.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Что-то пошло не так";
      });
  },
});

export default catSlice.reducer;
// export const {get} = catSlice.actions
