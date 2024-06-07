import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Deck from '../components/Deck'

const listDecks = [
  {
    id: 0,
    title: 'Ciência de Dados',
    quantityCards: 6
  },
  {
    id: 1,
    title: 'Português',
    quantityCards: 12
  },
  {
    id: 2,
    title: 'Direito Adm.',
    quantityCards: 20
  }
]

export default function Decks() {
  return (
    <View style={styles.container}>
      <FlatList
        data={listDecks}
        renderItem={({ item }) => (
          <Deck deckTitle={item.title} quantityCards={item.quantityCards} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    gap: 20
  }
})
