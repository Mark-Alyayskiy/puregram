import * as React from 'react';
import {
  NavigationContainer,
  NavigationContainerProps,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const TabContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator />
    </NavigationContainer>
  );
};

export default TabContainer;
