import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './Auth';
import Home from './Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {selectors} from '../store/ducks';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootState} from '../store';

const AuthStack = createNativeStackNavigator();
const MainStack = createBottomTabNavigator();

const headerOptions = {
  title: '',
  headerTitleAlign: 'center' as 'center' | 'left' | undefined,
  headerStyle: {
    backgroundColor: '#181a20',
  },
  headerTitleStyle: {
    color: '#fff',
  },
};

const Navigation = () => {
  console.log('12123123', 12123123);
  const accessToken = useSelector(selectors.auth.selectAccessToken);
  console.log('accessToken', accessToken);

  const getToken = () => {
    console.log('text');
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <NavigationContainer>
      {!accessToken ? (
        <AuthStack.Navigator>
          <AuthStack.Screen
            options={{...headerOptions}}
            name="Auth"
            component={Auth}
          />
        </AuthStack.Navigator>
      ) : (
        <MainStack.Navigator>
          <MainStack.Screen name="Home" component={Home} />
        </MainStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
