import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {Post as PostType} from '../../../types/post';
import Post from '../../../components/Post';

import styles from '../styles';

type Props = {
  posts: PostType[];
};

const GridView = ({posts}: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.imageGridContainer}>
      {posts.map(post => (
        <Image
          style={styles.imageGrid}
          source={{
            uri: post.imageUrl,
          }}
        />
      ))}
    </ScrollView>
  );
};

export default GridView;
