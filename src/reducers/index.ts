import { combineReducers } from 'redux';

import { MainReducer } from '../containers/Main/reducer';

export const reducers = combineReducers({
  main: MainReducer,
});
