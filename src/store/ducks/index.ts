import {combineReducers} from '@reduxjs/toolkit';
import * as authDuck from './auth';

export const reducer = combineReducers({auth: authDuck.reducer});
export const actions = {auth: authDuck.actions};
export const selectors = {auth: authDuck.selectors};
