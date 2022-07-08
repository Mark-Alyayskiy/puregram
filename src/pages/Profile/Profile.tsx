import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import {Image} from 'react-native';

import styles from '../Profile/styles';
import {useSelector} from 'react-redux';
import {actions, selectors} from '../../store/ducks';
import {posts, users} from '../../api';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import Button from '../../components/Button';
import {Post as PostType} from '../../types/post';
import Loader from '../../components/Loader';
import Post from '../../components/Post';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainNavigationList} from '../../types/navigation';
import Header from './components/Header';
import Control from './components/Control';
import {Layout} from './types';
import GridView from './components/GridView';

const Profile = ({
  navigation,
}: NativeStackScreenProps<MainNavigationList, 'EditProfile'>) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const currentUserId = useSelector(selectors.auth.selectCurrentId);
  const currentUser = useSelector(selectors.auth.selectUser);

  const [data, setData] = useState(null as null | PostType[]);
  const [selectedLayout, setSelectedLayout] = useState(Layout.Feed as Layout);

  console.log('currentUser', currentUser);

  const getUserPosts = async () => {
    const res = await posts.getUserPostsById(currentUserId);
    setData(res);
    console.log('res', res);
  };

  useEffect(() => {
    if (isFocused) {
      getUserPosts();
    }
  }, [isFocused]);

  const signOut = () => {
    dispatch(actions.auth.signOut());
  };

  const onLayoutChange = (nextLayout: Layout) => {
    setSelectedLayout(nextLayout);
  };
  if (!data) {
    return <Loader />;
  }
  return (
    <ScrollView>
      <View style={styles.root}>
        <Header
          publicationsCount={data.length}
          username={currentUser.username}
          followersCount={55}
          followCount={55}
          userAvatar={
            'https://klike.net/uploads/posts/2019-03/1551774929_2.jpg'
          }
        />
        <Control
          onLayoutChange={onLayoutChange}
          selectedLayout={selectedLayout}
        />

        {selectedLayout === Layout.Grid ? (
          <GridView posts={data} />
        ) : (
          data.map(post => <Post post={post} key={post.id} />)
        )}

        {/* <Button onPress={signOut} label={'Sign out'} /> */}
      </View>
    </ScrollView>
  );
};

export default Profile;
