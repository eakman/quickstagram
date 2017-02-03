import React from 'react';
import Posts from '../posts/posts';
import Header from '../header';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {

    this.props.logOut().then(() => this.props.router.push('/'));
  }

  render() {
    return (
      <div>
        <Header router={ this.props.router }
            currentUser={ this.props.currentUser} />
        { this.props.children }
      </div>
    );
  }
}

export default Main;
