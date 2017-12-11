import { FETCH_MUSIC_POSTS, INITIAL_STATE } from '../actions/constants';

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_MUSIC_POSTS:
      return { ...state, all: action.payload.data.items };
    default:
      return state;
  }
}
