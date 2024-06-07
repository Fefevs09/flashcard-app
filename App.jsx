import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import { DeckScreen } from './screens/Decks.jsx'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

const CardScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Cards</Text>
      </View>
    </SafeAreaView>
  )
}

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
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return <MyStack />
}
