import React from "react"
import AppTextInput from "../AppTextInput"
import ErrorMessage from "./ErrorMessage"
import { useFormikContext } from "formik"

const AppFormField = ({ name, ...args }) => {
  const { handleChange, setFieldTouched, touched, errors } = useFormikContext()
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...args}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormField
