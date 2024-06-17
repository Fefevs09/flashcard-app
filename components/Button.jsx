import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

const TextButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const IconButton = ({ icon, onPress, size = 20 }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Feather name={icon} size={size} color={'#2E82DB'} />
    </TouchableOpacity>
  )
}

const ExitModalButton = ({ onPress, style }) => {
  return (
    <TouchableOpacity
      style={(styles.exitModalButton, { style })}
      onPress={onPress}
    >
      <Feather name="x" size={30} color={'#2E82DB'} />
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

const AddButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.roundedButton} onPress={onPress}>
      <Feather name="plus" size={25} color={'#2E82DB'} />
    </TouchableOpacity>
  )
}

export { TextButton, IconButton, AnswerButton, ExitModalButton, AddButton }

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
  },
  roundedButton: {
    height: 50,
    width: 50,
    marginVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
