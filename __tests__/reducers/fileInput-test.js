jest.unmock('../../src/reducers/fileInputReducer');

import fileInputReducer from '../../src/reducers/fileInputReducer';
import * as types from '../../src/constants/actionTypes';

describe('fileInputReducer', () => {
  it('should return initial state', () => {
    expect(fileInputReducer( undefined, {} )).toEqual({
      content: '',
      selectedTracks: [],
      subtitles: []
    });
  });

  it('should handle EDIT_SUBTITLE_TEXT', () => {
    expect(fileInputReducer( {
      content: 'blahhhh',
      selectedTracks: [true, false],
      subtitles: [
        {
          defaultTag: '柳靜123',
          text: '上官清淵你是怎樣'
        },
        {
          defaultTag: '清淵01',
          text: ''
        }
      ]
    }, {
      type: types.EDIT_SUBTITLE_TEXT,
      key: 1,
      text: '有人來了'
    } )).toEqual({
      content: 'blahhhh',
      selectedTracks: [true, false],
      subtitles: [
        {
          defaultTag: '柳靜123',
          text: '上官清淵你是怎樣'
        },
        {
          defaultTag: '清淵01',
          text: '有人來了'
        }
      ]
    });
  });


});
