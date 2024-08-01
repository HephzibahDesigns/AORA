import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const index = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#161622] flex justify-center items-center">
      <Text className="flex text-white font-semibold  text-center text-lg font-poppinsMedium">
        Home Page
      </Text>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
