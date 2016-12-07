import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      signUpUname: '',
      signUpPword: '',
      logInUname: '',
      logInPword: ''
    };
  }

  render() {
    return (
      //jshint ignore: start
      <div>
        <form>
          <label>Log In</label><br />
          <label>username
            <input type='text' value={ this.state.logInUname } />
          </label>

          <label>password
            <input type='password' value={ this.state.logInPword} />
          </label>
        </form>

        <form>
          <label>Sign Up</label><br />
          <label>username
            <input type='text' value={ this.state.signUpUname} />
          </label>

          <label>username
            <input type='password' value={ this.state.logInPword } />
          </label>
        </form>
      </div>
      //jshint ignore: end
    );
  }
}

export default SessionForm;
