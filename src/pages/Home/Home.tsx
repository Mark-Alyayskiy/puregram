import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Button from '../../components/Button';
import {useDispatch} from 'react-redux';
import {actions} from '../../store/ducks';

const Home = () => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(actions.auth.signOut());
  };
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={signOut} label={'Sign out'} />
    </View>
  );
};

export default Home;
