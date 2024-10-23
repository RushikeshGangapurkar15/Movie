import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import {
  setStatusBarBackgroundColor,
  setStatusBarStyle,
  StatusBar,
} from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./store";
import { loadFavorites } from "./store/favoritesSlice";
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Semibold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) {
      SplashScreen.hideAsync();
      setStatusBarStyle("light");
      setStatusBarBackgroundColor("#6D38C3");
    }
  }, [fontsLoaded, error]);
  // Load favorites from AsyncStorage when the layout is first loaded
  useEffect(() => {
    store.dispatch(loadFavorites());
  }, []);
  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </Provider>
  );
};

export default RootLayout;
