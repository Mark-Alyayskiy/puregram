import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

type Props = {
  label: string;
  onPress?: () => any;
};

const Button = ({label, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
