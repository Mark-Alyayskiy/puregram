import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    minHeight: '100%',
    backgroundColor: '#181a20',
    paddingTop: 10,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  formTitle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    marginVertical: 15,
  },
  formButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formButton: {
    width: 150,
    height: 50,
  },
});

export default styles;
