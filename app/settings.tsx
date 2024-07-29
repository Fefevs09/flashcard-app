import MyHeader from '@components/Header';
import { View } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#191919' }}>
      <MyHeader.Root>
        <MyHeader.Icon />
        <MyHeader.Title text="Settings" />
      </MyHeader.Root>
    </View>
  );
}
