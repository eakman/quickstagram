import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import SessionFormContainer from './session_form_container';
import FeedContainer from './feed_container';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

const Root = ({ store }) => {

  const redirectIfLoggedIn = (nextState, replace) => {
    // debugger
    if (store.getState().session.currentUser === {}) {
      replace('/feed');
    }
  };

  const redirectIfNotLoggedIn = (nextState, replace) => {

    if (!store.getState().session.currentUser) {
      replace('/');
    }
  };

  return (
    //jshint ignore: start
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route className='app' path='/' component={ App } >
          <IndexRoute
            component={ SessionFormContainer } onEnter={ redirectIfLoggedIn }/>
          <Route path='/feed' component={ FeedContainer } onEnter={ redirectIfNotLoggedIn }/>
        </Route>
      </Router>
    </Provider>
    //jshint ignore: end
  );

};

export default Root;
