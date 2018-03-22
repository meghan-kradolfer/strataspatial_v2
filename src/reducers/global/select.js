import { SELECTED } from '../../actions/constants';

export default function (state = "", action) {
  switch (action.type) {
    case SELECTED:
      return action.payload;
    default:
      return state;
  }
}
