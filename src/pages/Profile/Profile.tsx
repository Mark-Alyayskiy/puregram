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
import {User as UserType} from '../../types/user';

const Profile = ({
  route,
  navigation,
}: NativeStackScreenProps<MainNavigationList, 'Profile'>) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const {userId} = route.params;

  const [userData, setUserData] = useState(null as null | UserType);
  const [postsData, setPostData] = useState(null as null | PostType[]);
  const [selectedLayout, setSelectedLayout] = useState(Layout.Feed as Layout);

  const getUserById = async () => {
    const res = await users.getUser(userId);
    setUserData(res);
  };

  console.log('userId', userId);

  const currentUser = useSelector(selectors.auth.selectUser);

  console.log('postsData', postsData);

  const getUserPosts = async () => {
    const res = await posts.getUserPostsById(userId);
    setPostData(res);
    console.log('res', res);
  };

  useEffect(() => {
    if (isFocused) {
      getUserPosts();
      getUserById();
    } else {
      setPostData(null);
      setUserData(null);
    }
  }, [isFocused]);

  const signOut = () => {
    dispatch(actions.auth.signOut());
  };

  const onLayoutChange = (nextLayout: Layout) => {
    setSelectedLayout(nextLayout);
  };

  const subscribe = () => {};

  if (!postsData || !userData) {
    return <Loader />;
  }

  return (
    <ScrollView style={styles.rootGrid}>
      <View style={styles.root}>
        <Header
          publicationsCount={postsData.length}
          username={userData.username}
          followersCount={55}
          followCount={55}
          userAvatar={
            'https://klike.net/uploads/posts/2019-03/1551774929_2.jpg'
          }
        />
        <View style={styles.subscribeBtnContainer}>
          <Button
            customStyles={styles.subscribeBtn}
            label="subscribe"
            onPress={subscribe}
          />
        </View>
        <Control
          onLayoutChange={onLayoutChange}
          selectedLayout={selectedLayout}
        />

        {selectedLayout === Layout.Grid ? (
          <GridView posts={postsData} />
        ) : (
          postsData.map(post => <Post post={post} key={post.id} />)
        )}

        {/* <Button onPress={signOut} label={'Sign out'} /> */}
      </View>
    </ScrollView>
  );
};

export default Profile;
