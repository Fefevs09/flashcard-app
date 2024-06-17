import { DeckScreen } from './screens/Decks.jsx'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { CardScreen } from './screens/Cards.jsx'
import { ReviewScreen } from './screens/Review.jsx'
import { ModalScreen } from './screens/Modal.jsx'
import { Button, LogBox } from 'react-native'
import { CreateCardScreen } from './screens/CreateCard.jsx'
import Feather from 'react-native-vector-icons/Feather'

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state'
])

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
          options={({ route }) => ({
            title: route.params.title,
            headerStyle: { backgroundColor: '#0D243D' },
            headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
            headerBackTitleVisible: false,
            headerTintColor: '#fff'
          })}
        />

        <Stack.Screen
          name="Review"
          component={ReviewScreen}
          options={{
            title: 'Ciência de Dados',
            headerStyle: { backgroundColor: '#0D243D' },
            headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
            headerBackTitleVisible: false,
            headerTintColor: '#fff'
          }}
        />

        <Stack.Screen
          name="Create Card"
          component={CreateCardScreen}
          options={{
            title: 'Novo Card',
            headerStyle: { backgroundColor: '#0D243D' },
            headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
            headerBackTitleVisible: false,
            headerTintColor: '#fff'
          }}
        />

        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            name="Modal"
            component={ModalScreen}
            options={{
              presentation: 'transparentModal',
              headerShown: false
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return <MyStack />
}
