import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

type Props = {
  id: number | string;
  title: string;
  body: string;
};

function ItemCard({ id, title, body }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.idContainer}>
        <Text style={styles.id}>{id}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
        <Text style={styles.body} numberOfLines={3} ellipsizeMode="tail">
          {body}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#fff',
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
    alignSelf: 'center',
  },
  idContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#4F46E5', // premium purple-blue
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  id: {
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827', // dark gray
    marginBottom: 4,
  },
  body: {
    fontSize: 15,
    color: '#6B7280', // medium gray
    lineHeight: 20,
  },
});

export default ItemCard;
