import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native'

// const _cards = [
//   { id: 1, title: 'First item' },
//   { id: 2, title: 'Second item' },
//   { id: 3, title: 'Third item' },
//   { id: 4, title: 'Fourth item' },
//   { id: 5, title: 'Fifth item' },
//   { id: 6, title: 'Sixth item' }
// ]

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
