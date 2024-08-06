import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Bookmark = () => {
  return (
    <SafeAreaView className="flex flex-1 bg-primary">
      <View>
        <Text className="text-white">BookMark</Text>
      </View>
    </SafeAreaView>
  );
};

export default Bookmark;
