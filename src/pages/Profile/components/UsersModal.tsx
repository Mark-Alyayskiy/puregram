import {
  View,
  Text,
  Modal,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SubscriberType} from '../../../types/user';
import styles from '../styles';
import Loader from '../../../components/Loader';
import ControlButton from '../../../components/ControlButton';
import {ArrowBackIcon} from '../../../assets/svg';

type Props = {
  visible: boolean;
  onModalClose: () => void;
  usersData: null | SubscriberType[];
  onUpdateProfileId: (id: string) => void;
};

const UsersModal = ({
  visible,
  onModalClose,
  onUpdateProfileId,
  usersData,
}: Props) => {
  return (
    <Modal visible={visible} animationType="slide">
      <ScrollView contentContainerStyle={styles.modal}>
        <TouchableOpacity style={styles.arrowBackIcon} onPress={onModalClose}>
          <ArrowBackIcon />
        </TouchableOpacity>
        {usersData && usersData.length === 0 && (
          <Text style={styles.drawerButtonText}>There is no users yet!</Text>
        )}
        {usersData ? (
          usersData.map(subscriber => (
            <TouchableOpacity
              key={subscriber.user.id}
              onPress={() => onUpdateProfileId(subscriber.user.id)}
              style={styles.userModalContainer}>
              <Image
                style={styles.userModalAvatar}
                source={{
                  uri: subscriber.user.avatarUrl,
                }}
              />
              <Text style={styles.userNameText}>
                {subscriber.user.username}
              </Text>
            </TouchableOpacity>
          ))
        ) : (
          <Loader />
        )}

        <View style={styles.buttonCloseContainer}>
          <ControlButton onPress={onModalClose} label={'Close'} />
        </View>
      </ScrollView>
    </Modal>
  );
};

export default UsersModal;
