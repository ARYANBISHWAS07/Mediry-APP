import React, { useRef, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Platform,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styled from "styled-components/native";
import LottieView from "lottie-react-native";
import DrawerSceneWrapper from "../components/sidebar";

const { width, height } = Dimensions.get("window");

const Dashboard = ({ navigation }) => {
  const animationRef = useRef(null);
  const [isAnimationRunning, setIsAnimationRunning] = useState(false);

  const openDrawer = () => {
    navigation.openDrawer();
  };

  // Navigate to other tab
  const goToSettings = () => {
    navigation.navigate("Setting");
  };
  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.play();
      setIsAnimationRunning(true);
    }
  }, []);

  const handleAnimationFinish = () => {
    setIsAnimationRunning(false);
  };

  return (
    <DrawerSceneWrapper>
      <SafeArea>
        <View style={styles.container}>
          <View
            style={[
              styles.animationWrapper,
              isAnimationRunning
                ? styles.animationRunning
                : styles.animationStopped,
            ]}
          >
            <View style={styles.animationInnerContainer}>
              <LottieView
                ref={animationRef}
                source={require("../lottyfiles/jk.json")}
                autoPlay
                loop
                style={styles.lottie}
                resizeMode="cover"
                onAnimationFinish={handleAnimationFinish}
              />

              <TouchableOpacity
                onPress={navigation.openDrawer}
                style={styles.menuButtonInAnimation}
                accessibilityLabel="Open navigation drawer"
              >
                <Icon name="menu" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeArea>
    </DrawerSceneWrapper>
  );
};

export default Dashboard;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: #3450a1;
  padding-top: ${Platform.select({
    android: `${StatusBar.currentHeight}px`,
    ios: "0px",
  })};
`;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures that the content takes up the whole screen
    justifyContent: "flex-start",
  },
  animationWrapper: {
    elevation: 10,
    opacity: 100,
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.3, // Adjust for responsiveness
    width: "100%",
    borderBottomLeftRadius: 200,
    overflow: "hidden", // Clips content to respect borderRadius
  },
  animationRunning: {
    borderColor: "green",
  },
  animationStopped: {
    borderColor: "red",
  },
  animationInnerContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  lottie: {
    width: "100%",
    height: "100%",
    opacity: 100,
  },
  menuButtonInAnimation: {
    position: "absolute",
    top: 10, // Adjust position based on your design
    left: 10, // Adjust position based on your design
    padding: 12,
    backgroundColor: "#1D3557",
    borderRadius: 50,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
});
