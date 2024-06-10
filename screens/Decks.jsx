import React, { useState } from 'react'
import {
  FlatList,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar
} from 'react-native'
import Deck from '../components/Deck'
import { HeaderCard } from '../components/Header.jsx'
import { ListDecks } from '../model/ListDeck.js'
import { IconButton } from '../components/Button.jsx'

function Decks({ navigation, decks }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={decks}
        renderItem={({ item }) => (
          <Deck
            deckTitle={item.title}
            quantityCards={item.quantityCards}
            navigation={navigation}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export const DeckScreen = ({ navigation }) => {
  const [decks, setDecks] = useState(ListDecks)

  function addDeck(newDeck) {
    setDecks(prevDecks => [...prevDecks, newDeck])
  }
  return (
    <SafeAreaView style={styles.containerDeckScreen}>
      <StatusBar style="auto" />
      <HeaderCard name={'Decks'} />
      <Decks navigation={navigation} decks={decks} />
      <IconButton
        icon={'plus'}
        size={30}
        onPress={() => navigation.navigate('Modal', { addDeck })}
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
