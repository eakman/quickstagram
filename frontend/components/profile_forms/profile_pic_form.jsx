import React from 'react';

const ProfilePicForm = (props) => {
  return (
    <div className='form-container group'>
      <h1>SELECT PROFILE PICTURE</h1>
      <form onSubmit={ props.handleSubmit } className='upload-form'>
        <input type='file' onChange={ props.updateFile } />
        <button type='submit'>SUBMIT</button>
      </form>
    </div>
  );
};

export default ProfilePicForm;
