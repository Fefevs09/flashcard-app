import { ReactNode } from 'react';
import { StyleSheet, TouchableOpacity, ViewProps } from 'react-native';

interface DeckRootProps extends ViewProps {
  children: ReactNode;
}

export function DeckRoot({ children, ...rest }: DeckRootProps) {
  return (
    <TouchableOpacity style={styles.deckRoot} {...rest}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  deckRoot: {
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: 320,
    height: 80,
    maxHeight: 80,
    margin: 10,
    paddingVertical: 15,
    paddingHorizontal: 12,
    backgroundColor: '#2E2E2E',
    borderRadius: 20
  }
});
