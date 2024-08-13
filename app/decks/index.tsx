import Deck from '@/components/Deck';
import Header from '@components/Header/index';
import { Link } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

interface DeckInterface {
  id: number;
  name: string;
}

const listDecks: DeckInterface[] = [
  { id: 1, name: 'Teste1' },
  { id: 2, name: 'Teste2' },
  { id: 3, name: 'Teste3' },
  { id: 4, name: 'Teste4' },
  { id: 5, name: 'Teste4' }
];

export default function DeckScreen() {
  const db = useSQLiteContext();
  const [decks, setDecks] = useState<DeckInterface[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async function setup() {
      // const result = await db.getAllSync<DeckInterface>('SELECT * FROM deck');
      const result = listDecks;
      setDecks(result);
    }
    // don't call setup function yet
    // setup();
  });

  const handleAddDeck = async () => {
    await db.runAsync("INSERT INTO deck (id, name) VALUES (10, 'test')");
    setDecks([...decks, { id: 2, name: 'Teste' }]);
  };

  return (
    <View style={styles.container}>
      <Header.Root>
        <Header.Icon />
        <Header.Title text="Decks" />
      </Header.Root>

      {listDecks.length < 0 ? (
        <Deck.Root>
          <Link
            style={{ borderWidth: 2, borderColor: 'red', maxWidth: 350 }}
            href={{
              pathname: '/decks/cards/[id]',
              params: { id: 1 }
            }}
          >
            <Deck.Title title={'Teste'} quantity={10} />
          </Link>
          <Deck.Icon iconName="play" />
        </Deck.Root>
      ) : (
        <FlatList
          data={listDecks}
          renderItem={({ item }) => (
            <Deck.Root>
              <Link
                href={{
                  pathname: '/decks/cards/[id]',
                  params: { id: item.id }
                }}
              >
                <Deck.Title title={item.name} quantity={10} />
                <Deck.Icon iconName="play" />
              </Link>
            </Deck.Root>
          )}
          keyExtractor={item => item.id.toString()}
        />
      )}
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
