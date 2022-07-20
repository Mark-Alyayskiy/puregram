import {Dimensions, Image, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {DotsIcon, HeartIcon, MessageIcon} from '../../assets/svg';
import {
  ControlContainer,
  FooterUsernameLabel,
  Header,
  ImageContainer,
  ItemContainer,
  Label,
  MenuButton,
  PostFooter,
  PostInfo,
  Root,
  Timestamp,
  UserAvatar,
  UserButton,
  Username,
} from '../Post/styles';
import {Post as PostType} from '../../types/post';
import moment from 'moment';
import ImageViewer from 'react-native-image-zoom-viewer';

import {useNavigation} from '@react-navigation/core';
import BottomModal from '../BottomModal/BottomModal';
import {posts} from '../../api';
import _ from 'lodash';
import {BlurView} from '@react-native-community/blur';

const windowWidth = Dimensions.get('window').width;

type Props = {
  post: PostType;
  onDeletePost: () => void;
};

const Post = ({post, onDeletePost}: Props) => {
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
    }, 300),
    [initialIsPostLikedByUser],
  );

  const showBottomModal = () => {
    setIsModalVisible(true);
  };

  return (
    <Root>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate('PostView', {post})}>
        <Header>
          <BottomModal
            userId={postData.userId}
            visible={isModalVisible}
            onModalClose={() => setIsModalVisible(false)}
            postId={post.id}
            onDeletePost={onDeletePost}
            postImageUrl={post.imageUrl}
            postLabel={post.label}
          />
          <UserButton
            onPress={() =>
              navigation.navigate('Profile', {userId: postData.userId})
            }>
            <UserAvatar
              source={{
                uri: postData.avatarUrl,
              }}
            />

            <Username>{postData.username}</Username>
          </UserButton>
          <MenuButton onPress={() => showBottomModal()}>
            <DotsIcon />
          </MenuButton>
        </Header>
        <ImageContainer>
          <ImageViewer
            renderImage={props => <Image {...props} />}
            renderIndicator={() => <React.Fragment />}
            backgroundColor="#fff"
            maxOverflow={0}
            flipThreshold={0}
            renderHeader={undefined}
            imageUrls={[{url: postData.imageUrl}]}
          />
          <PostInfo>
            <ControlContainer>
              <ItemContainer>
                <TouchableOpacity onPress={handleLikePost}>
                  <HeartIcon isActive={postData.isPostLikedByUser} />
                </TouchableOpacity>
                <Label>{postData.likesCount}</Label>
              </ItemContainer>
              <ItemContainer>
                <MessageIcon />
                <Label>{postData.commentsCount}</Label>
              </ItemContainer>
            </ControlContainer>
            <Timestamp>
              {moment(postData.created_at).format('MMMM Do YYYY, h:mm')}
            </Timestamp>
          </PostInfo>
        </ImageContainer>

        <PostFooter>
          <Label>
            <FooterUsernameLabel>{postData.username + ' '}</FooterUsernameLabel>
            {postData.label}
          </Label>
        </PostFooter>
      </TouchableOpacity>
    </Root>
  );
};

export default Post;
