import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {DotsIcon, HeartIcon} from '../../assets/svg';
import styles from '../Post/styles';
import {Post as PostType} from '../../types/post';
import moment from 'moment';
import ImageViewer from 'react-native-image-zoom-viewer';

import Navigation from '../../pages/Navigation';
import {useNavigation} from '@react-navigation/core';
import BottomModal from '../BottomModal/BottomModal';
import {posts} from '../../api';
import _ from 'lodash';

type Props = {
  post: PostType;
};

const Post = ({post}: Props) => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [postData, setPostData] = useState(post);

  const likePost = async () => {
    if (!postData.isPostLikeByUser) {
      setPostData({
        ...postData,
        likesCount: post.likesCount++,
        isPostLikeByUser: true,
      });
    } else {
      setPostData({
        ...postData,
        likesCount: post.likesCount--,
        isPostLikeByUser: false,
      });
    }
    _.debounce(await posts.like(post.id), 1000);
  };

  const onLikePressed = useCallback(_.debounce(likePost, 1000), []);

  // const getSinglePost = async () => {
  //   const res = await posts.getSinglePost(post.id);
  //   setPostData(res);
  // };

  console.log('postData', postData);

  const showBottomModal = () => {
    setIsModalVisible(true);
  };

  return (
    <View style={styles.root}>
      <View style={styles.userHeader}>
        <BottomModal
          userId={postData.userId}
          visible={isModalVisible}
          onModalClose={() => setIsModalVisible(false)}
        />
        <TouchableOpacity
          style={styles.user}
          onPress={() =>
            navigation.navigate('Profile', {userId: postData.userId})
          }>
          <Image
            style={styles.userAvatar}
            source={{
              uri: postData.avatarUrl,
            }}
          />

          <Text style={styles.usernameLabel}>{postData.username}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.delBtn}
          onPress={() => showBottomModal()}>
          <DotsIcon color="#fff" />
        </TouchableOpacity>
        {/* <Modal>
          <View style={styles.rootPostMenu}>
            <Text>2322</Text>
          </View>
        </Modal> */}
      </View>
      <View style={styles.imageContainer}>
        <ImageViewer
          renderIndicator={() => <React.Fragment />}
          backgroundColor="#181a20"
          maxOverflow={0}
          flipThreshold={0}
          renderHeader={undefined}
          imageUrls={[{url: postData.imageUrl}]}
        />
      </View>
      <View style={styles.control}>
        <View style={styles.likes}>
          <TouchableOpacity onPress={likePost}>
            <HeartIcon />
          </TouchableOpacity>

          <Text style={styles.likesCount}>{postData.likesCount}</Text>
          <Text style={styles.label}>{postData.label}</Text>
        </View>
        <Text style={styles.timestamp}>
          {moment(postData.created_at).format('MMMM Do YYYY, h:mm')}
        </Text>
      </View>
    </View>
  );
};

export default Post;
