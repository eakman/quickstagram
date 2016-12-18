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

    this.props.logOut().then(() => this.props.router.push('/log_in'));
  }


  render() {
    let message = '';
    if (this.props.posts.posts.length === 0) {
        message = <h1 className='message'>Welcome, follow people to see posts in your feed!</h1>
    }
    document.getElementById('title-el').innerHTML = 'Quickstagram';
    return (
      //jshint ignore: start
      <div>

        <section className='content-main group'>
          {message}
          <Posts posts={ this.props.posts.posts }
            currentUser={ this.props.currentUser }
            likeAPost={ this.props.likeAPost }
            makeAComment={ this.props.makeAComment }/>
        </section>
      </div>
      //jshint ignore: end
    );
  }
}


export default Feed;


// <button onClick={ this.handleLogOut }>Log out</button>
