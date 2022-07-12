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
import {subscriptions} from '../../api';
import UsersModal from './components/UsersModal';

const Profile = ({
  route,
  navigation,
}: NativeStackScreenProps<MainNavigationList, 'Profile'>) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userType, setUserType] = useState('subscribers');

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

  console.log('userData', userData);

  const subscribe = async () => {
    setIsLoading(true);
    const res = await subscriptions.subscribeToUser(userId);
    await getUserById();
    setIsLoading(false);
    console.log('res', res);
  };

  const showFollowers = () => {
    setUserType('subscribers');
    setIsModalVisible(true);
  };

  const showFollow = () => {
    setUserType('subscribed');
    setIsModalVisible(true);
  };

  if (!postsData || !userData) {
    return <Loader />;
  }

  return (
    <ScrollView style={styles.rootGrid}>
      <View style={styles.root}>
        <UsersModal
          navigation={navigation}
          userType={userType}
          visible={isModalVisible}
          currentUserId={userId}
          onModalClose={() => setIsModalVisible(false)}
        />
        {/* <Button onPress={signOut} label={'Sign out'} /> */}
        <Header
          showFollow={showFollow}
          showFollowers={showFollowers}
          publicationsCount={postsData.length}
          username={userData.username}
          followersCount={userData.subscriberCount}
          followCount={userData.subscribedCount}
          userAvatar={
            'https://klike.net/uploads/posts/2019-03/1551774929_2.jpg'
          }
        />
        <View style={styles.subscribeBtnContainer}>
          {currentUser.id !== userId && !userData.isSubscribed && (
            <Button
              customStyles={styles.subscribeBtn}
              label="subscribe"
              onPress={subscribe}
              isLoading={isLoading}
            />
          )}
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
      </View>
    </ScrollView>
  );
};

export default Profile;
