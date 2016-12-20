import React from 'react';
import { Link }  from 'react-router';

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.showUser = this.showUser.bind(this);
  }
  showUser(e) {

  }
  render() {
    const { comment } = this.props;
    const userUrl = `/main/profile/${comment.user.id}`;

    return (
      //jshint ignore: start
      <div className='comment-body' key={'cmnt-body-' + comment.id}>
        <div className='comment-text' key={'cmnt-text-' + comment.id}>
            <Link to={ userUrl } className='comment-uname' key={'cmnt-uname-' + this.props.id}>
              { comment.user.username }
            </Link> { comment.body }
        </div>
      </div>
      //jshint ignore: end
    );
  }
}

export default Comment;
