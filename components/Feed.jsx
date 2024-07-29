import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const FeedButton = ({ titleButton, style }) => {
  return (
    <View style={styles.feedContainer}>
      <TouchableOpacity style={style}>
        <Text style={styles.feedText}>{titleButton}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const Feed = () => {
  return (
    <View style={styles.feed}>
      <Text style={styles.feedText}>
        Qual o nível de dificuldade para essa questão?
      </Text>
      <FeedButton titleButton={'Fácil'} style={styles.feedButtonGreen} />
      <FeedButton titleButton={'Médio'} style={styles.feedButtonYellow} />
      <FeedButton titleButton={'Difícil'} style={styles.feedButtonRed} />
    </View>
  );
};

const styles = StyleSheet.create({
  feed: {
    marginTop: 20
  },
  feedContainer: {
    alignItems: 'center'
  },
  feedButtonGreen: {
    backgroundColor: 'rgba(57, 173, 69, 0.85)',
    width: 180,
    height: 40,
    borderRadius: 5,
    marginVertical: 10,
    justifyContent: 'center'
  },
  feedButtonYellow: {
    backgroundColor: 'rgba(255, 168, 0, 0.8)',
    width: 180,
    height: 40,
    borderRadius: 5,
    marginVertical: 10,
    justifyContent: 'center'
  },
  feedButtonRed: {
    backgroundColor: 'rgba(249, 55, 39, 0.85)',
    width: 180,
    height: 40,
    borderRadius: 5,
    marginVertical: 10,
    justifyContent: 'center'
  },
  feedText: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    padding: 5
  }
});
