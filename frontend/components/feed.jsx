import React from 'react';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {

    this.props.logOut().then(() => this.props.router.push('/'));
  }

  render() {
    return (
      <div>
        <h1>Feed</h1>
        <button onClick={this.handleLogOut}>Log out</button>
      </div>
    );
  }
}

export default Feed;
