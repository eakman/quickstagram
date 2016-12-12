import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mapStateToProps = ({posts, session, user}) => {

  return(
    {
      currentUser: session.currentUser,
      posts,
      user
    }
  );
};

const ProfileContainer = withRouter(
  connect(mapStateToProps)(Profile));

export default ProfileContainer;
