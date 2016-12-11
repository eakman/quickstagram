import React from 'react';

const Comment = ({ comment }) => {
  // debugger
  return (
    //jshint ignore: start
    <div className='comment-body' key={'cmnt-body-' + comment.id}>
      <div className='comment-text' key={'cmnt-text-' + comment.id}>
          <strong className='comment-uname' key={'cmnt-uname-' + comment.id}>{ comment.user.username }</strong> { comment.body }
      </div>
    </div>
    //jshint ignore: end
  );
};

export default Comment;
