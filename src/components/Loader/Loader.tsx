import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles';
import {Text} from 'react-native-svg';

const Loader = () => {
  return (
    <View style={styles.main}>
      <ActivityIndicator color="#fff" />
      <Text>Tsdvsdg</Text>
    </View>
  );
};

export default Loader;
