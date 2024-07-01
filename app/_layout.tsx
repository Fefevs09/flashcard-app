import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="decks" />
      <Tabs.Screen name="settings" />
      <Tabs.Screen name="index" options={{ href: null }} />
    </Tabs>
  )
}
