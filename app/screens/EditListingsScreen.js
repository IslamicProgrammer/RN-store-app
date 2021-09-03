import React from "react"
import AppForm from "../components/form/AppForm"
import * as Yup from "yup"
import Screen from "../components/Screen"
import AppFormField from "../components/form/AppFormField"
import AppFormPicker from "../components/form/AppFormPicker"
import SubmitButton from "../components/form/SubmitButton"

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
})

const categories = [
  { label: "Funrniure", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Technical", value: 3 },
]

const EditListingsScreen = () => {
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: "",
        }}
        validationSchema={validationSchema}
        onSubmit={values => console.log(values)}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          items={categories}
          placeholder="Category"
          name="category"
        />
        <AppFormField
          name="description"
          multiline
          placeholder="description"
          numberOfLines={3}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  )
}

export default EditListingsScreen
