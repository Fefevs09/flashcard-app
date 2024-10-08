import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

interface InfoCardButtonProps extends TouchableOpacityProps {
  iconName: string;
}

export function InfoCardButton({ iconName, ...rest }: InfoCardButtonProps) {
  return (
    <TouchableOpacity style={styles.buttonDeck} {...rest}>
      <Feather
        name={iconName}
        size={20}
        color="#fff"
        style={styles.buttonIcon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonDeck: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 2,
    borderColor: '#2E82DB',
    borderRadius: 50
  },
  buttonIcon: {
    paddingLeft: 3
  }
});
