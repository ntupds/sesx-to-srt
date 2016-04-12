import * as types from '../constants/actionTypes';

const initialState = {
  step: 1
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_STEP:
      return Object.assign({}, state, {
        step: action.step
      });
    default:
      return state;
  }
};
