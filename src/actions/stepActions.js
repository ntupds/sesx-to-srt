import * as types from '../constants/actionTypes';

export function changeStep(step) {
  return {
    type: types.LOAD_FILE,
    step
  };
}
