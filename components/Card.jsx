import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export const Card = props => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{props.title}</Text>
      <TouchableOpacity {...props}>
        <Feather name="edit-3" color={'#2E82DB'} size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 15,
    height: 80,
    width: 320,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12
  },
  cardTitle: {
    fontWeight: 'bold',
    flexWrap: 'wrap'
  }
});
