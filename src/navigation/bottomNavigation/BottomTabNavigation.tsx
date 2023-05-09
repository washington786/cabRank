import React from "react";

import Icon from "react-native-vector-icons/Feather";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../../screens/app/Dashboard/Dashboard";
import Settings from "../../screens/app/Account/Settings";
import { colors } from "../../globals/Colors";
import AccountStack from "../stacks/app/account/AccountStack";
import HomeStack from "../stacks/app/dash/HomeStack";

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  dashboard: "home",
  settings: "user",
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary_10,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name={TAB_ICONS.dashboard} size={20} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="settings"
        component={AccountStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name={TAB_ICONS.settings} size={20} color={color} />
          ),
          tabBarLabel: "Settings",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
