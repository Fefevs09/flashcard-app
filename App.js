import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import HeaderCard from './components/Header.jsx'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HeaderCard />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D243D',
    // alignItems: 'center',
    justifyContent: 'flex-start'
  }
})
