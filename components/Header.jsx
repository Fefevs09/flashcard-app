import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
const HeaderCard = ({ name }) => {
  return (
    <View style={styles.header}>
      <View style={styles.test}>
        <Feather name="zap" size={30} color={'#2E82DB'} />
      </View>
      <Text style={styles.textHeader}> {name} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'baseline',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 60
  },
  textHeader: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  logo: {
    width: 20,
    height: 20
  }
})

export default HeaderCard
