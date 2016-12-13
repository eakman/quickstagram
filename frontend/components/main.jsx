import React from 'react';
import Posts from './posts';
import Header from './header';

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
      //jshint ignore: start
      <div>
        <Header router={ this.props.router }
            currentUser={ this.props.currentUser} />
        { this.props.children }
      </div>
      //jshint ignore: end
    );
  }
}

export default Main;

// <button onClick={ this.handleLogOut }>Log out</button>
// <section className='content-main group'>
//   <Posts posts={ this.props.posts.posts }
//     currentUser={ this.props.currentUser }
//     likeAPost={ this.props.likeAPost }
//     makeAComment={ this.props.makeAComment }/>
// </section>
