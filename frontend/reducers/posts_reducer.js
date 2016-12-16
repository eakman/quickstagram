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
      const postsDup = state.posts.slice(0);
      let replaced = false;
      for (let i = 0; i < postsDup.length; i ++){
        if (postsDup[i].id === action.post.id){
          postsDup.splice(i,1,action.post);
          replaced = true;
          break;
        }
      }
      if (replaced === false){
        postsDup.push(action.post);
      }

      return Object.assign({}, initialState, {posts: postsDup});
    default:
      return state;
  }
};

export default postsReducer;
