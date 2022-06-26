import React from 'react';
import {Modal, Text, View} from 'react-native';
import styles from './styles';

type Props = {
  label: string;
  children: any;
  visible: boolean;
};

const FormModal = ({label, children, visible}: Props) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.backdrop}>
        <View style={styles.modal}>
          <Text style={styles.text}>{label}</Text>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default FormModal;
