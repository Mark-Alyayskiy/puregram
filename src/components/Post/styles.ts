import {Dimensions, StyleSheet} from 'react-native';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    minHeight: 400,
    width: '100%',
    backgroundColor: '#181a20',
    maxWidth: '100%',
    borderRadius: 25,
    marginBottom: 10,
  },
  imageContainer: {
    width: '100%',
    height: 300,
  },
  image: {
    resizeMode: 'cover',
    height: 300,
    width: win.width,
  },
  control: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  likesCount: {
    color: '#fff',
    marginHorizontal: 4,
  },
  timestamp: {
    color: '#8f9091',
    fontSize: 12,
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userAvatar: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  delBtn: {
    marginHorizontal: 15,
  },
  usernameLabel: {
    color: '#fff',
    marginRight: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },
  label: {
    color: '#fff',
    paddingLeft: 5,
  },
  rootPostMenu: {
    width: 400,
  },
  postFooter: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 5,
  },
});

export default styles;
