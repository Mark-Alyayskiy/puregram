import {View, Text} from 'react-native';
import React from 'react';
import {CommentType} from '../../types/comment';

type Props = CommentType;

const Comment = ({avatarUrl, username, id, commentText, created_at}: Props) => {
  return (
    <View>
      <View>
        <Text>{avatarUrl}</Text>
        <Text>{username}</Text>
        <Text>{commentText}</Text>
      </View>
    </View>
  );
};

export default Comment;
