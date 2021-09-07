import React, { useState } from "react"
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
} from "react-native"
import ListItem from "../components/ListItem"
import Constants from "expo-constants"
import Screen from "../components/Screen"
import ListItemSeparator from "../components/lists/ListItemSeparator"
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction"

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/images/mosh.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/images/mosh.jpeg"),
  },
]

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)
  const handleDelete = id => {
    setMessages(messages.filter(m => m.id !== id))
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={messages => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/images/mosh.jpeg"),
            },
          ])
        }}
      />
    </Screen>
  )
}

export default MessagesScreen
