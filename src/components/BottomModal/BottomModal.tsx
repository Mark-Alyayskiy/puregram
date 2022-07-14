import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../Button';
import {useSelector} from 'react-redux';
import {selectors} from '../../store/ducks';

type Props = {
  visible: boolean;
  children: any;
  onModalClose: () => void;
};

const BottomModal = ({visible, route, onModalClose}: Props) => {
  const currentUser = useSelector(selectors.auth.selectUser);
  // const {userId} = route.params;

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.backdrop}>
        <View style={styles.modal}>
          <Button
            customStyles={styles.buttonClose}
            onPress={onModalClose}
            label={'Hide post from feed'}
          />
          {/* {currentUser.id !== userId && ( */}
          <Button
            customStyles={styles.buttonClose}
            onPress={onModalClose}
            label={'Delete post'}
          />
          {/* )} */}

          {/* <TouchableOpacity onPress={onModalClose}>
            <Text>Close</Text>
          </TouchableOpacity> */}
        </View>
        <View style={styles.modal}>
          <Button
            customStyles={styles.buttonClose}
            onPress={onModalClose}
            label={'Close'}
          />
        </View>
      </View>
    </Modal>
  );
};

export default BottomModal;
