import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {DotsIcon, HeartIcon} from '../../assets/svg';
import styles from '../Post/styles';
import {Post as PostType} from '../../types/post';
import moment from 'moment';
import ImageViewer from 'react-native-image-zoom-viewer';
import {posts} from '../../utils/mockPosts';
import Navigation from '../../pages/Navigation';
import {useNavigation} from '@react-navigation/core';

type Props = {
  post: PostType;
};

const Post = ({post}: Props) => {
  const navigation = useNavigation();

  const likePost = async id => {
    const res = await posts.getUserPostById(id);
  };

  const deletePost = () => {};

  console.log('post', post);

  return (
    <View style={styles.root}>
      <View style={styles.userHeader}>
        <TouchableOpacity
          style={styles.user}
          onPress={() => navigation.navigate('Profile', {userId: post.userId})}>
          <Image
            style={styles.userAvatar}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmgRdgDaYNygYqSk_zJ4kUC596fsC8yy45g&usqp=CAU',
            }}
          />

          <Text style={styles.usernameLabel}>{post.username}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.delBtn} onPress={() => deletePost}>
          <DotsIcon color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <ImageViewer
          renderIndicator={() => <React.Fragment />}
          backgroundColor="#181a20"
          maxOverflow={0}
          flipThreshold={0}
          renderHeader={undefined}
          imageUrls={[{url: post.imageUrl}]}
        />
      </View>
      <View style={styles.control}>
        <View style={styles.likes}>
          <TouchableOpacity onPress={() => likePost}>
            <HeartIcon />
          </TouchableOpacity>

          <Text style={styles.likesCount}>{post.likesCount}</Text>
          <Text style={styles.label}>{post.label}</Text>
        </View>
        <Text style={styles.timestamp}>
          {moment(post.created_at).format('MMMM Do YYYY, h:mm')}
        </Text>
      </View>
    </View>
  );
};

export default Post;
