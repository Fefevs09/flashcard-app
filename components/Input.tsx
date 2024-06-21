import { StyleSheet, TextInput, View } from 'react-native'

const InputBox = ({ children }) => {
  return <View style={styles.inputBox}>{children}</View>
}

const TextInputCard = ({ placeholder, onChangeText, value }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  )
}

const BigInputBox = ({ children }) => {
  return <View style={styles.bigInputBox}>{children}</View>
}

const BigTextInputCard = ({ placeholder, onChangeText, value }) => {
  return (
    <TextInput
      style={styles.bigInput}
      multiline
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  )
}

export { InputBox, TextInputCard, BigInputBox, BigTextInputCard }

const styles = StyleSheet.create({
  inputBox: {
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.16)',
    height: 50,
    width: 250,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginVertical: 12
  },
  bigInputBox: {
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.16)',
    height: 200,
    width: 250,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginVertical: 12
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  bigInput: {
    height: 160,
    width: 250,
    margin: 12,
    paddingHorizontal: 20
  }
})
