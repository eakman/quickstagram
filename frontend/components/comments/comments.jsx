import React from 'react';
import Comment from './comment';

const Comments = (props) => {
  return(
    <ul>
      {
        props.comments.map( (comment) => {
          return <Comment key={ comment.id } comment={ comment } />
        })
      }
    </ul>
  );
};

export default Comments;
