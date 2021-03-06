import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import SessionFormContainer from './sessions/session_form_container';
import MainContainer from './main/main_container';
import FeedContainer from './feed/feed_container';
import ProfileContainer from './profile/profile_container';
import { Router, Route, IndexRoute, hashHistory, IndexRedirect } from 'react-router';
import SearchResultsContainer from './search/search_results_container';

const Root = ({ store }) => {

  const redirectIfLoggedIn = (nextState, replace) => {

    if (store.getState().session.currentUser) {
      replace('/main/feed');
    }
  };

  const redirectIfNotLoggedIn = (nextState, replace) => {

    if (!store.getState().session.currentUser) {
      replace('/log_in');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>

        <Route className='app' path='/' component={ App } >
            <IndexRedirect to='main/feed'/>
            <Route path='/main' component={ MainContainer } onEnter={ redirectIfNotLoggedIn }>
              <IndexRedirect to='feed'/>
              <Route path='feed' component={ FeedContainer }/>
              <Route path='profile/:id' component={ ProfileContainer }/>
              <Route location='hash' path='results/:hash_tag' component={ SearchResultsContainer }/>
            </Route>
            <Route path='/log_in' component={ SessionFormContainer } onEnter={ redirectIfLoggedIn } />
        </Route>

      </Router>
    </Provider>
  );

};

export default Root;
