import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { Card } from '../components/Card';
import { AddButton, TextButton } from '../components/Button';

export const CardScreen = ({ navigation, route }) => {
  const { cards: initialCards, updateCard } = route.params;
  const [cards, setCards] = useState(initialCards);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setCards([...initialCards]); // Update cards state when screen is focused
    });

    return unsubscribe;
  }, [navigation, initialCards]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cards}
        renderItem={({ item }) => (
          <Card
            title={item.question}
            onPress={() =>
              navigation.navigate('Edit Card', { cards, item, updateCard })
            }
          />
        )}
        keyExtractor={item => item.id}
      />
      <TextButton
        title={'Iniciar Revisão'}
        onPress={() => navigation.navigate('Review', { cards })}
      />
      <AddButton
        onPress={() => navigation.navigate('Create Card', { cards })}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D243D'
  }
});
