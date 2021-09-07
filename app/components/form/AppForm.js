import React from "react"
import { Formik } from "formik"

const AppForm = ({ validationSchema, onSubmit, initialValues, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <>{children}</>}
    </Formik>
  )
}

export default AppForm
