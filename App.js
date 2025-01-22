import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./components/drawerNavigation";
import LinearGradient from "expo-linear-gradient";

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
