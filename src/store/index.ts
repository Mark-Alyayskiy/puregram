import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {reducer} from './ducks';
import AsyncStorage from '@react-native-async-storage/async-storage';

type State = ReturnType<typeof reducer>;

const persistConfig = {key: 'root', storage: AsyncStorage};

export const rootReducer = (state: State, actions: any) => {
  const nextState = state;
  return reducer(nextState, actions);
};

const persistetReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  devTools: true, // @ts-ignore
  reducer: persistetReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;

// export const persister
