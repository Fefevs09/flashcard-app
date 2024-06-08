import { DeckScreen } from './screens/Decks.jsx'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { CardScreen } from './screens/Cards.jsx'

const Stack = createNativeStackNavigator()

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Deck"
          component={DeckScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Card"
          component={CardScreen}
          options={{
            title: 'Ciência de Dados',
            headerStyle: { backgroundColor: '#0D243D' },
            headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
            headerBackTitleVisible: false,
            headerTintColor: '#fff'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return <MyStack />
}
