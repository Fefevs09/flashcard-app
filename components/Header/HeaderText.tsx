import { Text, TextProps, StyleSheet } from 'react-native'

interface HeaderTextProps extends TextProps {
  text: string
}

export function HeaderText({ text }: HeaderTextProps) {
  return <Text style={styles.headerText}>{text}</Text>
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  }
})
