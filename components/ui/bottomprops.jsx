import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import Ionicons from "react-native-vector-icons/Ionicons";

const BottomTabIcon = ({ route, isFocused }) => {
  const renderIcon = (route, isFocused) => {
    const fillColor = isFocused ? "#0067FF" : "#ffffff";

    switch (route) {
      case "Home":
        return <Ionicons name="home" size={30} color={fillColor}/>;

      case "Calendar":
        return <Ionicons name="calendar" size={30} color={fillColor}/>;      
      
      default:
        return null;
    }
  };

  return <View>{renderIcon(route, isFocused)}</View>;
};

export default BottomTabIcon;
