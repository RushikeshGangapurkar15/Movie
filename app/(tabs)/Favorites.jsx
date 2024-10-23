import { View, Text, ScrollView } from "react-native";
import React from "react";
import Listcomponent from "../../components/Listcomponent";
import { useSelector } from "react-redux";
import CardComponent from "../../components/CardComponent";
import { SafeAreaView } from "react-native-safe-area-context";

const Favorites = () => {
  const favoriteMovies = useSelector((state) => state.favorites.favorites); // Get favorites from Redux

  return (
    <SafeAreaView className="flex-1 bg-white px-4 ">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mt-7">
          <Text className="font-psemibold text-primary text-3xl text-center">
            Favorite Movies
          </Text>
        </View>
        {favoriteMovies.length > 0 ? (
          <View className="mt-5 mb-4 flex-wrap flex-row items-center justify-center   ">
            {favoriteMovies.map((item) => (
              <CardComponent
                key={item.id}
                id={item.id}
                image={item.poster_path}
                title={item.title}
              />
            ))}
          </View>
        ) : (
          <Text className="font-pmedium mt-5 text-center">
            No favorite movies yet!
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorites;
