import { initializeDatabase } from '@/infra/database';
import { Stack } from 'expo-router';
import { SQLiteProvider } from 'expo-sqlite';

export default function DeckLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="card" options={{ headerShown: false }} />
    </Stack>
  );
}
