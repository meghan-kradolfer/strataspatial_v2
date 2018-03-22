import { FETCH_POSTS } from '../../actions/constants';

export default function (state = { all: [] }, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data }
    default:
      return state;
  }
}
