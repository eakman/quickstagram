import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mapStateToProps = ({posts, session }) => {
  return(
    {
      currentUser: session.currentUser,
      posts
    }
  );
};

const ProfileContainer = withRouter(
  connect(mapStateToProps)(Profile));

export default ProfileContainer;
