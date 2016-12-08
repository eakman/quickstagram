import React from 'react';
import Errors from './errors';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      formType: 'Log in'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.toggleFormType = this.toggleFormType.bind(this);
  }

  guestLogin() {
    const guest = {username: 'user1', password: 'password'};
    return this.props.logIn(guest).then(() => this.props.router.push('/feed'));
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.formType === 'Log in'){
      return this.props.logIn(this.state).then(() => this.props.router.push('/feed'));
    } else {
      return this.props.signUp(this.state).then(() => this.props.router.push('/feed'));
    }
  }

  handleChange(e) {
    if (e.currentTarget.attributes.name.nodeValue === 'username') {
        this.setState({username: e.currentTarget.value});
      } else {
        this.setState({password: e.currentTarget.value});
    }
  }

  toggleFormType() {
    debugger
    if (this.state.formType === 'Log in') {
      this.setState({formType: 'Sign up'});

    } else {
      this.setState({formType: 'Log in'})
    }
  }

  render() {
    let errors = '';
    if (this.props.errors.length !== 0) {

      errors = <Errors errors={ this.props.errors } />
    }

    return (

      <div className="initial-container">
        <img className="iPhones" src="https://instagramstatic-a.akamaihd.net/h1/images/homepage/home-phones.png/38825c9d5aa2.png" />

        <section className="log-in-sign-up group">
          <section className="log-in group">
              <form className="log-in-form group" onSubmit={ this.handleSubmit }>
                <h1 className='form-logo'>Quickstagram</h1>
                <input type='text' placeholder='Username' name='username'
                  value={ this.state.username } onChange={ this.handleChange } />

                <input type='password' placeholder='Password' name='password'
                  value={ this.state.password } onChange={ this.handleChange } />

              <button>{this.state.formType}</button>
            </form>
            <div className="or-container group">
              <div className="h-line"></div>
              <figure className="or">OR</figure>
              <div className="h-line"></div>
            </div>
            <a href="#" className="guest" onClick={ this.guestLogin }>Sign in as a guest</a>

            { errors }

          </section>
          <section className='sign-up group'>
            <p>Don&#39;t have an account yet?<a href="#"
                onClick={ this.toggleFormType }> Sign up</a></p>
          </section>
        </section>
      </div>


    );
  }
}

export default SessionForm;
