import { View, Text, TextInput, Image, Pressable } from "react-native";
import React, { useState } from "react";

interface FormFieldProps {
  title: string;
  value: string;
  placeholder: string;
  handleChange: (e: any) => void;
  secureTextEntry?: boolean; // Optional prop for secure text entry
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
}

const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  placeholder,
  handleChange,
  keyboardType,
  secureTextEntry,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <View className="mt-8 space-y-2">
      <Text className=" text-grey-100 text-[16px] leading-[22px] font-poppinsMedium font-medium">
        {title}
      </Text>
      <View className="border-2 border-black-200 w-[320px] h-[58px] rounded-xl px-4 py-2 focus:border-secondary">
        <TextInput
          className=" text-white flex-1 font-poppinsSemiBold text-[16px] leading-[22px] items-center"
          value={value}
          onChangeText={handleChange}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
        />

        {secureTextEntry && (
          <Pressable
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            className="absolute right-4 top-[40%] transform -translate-y-1/2"
          >
            <Image
              source={
                isPasswordVisible
                  ? require("../../assets/icons/eye.png")
                  : require("../../assets/icons/eye-hide.png")
              }
              style={{ width: 24, height: 24, tintColor: "white" }}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default FormField;
