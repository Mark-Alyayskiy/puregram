import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    width: ' 100%',
    backgroundColor: '#181a20',
    marginBottom: 10,

    flexDirection: 'row',
  },
  userAvatar: {
    justifySelf: 'flex-start',
    width: 30,
    height: 30,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  userName: {
    paddingBottom: 2,
    color: '#fff',
  },
  timestamp: {
    color: '#8f9091',
  },
  comment: {
    color: '#fff',
  },
  user: {
    paddingVertical: 10,
    justifyContent: 'flex-start',
  },
  commentText: {
    flexDirection: 'column',
    maxWidth: '87%',
  },
});

export default styles;
