import { router } from 'expo-router'
import React, { useCallback, useEffect, useState } from 'react'
import { Linking } from 'react-native'
import { Button, StyleSheet } from 'react-native'
import { Camera } from 'react-native-vision-camera'
import type { CameraPermissionStatus } from 'react-native-vision-camera'

import { Text, View } from '@/components/Themed'

export default function Permissions() {
  const [cameraPermissionStatus, setCameraPermissionStatus] = useState<CameraPermissionStatus>('not-determined')

  const requestCameraPermission = useCallback(async () => {
    console.log('Requesting camera permission...')
    const permission = await Camera.requestCameraPermission()
    console.log(`Camera permission status: ${permission}`)

    if (permission === 'denied') await Linking.openSettings()
    setCameraPermissionStatus(permission)
  }, [])

  useEffect(() => {
    if (cameraPermissionStatus === 'granted') router.replace('/(tabs)')
  }, [cameraPermissionStatus, router])

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to{'\n'}
        <Text style={styles.title}>OPTCG Scanner.</Text>
      </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.permissionsContainer}>
        {cameraPermissionStatus !== 'granted' && (
          <View>
            <Text style={styles.permissionText}>
              OPTCG Scanner needs <Text style={styles.bold}>Camera permissions</Text>.{' '}
            </Text>
            <Button title="Grant" onPress={requestCameraPermission} />
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'semibold',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: '80%',
  },
  permissionsContainer: {
    marginTop: 10,
  },
  permissionText: {
    fontSize: 18,
    marginBottom: 50,
  },
  bold: {
    fontWeight: 'bold',
  },
})
