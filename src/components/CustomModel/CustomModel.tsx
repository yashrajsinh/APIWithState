import React from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

type Props = {
  visible: boolean;
  title: string;
  body: string;
  setTitle: (text: string) => void;
  setBody: (text: string) => void;
  onClose: () => void;
  onAdd: () => void;
};

export default function CustomModel(props: Props) {
  return (
    <Modal transparent visible={props.visible} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Enter Details</Text>

          <TextInput
            placeholder="Title"
            value={props.title}
            onChangeText={props.setTitle}
            style={styles.input}
          />

          <TextInput
            placeholder="Body"
            value={props.body}
            onChangeText={props.setBody}
            style={styles.input}
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cancelBtn} onPress={props.onClose}>
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.addBtn} onPress={props.onAdd}>
              <Text style={styles.btnText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    margin: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cancelBtn: {
    backgroundColor: '#888',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
  addBtn: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
});
