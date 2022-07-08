import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FeedIcon, GreedIcon} from '../../../assets/svg';
import {Layout} from '../types';
import styles from '../styles';

type Props = {
  onLayoutChange: (arg: Layout) => void;
  selectedLayout: Layout;
};

const Control = ({onLayoutChange, selectedLayout}: Props) => {
  return (
    <View style={styles.switchContainer}>
      <TouchableOpacity
        onPress={() => onLayoutChange(Layout.Feed)}
        style={styles.switchImage}>
        <GreedIcon
          focused={false}
          color={selectedLayout === Layout.Feed ? '#ff4d67' : '#fff'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onLayoutChange(Layout.Grid)}
        style={styles.switchImage}>
        <FeedIcon
          focused={false}
          color={selectedLayout === Layout.Grid ? '#ff4d67' : '#fff'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Control;
