import { View, Text } from 'react-native'
import { Link } from 'expo-router'

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings</Text>
      <Link href="decks/card">Go to home screen</Link>
    </View>
  )
}
