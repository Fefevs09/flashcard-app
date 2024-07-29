import { StyleSheet, Text, View } from 'react-native';
import { AnswerButton } from './Button';

const Question = ({ questionTitle }) => {
  return (
    <View style={styles.questionBox}>
      <Text style={styles.questionTitle}>{questionTitle}</Text>
    </View>
  );
};

export const ReviewCard = ({ questionTitle, answer, showAnswer, onPress }) => {
  return (
    <View style={styles.reviewCard}>
      <Question questionTitle={questionTitle} />
      <AnswerButton answer={answer} showAnswer={showAnswer} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  reviewCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 15,
    marginHorizontal: 25,
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    alignSelf: 'center',
    height: 340,
    width: 320
  },
  questionBox: {
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.16)',
    height: 50,
    width: 250,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  questionTitle: {
    fontWeight: 'bold'
  }
});
