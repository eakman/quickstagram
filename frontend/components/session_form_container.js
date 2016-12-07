import React from 'react';
import { logIn, signUp } from '../actions/session_actions';
import SessionForm from './session_form';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return(
    {
      signUp: user => dispatch(signUp(user)),
      logIn: user => dispatch(logIn(user))
    }
  );
};

const SessionFormContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SessionForm));

export default SessionFormContainer;
