import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ControlButton from '../../../components/ControlButton';
import styles from '../styles';

type Props = {
  username: string;
  publicationsCount: number;
  followersCount?: number;
  followCount?: number;
  userAvatar: string;
  showFollowers: () => void;
  showFollow: () => void;
  onAvatarPressed: () => void;
  unsubscribe: () => void;
  subscribe: () => void;
  isButtonLoading: boolean;
  isSubscribeButtonShowed: boolean;
  isUnsubscribeButtonShowed: boolean;
};

const Header = ({
  showFollow,
  showFollowers,
  username,
  publicationsCount,
  followersCount,
  followCount,
  userAvatar,
  onAvatarPressed,
  subscribe,
  unsubscribe,
  isButtonLoading,
  isSubscribeButtonShowed,
  isUnsubscribeButtonShowed,
}: Props) => {
  return (
    <View style={styles.rootHeader}>
      <View style={styles.userHeaderContainer}>
        <TouchableOpacity onPress={onAvatarPressed} style={styles.imageTitle}>
          <Image
            style={styles.userAvatar}
            source={{
              uri: userAvatar,
            }}
          />

          <Text style={styles.userDataText}>{username}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoUser}>
        <View style={styles.userData}>
          <View style={styles.userDataItems}>
            <Text style={styles.userDataText}>{publicationsCount} </Text>
            <Text style={styles.userDataText}>Publications</Text>
          </View>
          <TouchableOpacity onPress={showFollowers}>
            <View style={styles.userDataItems}>
              <Text style={styles.userDataText}>{followersCount} </Text>
              <Text style={styles.userDataText}>Followers</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={showFollow}>
            <View style={styles.userDataItems}>
              <Text style={styles.userDataText}>{followCount} </Text>
              <Text style={styles.userDataText}>Follow</Text>
            </View>
          </TouchableOpacity>
        </View>
        {isSubscribeButtonShowed && (
          <ControlButton
            label="Subscribe"
            onPress={subscribe}
            isLoading={isButtonLoading}
          />
        )}
        {isUnsubscribeButtonShowed && (
          <ControlButton
            label="Unsubscribe"
            onPress={unsubscribe}
            isLoading={isButtonLoading}
          />
        )}
      </View>
    </View>
  );
};

export default Header;
