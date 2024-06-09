import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

const TextButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
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

const AnswerButton = ({ answer, showAnswer, onPress }) => {
  return (
    <TouchableOpacity style={styles.answerCard} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <Text> Resposta Correta</Text>
        <Feather
          name={showAnswer ? 'chevron-up' : 'chevron-down'}
          size={20}
          color={'#000000'}
        />
      </View>
      {showAnswer && <Text style={styles.answerText}>{answer}</Text>}
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
    marginVertical: 10,
    backgroundColor: '#fff',
    gap: 5,
    alignItems: 'center',
    alignContent: 'center'
  },
  answerText: {
    color: '#000000',
    fontWeight: 'regular',
    marginTop: 20,
    fontWeight: 'bold'
  }
})
