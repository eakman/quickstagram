import { allPosts } from '../util/posts_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POSTS_ERRORS = 'RECEIVE_POSTS_ERRORS';

export const getAllPosts = (user) => {
  return (dispatch) => {
    return allPosts(user)
      .then( posts => dispatch(receiveAllPosts(posts)),
            errors => dispatch(receivePostsErrors(errors.responseJSON)));
  };
};

export const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const receivePostsErrors = (errors) => ({
  type: RECEIVE_POSTS_ERRORS,
  errors
});
//
// export const getPost = (post) => {
//   return (dispatch) => {
//     return APIUtil.getPost(post)
//       .then( posts => dispatch(receivePost(posts)),
//             errors => dispatch(receivePostErrors(errors.responseJSON)));
//   };
// };
//
// export const getAllPosts = (user) => {
//   return (dispatch) => {
//     return APIUtil.getAllPosts(user)
//       .then( posts => dispatch(receiveAllPosts(posts)),
//             errors => dispatch(receivePostErrors(errors.responseJSON)));
//   };
// };
