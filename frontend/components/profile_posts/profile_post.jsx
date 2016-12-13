import React from 'react';

const ProfilePost = (props) => {
  // debugger
  return (
    <li>
      <img src={props.post.picture_url} className='profile-post'  />
    </li>
  );
};

export default ProfilePost;
