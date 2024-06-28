import { Link } from 'expo-router'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const cards = [
  { id: 1, title: 'First item' },
  { id: 2, title: 'Second item' },
  { id: 3, title: 'Third item' }
]

export default function DeckScreen() {
  return (
    <View style={styles.container}>
      <Text> Deck Screen</Text>
      <FlatList
        data={cards}
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: '/card',
              params: { title: item.title }
            }}
          >
            {item.title}
          </Link>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
