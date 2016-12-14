import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchUser, updateProfilePic, toggFollow } from '../../actions/user_actions';
import { getAllPosts, likeAPost, makeAComment } from '../../actions/posts_actions';
import LikeCommentForm from './like_comment_form';

const mapStateToProps = ({ posts }) => {

  return(
    {
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


const LikeCommentFormContainer = connect(mapStateToProps, mapDispatchToProps)(LikeCommentForm);

export default LikeCommentFormContainer;
