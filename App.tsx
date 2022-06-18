import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Auth from './src/pages/Auth';
import Home from './src/pages/Home';

const Stack = createNativeStackNavigator();

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

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{...headerOptions}}
          name="Auth"
          component={Auth}
        />
        <Stack.Screen
          options={{...headerOptions}}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
