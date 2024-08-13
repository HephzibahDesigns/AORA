import { View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "@/lib/appwrite";
import { router } from "expo-router";

const Home = () => {
  const { logout } = useUser();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/sign-in");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView className="flex flex-1 bg-primary">
      <View>
        <Text className="text-white">Home</Text>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
