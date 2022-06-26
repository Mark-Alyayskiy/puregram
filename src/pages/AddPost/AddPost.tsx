import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from 'react-native';
import React, {Fragment, useEffect, useRef, useState} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import Loader from '../../components/Loader';
import styles from './styles';
import Button from '../../components/Button';
import {CaptureIcon} from '../../assets/svg';
import FormModal from '../../components/FormModal';
import {composeValidators, required} from '../../utils/validation';
import {Form, Field} from 'react-final-form';
import Input from '../../components/Input';
import {posts} from '../../api';
import {useSelector} from 'react-redux';
import {selectors} from '../../store/ducks';

const AddPost = () => {
  const [descriptionValue, setDescriptionValue] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [photo, setPhoto] = useState(null);

  const camera = useRef<Camera>(null);
  const accessToken = useSelector(selectors.auth.selectAccessToken);

  const getPermission = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    const microphonePermission = await Camera.getMicrophonePermissionStatus();
    console.log('newCameraPermission', cameraPermission);
    console.log('newMicrophonePermission', microphonePermission);
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicrophonePermission = await Camera.requestMicrophonePermission();
    console.log('newCameraPermission', newCameraPermission);
    console.log('newMicrophonePermission', newMicrophonePermission);
  };

  const takePhoto = async () => {
    setIsModalVisible(true);
    const currentPhoto = await camera.current.takePhoto({
      flash: 'on',
    });
    setPhoto(currentPhoto);

    console.log('photo', photo);
  };

  const onSubmit = async () => {
    console.log('photo', photo);
    await posts.addPost(descriptionValue, photo, accessToken);
  };

  useEffect(() => {
    getPermission();
  }, []);

  const devices = useCameraDevices();
  const device = devices.back;
  // const photo = await camera.current.takePhoto({
  //   flash: 'on',
  // });

  if (device == null) {
    return <Loader />;
  }
  return (
    <View style={styles.root}>
      <Camera
        style={styles.camera}
        photo={true}
        device={device}
        isActive={true}
        ref={camera}
      />
      <FormModal visible={isModalVisible} label={'Create post'}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Add description</Text>
          <TextInput
            placeholderTextColor="#7C7C7C"
            autoCorrect={false}
            value={descriptionValue}
            onChangeText={setDescriptionValue}
            style={styles.input}
          />
        </View>

        <View style={styles.buttons}>
          <Button
            label="Cancel"
            customStyles={styles.btn}
            onPress={() => setIsModalVisible(false)}
          />
          <Button label="Post" customStyles={styles.btn} onPress={onSubmit} />
        </View>

        {/* <Form
          onSubmit={onSubmit}
          render={({handleSubmit}) => (
            <View style={styles.field}>

              <Field
                label="Add description"
                name="Add description"
                validate={required}
                customContainerStyles={styles.inputContainer}
                customInputStyles={styles.input}
                component={Input}
              />
              <View style={styles.buttons}>
                <Button label="Cancel" customStyles={styles.btn} />
                <Button
                  label="Post"
                  customStyles={styles.btn}
                  onPress={handleSubmit}
                />
              </View>
            </View>
          )}
        /> */}
      </FormModal>

      <TouchableOpacity style={styles.button} onPress={takePhoto}>
        <CaptureIcon />
      </TouchableOpacity>
    </View>
  );
};

export default AddPost;
