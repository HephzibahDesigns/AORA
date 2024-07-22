import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const index = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Text style={styles.text}>Home Page</Text>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#161622",
    // paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  text: {
    color: "white",
  },
});
