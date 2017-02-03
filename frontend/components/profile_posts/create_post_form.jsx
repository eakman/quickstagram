import React from 'react';

class CreatePostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageFile: '',
      description: '',
      location: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  updateFile (e) {
    if (e.currentTarget.attributes.name.nodeValue === 'image') {
      const file = e.currentTarget.files[0];
      this.setState({ imageFile: file });
    } else if (e.currentTarget.attributes.name.nodeValue === 'description'){
      this.setState({ description: e.currentTarget.value});
    } else if (e.currentTarget.attributes.name.nodeValue === 'location'){
      this.setState({ location: e.currentTarget.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append('post[picture_url]', this.state.imageFile);
    formData.append('post[location]', this.state.location);
    formData.append('post[description]', this.state.description);
    this.props.makeAPost(formData);
    this.props.closeModal();
    e.currentTarget.children[0].value = '';
  }

  render(){
    return(
      <div className='form-container group'>
        <form onSubmit={ this.handleSubmit } className='upload-form'>
          <label for='file'>Upload picture
            <input id='file' name='image' type='file' onChange={this.updateFile} />
            </label>
          <input name='description' id='create-text-input' type='text' placeholder='description' onChange={this.updateFile} />
          <input name='location' id='create-text-input' type='text' placeholder='location' onChange={this.updateFile} />

          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  };
}

export default CreatePostForm;
