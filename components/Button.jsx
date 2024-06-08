import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

const TextButton = ({ title, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Review')}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const IconButton = ({ icon }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Feather name={icon} size={20} color={'#2E82DB'} />
    </TouchableOpacity>
  )
}

const AnswerButton = ({ answer, showAnswer }) => {
  return (
    <TouchableOpacity>
      <Text> Resposta Correta</Text>
      <Feather
        name={showAnswer ? 'arrow-up' : 'arrow-down'}
        size={20}
        color={'#000000'}
      />
      {showAnswer && <Text>{answer}</Text>}
    </TouchableOpacity>
  )
}

export { TextButton, IconButton, AnswerButton }

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 200,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 12,
    marginTop: 15
  },
  buttonText: {
    color: '#2E82DB',
    fontWeight: 'bold'
  },
  answerCard: {
    backgroundColor: '#fff'
  },
  answerText: {
    color: '#000000',
    fontWeight: 'regular'
  }
})
