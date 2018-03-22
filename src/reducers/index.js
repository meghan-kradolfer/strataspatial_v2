import { combineReducers } from 'redux';

import Selected from './global/select';
import PostsReducer from './contentful/posts-reducer';
import PostReducer from './contentful/post-reducer';
import AssetReducer from './contentful/asset-reducer';

const rootReducer = combineReducers({
  selected: Selected,
  assets: AssetReducer,
  post: PostReducer,
  posts: PostsReducer
});

export default rootReducer;
