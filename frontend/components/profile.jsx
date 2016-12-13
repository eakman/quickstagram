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
    this.addPost = this.addPost.bind(this);
    this.toggFollow = this.toggFollow.bind(this);
  }

  componentDidMount() {

    const user_id = this.props.router.params.id;
    this.props.fetchUser(user_id).then((user) => console.log(this.props));
  }

  editProfilePic(e) {
    e.preventDefault();
    document.getElementsByClassName('modal')[0].style.visibility = "visible";
  }

  addPost() {

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
    document.getElementsByClassName('modal')[0].style.visibility = "hidden";
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

        </article>
        //jshint ignore: end
      );


  }
}

export default Profile;
