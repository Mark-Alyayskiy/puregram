import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {DotsIcon, HeartIcon, MessageIcon} from '../../assets/svg';
import styles from '../Post/styles';
import {Post as PostType} from '../../types/post';
import moment from 'moment';
import ImageViewer from 'react-native-image-zoom-viewer';

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
  const [initialIsPostLikedByUser, setInitialIsPostLikedByUser] = useState(
    post.isPostLikedByUser,
  );

  useEffect(() => {
    setPostData(post);
  }, [post]);

  const handleLikePost = async () => {
    if (!postData.isPostLikedByUser) {
      console.log('call++');
      handleDebounceCondition(true);
      setPostData({
        ...postData,
        likesCount: ++post.likesCount,
        isPostLikedByUser: true,
      });
    } else {
      console.log('call--');
      handleDebounceCondition(false);
      setPostData({
        ...postData,
        likesCount: --post.likesCount,
        isPostLikedByUser: false,
      });
    }
  };

  const likePost = async () => {
    const res = await posts.like(post.id);
    setInitialIsPostLikedByUser(!res.affected);
    console.log('res', res);
  };

  const handleDebounceCondition = useCallback(
    _.debounce((isPostLikedByUser: boolean) => {
      console.log(
        'isPostLikedByUser',
        isPostLikedByUser,
        initialIsPostLikedByUser,
      );
      if (initialIsPostLikedByUser !== isPostLikedByUser) {
        likePost();
      }
    }, 500),
    [initialIsPostLikedByUser],
  );

  const showBottomModal = () => {
    setIsModalVisible(true);
  };

  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => navigation.navigate('PostView', {post})}>
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
            <DotsIcon />
          </TouchableOpacity>
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
            <TouchableOpacity onPress={handleLikePost}>
              <HeartIcon isActive={postData.isPostLikedByUser} />
            </TouchableOpacity>

            <Text style={styles.likesCount}>{postData.likesCount}</Text>
            <MessageIcon />
            <Text style={styles.likesCount}>{postData.commentsCount}</Text>
            <Text style={styles.label}>{postData.label}</Text>
          </View>
          <Text style={styles.timestamp}>
            {moment(postData.created_at).format('MMMM Do YYYY, h:mm')}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Post;
