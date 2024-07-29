import { View, StyleSheet } from 'react-native';
import { ReactNode } from 'react';

interface HeaderRootProps {
  children: ReactNode;
}

export function HeaderRoot({ children }: HeaderRootProps) {
  return <View style={styles.headerRoot}>{children}</View>;
}

const styles = StyleSheet.create({
  headerRoot: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    padding: 16,
    marginTop: 40,
    backgroundColor: '#191919'
    // borderBottomWidth: 1,
    // borderBottomColor: '#f0f0f0'
  }
});
