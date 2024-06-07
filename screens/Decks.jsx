import React from 'react'
import { FlatList, StyleSheet, View, SafeAreaView, StatusBar } from 'react-native'
import Deck from '../components/Deck'
import { HeaderCard } from '../components/Header.jsx'

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

function Decks() {
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

export const DeckScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerDeckScreen}>
      <StatusBar style="auto" />
      <HeaderCard name={'Decks'} />
      <Decks />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    gap: 20
  },

  containerDeckScreen: {
    flex: 1,
    backgroundColor: '#0D243D',
    justifyContent: 'flex-start'
  }
})

