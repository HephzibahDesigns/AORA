import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { Fragment } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import LogoHeader from "./component/LogoHeader";
import Button from "./component/Button";
import { UserProvider } from "@/lib/appwrite";

const App = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/sign-in");
  };
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView
        contentContainerStyle={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          minHeight: "98%",
        }}
      >
        <LogoHeader />

        <View className="flex justify-center items-center">
          <Image
            source={require("../assets/images/cards.png")}
            style={{ width: 375, height: 298, resizeMode: "contain" }}
          />
        </View>

        <View className="flex justify-center items-center">
          <View className="relative w-[333px]">
            <Text className=" text-[30px] text-center text-white font-poppinsBold font-bold leading-[36px]">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={require("../assets/images/path.png")}
              style={{
                width: 106,
                height: 15,
                position: "absolute",
                resizeMode: "contain",
              }}
              className="-bottom-2 -right-2"
            />
          </View>
          <View className="w-[325px] flex justify-center items-center text-center">
            <Text className="text-center pt-5 font-poppinsMedium font-medium text-grey-100 text-[14px] leading-[22px]">
              Where Creativity Meets Innovation: Embark on a Journey of
              Limitless Exploration with Aora
            </Text>
          </View>
        </View>

        <Button handlePress={goToHome} title="Continue with Email" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
