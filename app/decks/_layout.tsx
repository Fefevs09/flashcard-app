import { Stack } from 'expo-router'

export default function DeckLayout() {
  return (
    <Stack>
      <Stack.Screen name="deck" options={{ headerShown: false }} />
      <Stack.Screen name="card" options={{ headerShown: false }} />
    </Stack>
  )
}
