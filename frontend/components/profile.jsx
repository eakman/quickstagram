import React from 'react';
import Modal from './modal';
class Profile extends React.Component {
  constructor(props){
    super(props);

  }

  editProfilePic(e) {
    e.preventDefault();
    document.getElementsByClassName('modal')[0].style.visibility = "visible";
  }

  render() {
    return(
      //jshint ignore: start
      <article className='profile-container group'>
        <Modal className='profile-modal' >
          <div className='form-container'>
            <form className='upload-form'>
              <input type='file' />
            </form>
          </div>
        </Modal>
        <header className='profile-header'>
          <div className='picture-container group'>
            <button onClick={ this.editProfilePic } className='picture-button'>
              <img src={ this.props.currentUser.avatar_url } className='picture'/>
            </button>
          </div>

          <div className='detail-container group'>
            <div className='user-detail'>
              <h1>{this.props.currentUser.username}</h1>
            </div>

            <ul className='stats'>
              <li><span>{this.props.currentUser.post_count}</span> posts</li>
              <li><span>{this.props.currentUser.follows_count}</span> follows</li>
              <li><span>{this.props.currentUser.followers_count}</span> followers</li>
            </ul>
          </div>

        </header>

      </article>
      //jshint ignore: end
    );
  }
}

export default Profile;
