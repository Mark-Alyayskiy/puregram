import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './Auth';
import Home from './Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {selectors} from '../store/ducks';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootState} from '../store';
import {HomeIcon, PersonIcon} from '../assets/svg';
import Profile from './Profile';
import {TouchableOpacity, View} from 'react-native';
import axios from 'axios';

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
  const setBearer = () => {
    if (accessToken) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + accessToken;
    } else {
      axios.defaults.headers.common.Authorization = false;
      /*if setting null does not remove Authorization header then try
          delete axios.defaults.headers.common['Authorization'];
        */
    }
  };

  console.log('12123123', 12123123);
  const accessToken = useSelector(selectors.auth.selectAccessToken);
  console.log('accessToken', accessToken);

  const getToken = () => {
    console.log('text');
  };

  useEffect(() => {
    getToken();
    setBearer();
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
        <MainStack.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: '#181a20',
              borderTopWidth: 1,
              elevation: 0,
              shadowOpacity: 0,
              borderTopColor: '#ff4d67',
              paddingBottom: 5,
              height: 55,
            },
            headerStyle: {
              backgroundColor: '#181a20',
              borderBottomWidth: 1,
              elevation: 0,
              shadowOpacity: 0,
              borderBottomColor: '#ff4d67',
            },
            headerTintColor: 'white',
            tabBarActiveTintColor: '#ff4d67',
            tabBarLabelStyle: {
              fontSize: 12,
            },
          }}>
          <MainStack.Screen
            options={{
              tabBarIcon: ({focused}) => (
                <HomeIcon color={focused ? '#ff4d67' : '#fff'} />
              ),
            }}
            name="Home"
            component={Home}
          />
          <MainStack.Screen
            options={{
              tabBarIcon: ({focused}) => (
                <PersonIcon color={focused ? '#ff4d67' : '#fff'} />
              ),
            }}
            name="Profile"
            component={Profile}
          />
        </MainStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
