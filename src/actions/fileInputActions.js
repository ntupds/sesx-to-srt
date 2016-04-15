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

export function setSampleRate(sampleRate){
  return {
    type: types.SET_SAMPLE_RATE,
    sampleRate
  };
}

export function makeSrt(filteredArray) {
  return {
    type: types.MAKE_SRT,
    filteredArray
  }
}

export function editSubtitleText(key, text){
  return {
    type: types.EDIT_SUBTITLE_TEXT,
    key,
    text
  }
}
