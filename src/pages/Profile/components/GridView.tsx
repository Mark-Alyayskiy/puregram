import {Image, ScrollView} from 'react-native';
import React from 'react';
import {Post as PostType} from '../../../types/post';

import styles from '../styles';

type Props = {
  posts: PostType[];
};

const GridView = ({posts}: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.imageGridContainer}>
      {posts.map(post => (
        <Image
          key={post.id}
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
