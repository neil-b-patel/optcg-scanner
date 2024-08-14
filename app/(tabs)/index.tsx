import { StyleSheet } from 'react-native'
import { Camera, runAtTargetFps, useCameraDevice, useFrameProcessor } from 'react-native-vision-camera'

import { useIsFocused } from '@react-navigation/native'

import { useIsForeground } from '@/hooks/useIsForeground'
import { detectCard } from '@/plugins/cardScanner'

export default function Scanner() {
  const frameProcessor = useFrameProcessor((frame) => {
    'worklet'

    runAtTargetFps(10, () => {
      'worklet'

      detectCard(frame)
    })
  }, [])

  const isFocused = useIsFocused()
  const isForeground = useIsForeground()
  const isActive = isFocused && isForeground

  const device = useCameraDevice('back')
  return <Camera style={StyleSheet.absoluteFill} device={device} isActive={isActive} frameProcessor={frameProcessor} />
}
