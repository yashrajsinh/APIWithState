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
  placeholderTitle: string;
  placeholderBody: string;
  title: string;
  body: string;
  setTitle: (text: string) => void;
  setBody: (text: string) => void;
  onCancel: () => void;
  onConfirm: () => void;
};

export default function UpdateModel(props: Props) {
  return (
    <Modal transparent visible={props.visible} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          <Text style={styles.heading}>Enter Details</Text>

          <TextInput
            placeholder={props.placeholderTitle}
            value={props.title}
            onChangeText={props.setTitle}
            style={styles.input}
          />

          <TextInput
            placeholder={props.placeholderBody}
            value={props.body}
            onChangeText={props.setBody}
            style={styles.input}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={props.onCancel}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.confirmButton}
              onPress={props.onConfirm}
            >
              <Text style={styles.buttonText}>Update</Text>
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
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalBox: {
    marginHorizontal: 25,
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#fdfdfd',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 8,
  },
  heading: {
    fontSize: 19,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#d9534f', // red-ish
    padding: 12,
    borderRadius: 6,
    marginRight: 5,
  },
  confirmButton: {
    flex: 1,
    backgroundColor: '#5cb85c', // green-ish
    padding: 12,
    borderRadius: 6,
    marginLeft: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
  },
});
