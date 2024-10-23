import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { Heart, Star } from "../assets/icons/CustomeIcons";
import { theme } from "../constants/theme";
import { TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../app/store/favoritesSlice";
const imageUrl = "https://image.tmdb.org/t/p/w500";

const CardComponent = ({ id, image, title }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites); // Access the favorites from Redux
  const isFavorite = favorites.some((movie) => movie.id === id); // Check if the movie is already in favorites

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites({ id })); // Remove from favorites if it's already added
    } else {
      dispatch(addToFavorites({ id, title, poster_path: image })); // Add to favorites
    }
  };
  return (
    <View className="mt-2 w-36 m-2  items-center  ">
      <TouchableOpacity
        onPress={toggleFavorite}
        className="absolute z-10 m-1 top-1 right-1 rounded-xl p-2 bg-white"
      >
        <Heart
          fill={isFavorite ? theme.colors.tertiary : "#333"}
          width="20"
          height="20"
        />
      </TouchableOpacity>
      <Image
        source={{ uri: imageUrl + image }}
        className="w-full h-52 rounded-lg"
        resizeMode="cover"
      />
      <Text
        className="font-pmedium mt-2 text-base text-textLight text-center"
        numberOfLines={1}
      >
        {title.length > 17 ? `${title.slice(0, 17)}...` : title}
      </Text>
    </View>
  );
};

export default CardComponent;
