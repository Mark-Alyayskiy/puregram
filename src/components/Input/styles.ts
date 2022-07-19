import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  input: {
    flex: 1,
    backgroundColor: '#1f222a',
    borderColor: '#1f222a',
    color: '#fff',
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 50,
    marginHorizontal: 15,
    height: 50,
  },
  inputInvalid: {
    backgroundColor: '#35383f',
    borderColor: '#F33636',
    color: '#fff',
    borderWidth: 2,
    borderRadius: 15,
    marginHorizontal: 15,
    paddingHorizontal: 50,
    height: 50,
  },
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: '#fff',
    marginLeft: 12,
  },
  inputContainer: {
    width: '100%',
    borderColor: '#BDBDBD',

    marginBottom: 5,
  },

  errorText: {
    marginTop: 5,
    marginHorizontal: 15,
    color: '#F33636',
    fontSize: 12,
    fontWeight: 'bold',
  },
  image: {
    position: 'absolute',
    top: 13,
    paddingLeft: 25,
    height: 30,
    width: 30,
    zIndex: 10,
  },
  hidePassword: {
    position: 'absolute',
    right: 25,
    top: 13,
  },
});

export default styles;
