import { Text, TextProps, StyleSheet, View } from 'react-native';

interface DeckTitleProps extends TextProps {
  title: string;
  quantity: number;
}

export function DeckInfo({ title, quantity }: DeckTitleProps) {
  return (
    <View style={styles.contDeckInfo}>
      <Text style={styles.deckTitle}>{title}</Text>
      <View style={styles.contQuantity}>
        <Text style={styles.quantityText}>num. of cards: </Text>
        <Text style={styles.quantityNumber}>{quantity}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contDeckInfo: {
    marginHorizontal: 10
  },
  deckTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  contQuantity: {
    flexDirection: 'row'
  },
  quantityText: {
    color: '#fff'
  },
  quantityNumber: {
    color: '#2E82DB'
  }
});
