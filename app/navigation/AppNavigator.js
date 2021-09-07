import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { MaterialCommunityIcons } from "@expo/vector-icons"

import EditListingsScreen from "../screens/EditListingsScreen"
import FeedNavigator from "./FeedNavigator"
import AccountNavigator from "./AccountNavigator"
import NewButton from "./NewButton"

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={EditListingsScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewButton onPress={() => navigation.navigate("ListingEdit")} />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default AppNavigator
