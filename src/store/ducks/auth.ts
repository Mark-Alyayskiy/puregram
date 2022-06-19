import {createAction, createReducer} from '@reduxjs/toolkit';
import {RootState} from '..';
import {User} from '../../types/user';

const setAccessToken = createAction<string>('auth/setAccesToken');
const setUser = createAction<User>('auth/setUser');

export const reducer = createReducer(
  {
    user: {} as User,
  },
  builder => {
    builder.addCase(setAccessToken, (state, action) => {
      state.user.accessToken = action.payload;
    });

    builder.addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
  },
);

export const actions = {
  setAccessToken,
  setUser,
};

export const selectors = {
  selectAccessToken: (state: RootState) => state.auth.user.accessToken,
};
