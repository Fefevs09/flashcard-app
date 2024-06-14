import { FlatList, SafeAreaView, StyleSheet } from 'react-native'
import { Card } from '../components/Card'
import { TextButton } from '../components/Button'
import { ListCard } from '../model/ListCard'

export const CardScreen = ({ navigation, route }) => {
  const { cards, title } = route.params

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cards}
        renderItem={({ item }) => <Card title={item.question} />}
        keyExtractor={item => item.id}
      />
      <TextButton
        title={'Iniciar Revisão'}
        onPress={() => navigation.navigate('Review')}
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
