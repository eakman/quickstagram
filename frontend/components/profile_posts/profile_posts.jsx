import React from 'react';
import ProfilePostContainer from './profile_post_container';
import Modal from '../modal';
class ProfilePosts extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {


        const posts = [];
        let i = 0;
        for (let postObj in this.props.posts) {
          posts.push(<ProfilePostContainer key={i} post={ this.props.posts[postObj] } id={i} postId={ postObj } />);
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
