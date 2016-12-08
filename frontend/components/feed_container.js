import React from 'react';
import { logOut } from '../actions/session_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Feed from './feed';

const mapDispatchToProps = (dispatch) => {
  
  return(
    {
      logOut: () => dispatch(logOut())
    }
  );
};

const FeedContainer = withRouter(
  connect(null, mapDispatchToProps)(Feed));

export default FeedContainer;
