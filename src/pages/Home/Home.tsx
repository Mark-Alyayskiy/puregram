import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import styles from './styles';
import Post from '../../components/Post';
import {Post as PostType} from '../../types/post';

import {posts} from '../../api';
import Loader from '../../components/Loader';

const Home = () => {
  const isFocused = useIsFocused();
  const [data, setData] = useState(null as null | PostType[]);
  const [isDataEnded, setIsDataEnded] = useState(false);

  const getInitialPosts = async (cursor: number) => {
    const res = await posts.getPosts(cursor);
    setData(res);
  };

  const getPostsPagination = async (cursor: number) => {
    console.log('Triggered');
    const res = await posts.getPosts(cursor);
    if (res.length === 0) {
      setIsDataEnded(true);
      return;
    }
    setData([...data!, ...res]);
  };

  useEffect(() => {
    if (isFocused) {
      getInitialPosts(0);
    }
  }, [isFocused]);

  if (!data) {
    return <Loader />;
  }

  return (
    <View>
      {data && data.length === 0 && (
        <Text style={styles.noPostsText}>There is no posts yet!</Text>
      )}
      <FlatList
        contentContainerStyle={styles.body}
        data={data}
        renderItem={({item}) => <Post post={item} />}
        onEndReached={() => !isDataEnded && getPostsPagination(data?.length)}
        onEndReachedThreshold={1}
        ListFooterComponent={
          !isDataEnded ? (
            <ActivityIndicator color="#fff" style={{marginBottom: 20}} />
          ) : (
            <React.Fragment />
          )
        }
      />
    </View>
  );
};

export default Home;
