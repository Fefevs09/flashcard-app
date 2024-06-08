import { StyleSheet, Text, View } from 'react-native'

const Question = ({ questionTitle }) => {
  return (
    <View style={styles.questionBox}>
      <Text style={styles.questionTitle}>{questionTitle}</Text>
    </View>
  )
}

export const ReviewCard = ({ questionTitle, answer }) => {
  return (
    <View style={styles.reviewCard}>
      <Question questionTitle={questionTitle} />
      {/* Button to show answer */}
    </View>
  )
}

const styles = StyleSheet.create({
  reviewCard: {},
  questionBox: {
    borderRadius: 12,
    borderColor: 'black'
  }
})
