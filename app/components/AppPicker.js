import React, { useState } from "react"
import {
  Button,
  FlatList,
  Modal,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native"
import colors from "../config/colors"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import AppText from "./AppText"
import Screen from "./Screen"
import PickerItem from "./PickerItem"

const AppPicker = ({
  icon,
  items,
  placeholder,
  selectedItem,
  onSelectItem,
}) => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={visible} animationType="slide">
        <Screen>
          <FlatList
            data={items}
            keyExtractor={item => item.label}
            renderItem={({ item }) => (
              <PickerItem
                item={item}
                onPress={() => {
                  setVisible(false)
                  onSelectItem(item)
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  )
}
export default AppPicker

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  placeholder: {
    color: colors.medium,
  },
  textInput: {
    flex: 1,
    color: colors.dark,
    marginLeft: 10,
    fontSize: 18,
    width: "100%",
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
      },
      default: {
        fontFamily: "Avenir",
      },
    }),
  },
})
