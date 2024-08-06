import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import LogoHeader from "./component/LogoHeader";

const App = () => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/sign-up");
  };
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <LogoHeader />

        <View>
          <Image
            source={require("../assets/images/cards.png")}
            style={{ width: 375, height: 298, resizeMode: "contain" }}
          />
        </View>

        <LinearGradient
          // colors={["rgba(255,140,0,1)", "rgba(255,163,0,1)"]}
          colors={["#FF8C00", "#FFA300"]} // Gradient colors
          start={{ x: 0, y: 0 }} // Gradient start position
          end={{ x: 1, y: 0 }} // Gradient end position (90-degree angle)
          className="rounded-xl"
        >
          <TouchableOpacity
            onPress={goToHome}
            className=" w-[327px] h-[58px] flex justify-center items-center rounded-full"
          >
            <Text className="flex overflow-hidden text-primary font-poppinsSemiBold font-semibold text-[16px] leading-[22.4px] text-center">
              Continue with Email
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

// const styles = StyleSheet.create({
//   gradientcolor: {
//    background: linear-gradient(90deg, rgba(255,140,0,1) 100%, rgba(255,163,0,1) 100%);
//   },
// }); background: linear-gradient(90deg, #FF8C00 0%, #FFA300 100%);
