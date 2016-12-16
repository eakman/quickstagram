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
    document.getElementById('title-el').innerHTML = 'Quickstagram';
    return (
      //jshint ignore: start
      <div>

        <section className='content-main group'>
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
