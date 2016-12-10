import React from 'react';
import createTimeStamp from '../util/create_time_stamp_util';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likeImage: ''
    };
    this.handleLike = this.handleLike.bind(this);
    this.setLikeImages = this.setLikeImages.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setLikeImages(nextProps);
  }

  componentDidMount() {
    this.setLikeImages(this.props);
  }

  setLikeImages(props){
    const likes = props.postObj.likes;
    let likeImg = 'https:s3-us-west-2.amazonaws.com/quickstagram-pro/site-images/favorite.png';
    for ( let i in likes ) {
      if (likes[i].user_id === this.props.currentUser.id) {
        likeImg = 'https://s3-us-west-2.amazonaws.com/quickstagram-pro/site-images/hearts.png';
      }
    }
    this.setState({likeImage: likeImg});
  }

  handleLike() {


    return this.props.likeAPost(this.props.post_id);
  }

  render() {
    const likesCount = this.props.postObj.likes.length;
    let likesCountString = `${ likesCount } likes`;
    if (likesCount === 1){
      likesCountString = `${ likesCount } like`;
    }

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
            <div className='comments-container'></div>
            <div className='comments-create'>
              <button onClick={ this.handleLike } className='like-button'>
                <img className='like-image' src={ this.state.likeImage }/>
              </button>
            </div>
          </section>
        </li>
    //jshint ignore: end
    );
  }
}

export default Post;
