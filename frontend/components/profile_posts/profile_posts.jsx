import React from 'react';
import ProfilePost from './profile_post';
import Modal from '../modal';
class ProfilePosts extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {


        const posts = [];
        let i = 0;
        for (let postObj in this.props.posts) {
          posts.push(<ProfilePost key={i} post={ this.props.posts[postObj] } />);
          i++;
        }
        return(
          <div>
          
            <ul>
              {posts}
            </ul>
          </div>
        );

  }


}

export default ProfilePosts;
