import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

// Define Home Icon using Svg from react-native-svg
const HomeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M12 3L2 12h3v9h6v-6h2v6h6v-9h3L12 3z"
      fill={props.fill || "#000"}
    />
  </Svg>
);

// Define Setting Icon using Svg from react-native-svg
const SettingIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0-2a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0-2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-1 11h2v2h-2v-2zm-2-2h2v2H9v-2zm4-2h2v2h-2v-2zm-4 0h2v2H7v-2z"
      fill={props.fill || "#000"}
    />
  </Svg>
);

const BottomTabIcon = ({ route, isFocused }) => {
  const renderIcon = (route, isFocused) => {
    const size = 34; // Unified height and width
    const fillColor = isFocused ? "#0067FF" : "#ffffff";

    switch (route) {
      case "Home":
        return <HomeIcon width={size} height={size} fill={fillColor} />;

      case "Setting":
        return <SettingIcon width={size} height={size} fill={fillColor} />;

      default:
        return null;
    }
  };

  return <View>{renderIcon(route, isFocused)}</View>;
};

export default BottomTabIcon;
