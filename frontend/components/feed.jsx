import React from 'react';
import Posts from './posts/posts';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.page = 1;
    this.delayer = this.delayer.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.didScroll = false;
    this.intervalId = setInterval(this.delayer , 200);
  }

  delayer() {
    if(this.didScroll) {
      this.nextPage();
      this.didScroll = false;
    }
  }

  handleScroll() {
    this.didScroll = true;
  }

  componentDidMount() {
    this.props.getAllPosts(this.props.currentUser, 1)
    window.onscroll = this.handleScroll;
  }

  componentWillUnmount() {
    window.onscroll = null;
    clearInterval(this.intervalId);
  }

  nextPage () {
    if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
      if (this.props.posts.length > 3) {
          const morePosts = this.props.posts;
          const page = morePosts[morePosts.length - 1].page_number;
          if (this.page !== (page + 1)) {
            this.page = page;
            this.props.getMorePosts(this.props.currentUser, (page + 1))
          }
      } else {
          if (this.page !== 2) {
            this.page = 2;
            this.props.getMorePosts(this.props.currentUser, 2);
          }
      }
    }
  }

  render() {
    let message = '';
      if (this.props.posts.length === 0) {
          message = <h1 className='message'>Welcome, follow people to see posts in your feed!</h1>
      }
      return (
        <div>
          <section className='content-main group'>
            {message}
            <Posts posts={ this.props.posts }
              currentUser={ this.props.currentUser }
              likeAPost={ this.props.likeAPost }
              makeAComment={ this.props.makeAComment }/>
          </section>
        </div>
    );
  }
}


export default Feed;
