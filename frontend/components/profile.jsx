import React from 'react';

class Profile extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return(
      //jshint ignore: start
      <article className='profile-container group'>

        <header className='profile-header'>
          <div className='picture-container group'>
            <button className='picture-button'>
              <img src={ this.props.currentUser.avatar_url } className='picture'/>
            </button>
          </div>

          <div className='detail-container group'>
            <div className='user-detail'>
              <h1>eitanakman</h1>
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
// {this.props.currentUser.username}
