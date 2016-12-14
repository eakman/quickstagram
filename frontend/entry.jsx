import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import Modal from 'react-modal'

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
   const preloadedState = { session: { currentUser: window.currentUser } };
   store = configureStore(preloadedState);
 } else {
   store = configureStore();
 }
  const root = document.getElementById('content');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={ store } />, root);
});
