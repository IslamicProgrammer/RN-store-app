import React from "react"
import { StyleSheet, FlatList, View } from "react-native"
import Card from "../components/Card"
import Screen from "../components/Screen"
import colors from "../config/colors"

const listing = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/images/jacket.jpeg"),
  },
  {
    id: 2,
    title: "Very nice Couch",
    price: 1000,
    image: require("../assets/images/couch.jpeg"),
  },
]

const ListingScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listing}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={`$${item.price}`}
            image={item.image}
          />
        )}
      />
    </Screen>
  )
}

export default ListingScreen

const styles = StyleSheet.create({
  screen: {
    padding: 15,
    backgroundColor: colors.light,
  },
})
