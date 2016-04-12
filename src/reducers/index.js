import { combineReducers } from 'redux';

import fileInputReducer from './fileInputReducer';
import stepReducer from './stepReducer';

export default combineReducers({
  fileInputReducer,
  stepReducer
});
