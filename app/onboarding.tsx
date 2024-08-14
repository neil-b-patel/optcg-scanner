import { Button, StyleSheet } from 'react-native'

import { Text, View } from '@/components/Themed'
import { router } from 'expo-router'
import { Camera } from 'react-native-vision-camera'

export default function Onboarding() {
  async function handleContinue() {
    const cameraPermissionStatus = Camera.getCameraPermissionStatus()

    if (cameraPermissionStatus == 'granted') {
      router.replace('/(tabs)')
    } else {
      router.replace('/permissions')
    }
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
