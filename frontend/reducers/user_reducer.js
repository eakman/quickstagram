import {
  RECEIVE_USER,
  RECEIVE_USER_ERRORS
} from '../actions/user_actions';

const initialState = {
  user: null,
  errors: []
};

const userReducer = (state=initialState, action) => {
  switch(action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, {user: action.user});
    case RECEIVE_USER_ERRORS:
      return Object.assign({}, state, {errors: action.errors});
    default:
      return state;
  }
};

export default userReducer;
