import React from "react";
import { ImageSourcePropType, View, Image, StyleSheet } from "react-native";

interface IconProps {
  icon: ImageSourcePropType;
  color: string;
  size: number;
}

const TabIcons: React.FC<IconProps> = ({ icon, color }) => {
  return (
    <View>
      <Image source={icon} style={[styles.icon, { tintColor: color }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});

export default TabIcons;
