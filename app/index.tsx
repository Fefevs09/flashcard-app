import { Stack, useNavigation } from 'expo-router'
import { Text, View } from 'react-native'
import { useEffect } from 'react'
import Home from './home'

export default function Layout() {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({ headerShown: false })
  }, [navigation])

  return <Home />
}
