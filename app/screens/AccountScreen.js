import React from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import Icon from "../components/Icon"
import ListItem from "../components/ListItem"
import ListItemSeparator from "../components/lists/ListItemSeparator"
import Screen from "../components/Screen"
import colors from "../config/colors"

const menuItems = [
  {
    title: "My lsitings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
]

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Mosh Hamedoni"
          subTitle="mosh@info.com"
          image={require("../assets/images/mosh.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={item => item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={() => (
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              )}
            />
          )}
        />
      </View>
      <ListItem
        title="Log out"
        ImageComponent={() => <Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
    backgroundColor: colors.white,
  },
})
