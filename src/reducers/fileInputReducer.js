import * as types from '../constants/actionTypes';
import srtTimecodeParser from '../util/AupTimecodeToSrtTimecodeParser';

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
        subtitles: makeSrt(action.filteredArray)
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

function makeSrt(filteredArray){
  let subtitlesArray = [];
  filteredArray.map( (track, wIndex) =>
    {
      track.audioClip.map( (clip, cIndex) => {
        let subtitle = {};

        subtitle.sesxStartPoint = parseInt(clip["$"]);
        subtitle.srtStartTimecode = srtTimecodeParser();
        subtitle.sesxEndPoint = parseInt();
        subtitle.srtEndTimecode = srtTimecodeParser();
        subtitle.defaultTag = track["$"].name + (cIndex+1);
        subtitle.numsamples = clip.sequence[0].numsamples;
        subtitle.rate = track["$"].rate;
        subtitle.text = (name)? name : '';

        subtitlesArray.push(subtitle);
      });
  });
  return subtitlesArray.sort((a,b) => {
    if (a.aupStartTimecode < b.aupStartTimecode)
      return -1;
    else if (a.aupStartTimecode > b.aupStartTimecode)
      return 1;
    else
    return 0;
  });
}
