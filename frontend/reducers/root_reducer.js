import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import postsReducer from './posts_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  posts: postsReducer
});

export default rootReducer;
