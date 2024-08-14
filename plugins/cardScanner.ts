import { Frame } from 'react-native-vision-camera'

export function detectCard(frame: Frame) {
  'worklet'

  console.log(`Frame @ [${frame.timestamp}]: ${frame.width}x${frame.height} ${frame.pixelFormat}`)
}
