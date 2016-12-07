import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import SessionFormContainer from './session_form_container';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

const Root = ({ store }) => {

  return (
    //jshint ignore: start
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route className='app' path='/' component={ App }>
          <IndexRoute component={ SessionFormContainer } />

        </Route>
      </Router>
    </Provider>
    //jshint ignore: end
  );

};

export default Root;
