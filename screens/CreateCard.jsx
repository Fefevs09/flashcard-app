import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { BackgroundCard } from '../components/BackgroundCard';
import { BigTextInputCard, InputBox } from '../components/Input';
import { HeaderTextBlue } from '../components/Text';
import { useState } from 'react';
import { TextInputCard, BigInputBox } from '../components/Input';
import { TextButton } from '../components/Button';

export const CreateCardScreen = ({ route, navigation }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const { cards } = route.params;

  function addCard() {
    const lastCard = cards.length ? cards[cards.length - 1] : null;
    const id = lastCard ? lastCard.id + 1 : 1;

    const newCard = { id, question, answer };

    cards.push(newCard);
    navigation.goBack();
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

        <TextButton title={'Criar Novo Card'} onPress={addCard} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D243D'
  }
});
