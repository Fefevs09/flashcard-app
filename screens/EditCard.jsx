import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { BackgroundCard } from '../components/BackgroundCard'
import { BigTextInputCard, InputBox } from '../components/Input'
import { HeaderTextBlue } from '../components/Text'
import { useState } from 'react'
import { TextInputCard, BigInputBox } from '../components/Input'
import { TextButton } from '../components/Button'

export const EditCardScreen = ({ route, navigation }) => {
  const { item, updateCard } = route.params
  const [question, setQuestion] = useState(item.question)
  const [answer, setAnswer] = useState(item.answer)

  const handleUpdateCard = () => {
    const updatedCard = { id: item.id, question, answer }
    console.log(updatedCard)
    updateCard(updatedCard)
    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardDismissMode="interactive">
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
        <TextButton title={'Editar Card'} onPress={handleUpdateCard} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D243D'
  }
})
