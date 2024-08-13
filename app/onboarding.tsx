import { Alert, Button, StyleSheet } from 'react-native'

import { Text, View } from '@/components/Themed'
import { useCameraPermissions } from 'expo-camera'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'

export default function Onboarding() {
  const [cameraPermissions, requestCameraPermissions] = useCameraPermissions()

  async function handleContinue() {
    const allPermissions = await requestAllPermissions()
    if (allPermissions) {
      router.replace('/(tabs)')
    } else {
      Alert.alert('To continue please provide required permissions in your settings.')
    }
  }

  async function requestAllPermissions() {
    const cameraStatus = await requestCameraPermissions()
    if (!cameraStatus.granted) {
      Alert.alert('Error', 'Camera permissions are required.')
      return false
    }
    await AsyncStorage.setItem('hasOpened', 'true')
    return true
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to OPTCG Scanner!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.content}>
        To provide the best experience, this app requires permissions for the following:
      </Text>

      <View style={styles.subContainer}>
        <Text style={styles.subtitle}>Camera Permissions</Text>
        <Text style={styles.content}>📸 For scanning cards</Text>
      </View>

      <Button title="Continue" onPress={handleContinue} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'semibold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  content: {
    fontSize: 14,
    marginBottom: 8,
    gap: 8,
  },
  subContainer: {
    alignSelf: 'flex-start',
    gap: 8,
    marginTop: 25,
    marginBottom: 8,
    marginHorizontal: 20,
  },
})
