import { Text, StyleSheet } from 'react-native';

const HeaderTextBlue = ({ text }) => {
  return <Text style={styles.textBlue}>{text}</Text>;
};

export { HeaderTextBlue };

const styles = StyleSheet.create({
  textBlue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E82DB'
  }
});
