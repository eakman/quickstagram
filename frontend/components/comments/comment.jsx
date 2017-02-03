import React from 'react';
import { Link }  from 'react-router';

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.createCommentBody= this.createCommentBody.bind(this);
  }

  createCommentBody(body) {
    const stuff = [''];
    if (body !== null) {
      body = body.split(' ');
      body.map((word, idx) => {
        if (word[0] === '#') {
          stuff.push(<Link key={idx} className='hash-tags'
                           to={`/main/results/${word.slice(1)}`}>{word}</Link>);
          if (body[idx + 1]){
            stuff.push(' ');
          }
        } else {
          stuff[stuff.length - 1] = stuff[stuff.length - 1].concat(word);
          if (body[idx + 1]){
            stuff[stuff.length - 1] = stuff[stuff.length - 1].concat(' ');
          }
        }
      });
    }
    return (
      <span style={{display: 'inline'}}>
        {
          stuff.map((thing) => {
            if (thing !== '') {
              return thing;
            }
          })
        }
      </span>
    );
  }

  render() {
    const { comment } = this.props;
    const userUrl = `/main/profile/${comment.user.id}`;
    const commentBody = this.createCommentBody(comment.body);
    return (
      <div className='comment-body' key={'cmnt-body-' + comment.id}>
        <div className='comment-text' key={'cmnt-text-' + comment.id}>
            <Link to={ userUrl } className='comment-uname' key={'cmnt-uname-' + this.props.id}>
              { comment.user.username }
            </Link> { commentBody }
        </div>
      </div>
    );
  }
}

export default Comment;
