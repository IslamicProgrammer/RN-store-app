import React from "react"
import { StyleSheet, Image, View } from "react-native"
import AppText from "./AppText"
import colors from "../config/colors"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"

const Card = ({ title, subtitle, image, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subtitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 15,
  },
  title: {
    marginBottom: 5,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
})
