import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/dashboard";
import Setting from "./setting";
import CustomBottomTab from "./ui/custom";
import Calendar from "../screens/calendar";

const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBar={(props) => <CustomBottomTab {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Calendar" component={Calendar} />
    </Tab.Navigator>
  );
};

export default BottomTab;