import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { Text, View } from "react-native"
import AppNavigator from "./app/navigation/AppNavigator"
import AuthNavigator from "./app/navigation/AuthNavigator"
import navigationTheme from "./app/navigation/navigationTheme"
import WelcomeScreen from "./app/screens/WelcomeScreen"

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  )
}
