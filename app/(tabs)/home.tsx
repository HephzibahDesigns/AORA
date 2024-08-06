import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex flex-1 bg-primary">
      <View>
        <Text className="text-white">Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
