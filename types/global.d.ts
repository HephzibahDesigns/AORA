import "react-native";

declare module "react-native" {
  interface TextProps {
    className?: string;
  }

  interface ViewProps {
    className?: string;
  }

  interface ScrollViewProps {
    className?: string;
  }
  interface TouchableOpacityProps {
    className?: string;
  }
}
