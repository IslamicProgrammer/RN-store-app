import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AccountScreen from "../screens/AccountScreen"
import MessagesScreen from "../screens/MessagesScreen"

const Stack = createNativeStackNavigator()

const AccountNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="AccountSceen"
      component={AccountScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
)

export default AccountNavigator
