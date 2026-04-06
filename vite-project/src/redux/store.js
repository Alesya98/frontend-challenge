import { configureStore } from "@reduxjs/toolkit";
import catSlice from "./catSlice";
import favouriteSlice from './favouriteSlice'

const favoritesMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type.startsWith("favourite/")) {
      const state = store.getState();
    localStorage.setItem("my_favorites", JSON.stringify(state.favourite.items));
  }

  return result;
};


export const store = configureStore({
  reducer: {
    cats: catSlice,
    favourite: favouriteSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(favoritesMiddleware),
});
