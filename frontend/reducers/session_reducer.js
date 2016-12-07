import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';

const initialState = {
  currentUser: {},
  errors: []
};

const sessionReducer = (state=initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, initialState, {currentUser: action.currentUser});
    case RECEIVE_ERRORS:
      return Object.assign({}, initialState, {errors: action.errors});
    default:
      return initialState;
  }
};

export default sessionReducer;
