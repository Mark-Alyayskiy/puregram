import {createAction, createReducer} from '@reduxjs/toolkit';
import {RootState} from '..';
import {UserType} from '../../types/user';

const setAccessToken = createAction<string>('auth/setAccesToken');
const setUser = createAction<UserType>('auth/setUser');
const signOut = createAction('auth/signOut');

const initialState = {user: {} as UserType};

export const reducer = createReducer(initialState, builder => {
  builder.addCase(setAccessToken, (state, action) => {
    state.user.accessToken = action.payload;
  });

  builder.addCase(setUser, (state, action) => {
    state.user = action.payload;
  });

  builder.addCase(signOut, state => {
    state.user = initialState.user;
  });
});

export const actions = {
  setAccessToken,
  setUser,
  signOut,
};

export const selectors = {
  selectAccessToken: (state: RootState) => state.auth.user.accessToken,
  selectCurrentId: (state: RootState) => state.auth.user.id,
  selectUser: (state: RootState) => state.auth.user,
};
