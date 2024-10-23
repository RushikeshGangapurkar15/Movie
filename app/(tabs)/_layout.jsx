import React from "react";
import { Tabs } from "expo-router";
import { Home, Heart } from "../../assets/icons/CustomeIcons";
import { theme } from "../../constants/theme";
import { Text, View } from "react-native";
const BottomTabs = () => {
  const TabIcon = ({ icon, color, name, focused }) => {
    let iconComponent = null;

    if (name === "Home") {
      iconComponent = focused ? (
        <Home color={theme.colors.primary} strokeWidth={1.6} width={32} />
      ) : (
        <Home color={theme.colors.textLight} strokeWidth={1.6} width={32} />
      );
    } else if (name === "Favorites") {
      iconComponent = focused ? (
        <Heart color={theme.colors.primary} strokeWidth={1.6} width={32} />
      ) : (
        <Heart color={theme.colors.textLight} strokeWidth={1.6} width={32} />
      );
    }

    return (
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 3,
          marginTop: 5,
        }}
      >
        <View>{iconComponent}</View>
        <Text
          style={{
            color: !focused ? theme.colors.textLight : theme.colors.primary,

            textAlign: "center",
            marginTop: 3,
            marginLeft: 4,
          }}
        >
          {name}
        </Text>
      </View>
    );
  };
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 73,
          backgroundColor: "white",
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          headerShown: false,
          title: "Home",
          tabBarShowLabel: false,

          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={Home}
              color={theme.colors.primary}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Favorites"
        options={{
          headerShown: false,
          title: "Favorites",
          tabBarShowLabel: false,

          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={Heart}
              color={theme.colors.primary}
              name="Favorites"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default BottomTabs;
