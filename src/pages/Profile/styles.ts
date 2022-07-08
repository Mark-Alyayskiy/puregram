import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    minHeight: '100%',
    backgroundColor: '#181a20',
    paddingTop: 10,
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginHorizontal: 20,
    marginTop: 10,
  },
  userData: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  userDataText: {
    paddingHorizontal: 10,
    color: '#fff',
  },
  switchContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,

    borderColor: '#ff4d67',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  switchImage: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 100,
  },
  userDataItems: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  userDataTextCount: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootHeader: {
    flexDirection: 'row',
  },
  imageTitle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionButton: {
    height: 30,
    width: 180,
  },
  imageGridContainer: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
  },
  imageGrid: {
    width: windowWidth / 3,
    height: windowWidth / 3,
  },
});

export default styles;