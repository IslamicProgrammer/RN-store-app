import React from "react"
import { Text } from "react-native"
import styles from "../config/styles"

const AppText = ({ children, style, ...args }) => {
  return (
    <Text style={[styles, style]} {...args}>
      {children}
    </Text>
  )
}

export default AppText
