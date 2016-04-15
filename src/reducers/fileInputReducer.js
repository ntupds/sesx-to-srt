import * as types from '../constants/actionTypes';
import srtTimecodeParser from '../util/SesxPointToSrtTimecodeParser';

const initialState = {
  content: '',
  selectedTracks: [],
  subtitles: [],
  sampleRate: 0
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
    case types.SET_SAMPLE_RATE:
      return Object.assign({}, state, {
        sampleRate: action.sampleRate
      });
    case types.MAKE_SRT:
      return Object.assign({}, state, {
        subtitles: makeSrt(action.filteredArray, state.sampleRate)
      });
    case types.EDIT_SUBTITLE_TEXT:
      const editedSubtitles = state.subtitles.map( (subtitle, index) => {
        return index === action.key ?
          Object.assign({}, subtitle, { text: action.text }) : subtitle;
      });
      return Object.assign({}, state, {
        subtitles: editedSubtitles
      });
    default:
      return state;
  }
};

function makeSrt(filteredArray, sampleRate){
  let subtitlesArray = [];
  filteredArray.map( (track, wIndex) =>
    {
      track.audioClip.map( (clip, cIndex) => {
        let subtitle = {};

        subtitle.sesxStartPoint = parseInt(clip["$"].startPoint);
        subtitle.srtStartTimecode = srtTimecodeParser(parseInt(clip["$"].startPoint) ,sampleRate);
        subtitle.sesxEndPoint = parseInt(clip["$"].endPoint);
        subtitle.srtEndTimecode = srtTimecodeParser(parseInt(clip["$"].endPoint), sampleRate);
        subtitle.defaultTag = track.trackParameters[0].name[0] + (cIndex+1);
        subtitle.text = (clip["$"].name)? clip["$"].name : '';

        subtitlesArray.push(subtitle);
      });
  });
  return subtitlesArray.sort((a,b) => {
    if (a.sesxStartPoint < b.sesxStartPoint)
      return -1;
    else if (a.sesxStartPoint > b.sesxStartPoint)
      return 1;
    else
    return 0;
  });
}
