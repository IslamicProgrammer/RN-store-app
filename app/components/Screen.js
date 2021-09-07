import React from "react"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import Constants from "expo-constants"

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[{ flex: 1 }, style]}>{children}</View>
    </SafeAreaView>
  )
}

export default Screen

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
})
