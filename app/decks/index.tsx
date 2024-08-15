import Deck from '@/components/Deck';
import { DeckInterface } from '@/interfaces/deckInterface';
import Header from '@components/Header/index';
import { Link } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

export default function DeckScreen() {
  const db = useSQLiteContext();
  const [decks, setDecks] = useState<DeckInterface[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async function setup() {
      const result = await db.getAllSync<DeckInterface>('SELECT * FROM deck');
      setDecks(result);
    }
    // don't call setup function yet
    // setup();
  });

  const handleAddDeck = async () => {};

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
            <Link
              href={{
                pathname: '/decks/cards/[id]',
                params: { id: item.deck_id }
              }}
            >
              <Deck.Title title={item.title} quantity={10} />
            </Link>
            <Deck.Icon iconName="play" />
          </Deck.Root>
        )}
        keyExtractor={item => item.deck_id.toString()}
      />
      <Deck.Icon
        iconName="plus"
        onPress={handleAddDeck}
        style={styles.buttonAddDeck}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919'
  },
  buttonAddDeck: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    paddingRight: 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 2,
    borderColor: '#2E82DB',
    borderRadius: 50
  }
});
