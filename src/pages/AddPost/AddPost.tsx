import {TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import Loader from '../../components/Loader';
import styles from './styles';
import {CaptureIcon} from '../../assets/svg';
import {useIsFocused} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainNavigationList} from '../../types/navigation';

const AddPost = ({
  navigation,
}: NativeStackScreenProps<MainNavigationList, 'PostEditor'>) => {
  const [isCameraLoaded, setIsCameraLoaded] = useState(false);

  const isFocused = useIsFocused();
  const camera = useRef<Camera>(null);

  const getPermission = async () => {
    await Camera.getCameraPermissionStatus();
    await Camera.getMicrophonePermissionStatus();
    await Camera.requestCameraPermission();
    await Camera.requestMicrophonePermission();
    setIsCameraLoaded(true);
  };

  const takePhoto = async () => {
    if (camera.current) {
      const currentPhoto = await camera.current.takePhoto();
      navigation.navigate('PostEditor', {imageUrl: currentPhoto.path});
    }
  };

  useEffect(() => {
    if (isFocused) {
      getPermission();
    } else {
      setIsCameraLoaded(false);
    }
  }, [isFocused]);

  const devices = useCameraDevices();
  const device = devices.back;

  if (device === null || device === undefined || !isCameraLoaded) {
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
      <TouchableOpacity style={styles.button} onPress={takePhoto}>
        <CaptureIcon />
      </TouchableOpacity>
    </View>
  );
};

export default AddPost;
