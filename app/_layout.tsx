import { Stack } from 'expo-router'

function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Decks',
          headerStyle: { backgroundColor: '#0D243D' },
          headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
          headerBackTitleVisible: false,
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen name="card" options={{}} />
    </Stack>
  )
}
