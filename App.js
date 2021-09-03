import React, { useState } from "react"
import { View, StyleSheet, Platform } from "react-native"
import AppButton from "./app/components/AppButton"
import AppText from "./app/components/AppText"
import Card from "./app/components/Card"
import WelcomeScreen from "./app/screens/WelcomeScreen"
import WiewImage from "./app/screens/WiewImage"
import jacket from "./app/assets/images/jacket.jpeg"
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen"
import MessagesScreen from "./app/screens/MessagesScreen"
import colors from "./app/config/colors"
import ListItem from "./app/components/ListItem"
import Screen from "./app/components/Screen"
import Icon from "./app/components/Icon"
import AccountScreen from "./app/screens/AccountScreen"
import ListingScreen from "./app/screens/ListingScreen"
import AppTextInput from "./app/components/AppTextInput"
import AppPicker from "./app/components/AppPicker"
import LoginScreen from "./app/screens/LoginScreen"
import EditListingsScreen from "./app/screens/EditListingsScreen"

export default function App() {
  return <MessagesScreen />
}
