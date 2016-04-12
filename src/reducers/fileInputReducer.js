import * as types from '../constants/actionTypes';

const initialState = {
  content: '',
  selectedTracks: []
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_FILE:
      return Object.assign({}, state, {
        content: action.content
      });
    case types.SELECT_TRACKS:
      return Object.assign({}, state, {
        selectedTracks: action.selectedTracks
      });
    default:
      return state;
  }
};
