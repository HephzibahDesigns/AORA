import { View, Image } from "react-native";
import React from "react";

const LogoHeader = () => {
  return (
    <View>
      <Image
        source={require("../../assets/images/logo.png")}
        style={{ width: 115, height: 35, resizeMode: "contain" }}
      />
    </View>
  );
};

export default LogoHeader;
