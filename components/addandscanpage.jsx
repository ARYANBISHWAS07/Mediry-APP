import React from "react";
import {
  View,
  Platform,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import DrawerSceneWrapper from "./sidebar";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";

const Addandscanpage = () => {
  return (
    <SafeArea>
      <DrawerSceneWrapper>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => console.log("Add button pressed")}
          >
            <LinearGradient
              colors={["#38bdf8", "#0c4a6e"]}
              style={styles.button}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <MaterialIcons name="add" size={60} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => console.log("Scan button pressed")}
          >
            <LinearGradient
              colors={["#38bdf8", "#0c4a6e"]}
              style={styles.button}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <MaterialIcons name="person" size={60} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </DrawerSceneWrapper>
    </SafeArea>
  );
};

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #3450a1;
  padding-top: ${Platform.select({
    android: StatusBar.currentHeight + "px",
    ios: "0px",
  })};
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginBottom: 60,
    elevation: 20,
  },
  button: {
    width: 200,
    height: 200,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Addandscanpage;
