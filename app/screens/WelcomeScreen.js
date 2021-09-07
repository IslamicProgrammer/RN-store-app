import React from "react"
import { Text, StyleSheet, View, ImageBackground, Image } from "react-native"
import room from "../assets/images/room.jpeg"
import logo from "../assets/images/logo-red.png"
import AppButton from "../components/AppButton"

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground blurRadius={10} style={styles.background} source={room}>
      <View style={styles.logoBox}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.title}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          color="secondary"
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logoBox: {
    position: "absolute",
    alignItems: "center",
    top: 100,
  },
  logo: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    textTransform: "capitalize",
    paddingVertical: 10,
  },
  buttonContainer: {
    alignItems: "center",
    width: "100%",
    padding: 20,
    marginBottom: 40,
  },
})

export default WelcomeScreen
