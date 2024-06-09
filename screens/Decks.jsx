import React from 'react'
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

function Decks({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={ListDecks}
        renderItem={({ item }) => (
          <Deck
            deckTitle={item.title}
            quantityCards={item.quantityCards}
            navigation={navigation}
          />
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
      <Decks navigation={navigation} />
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
