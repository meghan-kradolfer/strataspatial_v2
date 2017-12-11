import { combineReducers } from 'redux';
import MusicPostsReducer from './music-posts-reducer';
import LastFmReducer from './lastfm-reducer';
import PostReducer from './post-reducer';

const rootReducer = combineReducers({
  musicPosts: MusicPostsReducer,
  lastFmPosts: LastFmReducer,
  post: PostReducer
});

export default rootReducer;
