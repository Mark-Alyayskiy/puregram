import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../Button';
import {useSelector} from 'react-redux';
import {selectors} from '../../store/ducks';
import ControlButton from '../ControlButton';

type Props = {
  visible: boolean;
  onModalClose: () => void;
  userId: string;
};

const BottomModal = ({visible, onModalClose, userId}: Props) => {
  const currentUser = useSelector(selectors.auth.selectUser);

  return (
    <React.Fragment>
      <Modal visible={visible} transparent={true} animationType="slide">
        <TouchableOpacity style={styles.backdrop} onPress={onModalClose} />
        <View style={styles.modal}>
          <View style={styles.buttonModal}>
            <ControlButton
              customStyles={styles.buttonClose}
              onPress={onModalClose}
              label={'Hide post from feed'}
            />
            {currentUser.id === userId && (
              <ControlButton
                customStyles={styles.buttonClose}
                onPress={onModalClose}
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
