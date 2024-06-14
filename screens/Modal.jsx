import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import { ListDecks } from '../model/ListDeck'
import { useState } from 'react'
import { ExitModalButton } from '../components/Button'

const ModalButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonModal} onPress={onPress}>
      <Text
        style={{
          color: '#fff',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 24
        }}
      >
        Criar Deck
      </Text>
    </TouchableOpacity>
  )
}

export const ModalScreen = ({ navigation, route }) => {
  const [text, setText] = useState('')
  const { addDeck } = route.params

  function onChangeText() {
    if (text === '') {
      navigation.goBack()
      return
    }

    const lastDeck = ListDecks.length ? ListDecks[ListDecks.length - 1] : null
    const id = lastDeck ? lastDeck.id + 1 : 1 // Start with ID 1 if no decks exist
    let title = text
    let quantCard = 0

    const newDeck = { id, title, quantCard }
    // ListDecks.push(newDeck)
    addDeck(newDeck)
    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ExitModalButton
          onPress={() => navigation.goBack()}
          style={styles.exitButton}
        />
        <View style={styles.card}>
          <Text style={styles.title}>Novo Decks</Text>
          <TextInput
            style={styles.input}
            onChangeText={setText}
            placeholder="Nome do Deck"
            value={text}
          />
          <ModalButton onPress={onChangeText} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  card: {
    height: 300,
    minWidth: 350,
    backgroundColor: '#fff',
    borderRadius: 20,
    gap: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30
  },
  input: {
    height: 40,
    width: 260,
    margin: 12,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.16)',
    padding: 10,
    borderRadius: 12
  },
  buttonModal: {
    justifyContent: 'center',
    height: 50,
    width: 200,
    backgroundColor: '#2E82DB',
    borderRadius: 12
  }
})
