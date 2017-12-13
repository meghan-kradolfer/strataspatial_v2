import { FETCH_SINGLE_POST } from '../actions/constants';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_SINGLE_POST:
      let data = action.payload.data;
      return { ...state, post: data };
    default:
      return state;
  }
}
