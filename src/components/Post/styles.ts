import {Dimensions, StyleSheet} from 'react-native';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    height: 400,
    width: '100%',
    flex: 1,
    maxWidth: '100%',
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
    marginLeft: 5,
  },
  timestamp: {
    color: '#fff',
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
  },
  label: {
    color: '#fff',
    paddingLeft: 5,
  },
});

export default styles;
