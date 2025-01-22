import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Platform } from "react-native";
import BottomTab from "./tabarNavigation";
import Addandscanpage from "./addandscanpage";

const Colors = {
  bg: "#009688",
  active: "#fff",
  inactive: "#eee",
  transparent: "transparent",
};

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const drawerIcon = ({ focused, size }, name) => {
    return (
      <Icon
        name={name}
        size={size}
        color={focused ? Colors.active : Colors.inactive}
      />
    );
  };

  return (
    <Drawer.Navigator
      drawerType="slide"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: Colors.transparent,
        drawerInactiveBackgroundColor: Colors.transparent,
        drawerActiveTintColor: Colors.active,
        drawerInactiveTintColor: Colors.inactive,
        drawerHideStatusBarOnOpen: Platform.OS === "ios" ? false : true,
        overlayColor: Colors.transparent,
        drawerStyle: {
          backgroundColor: Colors.bg,
          width: "60%",
        },
        sceneContainerStyle: {
          backgroundColor: "#009688",
        },
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={BottomTab}
        options={{
          drawerIcon: (options) => drawerIcon(options, "home-outline"),
        }}
      />
      <Drawer.Screen name="Add" component={Addandscanpage} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
