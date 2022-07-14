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
import Button from '../../../components/Button';
import styles from '../styles';
import Loader from '../../../components/Loader';

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
        {usersData ? (
          usersData.map(subscriber => (
            <TouchableOpacity
              key={subscriber.user.id}
              onPress={() => onUpdateProfileId(subscriber.user.id)}
              style={styles.userModalContainer}>
              <Image
                style={styles.userModalAvatar}
                source={{
                  uri: 'https://www.postavy.cz/foto/flesh-balls-foto.jpg',
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
          <Button onPress={onModalClose} label={'Close'} />
        </View>
      </ScrollView>
    </Modal>
  );
};

export default UsersModal;
