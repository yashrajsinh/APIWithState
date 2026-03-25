import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';

type Props = {
  id: number | string;
  title: string;
  body: string;
  onDelete?: () => void;
};

const { width } = Dimensions.get('window');

function ItemCard({ id, title, body, onDelete }: Props) {
  return (
    <View style={styles.card}>
      {/* ID Circle */}
      <View style={styles.idContainer}>
        <Text style={styles.id}>{id}</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
        <Text style={styles.body} numberOfLines={3} ellipsizeMode="tail">
          {body}
        </Text>
      </View>

      {/* Subtle premium trash button */}
      <TouchableOpacity style={styles.trashButton} onPress={onDelete}>
        <Text style={styles.trashText}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#fff',
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 3,
    alignSelf: 'center',
    width: width - 20,
  },
  idContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#4F46E5', // premium blue
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  id: { fontWeight: '700', fontSize: 16, color: '#fff' },
  content: { flex: 1 },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  body: { fontSize: 15, color: '#6B7280', lineHeight: 20 },
  trashButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(55, 65, 81, 0.1)', // subtle, elegant gray
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  trashText: {
    fontSize: 18,
    color: '#374151', // deep gray, soft contrast
  },
});

export default ItemCard;
