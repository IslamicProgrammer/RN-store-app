import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import chair from "../assets/images/chair.jpeg"
import colors from "../config/colors"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const WiewImage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeBtn}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteBtn}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        />
      </View>
      <Image resizeMode="contain" style={styles.image} source={chair} />
    </View>
  )
}

export default WiewImage

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeBtn: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  deleteBtn: {
    position: "absolute",
    top: 50,
    right: 20,
  },
})
