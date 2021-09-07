import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import AppText from "../components/AppText"
import ListItem from "../components/ListItem"
import colors from "../config/colors"

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params

  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title} </AppText>
        <AppText style={styles.subTitle}>${listing.price}</AppText>
        <View style={styles.listItemContainer}>
          <ListItem
            image={require("../assets/images/mosh.jpeg")}
            title="Mosh Hamedoni"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  )
}

export default ListingDetailsScreen

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subTitle: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  listItemContainer: {
    marginVertical: 40,
  },
})
