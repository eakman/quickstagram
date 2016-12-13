import React from 'react';
import Modal from './modal';
import ProfilePosts from './profile_posts/profile_posts';
import CreatePostForm from './profile_posts/create_post_form';
import { withRouter } from 'react-router';

class Profile extends React.Component {
  constructor(props){
    super(props);
    //jshint ignore: start
    this.state = {
      imageFile: ''
    };
    //jshint ignore: end
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addPost = this.addPost.bind(this);
    this.toggFollow = this.toggFollow.bind(this);
    this.editProfilePic = this.editProfilePic.bind(this);
  }

  componentDidMount() {
    const user_id = this.props.router.params.id;
    this.props.fetchUser(user_id).then((user) => console.log(this.props));
    this.props.getUserPosts(user_id);
  }

  editProfilePic(e) {
    e.preventDefault();
    document.getElementsByClassName('modal-1')[0].style.visibility = "visible";
  }

  addPost(e) {
    e.preventDefault();
    document.getElementsByClassName('modal-2')[0].style.visibility = "visible";
  }

  toggFollow() {
    this.props.toggleFollow(this.props.user.id);
  }

  updateFile (e) {
    const file = e.currentTarget.files[0];
    this.setState({ imageFile: file }, () =>{
      console.log(this.state);
    });

  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append('user[avatar]', this.state.imageFile);
    this.props.updateProfilePic(this.props.user.id, formData);
    document.getElementsByClassName('modal-1')[0].style.visibility = "hidden";
    e.currentTarget.children[0].value = '';
  }

  render() {
    if (this.props.user === null){
      //jshint ignore: start
      return <div></div>;
      //jshint ignore: end
    }
      //jshint ignore: start
      let ActionButton;
      if (this.props.user.id === this.props.currentUser.id){
        ActionButton = <button onClick={ this.addPost }
            className='follow-button add-button'>Add post</button>;
      } else {
        let fButtonText = 'Follow';
        if (this.props.user.followed){
          fButtonText = 'Following';
        }
        let fButtonClass = `follow-button ${fButtonText}`;
        ActionButton = <button onClick={ this.toggFollow }
            className={fButtonClass}>{fButtonText}</button>;
      }
      //jshint ignore: end
      return(
        //jshint ignore: start
        <article className='profile-container group'>
          <Modal classId={'modal-1'} className='profile-modal'>
            <div className='form-container group'>
              <h1>SELECT PROFILE PICTURE</h1>
              <form onSubmit={ this.handleSubmit } className='upload-form'>
                <input type='file' onChange={this.updateFile} />
                <button type='submit'>SUBMIT</button>
              </form>
            </div>
          </Modal>
          <Modal classId={'modal-2'} className='profile-modal'>
            <CreatePostForm makeAPost={ this.props.makeAPost } />
          </Modal>
          <header className='profile-header'>
            <div className='picture-container group'>
              <button onClick={ this.editProfilePic } className='picture-button'>
                <img src={ this.props.user.avatar_url } className='picture'/>
              </button>
            </div>
            <div className='detail-container group'>
              <div className='user-detail'>
                <h1>{this.props.user.username}</h1>
                <div className="follow-button-container">
                  {ActionButton}
                </div>
              </div>
              <ul className='stats'>
                <li><span>{this.props.user.post_count}</span> posts</li>
                <li><span>{this.props.user.follows_count}</span> follows</li>
                <li><span>{this.props.user.followers_count}</span> followers</li>
              </ul>
            </div>
            </header>
          <ProfilePosts posts={ this.props.posts.posts } />
        </article>
        //jshint ignore: end
      );
    }
}

export default Profile;
