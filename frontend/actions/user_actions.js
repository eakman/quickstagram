import { updateUser } from '../util/user_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const updateProfilePic = (user_id, formData) => {
  return (dispatch) => {
    return updateUser(user_id, formData)
      .then( user => dispatch(receiveUser(user)),
            errors => dispatch(receiveUserErrors(errors.responseJSON)));
  };
};


export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveUserErrors = (user) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});
