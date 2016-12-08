import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POSTS_ERRORS
} from '../actions/posts_actions';

const initialState = {
  posts: [],
  errors: []
};

const postsReducer = (state=initialState, action) => {
  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return Object.assign({}, initialState, { posts: action.posts });
    case RECEIVE_POSTS_ERRORS:
      return Object.assign({}, initialState, { errors: action.errors });
    default:
      return state;
  }
}

export default postsReducer;
