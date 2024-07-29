import { SafeAreaView, StyleSheet } from 'react-native';
import { ReviewCard } from '../components/Question';
import { Feed } from '../components/Feed';
import { useState } from 'react';
import { TextButton } from '../components/Button';

export const ReviewScreen = ({ navigation, route }) => {
  const { cards } = route.params;

  const [index, setIndex] = useState(0);
  const [card, setCard] = useState(cards[0]);
  const [question, setQuestion] = useState(card.question);
  const [answer, setAnswer] = useState(card.answer);
  const [showAnswer, setShowAnswer] = useState(false);
  const [finishDeck, setFinishDeck] = useState(false);

  function nextQuestion() {
    console.log(index);
    const newIndex = index + 1;

    if (newIndex === cards.length - 1) {
      setFinishDeck(true);
    }

    if (newIndex < cards.length) {
      console.log(cards);
      const newCard = cards[newIndex];
      setIndex(newIndex);
      setCard(newCard);
      setQuestion(newCard.question);
      setAnswer(newCard.answer);
      setShowAnswer(false); // Reset showAnswer for new question
    }

    // else {
    //   console.log('No more questions available.')
    //   setFinishDeck(true)
    // }
  }

  function backDeck() {
    navigation.pop();
  }

  return (
    <SafeAreaView style={styles.reviewContainer}>
      <ReviewCard
        questionTitle={question}
        answer={answer}
        showAnswer={showAnswer}
        onPress={() => setShowAnswer(!showAnswer)}
      />
      <Feed />
      {finishDeck ? (
        <TextButton onPress={backDeck} title={'Voltar'} />
      ) : (
        <TextButton onPress={nextQuestion} title={'Próxima'} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  reviewContainer: {
    flex: 1,
    backgroundColor: '#0D243D'
  }
});
