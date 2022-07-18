import {Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Post as PostType} from '../../../types/post';

import styles from '../styles';

type Props = {
  posts: PostType[];
  onPress: (index: number) => void;
};

const GridView = ({posts, onPress}: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.imageGridContainer}>
      {posts.map((post, index) => (
        <TouchableOpacity onPress={() => onPress(index)}>
          <Image
            key={post.id}
            style={styles.imageGrid}
            source={{
              uri: post.imageUrl,
            }}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default GridView;
