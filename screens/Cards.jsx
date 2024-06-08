import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import { Card } from '../components/Card'

const cardsList = [
  {
    question: 'Qual a biblioteca do python é usada?',
    answer: 'Pandas, numpy e MatplotLib'
  },
  {
    question: "Quais são os V's em Big Data?",
    answer: 'Volume, Velocidade, Variedade, Veracidade e Valor'
  }
]
export const CardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cardsList}
        renderItem={({ item }) => <Card title={item.question} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D243D'
  }
})
