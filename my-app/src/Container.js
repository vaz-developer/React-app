import React, { Component } from 'react';
import Header from './Header';
import './Container.css';

class Container extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
      </div>
    );
  }
}

export default Container;