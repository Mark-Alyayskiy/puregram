import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

type Props = {
  label: string;
  onPress?: () => any;
  isLoading?: boolean;
  customStyles?: any;
};

const ControlButton = ({label, onPress, isLoading, customStyles}: Props) => {
  return (
    <TouchableOpacity style={[styles.button, customStyles]} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.text}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ControlButton;
