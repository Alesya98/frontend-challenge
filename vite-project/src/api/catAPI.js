import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_API_KEY;

export const getRandomCat = createAsyncThunk("cat/get", async (_, thunkAPI) => {
  try {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=15",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${API_KEY}`,
        },
      },
    );

    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
