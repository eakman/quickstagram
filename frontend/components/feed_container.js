import React from 'react';
import { logOut } from '../actions/session_actions';
import { getAllPosts } from '../actions/posts_actions';
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
      getAllPosts: (user) => dispatch(getAllPosts(user))
    }
  );
};

const FeedContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Feed));

export default FeedContainer;
