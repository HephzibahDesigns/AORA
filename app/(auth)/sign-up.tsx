import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoHeader from "../component/LogoHeader";
import FormField from "../component/FormField";
import Button from "../component/Button";
import { router } from "expo-router";
import { useUser } from "../../lib/appwrite";

const SignUp = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const { createUser } = useUser();

  const Login = () => {
    router.push("/sign-in");
  };

  const SignUpBtn = async () => {
    setIsSubmitting(true); // Set loading state
    try {
      await createUser(email, password, username);
      router.push("/sign-in");
    } catch (error) {
      console.error("Sign-up error:", error);
    } finally {
      setIsSubmitting(false); // Reset loading state
    }
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
          <View>
            <Button
              handlePress={SignUpBtn}
              title="Sign Up"
              isLoading={isSubmitting}
            />

            <View className="flex justify-center items-center flex-row pt-4">
              <Text className="text-grey-100 font-poppinsRegular font-medium text-center text-[14px] leading-[20px]">
                Already have an account ? {""}
              </Text>
              <TouchableOpacity onPress={Login}>
                <Text className="text-secondary font-poppinsSemiBold font-medium text-center text-[16px] leading-[20px]">
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
