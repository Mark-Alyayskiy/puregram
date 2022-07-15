import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    bottom: 0,
    width: '98%',
    backgroundColor: '#181a20',
    borderRadius: 15,

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
  buttonModal: {
    borderRadius: 50,
  },
  buttonModalClose: {
    borderRadius: 50,
    paddingTop: 20,
  },
});

export default styles;
