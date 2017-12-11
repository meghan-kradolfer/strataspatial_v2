import { FETCH_SINGLE_POST } from '../actions/constants';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_SINGLE_POST:
      return { ...state, post: action.payload.data.fields };
    default:
      return state;
  }
}
