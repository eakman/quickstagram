import React from 'react';
import { logOut } from '../actions/session_actions';
import { getAllPosts, likeAPost } from '../actions/posts_actions';
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
      likeAPost: (post) => dispatch(likeAPost(post))
    }
  );
};

const FeedContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Feed));

export default FeedContainer;
