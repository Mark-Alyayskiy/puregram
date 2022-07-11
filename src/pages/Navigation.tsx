/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './Auth';
import Home from './Home';
import AddPost from './AddPost';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {selectors} from '../store/ducks';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeIcon, PersonIcon, PlusIcon} from '../assets/svg';
import Profile from './Profile';
import axios from 'axios';
import PostEditor from './PostEditor';

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
  const [isBearer, setIsBearer] = useState(false);

  const setBearer = () => {
    if (accessToken) {
      axios.defaults.headers.common.Authorization = 'Bearer ' + accessToken;
      setIsBearer(true);
    } else {
      axios.defaults.headers.common.Authorization = false;
    }
  };

  const accessToken = useSelector(selectors.auth.selectAccessToken);
  const userId = useSelector(selectors.auth.selectCurrentId);

  useEffect(() => {
    setBearer();
  }, [accessToken]);

  if (!isBearer && accessToken) {
    return null;
  }

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
                <PlusIcon color={focused ? '#ff4d67' : '#fff'} />
              ),
            }}
            name="AddPost"
            component={AddPost}
          />
          <MainStack.Screen
            options={{
              tabBarIcon: ({focused}) => (
                <PersonIcon color={focused ? '#ff4d67' : '#fff'} />
              ),
            }}
            listeners={({navigation}) => ({
              tabPress: e => {
                e.preventDefault();
                navigation.navigate('Profile', {userId: userId});
              },
            })}
            initialParams={{userId}}
            name="Profile"
            component={Profile}
          />
          <MainStack.Screen
            options={{
              tabBarLabel: '',
              tabBarItemStyle: {
                position: 'absolute',
              },
              tabBarIcon: () => null,
            }}
            name="PostEditor"
            component={PostEditor}
          />
        </MainStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
