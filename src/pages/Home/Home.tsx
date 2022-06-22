import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Button from '../../components/Button';
import {useDispatch} from 'react-redux';
import {actions} from '../../store/ducks';
import styles from './styles';
import Post from '../../components/Post';
import {Post as PostType} from '../../types/post';

import {posts} from '../../api';
const Home = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null as null | PostType[]);

  const getPosts = async () => {
    const res = await posts.getPosts();
    setData(res);
  };
  useEffect(() => {
    getPosts();
  }, []);

  const signOut = () => {
    dispatch(actions.auth.signOut());
  };
  return (
    <ScrollView contentContainerStyle={styles.body}>
      {data && data.map(post => <Post post={post} />)}

      <Button onPress={signOut} label={'Sign out'} />
    </ScrollView>
  );
};

export default Home;
