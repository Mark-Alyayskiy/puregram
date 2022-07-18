import {View, Text, Modal, TouchableOpacity, Share} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../Button';
import {useSelector} from 'react-redux';
import {selectors} from '../../store/ducks';
import ControlButton from '../ControlButton';
import {posts} from '../../api';

type Props = {
  visible: boolean;
  onModalClose: () => void;
  userId: string;
  postId: string;
  postLabel: string;
  postImageUrl: string;
  onDeletePost: () => void;
};

const BottomModal = ({
  visible,
  onModalClose,
  userId,
  postId,
  onDeletePost,
  postLabel,
  postImageUrl,
}: Props) => {
  const currentUser = useSelector(selectors.auth.selectUser);

  const deletePost = async () => {
    await posts.deletePost(postId);
    onDeletePost();
    onModalClose();
  };

  const onShare = async () => {
    const result = await Share.share({
      message: postLabel,
      url: postImageUrl,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  };

  return (
    <React.Fragment>
      <Modal visible={visible} transparent={true} animationType="slide">
        <TouchableOpacity style={styles.backdrop} onPress={onModalClose} />
        <View style={styles.modal}>
          <View style={styles.buttonModal}>
            <ControlButton
              customStyles={styles.buttonClose}
              onPress={onShare}
              label={'Share this post'}
            />
            {currentUser.id === userId && (
              <ControlButton
                customStyles={styles.buttonClose}
                onPress={deletePost}
                label={'Delete post'}
              />
            )}
          </View>
          <View style={styles.buttonModalClose}>
            <ControlButton
              customStyles={styles.buttonClose}
              onPress={onModalClose}
              label={'Close'}
            />
          </View>
        </View>
      </Modal>
    </React.Fragment>
  );
};

export default BottomModal;
