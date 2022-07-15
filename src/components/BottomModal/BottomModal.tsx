import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../Button';
import {useSelector} from 'react-redux';
import {selectors} from '../../store/ducks';
import ControlButton from '../ControlButton';

type Props = {
  visible: boolean;
  children: any;
  onModalClose: () => void;
  userId: string;
};

const BottomModal = ({visible, onModalClose, userId}: Props) => {
  const currentUser = useSelector(selectors.auth.selectUser);
  // const {userId} = route.params;

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.backdrop}>
        <View style={styles.modal}>
          <View style={styles.buttonModal}>
            <ControlButton
              customStyles={styles.buttonClose}
              onPress={onModalClose}
              label={'Hide post from feed'}
            />
            {/* {currentUser.id !== userId && ( */}
            <ControlButton
              customStyles={styles.buttonClose}
              onPress={onModalClose}
              label={'Delete post'}
            />
          </View>
          <View style={styles.buttonModalClose}>
            <ControlButton
              customStyles={styles.buttonClose}
              onPress={onModalClose}
              label={'Close'}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default BottomModal;
