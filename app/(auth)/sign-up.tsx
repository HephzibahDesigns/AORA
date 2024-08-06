import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoHeader from "../component/LogoHeader";
import FormField from "../component/FormField";
import Button from "../component/Button";
import { router } from "expo-router";

const SignUp = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const Login = () => {
    router.push("/sign-in");
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="flex justify-center items-start px-4 space-y-8 my-24">
          <LogoHeader />

          <Text className="text-white font-bold font-poppinsBold text-[26px] leading-[32px]">
            Sign Up
          </Text>
          <FormField
            title="Username"
            value={username}
            handleChange={(text: string) => setUsername(text)}
            placeholder="Your unique username"
            keyboardType="default"
          />
          <FormField
            title="Email"
            value={email}
            handleChange={(text: string) => setEmail(text)}
            placeholder="Enter Email Address"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={password}
            handleChange={(text: string) => setPassword(text)}
            placeholder="Enter Password"
            secureTextEntry
          />
          <View className="">
            <Button handlePress={Login} title="Sign Up" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
