import {Dimensions, StyleSheet} from 'react-native';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    paddingTop: 10,
    width: '100%',
    minHeight: '100%',
    backgroundColor: '#181a20',
    paddingBottom: 80,
    justifyContent: 'flex-start',
  },

  inputContainerWrapper: {
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    bottom: 0,

    backgroundColor: '#181a20',
  },
  input: {
    height: 40,
  },
  rootScroll: {
    // paddingBottom: 30,
  },
  onSubmitButton: {
    transform: [{rotate: '180deg'}],
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 7.5,
    right: 20,
    backgroundColor: '#62a4ef',
    width: 35,
    height: 35,
    borderRadius: 50,
  },
});

export default styles;
