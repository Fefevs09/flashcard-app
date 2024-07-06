import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import MyHeader from '@components/Header/index'

export default function DeckScreen() {
  return (
    <View style={styles.container}>
      <MyHeader.Root>
        <MyHeader.Icon />
        <MyHeader.Title text="Decks" />
      </MyHeader.Root>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
