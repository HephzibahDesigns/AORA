import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

interface ButtonProps {
  handlePress: () => void;
  title: string;
}

const Button: React.FC<ButtonProps> = ({ handlePress, title }) => {
  return (
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
  );
};

export default Button;
