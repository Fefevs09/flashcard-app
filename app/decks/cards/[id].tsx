import { Link, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function CardScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text> The Id is: {id}</Text>
      <Link href="/">Go to home screen</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
