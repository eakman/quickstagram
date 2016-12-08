import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import SessionFormContainer from './session_form_container';
import Feed from './feed';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

const Root = ({ store }) => {

  const redirectIfLoggedIn = (nextState, replace) => {
    // debugger
    if (window.currentUser) {
      replace('/feed');
    }
  };

  // const redirectIfNotLoggedIn = (nextState, replace) => {
  //
  //   if (window.currentUser === undefined) {
  //     replace('/');
  //   }
  // };

  return (
    //jshint ignore: start
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route className='app' path='/' component={ App } >
          <IndexRoute
            component={ SessionFormContainer } onEnter={ redirectIfLoggedIn }/>
          <Route path='/feed' component={ Feed }/>
        </Route>
      </Router>
    </Provider>
    //jshint ignore: end
  );

};

export default Root;
