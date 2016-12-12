import React from 'react';
import Modal from './modal';
class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageFile: ''
    };
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    debugger
  }

  editProfilePic(e) {
    e.preventDefault();
    document.getElementsByClassName('modal')[0].style.visibility = "visible";
  }

  updateFile (e) {

    const file = e.currentTarget.files[0];
    this.setState({ imageFile: file }, () =>{
      console.log(this.state);
    });

  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new formData();
    formData.append('user[avatar]', this.state.imageFile);

  }

  render() {
    return(
      //jshint ignore: start
      <article className='profile-container group'>
        <Modal className='profile-modal' >
          <div className='form-container'>
            <h1>SELECT PROFILE PICTURE</h1>
            <form onSubmit={ this.handleSubmit } className='upload-form'>
              <input type='file' onChange={this.updateFile} />
              <button type='submit'>SUBMIT</button>
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
