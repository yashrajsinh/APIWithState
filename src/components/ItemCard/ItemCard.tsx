import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  id: number | string;
  title: string;
  body: string;
};

function ItemCard({ id, title, body }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.id}>{id}</Text>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
    gap: 12,
  },
  id: {
    fontWeight: 'bold',
    fontSize: 16,
    minWidth: 40,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  body: {
    marginTop: 4,
    color: '#555',
  },
});
export default ItemCard;
