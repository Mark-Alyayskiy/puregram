import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Post as PostType} from '../../types/post';
import {
  NativeStackHeaderProps,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {MainNavigationList} from '../../../types/navigation';
import Post from '../../../components/Post';
import Comment from '../../../components/Comment/comment';

const PostView = ({
  route,
  navigation,
}: NativeStackScreenProps<MainNavigationList, 'PostView'>) => {
  const {post} = route.params;
  console.log('post', post);
  return (
    <View style={styles.root}>
      <Post post={post} />
      <Comment
        avatarUrl={''}
        username={''}
        id={''}
        commentText={''}
        created_at={''}
      />
    </View>
  );
};

export default PostView;
