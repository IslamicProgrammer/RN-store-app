import React from "react"
import { StyleSheet, Image, View } from "react-native"
import AppText from "./AppText"
import colors from "../config/colors"

const Card = ({ title, subtitle, image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subtitle}</AppText>
      </View>
    </View>
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
