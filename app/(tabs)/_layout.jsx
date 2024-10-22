import React from "react";
import { Tabs } from "expo-router";

const BottomTabs = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 73,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Favorites"
        options={{
          title: "Favorites",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default BottomTabs;
