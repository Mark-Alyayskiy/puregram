import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    paddingTop: 10,
    width: '100%',
    minHeight: '100%',
    backgroundColor: '#181a20',
    paddingBottom: 50,
    justifyContent: 'flex-start',
  },

  inputContainerWrapper: {
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    bottom: 0,
    paddingTop: 5,
    backgroundColor: '#181a20',
  },
  input: {
    height: 40,
    margin: 0,
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
