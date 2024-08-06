import { View, Text, ImageSourcePropType } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import TabIcon from "../component/TabIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

// Importing the PNG icon
const homeIcon: ImageSourcePropType = require("../../assets/icons/home.png");
const createIcon: ImageSourcePropType = require("../../assets/icons/plus.png");
const profileIcon: ImageSourcePropType = require("../../assets/icons/profile.png");
const bookmarkIcon: ImageSourcePropType = require("../../assets/icons/bookmark.png");

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderColor: "#232533",
          borderTopWidth: 2,
          height: 60,
          paddingTop: 5,
          paddingBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: ({ color }) => (
            <Text
              style={{ color, marginTop: 2, marginBottom: -5 }}
              className="text-[12px] font-poppinsSemiBold font-semibold leading-[18px]"
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <View style={{ paddingVertical: 10 }}>
              <TabIcon icon={homeIcon} color={color} size={size} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          tabBarLabel: ({ color }) => (
            <Text
              style={{ color, marginTop: 2, marginBottom: -5 }}
              className="text-[12px] font-poppinsSemiBold font-semibold leading-[18px]"
            >
              Create
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <TabIcon icon={createIcon} color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: ({ color }) => (
            <Text
              style={{ color, marginTop: 2, marginBottom: -5 }}
              className="text-[12px] font-poppinsSemiBold font-semibold leading-[18px]"
            >
              Profile
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <TabIcon icon={profileIcon} color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          tabBarLabel: ({ color }) => (
            <Text
              style={{ color, marginTop: 2, marginBottom: -5 }}
              className="text-[12px] font-poppinsSemiBold font-semibold leading-[18px]"
            >
              Bookmark
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <TabIcon icon={bookmarkIcon} color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
