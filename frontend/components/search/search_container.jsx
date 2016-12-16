import React from 'react';
import { findUsers } from  '../../actions/user_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Search from './search';

const mapStateToProps = ( { user } ) => {
  return(
    {
      users: user.users
    }
  );
};

const mapDispatchToProps = (dispatch) => {
  return(
    {
      findUsers: (query_string) => dispatch(findUsers(query_string))
    }
  )
}

const SearchContainer = withRouter(connect(
mapStateToProps,
mapDispatchToProps)(Search));

export default SearchContainer;
