import * as types from '../constants/actionTypes';
import srtTimecodeParser from '../util/AupTimecodeToSrtTimecodeParser';

const initialState = {
  content: '',
  selectedTracks: [],
  subtitles: []
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
    case types.MAKE_SRT:
      return Object.assign({}, state, {
        subtitles: makeSrt(action.filteredArray)
      });
    default:
      return state;
  }
};

function makeSrt(filteredArray){
  let subtitlesArray = [];
  filteredArray.map( (wavetrack, wIndex) =>
    {
      wavetrack.waveclip.map( (clip, cIndex) => {
        let subtitle = {};
        
        subtitle.aupStartTimecode = clip["$"].offset;
        subtitle.srtStartTimecode = srtTimecodeParser(clip["$"].offset);
        subtitle.aupEndTimecode = parseFloat(clip["$"].offset) + parseFloat(clip.sequence[0]["$"].numsamples / wavetrack["$"].rate);
        subtitle.srtEndTimecode = srtTimecodeParser(subtitle.aupEndTimecode);
        subtitle.defaultTag = wavetrack["$"].name + (cIndex+1);

        subtitlesArray.push(subtitle);
      });
  });
  return subtitlesArray;
}
