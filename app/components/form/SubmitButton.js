import { useFormikContext } from "formik"
import React from "react"
import AppButton from "../AppButton"

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext()
  return <AppButton onPress={handleSubmit} title={title} />
}

export default SubmitButton
