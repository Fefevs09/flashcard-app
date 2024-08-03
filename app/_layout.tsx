import Feather from '@expo/vector-icons/Feather';
import { Tabs } from 'expo-router';
import { SQLiteProvider } from 'expo-sqlite';

import { initializeDatabase } from '@/infra/database';

export default function TabLayout() {
  return (
    <SQLiteProvider databaseName="sqlite.db" onInit={initializeDatabase}>
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
    </SQLiteProvider>
  );
}
