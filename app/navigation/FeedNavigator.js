import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import ListingScreen from "../screens/ListingScreen"
import ListingDetailsScreen from "../screens/ListingDetailsScreen"
import { Platform } from "react-native"

const Stack = createStackNavigator()

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="Listings" component={ListingScreen} />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
      options={{ headerShown: Platform.OS == "web" }}
    />
  </Stack.Navigator>
)

export default FeedNavigator
