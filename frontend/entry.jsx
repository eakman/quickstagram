import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  const store = configureStore();
  //jshint ignore: start
  ReactDOM.render(<Root store={ store } />, root);
  //jshint ignore: end
});
