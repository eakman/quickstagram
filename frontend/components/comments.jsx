import React from 'react';
import Comment from './comment';

const Comments = (props) => {
  return(
    //jshint ignore: start
    <ul>
      {
        props.comments.map( (comment) => {
          return <Comment key={ comment.id } comment={ comment } />
        })
      }
    </ul>
    //jshint ignore: end
  );
};

export default Comments;
