import React from "react"
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import colors from "../config/colors"

const AppButton = ({ title, onPress, color = "primary" }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: colors[color] }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({
  button: {
    margin: 5,
    borderRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    width: Platform.OS === "web" ? 400 : "100%",
    padding: 15,
  },
  text: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
})
