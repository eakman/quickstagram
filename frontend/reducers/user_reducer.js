import {
  RECEIVE_USER,
  RECEIVE_USER_ERRORS,
  RECEIVE_USERS
} from '../actions/user_actions';

const initialState = {
  user: null,
  errors: [],
  users: []
};

const userReducer = (state=initialState, action) => {
  switch(action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, {user: action.user});
    case RECEIVE_USERS:
      return Object.assign({}, state, {users: action.users});
    case RECEIVE_USER_ERRORS:
      return Object.assign({}, state, {errors: action.errors});
    default:
      return state;
  }
};

export default userReducer;
