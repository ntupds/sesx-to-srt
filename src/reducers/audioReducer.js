import * as types from '../constants/actionTypes';

const initialState = {
  startTime: 0,
  endTime: null
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case types.SET_PLAY_TIME:
      return {
        startTime: action.startTime,
        endTime: action.endTime
      };
    default:
      return state;
  }
};
