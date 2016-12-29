import Reach from 'react';
import SearchResults from './search_results';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { postsByTag } from '../../actions/posts_actions';

const mapStateToProps = ({ posts }) => {
  return ({
    posts
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    postsByTag: (hash_tag) => dispatch(postsByTag(hash_tag))
  });
};

const SearchResultsContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchResults)
);

export default SearchResultsContainer;
