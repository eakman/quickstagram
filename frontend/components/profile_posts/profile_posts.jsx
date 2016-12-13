import React from 'react';
import ProfilePost from './profile_post';

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
          <ul>
            {posts}
          </ul>
        );

  }


}

export default ProfilePosts;
