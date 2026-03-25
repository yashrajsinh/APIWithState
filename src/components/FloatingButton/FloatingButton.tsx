import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
type Props = {
  onPress: () => void;
};

function FloatingButton({ onPress }: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.plus}> + </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',

    // Shadow (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    // Shadow (Android)
    elevation: 6,
  },
  plus: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default FloatingButton;
