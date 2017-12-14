import { FETCH_POSTS, INITIAL_STATE } from '../actions/constants';

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      let data = action.payload.data;
      return { ...state, all: data }
    default:
      return state;
  }
}
