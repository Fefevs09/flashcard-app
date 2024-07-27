import { DeckScreen } from './screens/Decks.js'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { CardScreen } from './screens/Cards.js'
import { ReviewScreen } from './screens/Review.js'
import { ModalScreen } from './screens/Modal.js'
import { LogBox } from 'react-native'
import { CreateCardScreen } from './screens/CreateCard.js'
import { EditCardScreen } from './screens/EditCard.js'

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

        <Stack.Screen
          name="Edit Card"
          component={EditCardScreen}
          options={{
            title: 'Editar Card',
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
