import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native'

export default function DeckScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={{ color: 'white' }}>Deck Screen</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'blue'
  }
})
