import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
  },
  camera: {
    flex: 1,
  },
  field: {
    width: '100%',
  },

  button: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  buttons: {
    flexDirection: 'row',
  },
  btn: {
    width: 100,
    height: 40,
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  input: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#1f222a',
    borderColor: '#1f222a',
    color: '#fff',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 10,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    height: 40,
  },
  label: {
    marginLeft: 5,
    textAlign: 'left',
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;
