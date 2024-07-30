import Header from '@components/Header/index';
import { StyleSheet, View } from 'react-native';

export default function DeckScreen() {
  return (
    <View style={styles.container}>
      <Header.Root>
        <Header.Icon />
      </Header.Root>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
