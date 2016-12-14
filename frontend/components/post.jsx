import React from 'react';
import createTimeStamp from '../util/create_time_stamp_util';
import Comments from './comments';
import Comment from './comment';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likeImage: '',
      commentInputText: ''
    };

    this.handleLike = this.handleLike.bind(this);

    this.setLikeImages = this.setLikeImages.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setLikeImages(nextProps);
  }

  componentDidMount() {
    this.setLikeImages(this.props);
  }

  setLikeImages(props){
    const likes = props.postObj.likes;
    let likeImg = window.like;
    for ( let i in likes ) {
      if (likes[i].user_id === this.props.currentUser.id) {
        likeImg = window.favorite;
      }
    }
    this.setState({likeImage: likeImg});
  }

  handleLike() {
    return this.props.likeAPost(this.props.post_id);
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.props.makeAComment(
      this.props.post_id, {body: this.state.commentInputText})
        .then(this.setState({commentInputText: ''}));
  }

  handleChange(e) {
    this.setState({commentInputText: e.currentTarget.value});
  }

  render() {

    const likesCount = this.props.postObj.likes.length;
    let likesCountString = `${ likesCount } likes`;
    if (likesCount === 1){
      likesCountString = `${ likesCount } like`;
    }
    const description = {
                          user: {username: this.props.postObj.user.username},
                          body: this.props.postObj.description,
                          id: -1};
    return(
    //jshint ignore: start
        <li key={"post" + this.props.i} >
          <section key={"post-header" + this.props.i} className='post-header group'>
            <img key={"post-av" + this.props.i}
              src={this.props.postObj.user.avatar_url} className='post-header-av'/>
            <div key={"post-det" + this.props.i} className='post-header-detail'>

              <div key={"post-uname" + this.props.i}
                className='post-header-uname'>{ this.props.postObj.user.username }</div>

              <div key={"post-loc" + this.props.i}
                className='post-header-location'>{ this.props.postObj.location }</div>
            </div>

            <div key={"post-time" + this.props.i}
              className="post-header-timestamp">
              {createTimeStamp(this.props.postObj.created_at)}
            </div>

          </section>

          <div className='post'>
            <img src={ this.props.pic }/>
          </div>
          
          <section className='post-footer group'>
            <div className='likes-count'>{ likesCountString }</div>
            <Comment comment={ description } />
            <Comments comments={ this.props.postObj.comments }/>
            <div className='comments-create'>
              <button onClick={ this.handleLike } className='like-button'>
                <img className='like-image' src={ this.state.likeImage }/>
              </button>
              <form className='comment-form' onSubmit={this.handleSubmit}>
                <input type='text'
                    placeholder='Add a comment...'
                    value={ this.state.commentInputText }
                    onChange={ this.handleChange }/>
              </form>
            </div>
          </section>
        </li>
    //jshint ignore: end
    );
  }
}

export default Post;
