import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';

import {PersistGate} from 'redux-persist/integration/react';
import Loader from './src/components/Loader';

import Navigation from './src/pages/Navigation';
import StoreGate from './src/pages/StoreGate';
import {persistor, store} from './src/store';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={Loader} persistor={persistor}>
        <StoreGate>
          <Navigation />
        </StoreGate>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
