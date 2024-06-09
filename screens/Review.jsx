import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { ReviewCard } from '../components/Question'
import { Feed } from '../components/Feed'
import { useState } from 'react'

export const ReviewScreen = ({ navigation }) => {
  const [question, setQuestions] = useState([
    {
      id: 1,
      question: 'Qual a biblioteca do python é usada?',
      answer: 'Pandas, numpy e MatplotLib'
    },
    {
      id: 2,
      question: "Quais são os V's em Big Data?",
      answer: 'Volume, Velocidade, Variedade, Veracidade e Valor'
    },
    {
      id: 3,
      question: 'O que é Ciência de Dados?',
      answer: 'Volume, Velocidade, Variedade, Veracidade e Valor'
    },
    {
      id: 4,
      question:
        'Quais são os principais métodos de aprendizado de máquina em Ciência de Dados?',
      answer: 'Supervisionado, Não Supervisionado, Aprendizado por Reforço'
    },
    {
      id: 5,
      question:
        'Quais são algumas ferramentas comuns usadas em Ciência de Dados?',
      answer: 'Python, R, Tableau, Power BI, SQL, NoSQL (MongoDB, Cassandra)'
    },
    {
      id: 6,
      question: 'Quais são os componentes principais da Ciência de Dados?',
      answer:
        'Coleta de Dados, Processamentos de Dados, Análise de Dados, Visualização de Dados, Tomada de Decisões'
    }
  ])

  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <SafeAreaView style={styles.reviewContainer}>
      <ReviewCard
        questionTitle={question[0].question}
        answer={question[0].answer}
        showAnswer={showAnswer}
        onPress={() => setShowAnswer(!showAnswer)}
      />
      <Feed />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  reviewContainer: {
    flex: 1,
    backgroundColor: '#0D243D'
  }
})
