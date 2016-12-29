import { getPostsByTag, userPosts, createPost, allPosts, likePost, createComment } from '../util/posts_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POSTS_ERRORS = 'RECEIVE_POSTS_ERRORS';
export const RECEIVE_A_POST = 'RECEIVE_A_POST';
export const RECEIVE_MORE_POSTS = 'RECEIVE_MORE_POSTS';

export const getAllPosts = (user, page_number) => {
  return (dispatch) => {
    return allPosts(user, page_number)
      .then( posts => dispatch(receiveAllPosts(posts)),
            errors => dispatch(receivePostsErrors(errors.responseJSON)));
  };
};

export const getMorePosts = (user, page_number) => {
  return (dispatch) => {
    return allPosts(user, page_number)
      .then( posts => dispatch(receiveMorePosts(posts)),
            errors => dispatch(receivePostsErrors(errors.responseJSON)));
  };
};

export const postsByTag = (hash_tag) => {
  return (dispatch) => {
    return getPostsByTag(hash_tag)
      .then( posts => dispatch(receiveAllPosts(posts)),
            errors => dispatch(receivePostsErrors(errors.responseJSON)));
  };
};

export const likeAPost = (post_id) => {
  return (dispatch) => {
    return likePost(post_id)
      .then( post => dispatch(receiveAPost(post)),
            errors => dispatch(receivePostsErrors(errors.responseJSON)));
  };
};

export const makeAComment = (post_id, comment) => {
  return (dispatch) => {
    return createComment(post_id, comment)
      .then( post => dispatch(receiveAPost(post)),
            errors => dispatch(receivePostsErrors(errors.responseJSON)));
  };
};

export const makeAPost = (formData) => {
  return (dispatch) => {
    return createPost(formData)
      .then( newPost => dispatch(receiveAPost(newPost)),
            errors => dispatch(receivePostsErrors));
  };
};

export const getUserPosts = (user_id) => {
  return (dispatch) => {
    return userPosts(user_id)
      .then( posts => dispatch(receiveAllPosts(posts)),
            errors => dispatch(receivePostsErrors(errors.responseJSON)));
  };
};


export const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const receiveMorePosts = (posts) => ({
  type: RECEIVE_MORE_POSTS,
  posts
});

export const receivePostsErrors = (errors) => ({
  type: RECEIVE_POSTS_ERRORS,
  errors
});

export const receiveAPost = (post) => ({
    type: RECEIVE_A_POST,
    post
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
