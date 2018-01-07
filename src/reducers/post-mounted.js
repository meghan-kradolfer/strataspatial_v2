import { POST_MOUNTED } from '../actions/constants';

export default function (state = "", action) {
  switch (action.type) {
    case POST_MOUNTED:
      let id = action.payload;
      return id;
    default:
      return state;
  }
}
