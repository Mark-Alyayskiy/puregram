import {Dimensions, StyleSheet} from 'react-native';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    width: '100%',
    minHeight: '100%',
    backgroundColor: '#181a20',
    paddingTop: 10,
  },
});

export default styles;
