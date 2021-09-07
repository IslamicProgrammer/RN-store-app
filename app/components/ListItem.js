import React from "react"
import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native"
import colors from "../config/colors"
import AppText from "./AppText"
import Swipeable from "react-native-gesture-handler/Swipeable"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const ListItem = ({
  image,
  title,
  subTitle,
  ImageComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent && <ImageComponent />}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            color={colors.medium}
            name="chevron-right"
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

export default ListItem

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    alignSelf: "flex-start",
    fontWeight: "500",
  },
  subTitle: {
    alignSelf: "flex-start",
    fontWeight: "500",
    color: colors.medium,
  },
})
