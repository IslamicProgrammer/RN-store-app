import React from "react"
import { Platform, StyleSheet, Text, TextInput, View } from "react-native"
import colors from "../config/colors"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const AppTextInput = ({ icon, ...args }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons name={icon} size={20} color={colors.medium} />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        style={styles.textInput}
        {...args}
      />
    </View>
  )
}
export default AppTextInput

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    paddingRight: 10,
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  textInput: {
    color: colors.dark,
    marginLeft: 10,
    fontSize: 18,
    width: "100%",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
      },
      default: {
        fontFamily: "Avenir",
      },
    }),
  },
})
