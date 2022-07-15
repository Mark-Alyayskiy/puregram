import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    bottom: -10,
    width: '100%',
    backgroundColor: '#202124',
    borderTopColor: '#ff4d67',
    borderTopWidth: 2,
    paddingVertical: 15,
    marginVertical: 8,
  },
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
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
