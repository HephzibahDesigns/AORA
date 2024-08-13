import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../component/Button";
import LogoHeader from "../component/LogoHeader";
import FormField from "../component/FormField";
import { router } from "expo-router";
import { useUser } from "../../lib/appwrite";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const { login } = useUser();

  const handleLogin = async () => {
    setIsSubmitting(true); // Set loading state
    try {
      await login(email, password);
      router.push("/home");
    } catch (error) {
      console.error("Sign-up error:", error);
    } finally {
      setIsSubmitting(false); // Reset loading state
    }
  };

  const SignUp = () => {
    router.push("/sign-up");
  };

  return (
    <SafeAreaView className="flex flex-1 bg-primary">
      <ScrollView>
        <View className="flex justify-center items-start px-4 space-y-8 my-24">
          <LogoHeader />

          <Text className="text-white font-bold font-poppinsBold text-[26px] leading-[32px]">
            Log In
          </Text>

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
          <View>
            <Button
              handlePress={handleLogin}
              title="Login"
              isLoading={isSubmitting}
            />

            <View className="flex justify-center items-center flex-row pt-4">
              <Text className="text-grey-100 font-poppinsRegular font-medium text-center text-[14px] leading-[20px]">
                Don’t have an account ? {""}
              </Text>
              <TouchableOpacity onPress={SignUp}>
                <Text className="text-secondary font-poppinsSemiBold font-medium text-center text-[16px] leading-[20px]">
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
