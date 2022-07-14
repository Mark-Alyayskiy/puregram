import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modal: {
    width: '98%',
    backgroundColor: '#181a20',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    marginVertical: 8,
  },
  backdrop: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonClose: {
    width: '95%',
    height: 50,
  },
});

export default styles;
