import { Stack } from 'expo-router';

export default function DeckLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="card" options={{ headerShown: false }} />
    </Stack>
  );
}
