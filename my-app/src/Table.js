import React, { Component } from 'react';
import './Table-styles.css';

class Table extends Component {
  render() {
    return (
        <table>
        	<thead>
        		<tr>
        			<th>Descripción</th>
        		</tr>
        		<tr>
        			<th>Cantidad</th>
        		</tr>
        		<tr>
        			<th>Unidades</th>
        		</tr>
        		<tr>
        			<th>Precio unitar:</th>
        		</tr>
        		<tr>
        			<th>Total</th>
        		</tr>
        		<tr>
        			<th>Acciones</th>
        		</tr>
        	</thead>
        </table>
    );
  }
}
export default Table;