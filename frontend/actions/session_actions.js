import * as APIUtil from '../util/session_api_util.js';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const signUp = (user) => {
  // debugger
  return (dispatch) => {
    return APIUtil.signUp(user)
      .then( user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const logIn = (user) => {
  return (dispatch) => {
    return APIUtil.logIn(user)
      .then( user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const logOut = () => {
  return (dispatch) => {
    return APIUtil.logOut()
      .then( _ => dispatch(receiveCurrentUser(null)),
            errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
