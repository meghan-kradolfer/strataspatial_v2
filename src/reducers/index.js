import { combineReducers } from 'redux';
import PostsReducer from './posts-reducer';
import LastFmReducer from './lastfm-reducer';
import PostReducer from './post-reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  lastFmPosts: LastFmReducer,
  post: PostReducer
});

export default rootReducer;
