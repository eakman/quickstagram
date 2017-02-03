import React from 'react';
import ProfilePostContainer from './profile_post_container';

class ProfilePosts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const posts = this.props.posts.map((postObj, idx) => {
      return(<ProfilePostContainer key={idx}
          post={ postObj } id={idx} postId={ postObj.id } />);
    });

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
