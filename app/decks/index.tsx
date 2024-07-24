import MyHeader from '@components/Header/index'
import { StyleSheet, View } from 'react-native'

export default function DeckScreen() {
  return (
    <View style={styles.container}>
      <MyHeader.Root>
        <MyHeader.Icon />
      </MyHeader.Root>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
