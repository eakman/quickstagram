import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.props.logIn(this.state).then(console.log);
  }

  handleChange(e) {
    if (e.currentTarget.attributes.name.nodeValue === 'username') {
        this.setState({username: e.currentTarget.value});
      } else {
        this.setState({password: e.currentTarget.value});
    }
  }

  render() {
    return (
      //jshint ignore: start
      <div className="initial-container">
        <img className="iPhones" src="https://instagramstatic-a.akamaihd.net/h1/images/homepage/home-phones.png/38825c9d5aa2.png"/>
        <section className="log-in-sign-up group">
          <section className="log-in group">
              <form className="log-in-form group" onSubmit={ this.handleSubmit }>
                <h1 className='form-logo'>Quickstagram</h1>
                <input type='text' placeholder='Username' name='username'
                  value={ this.state.username } onChange={ this.handleChange } />

                <input type='password' placeholder='Password' name='password'
                  value={ this.state.password } onChange={ this.handleChange } />

              <button>Log in</button>
            </form>
            <div className="or-container group">
              <div className="h-line"></div>
              <figure className="or">OR</figure>
              <div className="h-line"></div>
            </div>
            <a href="#" className="guest">Sign in as a guest</a>
          </section>
          <section className='sign-up group'>
            <p>Don&#39;t have an account yet?<a href="#"> Sign up</a></p>
          </section>
        </section>
      </div>

      //jshint ignore: end
    );
  }
}

export default SessionForm;
