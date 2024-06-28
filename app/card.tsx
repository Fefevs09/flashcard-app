import { Link, useLocalSearchParams, useNavigation } from 'expo-router'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function CardScreen() {
  const navigation = useNavigation()
  const { title } = useLocalSearchParams()

  useEffect(() => {
    navigation.setOptions({
      title: title
    })
  })

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Link href="../">Go to home screen</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
