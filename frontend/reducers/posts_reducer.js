import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POSTS_ERRORS,
  RECEIVE_A_POST
} from '../actions/posts_actions';

const initialState = {
  posts: [],
  errors: []
};
// posts: {},
const postsReducer = (state=initialState, action) => {

  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return Object.assign({}, initialState, { posts: action.posts });
    case RECEIVE_POSTS_ERRORS:
      return Object.assign({}, initialState, { errors: action.errors });
    case RECEIVE_A_POST:
      const newPosts = Object.assign({}, state.posts, action.post);
      return Object.assign({}, initialState, {posts: newPosts});
    default:
      return state;
  }
};

export default postsReducer;
