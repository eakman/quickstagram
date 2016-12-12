import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import postsReducer from './posts_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  posts: postsReducer,
  user: userReducer
});

export default rootReducer;
