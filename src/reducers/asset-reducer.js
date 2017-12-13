import { FETCH_SINGLE_ASSET } from '../actions/constants';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_SINGLE_ASSET:
        const image = {
            [action.payload.data.sys.id]: action.payload.data.fields
        };
      return { ...state, ...image };
    default:
      return state;
  }
}
