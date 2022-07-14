import {View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';

import styles from '../Profile/styles';
import {useSelector} from 'react-redux';
import {actions, selectors} from '../../store/ducks';
import {posts, users} from '../../api';
import {useIsFocused} from '@react-navigation/native';
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
import {SubscriberType, UserType} from '../../types/user';
import {subscriptions} from '../../api';
import UsersModal from './components/UsersModal';

const Profile = ({
  route,
  navigation,
}: NativeStackScreenProps<MainNavigationList, 'Profile'>) => {
  const {userId} = route.params;

  const currentUser = useSelector(selectors.auth.selectUser);

  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userData, setUserData] = useState(null as null | UserType);
  const [postsData, setPostData] = useState(null as null | PostType[]);
  const [selectedLayout, setSelectedLayout] = useState(Layout.Feed as Layout);
  const [modalData, setModalData] = useState(null as null | SubscriberType[]);

  const getUserById = async () => {
    const res = await users.getUser(userId);
    setUserData(res);
  };

  const getUserPosts = async () => {
    const res = await posts.getUserPostsById(userId);
    setPostData(res);
  };
  const getSubscribed = async () => {
    return await subscriptions.getSubscribed(userId);
  };

  const getSubscribers = async () => {
    return await subscriptions.getSubscribers(userId);
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

  const updateUserData = async () => {
    setUserData(null);
    setPostData(null);
    await getUserById();
    await getUserPosts();
  };

  useEffect(() => {
    updateUserData();
  }, [userId]);

  useEffect(() => {
    if (!isModalVisible) {
      setModalData(null);
    }
  }, [isModalVisible]);

  const signOut = () => {
    dispatch(actions.auth.signOut());
  };

  const onLayoutChange = (nextLayout: Layout) => {
    setSelectedLayout(nextLayout);
  };

  const subscribe = async () => {
    setIsLoading(true);
    const res = await subscriptions.subscribeToUser(userId);
    await getUserById();
    setIsLoading(false);
    console.log('res', res);
  };

  const showFollowers = async () => {
    setIsModalVisible(true);
    const res = await getSubscribers();
    setModalData(res);
  };

  const showFollow = async () => {
    setIsModalVisible(true);
    const res = await getSubscribed();
    setModalData(res);
  };

  const onUpdateProfileId = (profileId: string) => {
    navigation.setParams({userId: profileId});
    setIsModalVisible(false);
  };

  if (!postsData || !userData) {
    return (
      <>
        {/* <Button onPress={signOut} label={'Sign out'} /> */}
        <Loader />
      </>
    );
  }

  return (
    <ScrollView style={styles.rootGrid}>
      <View style={styles.root}>
        <UsersModal
          onUpdateProfileId={onUpdateProfileId}
          visible={isModalVisible}
          onModalClose={() => setIsModalVisible(false)}
          usersData={modalData}
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
