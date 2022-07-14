import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
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
}: Props) => {
  return (
    <View style={styles.rootHeader}>
      <TouchableOpacity onPress={onAvatarPressed} style={styles.imageTitle}>
        <Image
          style={styles.userAvatar}
          source={{
            uri: userAvatar,
          }}
        />
        <Text style={styles.userDataText}>{username}</Text>
      </TouchableOpacity>
      <View style={styles.userData}>
        <View style={styles.userDataItems}>
          <Text style={styles.userDataText}>{publicationsCount} </Text>
          <Text style={styles.userDataText}>publications</Text>
        </View>
        <TouchableOpacity onPress={showFollowers}>
          <View style={styles.userDataItems}>
            <Text style={styles.userDataText}>{followersCount} </Text>
            <Text style={styles.userDataText}>followers</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={showFollow}>
          <View style={styles.userDataItems}>
            <Text style={styles.userDataText}>{followCount} </Text>
            <Text style={styles.userDataText}>follow</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
