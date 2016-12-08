import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  const store = configureStore();
  console.log('hello');
  ReactDOM.render(<Root store={ store } />, root);
  console.log('eitan');
});
