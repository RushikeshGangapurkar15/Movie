import { View, Text, FlatList } from "react-native";
import React from "react";
import CardComponent from "./CardComponent";

const Listcomponent = ({ movies, heading }) => {
  return (
    <View className="mt-3">
      <Text className="font-pmedium  text-primary text-xl capitalize mb-1 ml-2">
        {heading}
      </Text>
      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardComponent
            id={item.id}
            image={item.poster_path}
            title={item.title}
          />
        )}
      />
    </View>
  );
};

export default Listcomponent;
