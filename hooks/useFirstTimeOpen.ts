import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function useFirstTimeOpen() {
  const [isFirstTime, setIsFirstTime] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function checkFirstTimeOpen() {
      try {
        const hasOpened = await AsyncStorage.getItem('hasOpened')
        hasOpened === null ? setIsFirstTime(true) : setIsFirstTime(false)
      } catch (e) {
        console.error('error getting local first time', e)
      } finally {
        setIsLoading(false)
      }
    }
    checkFirstTimeOpen()
  }, [])

  return { isFirstTime, isLoading }
}
