import React from 'react';
import Modal from '../modal';

const ProfilePost = (props) => {
  // debugger
  const modalClass = `post-modal-${props.post.id}`;
  const handleClick = () => {
    document.getElementsByClassName(modalClass)[0].style.visibility = 'visible';
  };

  return (
    <div>
      <Modal classId={modalClass} className='profile-modal'>
      </Modal>
      <li className='post-list-item'>

        <img onClick={handleClick} src={props.post.picture_url} className='profile-post'  />

      </li>
    </div>
  );
};

export default ProfilePost;
