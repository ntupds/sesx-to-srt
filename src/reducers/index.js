import { combineReducers } from 'redux';

import fileInputReducer from './fileInputReducer';
import stepReducer from './stepReducer';
import audioReducer from './audioReducer';

export default combineReducers({
  fileInputReducer,
  stepReducer,
  audioReducer
});
