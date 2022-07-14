import {ScrollView, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import Button from '../../components/Button';
import {useDispatch} from 'react-redux';
import {actions} from '../../store/ducks';
import styles from './styles';
import Post from '../../components/Post';
import {Post as PostType} from '../../types/post';

import {posts} from '../../api';
import Loader from '../../components/Loader';

const Home = () => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [data, setData] = useState(null as null | PostType[]);

  const getPosts = async () => {
    const res = await posts.getPosts();
    setData(res);
  };

  useEffect(() => {
    if (isFocused) {
      getPosts();
    }
  }, [isFocused]);

  return (
    <ScrollView contentContainerStyle={styles.body}>
      {data && data.length === 0 && (
        <Text style={styles.noPostsText}>There is no posts yet!</Text>
      )}
      {data ? data.map(post => <Post post={post} key={post.id} />) : <Loader />}
    </ScrollView>
  );
};

export default Home;
