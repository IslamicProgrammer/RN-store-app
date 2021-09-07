import React from "react"
import { StyleSheet, Text, View } from "react-native"
import colors from "../config/colors"

import { MaterialCommunityIcons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native-gesture-handler"

const NewButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={30}
        />
      </View>
    </TouchableOpacity>
  )
}

export default NewButton

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    width: 80,
    height: 80,
    borderRadius: 40,
    bottom: 20,
    borderColor: colors.white,
    borderWidth: 5,
    justifyContent: "center",
  },
})
