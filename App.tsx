import React from 'react';
import {Text} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';

import Navigation from './src/pages/navigation';
import StoreGate from './src/pages/StoreGate';
import {persistor, store} from './src/store';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StoreGate>
          <Navigation />
        </StoreGate>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
