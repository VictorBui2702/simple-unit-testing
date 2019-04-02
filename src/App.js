import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      Products: []
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1>My E-Commerce Site</h1>
        <div> <ProductList /> </div>
      </div>
    );
  }
}

export default App;
