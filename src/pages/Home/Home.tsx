import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import styles from './styles';
import Post from '../../components/Post';
import {Post as PostType} from '../../types/post';

import {posts} from '../../api';
import Loader from '../../components/Loader';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainNavigationList} from '../../types/navigation';
import {ArrowBackIcon} from '../../assets/svg';
import {throttle} from 'lodash';
import {useSelector} from 'react-redux';
import {selectors} from '../../store/ducks';

const Home = ({
  navigation,
}: NativeStackScreenProps<MainNavigationList, 'Home'>) => {
  const isFocused = useIsFocused();
  const [data, setData] = useState(null as null | PostType[]);
  const [isDataEnded, setIsDataEnded] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const accessToken = useSelector(selectors.auth.selectAccessToken);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={throttle(
            () => {
              navigation.goBack();
            },
            500,
            {trailing: false},
          )}>
          <ArrowBackIcon />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const getInitialPosts = async (cursor: number) => {
    const res = await posts.getPosts(cursor, accessToken);
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

  const refreshData = async () => {
    setIsRefreshing(true);
    await getInitialPosts(0);
    setIsRefreshing(false);
  };

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
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            colors={['#9Bd35A', '#689F38']}
            onRefresh={refreshData}
          />
        }
        data={data}
        renderItem={({item}) => <Post post={item} onDeletePost={refreshData} />}
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
