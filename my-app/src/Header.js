import React, { Component } from 'react';
import './Header-styles.css';

class Header extends Component {
  render() {
    return (
        <div className='header'>
          <p>Conceptos</p>
          <button>+ Agregar  concepto</button>
        </div>
    );
  }
}
export default Header;