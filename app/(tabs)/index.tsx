import { StyleSheet } from 'react-native'
import { Camera, useCameraDevice } from 'react-native-vision-camera'

export default function Scanner() {
  const device = useCameraDevice('back')

  return (
    <Camera 
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
    />
  )
}
