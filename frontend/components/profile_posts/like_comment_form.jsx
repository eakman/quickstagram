import React from 'react';
import Comments from '../comments';
import Comment from '../comment';

class LikeCommentForm extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      likeImage: '',
      commentInputText: '',
    };
    this.handleLike = this.handleLike.bind(this);
    this.setLikeImages = this.setLikeImages.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  componentWillReceiveProps(nextProps) {
    this.setLikeImages(nextProps);
  }
  //5)
  componentDidMount() {
    this.setLikeImages(this.props);
  }

  componentWillUpdate(nexProps, nextState) {

  }
  //6)
  setLikeImages(props){
    const likes = props.post.likes;
    let likeImg = window.like;
    for ( let i in likes ) {
      if (likes[i].user_id === this.props.currentUser.id) {
        likeImg = window.favorite;
      }
    }
    this.setState({likeImage: likeImg});
  }
  //7))
  handleLike() {
    return this.props.likeAPost(this.props.postId);
  }

  handleSubmit(e) {

    e.preventDefault();
    return this.props.makeAComment(
      this.props.postId, {body: this.state.commentInputText})
        .then(this.setState({commentInputText: ''}));
  }

  handleChange(e) {
    this.setState({commentInputText: e.currentTarget.value + ''});
  }

  handleClick() {
    document.getElementsByClassName(this.modalClass)[0].style.visibility = 'visible';
  };

  render () {
    const likesCount = this.props.post.likes.length;
    let likesCountString = `${ likesCount } likes`;
    if (likesCount === 1){
      likesCountString = `${ likesCount } like`;
    }
    const description = {
                          user: {username: this.props.post.user.username},
                          body: this.props.post.description,
                          id: -1};
    return(
      <div id='post-side-bar'>
        <div className='likes-count post-show-like-count'>{ likesCountString }</div>
        <div id='post-show-comments'>

          <Comment comment={ description } />
          <Comments comments={ this.props.post.comments }/>
        </div>
        <div className='comments-create post-show-create-comment'>

            <button onClick={ this.handleLike } className='like-button'>
              <img className='like-image' src={ this.state.likeImage }/>
            </button>


          <form className='post-show-comment-form' onSubmit={this.handleSubmit}>
            <input className='post-show-comment-input'
                    placeholder='Add a comment...'
                    type='text'
                    onChange={ this.handleChange }
                    value={ this.state.commentInputText } />
          </form>
        </div>
      </div>
    );
  };
}

export default LikeCommentForm;
