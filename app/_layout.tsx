import React, { Fragment, useEffect, useState } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Poppins_900Black,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_100Thin,
} from "@expo-google-fonts/dev";

import * as SplashScreen from "expo-splash-screen";
import { ActivityIndicator, View, Text } from "react-native";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  // const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // You can perform any asynchronous tasks here.
        // This function will be called immediately without any delay.
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
        // setFontsLoaded(true);
      }
    }

    // Call the prepare function
    prepare();

    // Hide the splash screen after 2 seconds (adjust as needed)
    const splashScreenTimeout = setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 3000); // Adjust the delay as needed

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(splashScreenTimeout);
  }, []);

  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black,
  });

  if (!fontsLoaded) {
    return (
      <View className="flex flex-1 justify-center items-center bg-[#161622]">
        <ActivityIndicator size="large" color="#ffffff" />
        <Text className=" text-white font-poppinsLight pt-2 text-lg">
          Loading...
        </Text>
      </View>
    );
  }

  return (
    <Fragment>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </Fragment>
  );
}
