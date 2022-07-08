import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from '../styles';
import {Layout} from '../types';

type Props = {
  username: string;
  publicationsCount: number;
  followersCount: number;
  followCount: number;
  userAvatar: string;
};

const Header = ({
  username,
  publicationsCount,
  followersCount,
  followCount,
  userAvatar,
}: Props) => {
  return (
    <View style={styles.rootHeader}>
      <View style={styles.imageTitle}>
        <Image
          style={styles.userAvatar}
          source={{
            uri: userAvatar,
          }}
        />
        <Text style={styles.userDataText}>{username}</Text>
      </View>
      <View style={styles.userData}>
        <View style={styles.userDataItems}>
          <Text style={styles.userDataText}>{publicationsCount} </Text>
          <Text style={styles.userDataText}>publications</Text>
        </View>
        <View style={styles.userDataItems}>
          <Text style={styles.userDataText}>{followersCount} </Text>
          <Text style={styles.userDataText}>followers</Text>
        </View>
        <View style={styles.userDataItems}>
          <Text style={styles.userDataText}>{followCount} </Text>
          <Text style={styles.userDataText}>follow</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
