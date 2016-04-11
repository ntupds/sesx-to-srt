import * as types from '../actions/actionTypes';

const initialState = {
  content: ''
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_FILE:
      return Object.assign({}, state, {
        content: action.content
      });
    default:
      return state;
  }
};
