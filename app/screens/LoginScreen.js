import React, { useState } from "react"
import { StyleSheet, Image } from "react-native"
import AppButton from "../components/AppButton"
import AppTextInput from "../components/AppTextInput"
import Screen from "../components/Screen"
import { Formik } from "formik"
import * as Yup from "yup"
import AppFormField from "../components/form/AppFormField"
import SubmitButton from "../components/form/SubmitButton"
import AppForm from "../components/form/AppForm"

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
})

function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo-red.png")}
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
})

export default LoginScreen
