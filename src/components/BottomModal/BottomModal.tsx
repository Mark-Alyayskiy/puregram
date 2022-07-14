import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

type Props = {
  children: any;
};

const BottomModal = ({children}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.backdrop}>
        <View>
          <Text>{children}</Text>
        </View>
      </View>
    </View>
  );
};

export default BottomModal;
