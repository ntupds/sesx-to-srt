jest.unmock('../../src/reducers/audioReducer');

import audioReducer from '../../src/reducers/audioReducer';
import * as types from '../../src/constants/actionTypes';

describe('audioReducer', () => {
  it('should return initial state', () => {
    expect(audioReducer( undefined, {} )).toEqual({
      startTime: 0,
      endTime: null
    });
  });

  it('should handle SET_PLAY_TIME', () => {
    expect(audioReducer( {
      startTime: 1244.29,
      endTime: 1245.38
    }, {
      type: types.SET_PLAY_TIME,
      startTime: 112,
      endTime: 118
    } )).toEqual({
      startTime: 112,
      endTime: 118
    });
  });

});
