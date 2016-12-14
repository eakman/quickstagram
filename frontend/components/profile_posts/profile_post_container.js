import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchUser, updateProfilePic, toggFollow } from '../../actions/user_actions';
import { getAllPosts, likeAPost, makeAComment } from '../../actions/posts_actions';
import ProfilePost from './profile_post';

const mapStateToProps = ({ posts, session, user: { user } }) => {

  return(
    {
      currentUser: session.currentUser,
      posts: posts
    }
  );
};

const mapDispatchToProps = (dispatch) => {
  return(
    {
      likeAPost: (post_id) => dispatch(likeAPost(post_id)),
      makeAComment: (post_id, comment) => dispatch(makeAComment(post_id, comment))
    }
  );
};


const ProfilePostContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePost));

export default ProfilePostContainer;
