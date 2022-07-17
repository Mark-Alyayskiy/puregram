import {View, Text, Image} from 'react-native';
import React from 'react';
import {CommentType} from '../../types/comment';
import styles from './styles';
import moment from 'moment';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Input from '../Input';
import {Field, Form} from 'react-final-form';
import {useNavigation} from '@react-navigation/native';

type Props = CommentType;

const Comment = ({
  avatarUrl,
  username,
  id,
  commentText,
  created_at,
  userId,
}: Props) => {
  console.log('commentText', commentText);
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <View style={styles.user}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile', {userId})}>
          <Image style={styles.userAvatar} source={{uri: avatarUrl}} />
        </TouchableOpacity>
      </View>
      <View style={styles.commentText}>
        <Text style={styles.userName}>{username}</Text>

        <Text style={styles.comment}>{commentText}</Text>
        <Text style={styles.timestamp}>
          {moment(created_at).format('MMMM Do YYYY, h:mm')}
        </Text>
      </View>
    </View>
  );
};

export default Comment;
