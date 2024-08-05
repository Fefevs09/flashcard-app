import Deck from '@/components/Deck';
import Header from '@components/Header/index';
import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

interface DeckInterface {
  id: number;
  name: string;
}

export default function DeckScreen() {
  const db = useSQLiteContext();
  const [decks, setDecks] = useState<DeckInterface[]>([]);

  useEffect(() => {
    async function setup() {
      const result = await db.getAllSync<DeckInterface>('SELECT * FROM deck');
      setDecks(result);
    }
    setup();
  });

  const handleAddDeck = async () => {
    await db.runAsync("INSERT INTO deck (id, name) VALUES (10, 'test')");
  };

  return (
    <View style={styles.container}>
      <Header.Root>
        <Header.Icon />
        <Header.Title text="Decks" />
      </Header.Root>

      <FlatList
        data={decks}
        renderItem={({ item }) => (
          <Deck.Root>
            <Deck.Title title={item.name} quantity={10} />
            <Deck.Icon onPress={handleAddDeck} />
          </Deck.Root>
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
