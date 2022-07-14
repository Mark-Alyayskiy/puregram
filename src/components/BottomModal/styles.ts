import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    top: 0,
    bottom: 0,
  },
  backdrop: {
    position: 'absolute',
    width: '100%',
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    backgroundColor: '#22191A',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    maxHeight: '100%',
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'CircularStd-Bold',
    color: '#9ABDC2',
  },
  subtitle: {
    fontSize: 16,
    color: '#9ABDC2',
    fontFamily: 'CircularStd-Bold',
  },
  fullName: {
    textAlign: 'center',
    color: '#9ABDC2',
    fontFamily: 'CircularStd-Bold',
    fontSize: 18,
  },
  infoBlock: {
    paddingHorizontal: 30,
    paddingVertical: 7,
    // borderBottomColor: '#ade0db',
    // borderBottomWidth: 1,
  },
  userImage: {
    width: 100,
    height: 100,
    display: 'flex',
    borderRadius: 1000,
    marginTop: 10,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flex: 1,
  },
  info: {
    fontSize: 16,
    marginTop: 10,
    color: '#9ABDC2',
    fontFamily: 'CircularStd-Book',
  },
  orderButton: {
    borderWidth: 1,
    borderColor: '#9ABDC2',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 3,
    width: 90,
  },
  orderText: {
    color: '#9ABDC2',
    textAlign: 'center',
  },
});

export default styles;
