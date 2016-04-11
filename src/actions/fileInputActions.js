import * as types from './actionTypes';

export function load_file(content) {
  return {
    type: types.LOAD_FILE,
    content
  };
}
