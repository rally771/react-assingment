import React, { Component } from 'react';
import Text from './text';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main-background">
      <div className="container">
      <div className="col-md-12">
      <div className="main-form-background">
      <div className = "Title">
      <p>React assingment for Quasix Solutions </p>
      </div>
      <Text/>
      </div>
      </div>
      </div>
      </div>
      
    );
  }
}

export default App;
