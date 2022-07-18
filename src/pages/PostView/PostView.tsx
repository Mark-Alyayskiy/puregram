import {TouchableOpacity, View} from 'react-native';
import React, {Fragment, useEffect, useLayoutEffect, useState} from 'react';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainNavigationList} from '../../types/navigation';
import Post from '../../components/Post';
import Comment from '../../components/Comment';
import {ScrollView} from 'react-native-gesture-handler';
import {Field, Form} from 'react-final-form';
import Input from '../../components/Input';
import {ArrowBackIcon} from '../../assets/svg';
import {comment as commentApi, posts as postsApi} from '../../api';
import {useIsFocused} from '@react-navigation/native';

import {CommentType} from '../../types/comment';
import Loader from '../../components/Loader';
import {Post as PostType} from '../../types/post';
import {throttle} from 'lodash';

const PostView = ({
  route,
  navigation,
}: NativeStackScreenProps<MainNavigationList, 'PostView'>) => {
  const {post} = route.params;

  const [postData, setPostData] = useState(null as null | PostType);
  const [commentsData, setCommentsData] = useState(
    null as null | CommentType[],
  );
  const isFocused = useIsFocused();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Post',
      headerLeft: () => (
        <TouchableOpacity
          onPress={throttle(
            () => {
              navigation.goBack();
            },
            500,
            {trailing: false},
          )}>
          <ArrowBackIcon />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const onSubmit = async (values: {commentText: string}) => {
    await commentApi.addComment(values.commentText, post.id);
    getComments();
  };

  const getComments = async () => {
    const res = await postsApi.getComments(post.id);
    setCommentsData(res);
  };

  useEffect(() => {
    if (isFocused) {
      getComments();
      setPostData(post);
    } else {
      setCommentsData(null);
      setPostData(null);
    }
  }, [isFocused]);

  if (!postData) {
    return <Loader />;
  }

  return (
    <Fragment>
      <ScrollView contentContainerStyle={{minHeight: '100%'}}>
        <View style={styles.root}>
          <Post post={postData} />
          {commentsData ? (
            commentsData.map(comment => (
              <Comment
                key={comment.id}
                avatarUrl={comment.avatarUrl}
                username={comment.username}
                id={comment.id}
                commentText={comment.commentText}
                created_at={comment.created_at}
                userId={comment.userId}
              />
            ))
          ) : (
            <Loader />
          )}
        </View>
      </ScrollView>
      <Form
        onSubmit={onSubmit}
        render={({handleSubmit, form}) => (
          <View style={styles.inputContainerWrapper}>
            <Field
              customInputStyle={styles.input}
              name="commentText"
              placeholder="Your comment"
              component={Input}
            />
            <TouchableOpacity
              onPress={(e: any) => handleSubmit(e)!.then(() => form.reset())}
              style={styles.onSubmitButton}>
              <ArrowBackIcon width={30} height={30} />
            </TouchableOpacity>
          </View>
        )}
      />
    </Fragment>
  );
};

export default PostView;
