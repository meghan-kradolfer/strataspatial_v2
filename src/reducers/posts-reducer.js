import { FETCH_POSTS, INITIAL_STATE } from '../actions/constants';

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      let data = action.payload.data;
      data.items.map(item => {
        item.images = [];
        item.fields.image.map((image) => {
          data.includes.Asset.map((asset) => {
            image.sys.id === asset.sys.id ? item.images.push(asset.fields) : null;
          });
        });
      });
      return { ...state, all: data }
    default:
      return state;
  }
}
