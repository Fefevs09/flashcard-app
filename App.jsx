import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import HeaderCard from './components/Header.jsx'
import Decks from './screens/Decks.jsx'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HeaderCard name={'Decks'} />
      <Decks />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D243D',
    justifyContent: 'flex-start'
  }
})
