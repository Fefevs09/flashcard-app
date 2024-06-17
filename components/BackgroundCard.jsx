import { StyleSheet, View } from 'react-native'

const BackgroundCard = ({ children }) => {
  return <View style={styles.reviewCard}>{children}</View>
}

const styles = StyleSheet.create({
  reviewCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 50,
    marginHorizontal: 25,
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    alignSelf: 'center',
    height: 340,
    width: 320
  }
})

export { BackgroundCard }
