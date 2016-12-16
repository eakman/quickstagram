import React from 'react';
// import Modal from '../modal';
import Modal from 'react-modal';
import Style from '../modal_style';
import Comments from '../comments';
import Comment from '../comment';
import LikeCommentFormContainer from './like_comment_form_container';

class ProfilePost extends React.Component {
  // debugger
  constructor (props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.modalClass = `post-show-modal-${this.props.id}`;
    this.state = {
      modalOpen: false
    }
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal(){
    this.setState({ modalOpen: false });
  }

  openModal(){
    this.setState({ modalOpen: true });
  }

  handleClick() {
    document.getElementsByClassName(this.modalClass)[0].style.visibility = 'visible';
  }

  render () {
    // debugger
    const likesCount = this.props.post.likes.length;
    let likesCountString = `${ likesCount } likes`;
    if (likesCount === 1){
      likesCountString = `${ likesCount } like`;
    }
    const description = {
                          user: {username: this.props.post.user.username},
                          body: this.props.post.description,
                          id: -1};

    return (
      <div>
        <Modal style={ Style } isOpen={this.state.modalOpen} contentLabel={'hello1'} >
          <button onClick={this.closeModal} className='modal-button'>x</button>
            <div className='post-show-image-container'>
              <div id='post-show-image'>
              <img  src={this.props.post.picture_url}></img>
              </div>



                  <LikeCommentFormContainer currentUser={this.props.currentUser}
                                  likeAPost={this.props.likeAPost}
                                  makeAComment={this.props.makeAComment}
                                  post={this.props.post}
                                  postId={this.props.postId}
                                  posts={this.props.posts} />





            </div>
        </Modal>

        <li className='post-list-item'>

          <img onClick={this.openModal} src={this.props.post.picture_url} className='profile-post' />

        </li>
      </div>
    );
  }
};

export default ProfilePost;



// <div className='comments-create post-show-create-comment'>
//   <button onClick={ this.handleLike } className='like-button'>
//     <img className='like-image' src={ this.state.likeImage }/>
//   </button>
// </div>
//
//   <form className='post-show-comment-form' onSubmit={this.handleSubmit}>
//     <input type='text'
//         onChange={ this.handleChange }
//         value={ this.state.commentInputText } />
//   </form>


// classId={this.modalClass} className='profile-modal' modalClass='cool-modal' overlayClass='overlay'
