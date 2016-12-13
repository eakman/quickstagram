import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchUser, updateProfilePic, toggFollow } from '../actions/user_actions';
import { getUserPosts, makeAPost } from '../actions/posts_actions';

const mapStateToProps = ({ posts, session, user: { user } }) => {

  return(
    {
      currentUser: session.currentUser,
      posts,
      user
    }
  );
};

const mapDispatchToProps = (dispatch) => {
  return(
    {
      fetchUser: (user_id) => dispatch(fetchUser(user_id)),
      updateProfilePic: (user_id, formData) => dispatch(updateProfilePic(user_id, formData)),
      toggleFollow: (user_id) => dispatch(toggFollow(user_id)),
      getUserPosts: (user_id) => dispatch(getUserPosts(user_id)),
      makeAPost: (formData) => dispatch(makeAPost(formData))
    }
  );
};


const ProfileContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));

export default ProfileContainer;
