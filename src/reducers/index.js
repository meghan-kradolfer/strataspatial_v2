import { combineReducers } from 'redux';
import PostsReducer from './posts-reducer';
import LastFmReducer from './lastfm-reducer';
import PostReducer from './post-reducer';
import AssetReducer from './asset-reducer';
import postSelected from './post-mounted';

const rootReducer = combineReducers({
  posts: PostsReducer,
  lastFmPosts: LastFmReducer,
  post: PostReducer,
  assets: AssetReducer,
  postSelected: postSelected
});

export default rootReducer;
