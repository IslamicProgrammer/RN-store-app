import React, { useEffect } from "react"
import {
  Alert,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import colors from "../config/colors"
import * as ImagePicker from "expo-image-picker"

const ImageInput = ({ uri, onChangeImage }) => {
  const requestPremission = async () => {
    const premission = await ImagePicker.requestCameraPermissionsAsync()
    if (!premission.granted) alert("You need enable permission for this task ")
  }

  useEffect(() => {
    requestPremission()
  }, [])

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync()
      if (!result.cancelled) {
        onChangeImage(result.uri)
      }
    } catch (error) {
      alert(error)
    }
  }

  const handlePress = () => {
    if (!uri) selectImage()
    else {
      Alert.alert("Delete", "Are you sure to delete ?", [
        { text: "Yes", onPress: onChangeImage(null) },
        { text: "No" },
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!uri && (
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        )}
        {uri && <Image style={styles.image} source={{ uri }} />}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ImageInput

const styles = StyleSheet.create({
  container: {
    margin: 5,
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    width: 100,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
  },
})
