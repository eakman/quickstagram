import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../store/store';
import { Provider } from 'react-redux';

class Modal extends React.Component {

  constructor() {
    super();
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {

    this.modalTarget = document.createElement('div');
    this.modalTarget.className = 'modal';
    document.body.appendChild(this.modalTarget);
    this._render();
  }

  // componentWillMount() {
  //   debugger
  //   this._render();
  // }

  componentWillUnmount() {

    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
  }

  closeModal(){
    document.getElementsByClassName('modal')[0].style.visibility = "hidden";
  }

  _render() {

    ReactDOM.render(
      //jshint ignore: start
      <Provider store={ configureStore() }>
        <div>
            <button onClick={this.closeModal} className='modal-button'>x</button>

            <div className='modal-children'>{this.props.children}</div>
        </div>
      </Provider>,
      this.modalTarget
      //jshint ignore: end
    );
  }

  render(){

    //jshint ignore: start
    return <noscript />
    //jshint ignore: end
  }

}

export default Modal;
