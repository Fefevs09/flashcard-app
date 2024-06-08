import { FlatList, SafeAreaView, StyleSheet } from 'react-native'
import { Card } from '../components/Card'
import { TextButton } from '../components/Button'
const cardsList = [
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
]

export const CardScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cardsList}
        renderItem={({ item }) => <Card title={item.question} />}
        keyExtractor={item => item.id}
      />
      <TextButton title={'Iniciar Revisão'} navigation={navigation} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D243D'
  }
})
