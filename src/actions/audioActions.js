import * as types from '../constants/actionTypes';

export function setPlayTime(startTime, endTime) {
  return {
    type: types.SET_PLAY_TIME,
    startTime,
    endTime
  };
}
