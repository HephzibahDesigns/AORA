import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import React, { Fragment } from "react";
import { LinearGradient } from "expo-linear-gradient";

interface ButtonProps {
  handlePress: () => void;
  title: string;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ handlePress, title, isLoading }) => {
  return (
    <Fragment>
      {isLoading ? (
        <LinearGradient
          // colors={["rgba(255,140,0,1)", "rgba(255,163,0,1)"]}
          colors={["#FF8C00", "#FFA300"]} // Gradient colors
          start={{ x: 0, y: 0 }} // Gradient start position
          end={{ x: 1, y: 0 }} // Gradient end position (90-degree angle)
          className="rounded-xl"
        >
          <View className="w-[327px] h-[58px] flex flex-row space-x-3 justify-center items-center rounded-full">
            <ActivityIndicator size={27} color="#fff" />
            <Text className="text-white font-poppinsMedium text-center pt-2 text-lg">
              Loading...
            </Text>
          </View>
        </LinearGradient>
      ) : (
        <LinearGradient
          // colors={["rgba(255,140,0,1)", "rgba(255,163,0,1)"]}
          colors={["#FF8C00", "#FFA300"]} // Gradient colors
          start={{ x: 0, y: 0 }} // Gradient start position
          end={{ x: 1, y: 0 }} // Gradient end position (90-degree angle)
          className="rounded-xl"
        >
          <TouchableOpacity
            onPress={handlePress}
            className=" w-[327px] h-[58px] flex justify-center items-center rounded-full"
          >
            <Text className="flex overflow-hidden text-primary font-poppinsSemiBold font-semibold text-[16px] leading-[22.4px] text-center">
              {title}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      )}
    </Fragment>
  );
};

export default Button;
