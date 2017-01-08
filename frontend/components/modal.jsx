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
    this.modalTarget.className = `${this.props.classId} modal`;
    document.body.appendChild(this.modalTarget);
    this._render();
  }

  componentWillUnmount() {

    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
  }

  closeModal(){
    document.getElementsByClassName(this.props.classId)[0].style.visibility = "hidden";
  }

  _render() {

    ReactDOM.render(

      <Provider store={configureStore()}>
        <div>
            <button onClick={this.closeModal} className='modal-button'>x</button>

            <div className='modal-children'>{this.props.children}</div>
        </div>
      </Provider>,
      this.modalTarget
    );
  }

  render(){


    return <noscript />
  }

}

export default Modal;
