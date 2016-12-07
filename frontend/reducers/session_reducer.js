import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';

const initialState = {
  currentUser: null,
  errors: []
};

const sessionReducer = (action, state=initialState) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, initialState, action.currentUser);
    case RECEIVE_ERRORS:
      return Object.assign({}, initialState, action.errors);
    default:
      return initialState;
  }
};

export default sessionReducer;
