import { combineReducer } from 'redux';
import sessionReducer from './sessionReducer';

const rootReducer = combineReducer({
  session: sessionReducer
});

export default rootReducer;
