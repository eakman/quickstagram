import React from 'react';

const ProfilePicForm = (props) => {
  return (
    <div className='form-container group'>

      <form onSubmit={ props.handleSubmit } className='upload-form'>
        <label for='file'> Upload photo
          <input id='file' type='file' onChange={ props.updateFile } />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ProfilePicForm;
