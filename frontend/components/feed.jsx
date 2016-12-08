import React from 'react';
import Posts from './posts';

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    this.props.getAllPosts(this.props.currentUser);
  }

  handleLogOut() {

    this.props.logOut().then(() => this.props.router.push('/'));
  }

  render() {
    return (
      <div>
        <h1>Feed</h1>
        <button onClick={ this.handleLogOut }>Log out</button>
        <Posts posts={ this.props.posts.posts }/>
      </div>
    );
  }
}

export default Feed;
