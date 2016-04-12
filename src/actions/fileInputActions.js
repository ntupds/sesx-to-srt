import * as types from '../constants/actionTypes';

export function loadFile(content) {
  return {
    type: types.LOAD_FILE,
    content
  };
}
