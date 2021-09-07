import { Platform } from "react-native"
import colors from "./colors"

export default {
  text: {
    fontSize: 18,
    fontFamily: "Avenir",
    ...Platform.select({
      ios: {
        fontSize: 18,
      },
      android: {
        fontSize: 20,
        fontFamily: "Roboto",
      },
    }),
  },
}
