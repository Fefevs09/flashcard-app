import { Tabs } from 'expo-router'
import Feather from '@expo/vector-icons/Feather'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2E82DB'
      }}
    >
      <Tabs.Screen
        name="decks"
        options={{
          title: 'Decks',
          tabBarIcon: ({ color }) => (
            <Feather name="layers" size={24} color={color} />
          ),
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Ajustes',
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={24} color={color} />
          ),
          headerShown: false
        }}
      />
      <Tabs.Screen name="index" options={{ href: null }} />
    </Tabs>
  )
}
