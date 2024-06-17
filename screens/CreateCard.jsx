import { SafeAreaView, StyleSheet } from 'react-native'
import { BackgroundCard } from '../components/BackgroundCard'
import { BigTextInputCard, InputBox } from '../components/Input'
import { HeaderTextBlue } from '../components/Text'
import { useState } from 'react'
import { TextInputCard, BigInputBox } from '../components/Input'

export const CreateCardScreen = ({ route, navigation }) => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <BackgroundCard>
        <HeaderTextBlue text={'Card'} />
        <InputBox>
          <TextInputCard
            onChangeText={setQuestion}
            placeholder="Pergunta"
            value={question}
          />
        </InputBox>

        <BigInputBox>
          <BigTextInputCard
            onChangeText={setAnswer}
            placeholder="Resposta"
            value={answer}
          />
        </BigInputBox>
      </BackgroundCard>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D243D'
  }
})
