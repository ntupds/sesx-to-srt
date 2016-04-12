import * as types from '../constants/actionTypes';

export function loadFile(content) {
  return {
    type: types.LOAD_FILE,
    content
  };
}

export function selectTracks(selectedTracks) {
  return {
    type: types.SELECT_TRACKS,
    selectedTracks
  };
}
