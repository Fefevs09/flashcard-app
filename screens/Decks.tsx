import React, { useState } from 'react'
import {
  FlatList,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar
} from 'react-native'
import Deck from '../components/Deck'
import { HeaderCard } from '../components/Header.js'
import { IconButton } from '../components/Button.js'
import { ModelDecks } from '../model/Deck.js'

function Decks({ navigation, decks, updateCard }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={decks}
        renderItem={({ item }) => (
          <Deck
            deckTitle={item.titleDeck}
            quantityCards={item.cards.length}
            onPress={() =>
              navigation.navigate('Card', {
                title: item.titleDeck,
                cards: item.cards,
                updateCard
              })
            }
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export const DeckScreen = ({ navigation }) => {
  const [decks, setDecks] = useState(ModelDecks)

  function addDeck(newDeck) {
    setDecks(prevDecks => [...prevDecks, newDeck])
  }

  function updateCard(updatedCard) {
    setDecks(prevDecks =>
      prevDecks.map(deck => {
        if (deck.cards.some(card => card.id === updatedCard.id)) {
          return {
            ...deck,
            cards: deck.cards.map(card =>
              card.id === updatedCard.id ? updatedCard : card
            )
          }
        }
        return deck
      })
    )
  }

  return (
    <SafeAreaView style={styles.containerDeckScreen}>
      <StatusBar style="auto" />
      <HeaderCard name={'Decks'} />
      <Decks decks={decks} navigation={navigation} updateCard={updateCard} />
      <IconButton
        icon={'plus'}
        size={30}
        onPress={() => navigation.navigate('Modal', { addDeck, decks })}
      />
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
