import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

const TextButton = ({ title }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.button}>{title}</Text>
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

export { TextButton, IconButton }

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 200,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  buttonText: {
    color: '#2E82DB',
    padding: 10
  }
})
