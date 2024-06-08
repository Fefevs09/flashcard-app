import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Deck({ deckTitle, quantityCards, navigation }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Card')}
    >
      <Text style={styles.titleCard}>{deckTitle}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.quantityText}>quant. de cards: </Text>
        <Text style={styles.numberCards}>{quantityCards}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 12,
    gap: 4,
    alignItems: 'flex-start',
    padding: 10,
    margin: 10
  },
  titleCard: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal'
  },
  quantityText: {
    fontWeight: 'bold',
    fontSize: 12
  },
  numberCards: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#2E82DB'
  }
})
