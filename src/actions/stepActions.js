import * as types from '../constants/actionTypes';

export function changeStep(step) {
  return {
    type: types.CHANGE_STEP,
    step
  };
}
