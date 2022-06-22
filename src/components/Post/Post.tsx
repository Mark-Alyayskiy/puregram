import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {HeartIcon} from '../../assets/svg';
import styles from '../Post/styles';
import {Post as PostType} from '../../types/post';
import moment from 'moment';
import ImageViewer from 'react-native-image-zoom-viewer';

type Props = {
  post: PostType;
};

const Post = ({post}: Props) => {
  return (
    <View style={styles.root}>
      <View style={styles.user}>
        <Image
          style={styles.userAvatar}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmgRdgDaYNygYqSk_zJ4kUC596fsC8yy45g&usqp=CAU',
          }}
        />
        <Text style={styles.usernameLabel}>{post.username}</Text>
      </View>
      <View style={styles.imageContainer}>
        {/* <Image
          style={styles.image}
          source={{
            uri: post.imageUrl,
          }}
        /> */}
        <ImageViewer
          renderIndicator={undefined}
          renderHeader={undefined}
          imageUrls={[{url: post.imageUrl}]}
        />
      </View>
      <View style={styles.control}>
        <View style={styles.likes}>
          <HeartIcon />

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
