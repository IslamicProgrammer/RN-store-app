import { useState, useEffect } from "react"
import * as Location from "expo-location"

const useLocation = () => {
  const [location, setLocation] = useState()

  const premissionRequest = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted") return
      let {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({})
      setLocation({ latitude, longitude })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    premissionRequest()
  }, [])

  return location
}

export default useLocation
