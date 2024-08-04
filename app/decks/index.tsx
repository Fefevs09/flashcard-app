import Header from '@components/Header/index';
import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

interface Deck {
  id: number;
  name: string;
}

export default function DeckScreen() {
  const db = useSQLiteContext();
  const [decks, setDecks] = useState<Deck[]>([]);

  useEffect(() => {
    async function setup() {
      const result = await db.getAllSync<Deck>('SELECT * FROM deck;');
      setDecks(result);
    }
    setup();
  });

  return (
    <View style={styles.container}>
      <Header.Root>
        <Header.Icon />
        <Header.Title text="Decks" />
      </Header.Root>
      <Text style={{ color: '#fff' }}>Decks her: </Text>
      <FlatList
        data={decks}
        renderItem={({ item }) => (
          <Text style={{ color: '#fff' }}>{item.name}</Text>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919'
  }
});
