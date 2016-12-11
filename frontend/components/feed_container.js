import React from 'react';
import { logOut } from '../actions/session_actions';
import { getAllPosts, likeAPost, makeAComment } from '../actions/posts_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Feed from './feed';

const mapStateToProps = ({ posts, session}) => {
  return(
    {
      currentUser: session.currentUser,
      posts
    }
  );
};

const mapDispatchToProps = (dispatch) => {
  
  return(
    {
      logOut: () => dispatch(logOut()),
      getAllPosts: (user) => dispatch(getAllPosts(user)),
      likeAPost: (post_id) => dispatch(likeAPost(post_id)),
      makeAComment: (post_id, comment) => dispatch(makeAComment(post_id, comment))

    }
  );
};

const FeedContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Feed));

export default FeedContainer;
