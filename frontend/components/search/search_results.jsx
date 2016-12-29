import React from 'react';
import ProfilePosts from '../profile_posts/profile_posts';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.isFetching = true;
  }

  componentDidMount() {
    this.props.postsByTag(this.props.params.hash_tag).then(
      this.isFetching = false
    );
  }

  render() {
    if (this.isFetching === true ){
      return (
        <div></div>
      );
    } else {
      return (
        <div className='search-res-container'>
          <h1 className='hash-name'>#{this.props.params.hash_tag}</h1>
          <div className='result-detail'><strong className='result-count'>{this.props.posts.posts.length}</strong> posts</div>
          <ProfilePosts posts={ this.props.posts.posts } />
        </div>
      );
    }
  }
}

export default SearchResults;
