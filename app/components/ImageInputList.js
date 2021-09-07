import React, { useRef } from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import ImageInput from "./ImageInput"

const ImageInputList = ({ imageUris = [], onAddImage, onRemoveImage }) => {
  const viewRef = useRef()

  return (
    <View>
      <ScrollView
        ref={viewRef}
        horizontal
        onContentSizeChange={() => viewRef.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map(uri => (
            <ImageInput
              uri={uri}
              key={uri}
              onChangeImage={() => onRemoveImage(uri)}
            />
          ))}
          <ImageInput onChangeImage={uri => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  )
}

export default ImageInputList

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
})
