import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const Background = ({ children }) => {
  return (
    <LinearGradient
      colors={["#4A90E2", "#50C9C3", "#1D3557"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <View style={styles.content}>{children}</View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: width,
    height: height,
  },
  content: {
    flex: 1,
  },
});

export default Background;