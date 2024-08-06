import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Create = () => {
  return (
    <SafeAreaView className="flex flex-1 bg-primary">
      <View>
        <Text className="text-white">Create</Text>
      </View>
    </SafeAreaView>
  );
};

export default Create;
