import { Tabs } from 'expo-router'

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen name="decks" options={{ headerShown: false }} />
      <Tabs.Screen name="settings" options={{ headerShown: false }} />
    </Tabs>
  )
}
