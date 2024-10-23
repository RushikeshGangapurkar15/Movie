import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

// Thunk to load favorites from AsyncStorage
export const loadFavorites = createAsyncThunk(
  "favorites/loadFavorites",
  async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem("favorites");
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    } catch (error) {
      console.error("Failed to load favorites:", error);
      return [];
    }
  }
);

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const movieExists = state.favorites.find(
        (movie) => movie.id === action.payload.id
      );
      if (!movieExists) {
        state.favorites.push(action.payload);
        // Save updated favorites to AsyncStorage
        AsyncStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.id !== action.payload.id
      );
      // Save updated favorites to AsyncStorage
      AsyncStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadFavorites.fulfilled, (state, action) => {
      state.favorites = action.payload;
    });
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
