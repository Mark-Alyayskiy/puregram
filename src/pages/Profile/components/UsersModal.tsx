import {
  View,
  Text,
  Modal,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {User as UserType} from '../../../types/user';
import Button from '../../../components/Button';
import styles from '../styles';
import {subscriptions, users} from '../../../api';
import Loader from '../../../components/Loader';
import {useNavigation} from '@react-navigation/native';

type Props = {
  visible: boolean;
  currentUserId: string;
  onModalClose: () => void;
  userType: string;
  navigation: any;
};

const UsersModal = ({
  visible,
  navigation,
  currentUserId,
  onModalClose,
  userType,
}: Props) => {
  const [usersData, setUsersData] = useState(null as null | UserType[]);
  const [isLoading, setIsLoading] = useState(false);

  const getSubscribed = async () => {
    const res = await subscriptions.getSubscribed(currentUserId);
    setUsersData(res);
  };

  const getSubscribers = async () => {
    const res = await subscriptions.getSubscribers(currentUserId);
    setUsersData(res);
  };

  useEffect(() => {
    // if (visible) {
    if (userType === 'subscribers') {
      console.log('This');
      getSubscribers();
    } else {
      getSubscribed();
    }
    // }
  }, [visible]);
  console.log('usersData', usersData);
  console.log('userType', userType);

  if (!usersData) {
    return <Loader />;
  }

  return (
    <Modal visible={visible} animationType="slide">
      <ScrollView contentContainerStyle={styles.modal}>
        {usersData.map(user => (
          <TouchableOpacity
            onPress={() => navigation.push('Profile', {userId: user.user.id})}
            style={styles.userModalContainer}>
            <Image
              style={styles.userModalAvatar}
              source={{uri: 'https://www.postavy.cz/foto/flesh-balls-foto.jpg'}}
            />
            <Text style={styles.userNameText}>{user.user.username}</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.buttonCloseContainer}>
          <Button onPress={onModalClose} label={'Close'} />
        </View>
      </ScrollView>
    </Modal>
  );
};

export default UsersModal;
