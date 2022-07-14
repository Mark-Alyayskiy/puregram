import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState, useLayoutEffect} from 'react';

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
import {
  DrawerLayout,
  gestureHandlerRootHOC,
} from 'react-native-gesture-handler';
import {DotsIcon} from '../../assets/svg';
import {launchImageLibrary} from 'react-native-image-picker';

const Profile = ({
  route,
  navigation,
}: NativeStackScreenProps<MainNavigationList, 'Profile'>) => {
  const {userId} = route.params;

  let drawer = useRef(null as null | {openDrawer: () => void} | any);

  const currentUser = useSelector(selectors.auth.selectUser);
  const accessToken = useSelector(selectors.auth.selectAccessToken);

  const isFocused = useIsFocused();

  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userData, setUserData] = useState(null as null | UserType);
  const [postsData, setPostData] = useState(null as null | PostType[]);
  const [selectedLayout, setSelectedLayout] = useState(Layout.Feed as Layout);
  const [modalData, setModalData] = useState(null as null | SubscriberType[]);

  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(actions.auth.signOut());
  };

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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => drawer!.current!.openDrawer()}>
          <DotsIcon />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

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

  const onAvatarPressed = async () => {
    console.log('Avatar pressed');
    const result = await launchImageLibrary({mediaType: 'photo'});
    if (result && result.assets && result.assets[0]) {
      await users.updateUserAvatar(result.assets[0].uri!, accessToken);
      updateUserData();
    }
  };

  const renderDrawer = () => {
    return (
      <View style={styles.drawer}>
        <TouchableOpacity style={styles.drawerButton} onPress={signOut}>
          <Text style={styles.drawerButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  };

  if (!postsData || !userData) {
    return (
      <DrawerLayout
        ref={drawer}
        drawerWidth={200}
        drawerPosition={'right'}
        drawerType="slide"
        drawerBackgroundColor="#181a20"
        renderNavigationView={renderDrawer}>
        <Loader />
      </DrawerLayout>
    );
  }

  return (
    <>
      <DrawerLayout
        ref={drawer}
        drawerWidth={200}
        drawerPosition={'right'}
        drawerType="slide"
        drawerBackgroundColor="#181a20"
        renderNavigationView={renderDrawer}>
        <ScrollView style={styles.rootGrid}>
          <View style={styles.root}>
            <UsersModal
              onUpdateProfileId={onUpdateProfileId}
              visible={isModalVisible}
              onModalClose={() => setIsModalVisible(false)}
              usersData={modalData}
            />
            <Header
              showFollow={showFollow}
              showFollowers={showFollowers}
              onAvatarPressed={onAvatarPressed}
              publicationsCount={postsData.length}
              username={userData.username}
              followersCount={userData.subscriberCount}
              followCount={userData.subscribedCount}
              userAvatar={userData.avatarUrl}
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
            {postsData.length === 0 && (
              <Text style={styles.drawerButtonText}>
                There is no posts yet!
              </Text>
            )}
            {selectedLayout === Layout.Grid ? (
              <GridView posts={postsData} />
            ) : (
              postsData.map(post => <Post post={post} key={post.id} />)
            )}
          </View>
        </ScrollView>
      </DrawerLayout>
    </>
  );
};

export default gestureHandlerRootHOC(Profile);
