import React from 'react';
import {Modal, Text, View} from 'react-native';
import Button from '../Button';
import styles from './styles';

type Props = {
  errorText: string;
  onPress: () => any;
  visible: boolean;
};

const ErrorModal = ({onPress, errorText, visible}: Props) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.backdrop}>
        <View style={styles.modal}>
          <Text style={styles.text}>{errorText}</Text>
          <Button label="Ok" onPress={onPress} />
        </View>
      </View>
    </Modal>
  );
};

export default ErrorModal;
