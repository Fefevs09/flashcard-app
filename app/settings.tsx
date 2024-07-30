import Header from '@components/Header/index';
import { View } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#191919' }}>
      <Header.Root>
        <Header.Icon />
        <Header.Title text="Ajustes" />
      </Header.Root>
    </View>
  );
}
