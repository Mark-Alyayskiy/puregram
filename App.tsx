import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/integration/react';
import Loader from './src/components/Loader';

import Navigation from './src/pages/Navigation';
import StoreGate from './src/pages/StoreGate';
import {persistor, store} from './src/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={Loader} persistor={persistor}>
        <StoreGate>
          <GestureHandlerRootView style={{flex: 1}}>
            <Navigation />
          </GestureHandlerRootView>
        </StoreGate>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
